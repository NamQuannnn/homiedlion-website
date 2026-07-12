import Image from "next/image";
import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";
import { Link } from "@/i18n/routing";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative isolate min-h-[610px] overflow-hidden sm:min-h-[68vh] lg:min-h-[72vh]">
      <div className="absolute inset-0 -z-20">
         <picture>
           <source
             media="(max-width: 767px)"
             srcSet="/images/hero-cover-mobile.webp"
            />
          <img
             src="/images/hero-cover.webp"
             alt="Homie D'Lion Group"
             className="h-full w-full object-cover object-center"
            />
         </picture>
      </div>

      <div className="absolute inset-0 -z-10 bg-black/25" />

      <Container className="max-w-none">
        <div className="flex min-h-[610px] items-center justify-center px-5 pb-10 pt-16 text-center sm:min-h-[68vh] sm:py-16 lg:min-h-[72vh]">
          <div className="-translate-y-3 sm:-translate-y-8">
            <h1 className="mx-auto max-w-[340px] text-[42px] font-extrabold leading-[0.98] tracking-tight text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.7)] sm:max-w-none sm:text-6xl lg:text-7xl">
              {t("title")}
            </h1>

            <p className="mx-auto mt-5 max-w-[330px] text-[13px] font-semibold uppercase leading-6 tracking-[0.28em] text-white drop-shadow-md sm:mt-4 sm:max-w-none sm:text-sm sm:tracking-[0.42em]">
              {t("subtitle")}
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-4">
              <Link
                href="/products"
                className="inline-flex w-full max-w-[320px] items-center justify-center rounded-xl border border-white bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg transition hover:bg-slate-100 sm:w-auto sm:min-w-[220px]"
              >
                {t("exploreProducts")}
              </Link>

              <Link
                href="/market-insights"
                className="inline-flex w-full max-w-[320px] items-center justify-center rounded-xl bg-[#ef1b1b] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#d81515] sm:w-auto sm:min-w-[220px]"
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