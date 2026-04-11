<?php

namespace App\Http\Controllers;

use App\Services\ResendEmailService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ContactController extends Controller
{
    public function send(Request $request, ResendEmailService $resend)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'message' => 'required|string',
            'turnstileToken' => 'required|string',
        ]);

        try {
            if (! app()->environment('local')) {
                $response = Http::timeout(10)->asForm()->post(
                    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
                    [
                        'secret' => config('services.turnstile.secret'),
                        'response' => $data['turnstileToken'],
                    ]
                );

                if (! $response->successful() || ! $response->json('success')) {
    return response()->json([
        'error' => 'Captcha verification failed',
        'turnstile_response' => $response->json(),
        'sitekey_env' => env('TURNSTILE_SITE_KEY'),
        'secret_exists' => !empty(config('services.turnstile.secret')),
        'hostname' => $request->getHost(),
    ], 403);
}
            }

            $resend->send($data);

            return response()->json(['success' => true]);
        } catch (\Throwable $e) {
            report($e);

            return response()->json([
                'error' => 'Server error while sending message',
                'details' => $e->getMessage(),
            ], 500);
        }
    }
}