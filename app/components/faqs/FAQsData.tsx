type FAQItem = {
  id: number;
  question: string;
  answer: React.ReactNode;
};

export const FAQS: FAQItem[] = [
  {
    id: 1,
    question: 'Where is Ginkins Gin made?',
    answer: (
      <p>
        Right here in Louisville, Kentucky, using locally selected botanicals
        and mineral-rich spring water.
      </p>
    ),
  },
  {
    id: 2,
    question: 'Can I visit the distillery?',
    answer: (
      <p>
        Not at this time. We’re focused on production, but stay tuned for future
        events and experiences.
      </p>
    ),
  },
  {
    id: 3,
    question: 'Where can I buy Ginkins Gin?',
    answer: (
      <p>
        Check our “Where to Find Ginkins” page for retail, restaurant, and
        online locations.
      </p>
    ),
  },
  {
    id: 4,
    question: 'What makes Ginkins different?',
    answer: (
      <p>
        Our bold, citrus-forward flavor, handcrafted approach, expert distiller,
        and Kentucky soul.
      </p>
    ),
  },
  {
    id: 5,
    question: 'How should I store my gin?',
    answer: (
      <p>
        Store in a cool, dry place, away from sunlight. Once opened, seal
        tightly to maintain flavor.
      </p>
    ),
  },
  {
    id: 6,
    question: 'Do you ship internationally?',
    answer: (
      <p>
        Not yet—but we’re working on it. Reach out to see if your region is on
        our radar.
      </p>
    ),
  },
  {
    id: 7,
    question: 'Cocktail ideas?',
    answer: (
      <p>
        Absolutely—visit our Cocktails section for classics and signature
        creations.
      </p>
    ),
  },
  {
    id: 8,
    question: 'Sustainability?',
    answer: (
      <p>
        We repurpose botanicals, use ethical ingredients, minimize waste, and
        collaborate with sustainable partners.
      </p>
    ),
  },
];
