import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { routing } from "@/i18n/routing";

import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://homiedlion.com";

type LayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

export async function generateMetadata({
  params,
}: Omit<LayoutProps, "children">): Promise<Metadata> {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);

  const t = await getTranslations({
    locale,
    namespace: "Metadata",
  });

  const isVietnamese = locale === "vi";

  return {
    metadataBase: new URL(BASE_URL),

    title: {
      default: "Homie D'Lion Group",
      template: "%s | Homie D'Lion Group",
    },

    description: t("description"),

    keywords: t("keywords")
      .split(",")
      .map((keyword) => keyword.trim()),

    authors: [
      {
        name: "Homie D'Lion Group",
      },
    ],

    creator: "Homie D'Lion Group",
    publisher: "Homie D'Lion Group",

    icons: {
      icon: [
        {
          url: "/icon.png?v=2",
          type: "image/png",
          sizes: "512x512",
        },
      ],
      shortcut: "/icon.png?v=2",
      apple: "/icon.png?v=2",
    },

    openGraph: {
      title: "Homie D'Lion Group",
      description: t("shortDescription"),
      siteName: "Homie D'Lion Group",
      locale: isVietnamese ? "vi_VN" : "en_US",
      alternateLocale: isVietnamese ? ["en_US"] : ["vi_VN"],
      type: "website",
      images: [
        {
          url: "/dandelion-favicon-v3.png",
          width: 512,
          height: 512,
          alt: "Homie D'Lion Group",
        },
      ],
    },

    twitter: {
      card: "summary",
      title: "Homie D'Lion Group",
      description: t("shortDescription"),
      images: ["/icon.png?v=2"],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages({ locale });

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "Homie D'Lion Group",
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/icon.png`,
      width: 512,
      height: 512,
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: "Homie D'Lion Group",
    publisher: {
      "@id": `${BASE_URL}/#organization`,
    },
    inLanguage: locale === "vi" ? "vi-VN" : "en-US",
  };

  return (
    <html lang={locale}>
      <body
        className={`${inter.className} flex min-h-screen flex-col bg-background text-text`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        <NextIntlClientProvider messages={messages}>
          <Header />

          <main className="flex flex-1 flex-col">{children}</main>

          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}