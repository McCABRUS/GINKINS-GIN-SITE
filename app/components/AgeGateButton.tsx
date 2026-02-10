import AgeGateButtonShape from './AgeGateButtonShape';

export default function AgeGateButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative flex items-center justify-center text-background transition-colors duration-300 hover:text-(--primary-red-main)"
    >
      <AgeGateButtonShape className="w-40 h-40 transition-colors duration-300" />
      <span className="absolute font-bold text-(--primary-red-main) text-[22px]">
        {label}
      </span>
    </button>
  );
}
