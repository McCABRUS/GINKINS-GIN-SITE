<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class ResendEmailService
{
    public function send(array $data): void
    {
        $response = Http::withToken(config('services.resend.key'))
            ->timeout(15)
            ->post('https://api.resend.com/emails', [
                'from' => config('services.resend.from'),
                'to' => [
                    config('services.resend.contact_receiver'),
                ],
                'subject' => 'New message from ' . $data['name'],
                'html' => "
                    <h2>New contact message</h2>
                    <p><strong>Name:</strong> {$data['name']}</p>
                    <p><strong>Email:</strong> {$data['email']}</p>
                    <p>{$data['message']}</p>
                ",
            ]);

        if (! $response->successful()) {
            throw new \RuntimeException('Resend error: ' . $response->body());
        }
    }
}