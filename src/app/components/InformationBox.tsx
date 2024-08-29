import Link from 'next/link';
import CustomButton from './CustomButton';

export default function InformationBox({
  icon,
  title,
  desc,
  buttonText,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  buttonText: string;
  href: string;
}) {
  return (
    <div className="w-full p-6 flex flex-col gap-6 border rounded-2xl bg-slate-800 border-slate-500">
      <h2 className="flex items-center gap-2 text-lg">
        {icon} {title}
      </h2>
      <p className="flex-1 text-pretty">{desc}</p>
      <div className="group inline-block relative rounded-full">
        <Link
          className="inline-block px-5 py-1.5 rounded-full border relative transition-all text-balance text-center   text-white hover:text-white border-slate-400 bg-slate-600 hover:bg-slate-500"
          href={href}
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}
