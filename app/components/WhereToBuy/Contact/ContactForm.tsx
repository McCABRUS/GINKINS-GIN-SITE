'use client';

import { useRef, useState } from 'react';
import { Turnstile, TurnstileInstance } from '@marsidev/react-turnstile';
import { contactSchema } from '@/lib/validators/contact';

type Errors = Record<string, string[]>;

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const [token, setToken] = useState<string | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const turnstileRef = useRef<TurnstileInstance | null>(null);
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!token) {
      turnstileRef.current?.execute();
      return;
    }

    setErrors({});
    setSuccess(false);

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      turnstileToken: token,
    };

    const parsed = contactSchema.safeParse(data);

    if (!parsed.success) {
      setErrors(parsed.error.flatten().fieldErrors);
      return;
    }

    setLoading(true);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contact`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(parsed.data),
      },
    );

    setLoading(false);

    const raw = await res.text();
    let body: unknown = null;

    try {
      body = JSON.parse(raw);
    } catch {
      body = null;
    }

    if (!res.ok) {
      const errorMessage =
        typeof body === 'object' &&
        body !== null &&
        'error' in body &&
        typeof (body as { error?: unknown }).error === 'string'
          ? (body as { error: string }).error
          : typeof body === 'object' &&
              body !== null &&
              'details' in body &&
              typeof (body as { details?: unknown }).details === 'string'
            ? (body as { details: string }).details
            : raw || 'Something went wrong';

      setErrors({ form: [errorMessage] });
      return;
    }

    formRef.current?.reset();
    setToken(null);
    setSuccess(true);
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="mt-12 space-y-6 text-left max-w-480 mx-auto text-(--primary-black) text-base leading-6"
    >
      <div>
        <label className="block mb-1">Name</label>
        <input
          name="name"
          type="text"
          required
          className="w-full border border-(--secondary-gray-100) px-3 py-2 bg-background"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-(--primary-red-main)">
            {errors.name[0]}
          </p>
        )}
      </div>
      <div>
        <label className="block mb-1">Email</label>
        <input
          name="email"
          type="email"
          required
          className="w-full border border-(--secondary-gray-100) px-3 py-2 bg-background"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-(--primary-red-main)">
            {errors.email[0]}
          </p>
        )}
      </div>
      <div>
        <label className="block mb-1">Message</label>
        <textarea
          name="message"
          rows={4}
          placeholder="Type your message…"
          required
          className="w-full border border-(--secondary-gray-100) px-3 py-2 bg-background"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-(--primary-red-main)">
            {errors.message[0]}
          </p>
        )}
      </div>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="terms"
          required
          className="bg-background accent-(--primary-red-main)"
        />
        <label htmlFor="terms">I accept the Terms</label>
      </div>
      <Turnstile
        options={{ appearance: 'execute' }}
        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
        ref={turnstileRef}
        onSuccess={(t) => setToken(t)}
        onExpire={() => setToken(null)}
        onError={() => setToken(null)}
      />
      <button
        type="submit"
        disabled={loading || !token}
        className="relative w-40 lg:w-44.25 h-9.75 mt-9.5 flex mx-auto items-center justify-center px-5 lg:px-8 py-1.5 lg:py-3 text-sm font-medium uppercase text-background transition animatedButton disabled:opacity-50 group"
      >
        <h5 className="group-hover:text-(--primary-black)! group-active:text-(--primary-black)! group-focus:text-(--primary-black)!">
          {loading ? 'Sending…' : 'Submit'}
        </h5>
      </button>

      {success && (
        <p className="text-center text-sm text-green-600">
          Message sent successfully!
        </p>
      )}
      {errors.form && (
        <p className="text-center text-sm text-(--primary-red-main)">
          {errors.form[0]}
        </p>
      )}
    </form>
  );
}
