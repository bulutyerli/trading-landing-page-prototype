import Image from 'next/image';
import Link from 'next/link';
import CustomButton from './Button';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';

export default function Header() {
  const navLinks = [
    {
      title: 'Pricing',
      href: '/pricing',
    },
  ];

  return (
    <header className="mx-auto px-6 pt-6 flex justify-between items-center fixed top-0 left-0 right-0 z-50 backdrop-blur bg-slate-950/10">
      <Image
        className="w-[135px] h-auto lg:w-[180px] ml-4 lg:ml-8"
        src={'/mainlogo.png'}
        width={600}
        height={600}
        alt="UAlgo Logo"
      ></Image>
      <nav>
        <ul className="flex gap-5 items-center">
          {navLinks.map((link) => {
            return (
              <li>
                <Link className="text-white" href={link.href}>
                  {link.title}
                </Link>
              </li>
            );
          })}
          <li>
            <Link href={'/sign-in'}>
              <CustomButton
                className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700 active:bg-slate-900"
                text="Log In"
              />
            </Link>
          </li>
          <li>
            <Link href={'/sign-up'}>
              <CustomButton
                className="bg-slate-200 border-slate-400 text-slate-900 hover:text-slate-900 hover:bg-slate-100 active:bg-slate-300"
                text="Sign Up"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
