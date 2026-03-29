type FAQItem = {
  id: number;
  question: string;
  answer: React.ReactNode;
};

export const FAQS: FAQItem[] = [
  {
    id: 1,
    question: 'What makes Ginkins Gin unique?',
    answer: (
      <p>
        Ginkins Gin is crafted in small batches using a meticulous distillation
        process and a deep respect for Kentucky’s natural resources—especially
        our limestone-filtered water. Each bottle reflects bold botanical
        character, exceptional balance, and intentional craftsmanship.
      </p>
    ),
  },
  {
    id: 2,
    question: 'Where is Ginkins Gin made?',
    answer: (
      <p>
        Our gin is distilled in Louisville, Kentucky, a region known for
        world-class spirits. The purity and minerality of Louisville’s water
        play a key role in shaping our clean, crisp flavor.
      </p>
    ),
  },
  {
    id: 3,
    question: 'Who is the master distiller behind Ginkins Gin?',
    answer: (
      <p>
        Ginkins Gin is crafted by Scott Ginkins, a master distiller with 35+
        years in manufacturing and specialized training from Heriot-Watt
        University’s distilling program in Edinburgh, Scotland. His passion for
        precision and flavor drives every batch.
      </p>
    ),
  },
  {
    id: 4,
    question: 'What botanicals do you use?',
    answer: (
      <>
        <p>Each Ginkins expression features a curated blend of botanicals:</p>
        <ul className="[list-style:inside] my-8">
          <li>
            Louisville Dry Gin: Juniper, coriander, angelica, cardamom, orris
            root, citrus peels, and more.
          </li>
          <li>
            Golden Bloom (Elderflower): Elderflower, orange peel, juniper, and
            complementary botanicals.
          </li>
          <li>
            Heritage Reserve: A warm, spiced botanical profile with depth and
            aromatic richness.
          </li>
        </ul>
        <p>
          Every blend is natural, intentional, and crafted for balance and
          flavor.
        </p>
      </>
    ),
  },
  {
    id: 5,
    question:
      'Is Ginkins Gin 100% natural? Does it contain sugar or additives?',
    answer: (
      <p>
        Yes. Ginkins Gin is 100% natural.
        <br />
        We never add sugar, dyes, artificial flavors, or chemical additives.
        <br />
        All flavor comes directly from real botanicals, pure distillation, and
        Kentucky water—nothing else.
      </p>
    ),
  },
  {
    id: 6,
    question: 'Is Ginkins Gin a premium gin?',
    answer: (
      <p>
        Yes — Ginkins is a premium, small-batch craft gin. We use high-quality
        botanicals, a careful distillation method, and years of distilling
        expertise to deliver a refined, clean, and elevated gin experience.
      </p>
    ),
  },
  {
    id: 7,
    question: 'What is the best way to enjoy Ginkins Gin?',
    answer: (
      <>
        {' '}
        <p>There’s no wrong way—just your way.</p>
        <br />
        <p>Some favorites include:</p>
        <ul className="[list-style:inside] my-8">
          <li>
            Gin & Tonic with lime <strong>(Scott’s signature)</strong>
          </li>
          <li>Martini with a citrus twist</li>
          <li>Negroni</li>
          <li>Served neat over ice</li>
        </ul>
        <p>
          Ginkins’ smooth botanical balance makes it versatile in both classic
          and modern cocktails.
        </p>
      </>
    ),
  },
  {
    id: 8,
    question: 'Can you drink Ginkins Gin straight?',
    answer: (
      <p>
        Absolutely—responsibly. <br />
        Our clean distillation and balance of botanicals make Ginkins Gin smooth
        enough to enjoy neat or over ice.
      </p>
    ),
  },
  {
    id: 9,
    question: 'Does gin need to be aged like whisky?',
    answer: (
      <p>
        No. Gin receives its flavor from botanicals through infusion and
        distillation—not barrel aging. Some brands experiment with barrel-aged
        gin, but it's optional and not required. Ginkins Gin is crafted
        traditionally for clarity, freshness, and flavor integrity.
      </p>
    ),
  },
  {
    id: 10,
    question:
      'What’s the difference between a London Dry Gin and a Distilled Gin?',
    answer: (
      <>
        <p>
          <strong>London Dry Gin:</strong>
        </p>
        <ul className="[list-style:inside] mb-8">
          <li>A method, not a location.</li>
          <li>Must use natural botanicals during distillation.</li>
          <li>
            Cannot add flavor, color, or sugar after distillation (only water).
          </li>
          <li>Always juniper-forward and clean.</li>
        </ul>
        <p>
          <strong>Distilled Gin:</strong>
        </p>
        <ul className="[list-style:inside] mb-8">
          <li>
            Allows added flavors, sweeteners, and colors after distillation.
          </li>
        </ul>
        <p>
          Ginkins Louisville Dry Gin follows the classic London-Dry style—pure,
          natural, and botanically balanced.
        </p>
      </>
    ),
  },
  {
    id: 11,
    question: 'Do you offer tours at the distillery?',
    answer: (
      <p>
        Not at this time. Our focus is on crafting world-class gin with
        precision and consistency. Follow us on Instagram for updates on
        pop-ups, tastings, and special events.
      </p>
    ),
  },
  {
    id: 12,
    question: 'Where can I buy Ginkins Gin?',
    answer: (
      <>
        <p>
          You can find Ginkins in select bars across Kentucky.
          <br />
          For bottles, we offer online ordering in:
        </p>
        <ul className="[list-style:inside] my-8">
          <li>Kentucky</li>
          <li>Washington, DC</li>
          <li>New York</li>
        </ul>
        <p>
          Retail distribution in Kentucky continues to expand, with more states
          coming soon.
        </p>
      </>
    ),
  },
  {
    id: 13,
    question: 'What is the ABV of Ginkins Gin?',
    answer: <p>Each bottle clearly lists its ABV at 42.5%</p>,
  },
  {
    id: 14,
    question: 'How should I store my gin?',
    answer: (
      <p>
        Store upright, at room temperature, and away from direct sunlight.
        <br />
        Once opened, the flavor remains optimal for several months—but most
        Ginkins fans finish their bottle long before that.
      </p>
    ),
  },
  {
    id: 15,
    question: 'Is Ginkins Gin suitable for gifting?',
    answer: (
      <p>
        Absolutely. Between the craftsmanship, flavor, and design, Ginkins Gin
        makes a perfect gift for gin lovers, Kentucky spirit enthusiasts, and
        anyone who appreciates small-batch craft.
      </p>
    ),
  },
  {
    id: 16,
    question: 'Do I need to sign for my delivery of spirits?',
    answer: (
      <p>
        Yes. Federal law requires a signature from someone 21+ for any delivery
        containing spirits.
        <br />
        If gifting, please notify the recipient so someone is available to sign.
        After three attempts, undeliverable orders are returned to the sender.
      </p>
    ),
  },
  {
    id: 17,
    question: 'Are there new releases coming?',
    answer: (
      <p>
        Yes! We’re always exploring new botanicals and expressions. Follow us on
        Instagram or subscribe to updates to be the first to know.
      </p>
    ),
  },
];
