export default function CustomButton({
  text,
  className,
  onClick,
}: {
  text: string;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`${className} py-1.5 px-5 text-center rounded-full border-[1px] text-balance inline-block`}
    >
      {text}
    </button>
  );
}
