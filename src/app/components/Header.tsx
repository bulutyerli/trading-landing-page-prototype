'use client';

import Image from 'next/image';
import Link from 'next/link';
import CustomButton from './CustomButton';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';

export default function Header() {
  const [menu, setMenu] = useState(false);
  const navLinks = [
    {
      title: 'Pricing',
      href: '/pricing',
    },
  ];

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="mx-auto px-6 pt-6 flex justify-between items-center fixed top-0 left-0 right-0 z-50 backdrop-blur bg-slate-950/10">
      <Link href={'/'}>
        <Image
          className="w-[135px] h-auto lg:w-[180px] ml-4 lg:ml-8"
          src={'/mainlogo.png'}
          width={600}
          height={600}
          alt="UAlgo Logo"
        ></Image>
      </Link>
      <nav>
        <ul className="hidden lg:flex justify-end items-center gap-5">
          {navLinks.map((link) => {
            return (
              <li key={link.href}>
                <Link
                  className="text-white hover:text-slate-500"
                  href={link.href}
                >
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
        <div
          className="text-inline-block p-3 text-white cursor-pointer transition-colors text-2xl hover:text-slate-500 block lg:hidden"
          onClick={handleMenu}
        >
          <HiOutlineMenuAlt2 />
        </div>
        {menu && (
          <div className="fixed w-screen h-screen inset-0 bg-slate-950/95 backdrop-blur z-50">
            <div className="container mx-auto pt-12 pb-28 px-6 flex items-start">
              <ul className="flex-1 flex flex-col gap-6 p-6">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      className="text-white hover:text-slate-500"
                      href={link.href}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div
                className="inline-block p-3 text-white hover:text-slate-500 cursor-pointer transition-colors text-2xl"
                onClick={() => setMenu(false)}
              >
                <IoMdClose />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
