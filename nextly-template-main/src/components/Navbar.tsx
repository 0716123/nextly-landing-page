"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";

export const Navbar = () => {
  const navigation = [
    { label: "About", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#start" },
  ];

  return (
    <div className="w-full bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/70">
      <nav className="container relative flex flex-wrap items-center justify-between p-6 mx-auto lg:justify-between xl:px-0">
        <Link href="/" className="flex items-center space-x-3 text-xl font-semibold text-white">
          <Image src="/img/logo.svg" width={30} height={30} alt="Nextly" className="w-8" />
          <span>Nextly</span>
        </Link>

        <div className="flex items-center gap-3 lg:gap-6">
          <ThemeChanger />
          <div className="hidden lg:flex lg:items-center lg:gap-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-slate-200 transition rounded-full hover:bg-slate-800 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#start"
              className="px-5 py-2 text-sm font-semibold text-slate-950 bg-cyan-500 rounded-full transition hover:bg-cyan-400"
            >
              Start project
            </Link>
          </div>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="p-2 text-slate-200 rounded-lg lg:hidden hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                  <span className="sr-only">Open menu</span>
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {open ? (
                      <path d="M18 6L6 18M6 6l12 12" />
                    ) : (
                      <path d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </Disclosure.Button>
                <Disclosure.Panel className="flex flex-col w-full gap-2 mt-4 lg:hidden">
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block w-full px-4 py-2 text-sm font-medium text-slate-200 rounded-lg hover:bg-slate-800"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link href="#start" className="inline-flex w-full items-center justify-center px-4 py-2 text-sm font-semibold text-slate-950 bg-cyan-500 rounded-full hover:bg-cyan-400">
                    Start project
                  </Link>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </nav>
    </div>
  );
};

