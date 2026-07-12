"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ImpactHeroProps = {
  title: string;
  summary: string;
  coverImage: string;
  date: string;
  location: string;
};

export default function ImpactHero({
  title,
  summary,
  coverImage,
  date,
  location,
}: ImpactHeroProps) {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    let animationFrame = 0;

    const handleScroll = () => {
      cancelAnimationFrame(animationFrame);

      animationFrame = requestAnimationFrame(() => {
        setScrollOffset(Math.min(window.scrollY, 700));
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative isolate min-h-[68vh] overflow-hidden sm:min-h-[76vh]">
      <div className="absolute inset-0 -z-30 overflow-hidden">
        <Image
          src={coverImage}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          style={{
            transform: `translate3d(0, ${
              scrollOffset * 0.12
            }px, 0) scale(1.05)`,
            transformOrigin: "center center",
          }}
        />
      </div>

      <div className="absolute inset-0 -z-20 bg-black/20" />

      <div className="absolute inset-x-0 bottom-0 -z-10 h-[55%] bg-gradient-to-t from-black/80 via-black/45 to-transparent" />

      <div className="mx-auto flex min-h-[68vh] w-full max-w-7xl items-end px-6 pb-12 pt-24 sm:min-h-[76vh] sm:px-10 sm:pb-16 lg:px-12">
        <div className="impact-fade-up max-w-3xl text-left">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium text-white/85 sm:text-sm">
            <time>{date}</time>

            <span aria-hidden="true">•</span>

            <span>{location}</span>
          </div>

          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.65)] sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/90 drop-shadow-md sm:text-base sm:leading-8">
            {summary}
          </p>

          <div className="mt-6 h-px w-20 bg-white/65" />
        </div>
      </div>
    </section>
  );
}