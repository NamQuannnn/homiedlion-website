"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/images/about/about-1.jpg",
  "/images/about/about-2.jpg",
  "/images/about/about-3.jpg",
  "/images/about/about-4.jpg",
];

const SLIDE_DURATION = 5000;

export default function AboutSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentIndex((previous) => (previous + 1) % images.length);
    }, SLIDE_DURATION);

    return () => window.clearInterval(timer);
  }, []);

  const showPrevious = () => {
    setCurrentIndex((previous) =>
      previous === 0 ? images.length - 1 : previous - 1
    );
  };

  const showNext = () => {
    setCurrentIndex((previous) => (previous + 1) % images.length);
  };

  return (
    <div className="group relative h-full w-full overflow-hidden rounded-3xl bg-background">
      {images.map((src, index) => {
        const isActive = index === currentIndex;

        return (
          <Image
            key={src}
            src={src}
            alt={`Homie D'Lion Group ${index + 1}`}
            fill
            loading="eager"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            style={{
              zIndex: isActive ? 1 : 0,
              opacity: isActive ? 1 : 0,
              transform: isActive ? "scale(1)" : "scale(1.025)",
              transition:
                "opacity 1400ms cubic-bezier(0.22, 1, 0.36, 1), transform 6000ms ease-out",
              willChange: "opacity, transform",
            }}
          />
        );
      })}

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          zIndex: 2,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.18), transparent 32%)",
        }}
      />

      <button
        type="button"
        onClick={showPrevious}
        aria-label="Previous image"
        className="absolute left-4 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/20 text-xl text-white opacity-0 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-black/35 group-hover:opacity-100"
      >
        ‹
      </button>

      <button
        type="button"
        onClick={showNext}
        aria-label="Next image"
        className="absolute right-4 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/20 text-xl text-white opacity-0 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-black/35 group-hover:opacity-100"
      >
        ›
      </button>

      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
        {images.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => setCurrentIndex(index)}
            aria-label={`Show image ${index + 1}`}
            aria-current={index === currentIndex ? "true" : undefined}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === currentIndex
                ? "w-6 bg-white"
                : "w-1.5 bg-white/55 hover:bg-white/85"
            }`}
          />
        ))}
      </div>
    </div>
  );
}