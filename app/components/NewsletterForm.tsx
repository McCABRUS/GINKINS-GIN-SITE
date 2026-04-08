'use client';

import { useRef, useState } from 'react';
import { Turnstile, TurnstileInstance } from '@marsidev/react-turnstile';

type Status =
  | 'idle'
  | 'verifying'
  | 'loading'
  | 'success'
  | 'error'
  | 'alreadySubscribed';

interface Props {
  isFooter?: boolean;
}

export default function NewsletterForm({ isFooter }: Props) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  const turnstileRef = useRef<TurnstileInstance | null>(null);
  const pendingEmailRef = useRef<string>('');
  const isSubmittingRef = useRef(false);
  const submitAttemptedRef = useRef(false);

  let formStyles =
    'flex flex-col items-center gap-6 sm:flex-row sm:justify-center';
  let inputStyles =
    'w-full max-w-sm border-b border-(--primary-black) bg-transparent py-2 text-left text-base outline-none placeholder:text-(--primary-black) placeholder:opacity-60 text-(--primary-black)';
  let buttonStyles =
    'min-w-min[124px] h-10 inline-flex items-center justify-center hover:text-(--primary-black) animatedButton px-5 py-1.5 transition disabled:opacity-50 group';

  if (isFooter) {
    buttonStyles =
      'self-center inline-flex items-center justify-center px-3 py-1.5 text-background hover:text-(--primary-black) animatedButton font-medium transition-colors h-9 w-23 disabled:opacity-50 group';
    formStyles = 'mt-4 flex flex-col sm:flex-row gap-3 md:items-center w-full';
    inputStyles =
      'text-center md:text-start text-base w-full sm:flex-1 py-2 bg-(--primary-black) border-b border-(--primary-white-100) text-background placeholder-(--secondary-gray-500) focus:placeholder-background focus:outline-none mb-4 md:mb-0';
  }

  async function submitNewsletter(
    submittedEmail: string,
    turnstileToken: string,
  ) {
    if (isSubmittingRef.current) return;
    isSubmittingRef.current = true;

    setStatus('loading');
    setError(null);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/newsletter`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            email: submittedEmail,
            turnstileToken,
          }),
        },
      );

      const data: {
        success?: boolean;
        message?: string;
        alreadySubscribed?: boolean;
        errors?: Record<string, string[]>;
      } = await res.json();

      if (!res.ok) {
        const backendError =
          data?.message || data?.errors?.email?.[0] || 'Subscription failed';

        throw new Error(backendError);
      }

      if (data.alreadySubscribed) {
        setStatus('alreadySubscribed');
        return;
      }

      if (!data.success) {
        throw new Error(data.message || 'Subscription failed');
      }

      setStatus('success');
      setEmail('');
      pendingEmailRef.current = '';
      submitAttemptedRef.current = false;
      turnstileRef.current?.reset();
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong');
      turnstileRef.current?.reset();
    } finally {
      isSubmittingRef.current = false;
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (status === 'verifying' || status === 'loading') return;

    const trimmedEmail = email.trim();
    setError(null);
    submitAttemptedRef.current = true;

    if (!trimmedEmail) {
      setStatus('error');
      setError('Please enter your email.');
      return;
    }

    pendingEmailRef.current = trimmedEmail;
    setStatus('verifying');

    try {
      turnstileRef.current?.reset();
      turnstileRef.current?.execute();
    } catch {
      setStatus('error');
      setError('Security verification failed. Please try again.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className={formStyles}>
      <div className="hidden">
        <Turnstile
          ref={turnstileRef}
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
          options={{ appearance: 'execute' }}
          onSuccess={(token) => {
            if (!submitAttemptedRef.current) return;

            const submittedEmail = pendingEmailRef.current.trim();

            if (!submittedEmail) {
              setStatus('error');
              setError('Please enter your email.');
              turnstileRef.current?.reset();
              return;
            }

            void submitNewsletter(submittedEmail, token);
          }}
          onExpire={() => {
            if (!submitAttemptedRef.current) return;

            setStatus('error');
            setError('Security verification expired. Please try again.');
          }}
          onError={() => {
            if (!submitAttemptedRef.current) return;

            setStatus('error');
            setError('Security verification failed. Please try again.');
          }}
        />
      </div>

      {status === 'alreadySubscribed' ? (
        <p className="text-green-600 text-center">
          You were already subscribed!
        </p>
      ) : status === 'success' ? (
        <p className="text-green-600 text-center">
          Thanks for joining the Inner Circle 🍸
        </p>
      ) : (
        <>
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);

              if (status !== 'idle') {
                setStatus('idle');
                setError(null);
              }
              submitAttemptedRef.current = false;
            }}
            placeholder={isFooter ? 'Your Email Here' : 'Enter your email'}
            className={inputStyles}
          />

          <button
            type="submit"
            disabled={status === 'verifying' || status === 'loading'}
            className={buttonStyles}
          >
            <h5 className="hover:text-(--primary-black)! whitespace-nowrap">
              {status === 'verifying' || status === 'loading'
                ? 'Sending…'
                : isFooter
                  ? 'Join'
                  : 'Join Now'}
            </h5>
          </button>

          {error && (
            <p className="mt-3 text-sm text-(--primary-red-main)">{error}</p>
          )}
        </>
      )}
    </form>
  );
}
