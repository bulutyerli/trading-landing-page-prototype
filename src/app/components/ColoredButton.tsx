import Link from 'next/link';

export default function ColoredButton({
  className,
  text,
  bg,
  href,
}: {
  className: string;
  text: string;
  bg?: false | string;
  href: string;
}) {
  return (
    <div className="flex justify-center">
      <div className="group inline-block relative rounded-full">
        <div
          className={`rounded-full absolute inset-0 group-hover:scale-105 duration-200 ease-in opacity-0 group-hover:opacity-100 transition-all bg-gradient-to-r ${className}`}
        ></div>
        <Link
          className={`inline-block px-5 py-1.5 rounded-full border relative transition-all text-balance text-center text-white hover:text-white border-slate-600 hover:bg-slate-700 group-hover:scale-105 duration-200 ease-in ${
            bg ? bg : 'bg-slate-800'
          }`}
          href={href}
        >
          <div className="flex justify-center items-center gap-2">{text}</div>
        </Link>
      </div>
    </div>
  );
}
