"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";
import { navigation } from "@/config/navigation";
import { Link, usePathname } from "@/i18n/routing";

import LanguageSwitcher from "./LanguageSwitcher";

const navigationKeys: Record<string, string> = {
  "/": "home",
  "/about": "about",
  "/products": "products",
  "/market-insights": "marketInsights",
  "/contact": "contact",
};

export default function Header() {
  const t = useTranslations("Navigation");
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const enabledNavItems = navigation.filter((item) => item.enabled);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  const getNavigationLabel = (href: string) => {
    const translationKey = navigationKeys[href];

    return translationKey ? t(translationKey) : href;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <Container>
        <div className="flex h-24 items-center justify-between">
          <Link
            href="/"
            className="flex items-center transition-opacity hover:opacity-90"
            onClick={() => setIsOpen(false)}
            aria-label={t("homeAria")}
          >
            <Image
              src="/logo/homie-dlion-logo.png"
              alt="Homie D'Lion Group"
              width={320}
              height={120}
              priority
              className="h-16 w-auto object-contain sm:h-20"
            />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <nav className="flex items-center gap-8">
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
                  {getNavigationLabel(item.href)}
                </Link>
              ))}
            </nav>

            <div className="h-5 w-px bg-border" />

            <LanguageSwitcher />
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-text md:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-label={isOpen ? t("closeMenu") : t("openMenu")}
            aria-expanded={isOpen}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

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
                  {getNavigationLabel(item.href)}
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