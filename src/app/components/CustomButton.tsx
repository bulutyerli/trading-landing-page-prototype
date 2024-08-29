export default function CustomButton({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div
      className={`${className} py-1.5 px-5 text-center rounded-full border-[1px] text-balance inline-block`}
    >
      {text}
    </div>
  );
}
