'use client';

import { useRef, useState } from 'react';
import { Turnstile, TurnstileInstance } from '@marsidev/react-turnstile';
import { contactSchema } from '@/lib/validators/contact';

type Errors = Record<string, string[]>;

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const turnstileRef = useRef<TurnstileInstance | null>(null);
  const submitAttemptedRef = useRef(false);
  const isSubmittingRef = useRef(false);

  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function sendForm(turnstileToken: string, form: HTMLFormElement) {
    if (isSubmittingRef.current) return;
    isSubmittingRef.current = true;

    setErrors({});
    setSuccess(false);
    setLoading(true);

    try {
      const formData = new FormData(form);

      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
        turnstileToken,
      };

      const parsed = contactSchema.safeParse(data);

      if (!parsed.success) {
        setErrors(parsed.error.flatten().fieldErrors);
        return;
      }

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
      submitAttemptedRef.current = false;
      turnstileRef.current?.reset();
      setSuccess(true);
    } finally {
      setLoading(false);
      isSubmittingRef.current = false;
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (loading) return;

    setErrors({});
    setSuccess(false);
    submitAttemptedRef.current = true;

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      turnstileToken: 'pending',
    };

    const parsed = contactSchema.safeParse(data);

    if (!parsed.success) {
      setErrors(parsed.error.flatten().fieldErrors);
      return;
    }

    setLoading(true);

    try {
      turnstileRef.current?.reset();
      turnstileRef.current?.execute();
    } catch {
      setLoading(false);
      setErrors({
        form: ['Security verification failed. Please try again.'],
      });
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="mt-12 space-y-6 text-left max-w-480 mx-auto text-(--primary-black) text-base leading-6 reveal-on-scroll-top"
    >
      <div>
        <label className="block mb-1">Name</label>
        <input
          name="name"
          type="text"
          required
          className="w-full border border-(--secondary-gray-100) px-3 py-2 bg-background"
          onChange={() => {
            if (errors.name || errors.form) {
              setErrors((prev) => ({ ...prev, name: [], form: [] }));
            }
          }}
        />
        {errors.name && errors.name.length > 0 && (
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
          onChange={() => {
            if (errors.email || errors.form) {
              setErrors((prev) => ({ ...prev, email: [], form: [] }));
            }
          }}
        />
        {errors.email && errors.email.length > 0 && (
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
          onChange={() => {
            if (errors.message || errors.form) {
              setErrors((prev) => ({ ...prev, message: [], form: [] }));
            }
          }}
        />
        {errors.message && errors.message.length > 0 && (
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

      <div className="hidden">
        <Turnstile
          options={{ appearance: 'execute' }}
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
          ref={turnstileRef}
          onSuccess={(token) => {
            if (!submitAttemptedRef.current || !formRef.current) {
              setLoading(false);
              return;
            }

            void sendForm(token, formRef.current);
          }}
          onExpire={() => {
            if (!submitAttemptedRef.current) return;

            setLoading(false);
            setErrors({
              form: ['Security verification expired. Please try again.'],
            });
          }}
          onError={() => {
            if (!submitAttemptedRef.current) return;

            setLoading(false);
            setErrors({
              form: ['Security verification failed. Please try again.'],
            });
          }}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
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

      {errors.form && errors.form.length > 0 && (
        <p className="text-center text-sm text-(--primary-red-main)">
          {errors.form[0]}
        </p>
      )}
    </form>
  );
}
