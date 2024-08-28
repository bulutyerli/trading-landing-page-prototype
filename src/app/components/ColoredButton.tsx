import Link from 'next/link';

export default function ColoredButton({
  className,
  text,
}: {
  className: string;
  text: string;
}) {
  return (
    <div className="flex justify-center">
      <div className="group inline-block relative rounded-full">
        <div
          className={`rounded-full absolute inset-0 group-hover:scale-105 duration-200 ease-in opacity-0 group-hover:opacity-100 transition-all bg-gradient-to-r ${className}`}
        ></div>
        <Link
          className="inline-block px-5 py-1.5 rounded-full border relative transition-all text-balance text-center disabled:bg-slate-700 disabled:text-slate-600 disabled:border-slate-600 disabled:bg-none text-white hover:text-white border-slate-600 bg-slate-800 hover:bg-slate-700 active:bg-slate-900 group-hover:scale-105 duration-200 ease-in"
          href={'/pricing'}
        >
          <div className="flex justify-center items-center gap-2">{text}</div>
        </Link>
      </div>
    </div>
  );
}
