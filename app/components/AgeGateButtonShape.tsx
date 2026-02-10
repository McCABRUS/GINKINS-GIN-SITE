type Props = {
  className?: string;
};

export default function AgeGateButtonShape({ className }: Props) {
  return (
    <svg
      viewBox="0 0 159 159"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
    >
      <path d="M49.1803 52.5537C69.0655 47.9375 88.9506 47.9375 108.836 52.5537C128.721 57.1699 145.055 66.0472 158.016 79.008C144.878 92.1465 128.543 101.024 108.836 105.462C88.9506 110.079 69.0655 110.079 49.1803 105.462C29.4727 101.024 13.1384 92.1465 0 79.008C13.1384 65.8696 29.4727 56.9923 49.1803 52.5537Z" />
    </svg>
  );
}
