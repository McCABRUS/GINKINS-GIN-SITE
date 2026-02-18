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
        cache: 'force-cache',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data),
      },
    );

    setLoading(false);

    if (!res.ok) {
      const body = await res.json();

      setErrors({
        form: [body.error ?? 'Something went wrong'],
      });

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
      className="mt-12 space-y-6 text-left max-w-140 mx-auto text-(--primary-black) text-base leading-6"
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
        <input type="checkbox" id="terms" required className="bg-background" />
        <label htmlFor="terms">I accept the Terms</label>
      </div>
      <Turnstile
        options={{ appearance: 'execute' }}
        siteKey="0x4AAAAAACbQx4jTii3yXBNt" //{process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!} TEMP Vercel Preview
        ref={turnstileRef}
        onSuccess={(t) => setToken(t)}
        onExpire={() => setToken(null)}
      />
      <button
        type="submit"
        disabled={loading || !token}
        className="relative w-40 lg:w-44.25 h-9.75 mt-9.5 flex mx-auto items-center justify-center bg-(--primary-red-main) px-5 lg:px-8 py-1.5 lg:py-3 text-sm font-medium uppercase text-background transition hover:bg-(--primary-gold-main) disabled:opacity-50"
      >
        <h5 className="text-background!">{loading ? 'Sending…' : 'Submit'}</h5>
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
