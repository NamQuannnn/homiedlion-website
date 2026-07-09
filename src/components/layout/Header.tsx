"use client";

import { useState } from "react";
import Image from "next/image";

import { Link, usePathname } from "@/i18n/routing";
import Container from "@/components/ui/Container";
import { navigation } from "@/config/navigation";
import { site } from "@/config/site";

import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const enabledNavItems = navigation.filter((item) => item.enabled);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-[#FAF8F5]/90 backdrop-blur-md">
      <Container>
        <div className="flex h-[72px] items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 transition-opacity hover:opacity-90"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/logo/homie-dlion-logo.png"
              alt={site.name}
              width={46}
              height={46}
              priority
              className="h-11 w-auto object-contain"
            />

            <div className="hidden sm:block">
              <p className="text-lg font-bold leading-none tracking-tight text-[#2C2C2C]">
                {site.name}
              </p>

              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#7A5A2B]">
                {site.tagline}
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <nav className="flex items-center gap-8">
              {enabledNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-[#7A5A2B]"
                      : "text-gray-600 hover:text-[#7A5A2B]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="h-5 w-px bg-gray-300" />

            <LanguageSwitcher />
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-[#2C2C2C] md:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            <nav className="flex flex-col gap-2">
              {enabledNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive(item.href)
                      ? "bg-white text-[#7A5A2B]"
                      : "text-gray-600 hover:bg-white hover:text-[#7A5A2B]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-4 border-t border-gray-200 pt-4">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}