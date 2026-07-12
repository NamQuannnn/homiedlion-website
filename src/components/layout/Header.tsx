"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { navigation } from "@/config/navigation";
import { site } from "@/config/site";
import { Link, usePathname } from "@/i18n/routing";

import Container from "@/components/ui/Container";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const enabledNavItems = navigation.filter((item) => item.enabled);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 overflow-visible border-b border-border/70 bg-background/95 backdrop-blur-md">
      <Container className="max-w-none px-[clamp(20px,4vw,72px)]">
        <div className="relative flex h-12 items-center justify-between sm:h-14">
          {/* Logo + phần header phình xuống */}
          <div
               className={`relative z-20 self-start -translate-x-[clamp(6px,3.4vw,50px)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isScrolled
                ? "pointer-events-none -translate-y-[115%] opacity-0"
                : "translate-y-0 opacity-100"
            }`}
          >
            {/* Nền cong nối liền với header */}
            <div className="pointer-events-none absolute left-3 right-3 -top-px h-[102px] rounded-b-[34px] bg-background" />

            <Link
              href="/"
              className="relative flex items-center justify-center transition-opacity hover:opacity-90"
              onClick={() => setIsOpen(false)}
              aria-label={`${site.name} home`}
            >
              <Image
                src="/logo/homie-dlion-logo.png"
                alt={site.name}
                width={420}
                height={160}
                priority
                className="h-auto w-[145px] -translate-y-7 object-contain sm:w-[215px] sm:-translate-y-9 lg:w-[240px]"
              />
            </Link>
          </div>

          {/* Menu desktop */}
          <div className="hidden items-center gap-x-8 md:flex">
            <nav className="flex items-center gap-x-8 whitespace-nowrap">
              {enabledNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-primary"
                      : "text-text-secondary hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="h-5 w-px bg-border" />

            <LanguageSwitcher />
          </div>

          {/* Nút menu mobile */}
          <button
            type="button"
            className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-text md:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Menu mobile */}
        {isOpen && (
          <div className="border-t border-border py-4 md:hidden">
            <nav className="flex flex-col gap-2">
              {enabledNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive(item.href)
                      ? "bg-surface text-primary"
                      : "text-text-secondary hover:bg-surface hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-4 border-t border-border pt-4">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}