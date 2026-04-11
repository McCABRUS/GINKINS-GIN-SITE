<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Services\MailchimpService;

class NewsletterController extends Controller
{
    public function subscribe(Request $request, MailchimpService $mailchimp)
    {
        $data = $request->validate([
            'email' => 'required|email',
            'turnstileToken' => 'required|string',
        ]);

        if (!app()->environment('local')) {
            $response = Http::post(
                'https://challenges.cloudflare.com/turnstile/v0/siteverify',
                [
                    'secret' => config('services.turnstile.secret'),
                    'response' => $data['turnstileToken'],
                ]
            );

            if (! $response->json('success')) {
                return response()->json([
                    'error' => 'Captcha verification failed',
                    'details' => $response->json(),
                ], 403);
            }
        }

        $result = $mailchimp->subscribe($data['email']);

        return response()->json($result);
    }
}
