'use client';

export function ContactForm() {
  return (
    <form
      className="mt-12 space-y-6 text-left max-w-140 mx-auto text-(--primary-black) tezt-base leading-6"
      onSubmit={(e) => e.preventDefault()}
    >
      <div>
        <label className="block mb-1">Name</label>
        <input
          type="text"
          className="w-full border border-(--secondary-gray-100) px-3 py-2 bg-background"
          required
        />
      </div>
      <div>
        <label className="block  mb-1">Email</label>
        <input
          type="email"
          className="w-full border border-(--secondary-gray-100) px-3 py-2 bg-background"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Message</label>
        <textarea
          rows={4}
          placeholder="Type your message…"
          className="w-full border border-(--secondary-gray-100) px-3 py-2 bg-background"
          required
        />
      </div>
      <div className="flex items-center gap-2">
        <input type="checkbox" id="terms" className="bg-background" required />
        <label htmlFor="terms">I accept the Terms</label>
      </div>

      <button
        type="submit"
        className="relative w-40 lg:w-44.25 h-9.75 mt-9.5 flex mx-auto items-center justify-center bg-(--primary-red-main) px-5 lg:px-8 py-1.5 lg:py-3 text-sm font-medium uppercase  text-background transition hover:bg-(--primary-gold-main)"
      >
        <h5 className="text-background!">Submit</h5>
      </button>
    </form>
  );
}
