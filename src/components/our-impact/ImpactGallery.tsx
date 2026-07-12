"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type ImpactGalleryProps = {
  images: string[];
  title: string;
  eyebrow: string;
  galleryTitle: string;
  locale: string;
};

export default function ImpactGallery({
  images,
  title,
  eyebrow,
  galleryTitle,
  locale,
}: ImpactGalleryProps) {
  const [selectedIndex, setSelectedIndex] =
    useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const touchStartX = useRef<number | null>(null);

  const isVietnamese = locale === "vi";

  const closeLabel = isVietnamese ? "Đóng" : "Close";
  const previousLabel = isVietnamese
    ? "Ảnh trước"
    : "Previous image";
  const nextLabel = isVietnamese
    ? "Ảnh tiếp theo"
    : "Next image";
  const zoomLabel = isVietnamese
    ? "Phóng to hoặc thu nhỏ"
    : "Zoom in or out";

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
    setIsZoomed(false);
  }, []);

  const showPrevious = useCallback(() => {
    setSelectedIndex((current) => {
      if (current === null) return null;

      return current === 0
        ? images.length - 1
        : current - 1;
    });

    setIsZoomed(false);
  }, [images.length]);

  const showNext = useCallback(() => {
    setSelectedIndex((current) => {
      if (current === null) return null;

      return current === images.length - 1
        ? 0
        : current + 1;
    });

    setIsZoomed(false);
  }, [images.length]);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    closeLightbox,
    selectedIndex,
    showNext,
    showPrevious,
  ]);

  const handleTouchStart = (
    event: React.TouchEvent<HTMLDivElement>
  ) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (
    event: React.TouchEvent<HTMLDivElement>
  ) => {
    if (touchStartX.current === null) return;

    const touchEndX =
      event.changedTouches[0]?.clientX ??
      touchStartX.current;

    const distance = touchEndX - touchStartX.current;

    if (distance > 50) {
      showPrevious();
    }

    if (distance < -50) {
      showNext();
    }

    touchStartX.current = null;
  };

  if (images.length === 0) {
    return null;
  }

  return (
    <>
      <section className="mx-auto mt-20 max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            {eyebrow}
          </p>

          <h2 className="mt-4 text-3xl font-bold text-text sm:text-4xl">
            {galleryTitle}
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => {
                setSelectedIndex(index);
                setIsZoomed(false);
              }}
              className="impact-fade-up group relative aspect-[4/3] cursor-zoom-in overflow-hidden rounded-2xl bg-neutral-200 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                animationDelay: `${Math.min(index * 70, 560)}ms`,
              }}
              aria-label={`${title} - ${index + 1}`}
            >
              <Image
                src={image}
                alt={`${title} - ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              <span className="absolute inset-0 bg-black/0 transition group-hover:bg-black/15" />

              <span className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-black/65 text-lg text-white opacity-0 backdrop-blur-sm transition group-hover:translate-y-0 group-hover:opacity-100">
                ⤢
              </span>
            </button>
          ))}
        </div>
      </section>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="absolute left-5 top-5 z-20 rounded-full bg-black/50 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
            {selectedIndex + 1} / {images.length}
          </div>

          <div className="absolute right-4 top-4 z-20 flex items-center gap-3">
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setIsZoomed((current) => !current);
              }}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-xl text-white backdrop-blur-md transition hover:bg-white/25"
              aria-label={zoomLabel}
            >
              {isZoomed ? "−" : "+"}
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                closeLightbox();
              }}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-xl text-white backdrop-blur-md transition hover:bg-white/25"
              aria-label={closeLabel}
            >
              ✕
            </button>
          </div>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrevious();
                }}
                className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-3xl text-white backdrop-blur-md transition hover:bg-white/25 sm:left-6"
                aria-label={previousLabel}
              >
                ‹
              </button>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-3xl text-white backdrop-blur-md transition hover:bg-white/25 sm:right-6"
                aria-label={nextLabel}
              >
                ›
              </button>
            </>
          )}

          <div
            className={`relative h-[82vh] w-[88vw] transition-transform duration-300 ${
              isZoomed
                ? "cursor-zoom-out scale-[1.45]"
                : "cursor-zoom-in scale-100"
            }`}
            onClick={(event) => {
              event.stopPropagation();
              setIsZoomed((current) => !current);
            }}
          >
            <Image
              src={images[selectedIndex]}
              alt={`${title} - ${selectedIndex + 1}`}
              fill
              priority
              sizes="100vw"
              className="select-none object-contain"
              draggable={false}
            />
          </div>
        </div>
      )}
    </>
  );
}