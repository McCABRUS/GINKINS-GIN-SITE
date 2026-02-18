'use client';

import { useState } from 'react';

export default function JoinNowForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    try {
      setLoading(true);

      await fetch('/api/join-inner-circle', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      setEmail('');
      alert('Thanks for joining!');
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center"
      >
        <input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full max-w-sm border-b border-(--primary-black) bg-transparent py-2 text-left text-base outline-none placeholder:text-(--primary-black) placeholder:opacity-60 text-(--primary-black)"
        />

        <button
          type="submit"
          disabled={loading}
          className="min-w-min[124px] h-10 inline-flex items-center justify-center bg-(--primary-red-main) px-5 py-1.5   transition hover:bg-(--primary-gold-main) disabled:opacity-50"
        >
          <h5 className="text-background! whitespace-nowrap">
            {loading ? 'Joining...' : 'Join Now'}
          </h5>
        </button>
      </form>
    </>
  );
}
