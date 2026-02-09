type PrivacyItem = {
  id: number;
  title: string;
  description: React.ReactNode;
};

export const PrivacyItems: PrivacyItem[] = [
  {
    id: 1,
    title: 'Email Policies: ',
    description: (
      <p>
        Only opt-in emails, with a clear unsubscribe option. No spam, no selling
        of your data—ever.
      </p>
    ),
  },
  {
    id: 2,
    title: 'Cookie Usage:',
    description: (
      <p>
        Cookies enhance your experience. We use them to remember preferences and
        collect anonymous insights.
      </p>
    ),
  },
  {
    id: 3,
    title: 'Browser Controls:',
    description: (
      <p>You can disable or delete cookies via your browser settings.</p>
    ),
  },
  {
    id: 4,
    title: 'GDPR Compliance:',
    description: (
      <p>
        You have the right to know what data we hold, request access or
        deletion, and control your information.
      </p>
    ),
  },
  {
    id: 5,
    title: 'Data Handling:',
    description: (
      <p>
        Your data is stored securely. We never share it without your permission
        and only use trusted platforms.
      </p>
    ),
  },
  {
    id: 6,
    title: 'Policy Updates:',
    description: (
      <p>
        Changes will be posted here. We encourage you to review them
        periodically.
      </p>
    ),
  },
];
