'use client';

import { useEffect, useRef, useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error' | 'alreadySubscribed';

interface Props {
  isFooter?: boolean;
}

export default function NewsletterForm({ isFooter }: Props) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);
  const [isTurnstileReady, setIsTurnstileReady] = useState(false);
  let formStyles =
    'flex flex-col items-center gap-6 sm:flex-row sm:justify-center';
  let inputStyles =
    'w-full max-w-sm border-b border-(--primary-black) bg-transparent py-2 text-left text-base outline-none placeholder:text-(--primary-black) placeholder:opacity-60 text-(--primary-black)';
  let buttonStyles =
    'min-w-min[124px] h-10 inline-flex items-center justify-center bg-(--primary-red-main) px-5 py-1.5  transition hover:bg-(--primary-gold-main) active:bg-(--primary-gold-main) focus:bg-(--primary-gold-main) disabled:opacity-50 group';

  const tokenRef = useRef<string | null>(null);
  const widgetIdRef = useRef<string | null>(null);
  if (isFooter) {
    buttonStyles =
      'self-center inline-flex items-center justify-center px-3 py-1.5 bg-(--primary-red-main) text-background font-medium hover:bg-(--primary-gold-main) active:bg-(--primary-gold-main) focus:bg-(--primary-gold-main) transition-colors h-9 w-14.5 disabled:opacity-50 group';
    formStyles = 'mt-4 flex flex-col sm:flex-row gap-3 md:items-center w-full';
    inputStyles =
      'text-center md:text-start text-base w-full sm:flex-1 py-2 bg-(--primary-black) border-b border-(--primary-white-100) text-background placeholder-(--secondary-gray-500) focus:placeholder-background focus:outline-none mb-4 md:mb-0';
  }

  useEffect(() => {
    if (!window.turnstile || widgetIdRef.current) return;

    const id = window.turnstile.render('#turnstile-container', {
      sitekey: '0x4AAAAAACbQx4jTii3yXBNt', //process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!, TEMP Vercel Preview

      callback: (token: string) => {
        tokenRef.current = token;
        setIsTurnstileReady(true);
      },
      'expired-callback': () => {
        tokenRef.current = null;
        setIsTurnstileReady(false);
      },
      'error-callback': () => {
        tokenRef.current = null;
        setIsTurnstileReady(false);
        setError('Security verification failed. Please try again.');
      },
    });

    if (id) {
      widgetIdRef.current = id;
    }

    return () => {
      if (window.turnstile && widgetIdRef.current) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, []);
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (!tokenRef.current) {
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/newsletter`,
        {
          cache: 'force-cache',
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email,
            turnstileToken: tokenRef.current,
          }),
        },
      );

      const data: {
        success?: boolean;
        message?: string;
        alreadySubscribed?: boolean;
      } = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Subscription failed');
      }
      if (data.alreadySubscribed) {
        setStatus('alreadySubscribed');
        return;
      }

      setStatus('success');
      setEmail('');

      if (window.turnstile && widgetIdRef.current) {
        window.turnstile.reset(widgetIdRef.current);
        setIsTurnstileReady(false);
        tokenRef.current = null;
      }
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong');
    }
  }

  return (
    <form onSubmit={handleSubmit} className={formStyles}>
      <div id="turnstile-container" className="hidden" />
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
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={isFooter ? 'Your Email Here' : 'Enter your email'}
            className={inputStyles}
          />

          <button
            type="submit"
            disabled={status === 'loading' || !isTurnstileReady}
            className={buttonStyles}
          >
            <h5 className="text-background! whitespace-nowrap group-hover:text-(--primary-black)! group-active:text-(--primary-black)! group-focus:text-(--primary-black)!">
              {status === 'loading'
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
