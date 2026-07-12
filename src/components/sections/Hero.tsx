import Image from "next/image";
import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";
import { Link } from "@/i18n/routing";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-30">
        <Image
          src="/images/hero-cover.webp"
          alt="Homie D'Lion Group"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 -z-20 bg-black/10" />

      <Container>
        <div className="flex min-h-[72vh] items-center justify-center px-4 py-20 sm:min-h-[78vh]">
          <div className="-mt-16 mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.65)] sm:text-6xl lg:text-7xl">
              {t("title")}
                </h1>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.45em] text-white/90 drop-shadow-md">
              {t("subtitle")}
                </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/products"
                className="inline-flex min-w-[220px] items-center justify-center rounded-xl border border-white bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-slate-100"
              >
                {t("exploreProducts")}
              </Link>

              <Link
                href="/market-insights"
                className="inline-flex min-w-[220px] items-center justify-center rounded-xl bg-[#ef1b1b] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-[#d81515]"
              >
                {t("marketInsights")}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}