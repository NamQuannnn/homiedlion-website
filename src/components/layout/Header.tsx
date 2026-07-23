"use client";

import Image from "next/image";
import { useState } from "react";

import { navigation } from "@/config/navigation";
import { site } from "@/config/site";
import { Link, usePathname } from "@/i18n/routing";

import Container from "@/components/ui/Container";
import LanguageSwitcher from "./LanguageSwitcher";

import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("Navigation");
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const enabledNavItems = navigation.filter((item) => item.enabled);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
      <Container className="max-w-none px-[clamp(20px,4vw,72px)]">
        <div className="flex h-16 items-center justify-between md:h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center transition-opacity hover:opacity-90"
            onClick={() => setIsOpen(false)}
            aria-label={`${site.name} home`}
          >
            <Image
              src="/logo/homie-dlion-logo.png"
              alt={site.name}
              width={420}
              height={160}
              priority
              className="h-auto w-[135px] object-contain sm:w-[155px] lg:w-[170px]"
            />
          </Link>

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
                  {t(item.key)}
                </Link>
              ))}
            </nav>

            <div className="h-5 w-px bg-border" />

            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-text md:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile menu */}
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
                  {t(item.key)}
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