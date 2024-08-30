'use client';

import Image from 'next/image';
import Link from 'next/link';
import CustomButton from './CustomButton';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { createClient } from '../utils/supabase/client';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { FaUser, FaChevronDown } from 'react-icons/fa';
import { useAuthStore } from '../providers/auth-provider';

export default function Header() {
  const supabase = createClient();
  const { user, setUser, clearUser } = useAuthStore((state) => state);

  const [menu, setMenu] = useState(false);
  const navLinks = [
    {
      title: 'Free Indicators',
      href: 'https://www.tradingview.com/u/UAlgo/#published-scripts',
      isNewTab: true,
    },
    {
      title: 'Discord',
      href: 'https://discord.com/invite/kyQkKxUQkW',
      isNewTab: true,
    },
    {
      title: 'Pricing',
      href: '/pricing',
      isNewTab: false,
    },
  ];

  const handleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error || !data?.user) {
        clearUser();
      } else {
        setUser(data.user?.email);
      }
    };

    getUser();
  }, []);

  const handleLogOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      clearUser();
    }
    setMenu(false);
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
                  aria-label={link.title}
                  target={link.isNewTab ? '_blank' : undefined}
                  rel={link.isNewTab ? 'noopener noreferrer' : undefined}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
          {user ? (
            <div className="relative">
              <Menu>
                <MenuButton className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-sky-500 group-hover:bg-sky-600 text-white group-hover:text-gray-200 flex justify-center items-center transition-colors">
                    <FaUser size={15} />
                  </div>
                  <FaChevronDown size={10} />
                </MenuButton>

                <MenuItems className="absolute mt-2.5 w-52 origin-top-right right-0 rounded-xl border border-gray-700 bg-slate-800 p-2 shadow-lg z-50 focus:outline-none">
                  <MenuItem as="div" className="group">
                    <span className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 group-hover:bg-slate-700 text-slate-400">
                      {user}
                    </span>
                  </MenuItem>
                  <MenuItem as="div" className="group">
                    <button
                      className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 group-hover:bg-slate-700"
                      onClick={handleLogOut}
                    >
                      Log Out
                    </button>
                  </MenuItem>
                  <div className="my-1 h-px bg-white/5" />
                </MenuItems>
              </Menu>
            </div>
          ) : (
            <div className="flex items-center gap-5">
              <li>
                <Link href={'/log-in'}>
                  <CustomButton
                    className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700"
                    text="Log In"
                  />
                </Link>
              </li>
              <li>
                <Link href={'/sign-up'}>
                  <CustomButton
                    className="bg-slate-200 border-slate-400 text-slate-900 hover:text-slate-900 hover:bg-slate-100"
                    text="Sign Up"
                  />
                </Link>
              </li>
            </div>
          )}
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
                      onClick={() => setMenu(false)}
                      target={link.isNewTab ? '_blank' : undefined}
                      rel={link.isNewTab ? 'noopener noreferrer' : undefined}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
                {user ? (
                  <div className="border-t border-slate-400">
                    <div className="text-slate-400 mt-5">{user}</div>

                    <CustomButton
                      onClick={handleLogOut}
                      className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700 mt-5"
                      text="Sign Out"
                    />
                  </div>
                ) : (
                  <div className="flex items-center gap-5 border-t border-slate-700 pt-5">
                    <li>
                      <Link href={'/log-in'}>
                        <CustomButton
                          className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700"
                          text="Log In"
                          onClick={() => setMenu(false)}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href={'/sign-up'}>
                        <CustomButton
                          className="bg-slate-200 border-slate-400 text-slate-900 hover:text-slate-900 hover:bg-slate-100"
                          text="Sign Up"
                          onClick={() => setMenu(false)}
                        />
                      </Link>
                    </li>
                  </div>
                )}
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
