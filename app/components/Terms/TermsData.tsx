type TermsItem = {
  id: number;
  title: string;
  description: React.ReactNode;
};

export const Terms: TermsItem[] = [
  {
    id: 1,
    title: 'Purchase & Shipping Policies:',
    description: (
      <p>
        Orders are subject to availability. Shipping rates and delivery times
        depend on your location. You must be of legal drinking age in your
        jurisdiction.
      </p>
    ),
  },
  {
    id: 2,
    title: 'Refund and Return Guidelines:',
    description: (
      <p>
        No returns on opened products. Contact us within 7 days for damaged or
        incorrect orders—we’ll make it right.
      </p>
    ),
  },
  {
    id: 3,
    title: 'Liability Disclaimers:',
    description: (
      <p>
        Ginkins is not responsible for shipping delays or third-party issues.
        Website content is provided as-is. Drink responsibly.
      </p>
    ),
  },
  {
    id: 4,
    title: 'Website Use Terms:',
    description: (
      <p>
        You agree not to misuse our content. All site content is the property of
        Ginkins Distillery and may not be used without permission.
      </p>
    ),
  },
  {
    id: 5,
    title: 'Plain Language Commitment:',
    description: (
      <p>
        These terms are written in everyday language so you can feel confident
        and informed every step of the way.
      </p>
    ),
  },
];
