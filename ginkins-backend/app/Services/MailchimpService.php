<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class MailchimpService
{
    public function subscribe(string $email): array
    {
        $email = strtolower($email);
        $hash = md5($email);

        $request = Http::withBasicAuth(
            'anystring',
            config('services.mailchimp.key')
        );

        if (app()->environment('local')) {
            $request = $request->withoutVerifying();
        }

        $existsResponse = $request->get(
            sprintf(
                'https://%s.api.mailchimp.com/3.0/lists/%s/members/%s',
                config('services.mailchimp.server'),
                config('services.mailchimp.list_id'),
                $hash
            )
        );

        $alreadySubscribed = $existsResponse->successful();

        $subscribeResponse = $request->put(
            sprintf(
                'https://%s.api.mailchimp.com/3.0/lists/%s/members/%s',
                config('services.mailchimp.server'),
                config('services.mailchimp.list_id'),
                $hash
            ),
            [
                'email_address' => $email,
                'status_if_new' => 'subscribed',
            ]
        );

        if (! $subscribeResponse->successful()) {
            throw new \RuntimeException(
                'Mailchimp error: ' . json_encode($subscribeResponse->json())
            );
        }

        return [
            'success' => true,
            'alreadySubscribed' => $alreadySubscribed,
        ];
    }

}
