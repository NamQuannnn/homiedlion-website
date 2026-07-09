import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { routing } from "@/i18n/routing";

import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://homiedlion.com"),

  title: {
    default: "Homie D'Lion Group",
    template: "%s | Homie D'Lion Group",
  },

  description:
    "Homie D'Lion Group specializes in Raw Cashew Nuts, Cashew Kernels, Freight Services and Cashew Market Intelligence.",

  keywords: [
    "Raw Cashew Nuts",
    "Cashew Kernels",
    "Cashew",
    "RCN",
    "Vietnam Cashew",
    "Cashew Export",
    "Freight",
    "Market Intelligence",
    "Homie D'Lion Group",
  ],

  authors: [
    {
      name: "Homie D'Lion Group",
    },
  ],

  creator: "Homie D'Lion Group",

  publisher: "Homie D'Lion Group",

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    title: "Homie D'Lion Group",
    description:
      "Global Cashew Trading & Market Intelligence.",

    url: "https://homiedlion.com",

    siteName: "Homie D'Lion Group",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Homie D'Lion Group",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Homie D'Lion Group",

    description:
      "Global Cashew Trading & Market Intelligence.",

    images: ["/favicon.png"],
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${inter.className} flex min-h-screen flex-col bg-[#FAF8F5]`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />

          <main className="flex flex-1 flex-col">{children}</main>

          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}