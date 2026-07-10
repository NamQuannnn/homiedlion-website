"use client";

import Image from "next/image";
import { useState } from "react";

type MediaViewerProps = {
  src: string;
  title: string;
};

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

export default function MediaViewer({
  src,
  title,
}: MediaViewerProps) {
  const [zoom, setZoom] = useState(1);

  const cleanSrc = src.toLowerCase().split("?")[0].split("#")[0];

  const isPdf = cleanSrc.endsWith(".pdf");
  const isImage = IMAGE_EXTENSIONS.some((extension) =>
    cleanSrc.endsWith(extension)
  );

  const zoomIn = () => {
    setZoom((current) => Math.min(current + 0.25, 3));
  };

  const zoomOut = () => {
    setZoom((current) => Math.max(current - 0.25, 0.5));
  };

  const resetZoom = () => {
    setZoom(1);
  };

  if (isPdf) {
    return (
      <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-sm">
        <iframe
          src={`${src}#toolbar=1&navpanes=0&view=FitH`}
          title={title}
          className="h-[78vh] min-h-[650px] w-full"
        />
      </div>
    );
  }

  if (isImage) {
    return (
      <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-sm">
        <div className="flex items-center justify-end gap-2 border-b border-border px-4 py-3">
          <button
            type="button"
            onClick={zoomOut}
            aria-label="Zoom out"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-white text-lg font-semibold text-text transition hover:bg-gray-50"
          >
            −
          </button>

          <button
            type="button"
            onClick={resetZoom}
            className="rounded-lg border border-border bg-white px-3 py-2 text-sm font-medium text-text transition hover:bg-gray-50"
          >
            {Math.round(zoom * 100)}%
          </button>

          <button
            type="button"
            onClick={zoomIn}
            aria-label="Zoom in"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-white text-lg font-semibold text-text transition hover:bg-gray-50"
          >
            +
          </button>
        </div>

        <div className="max-h-[85vh] overflow-auto bg-gray-50 p-4 sm:p-6">
          <div
            className="mx-auto transition-transform duration-200"
            style={{
              width: `${zoom * 100}%`,
              minWidth: zoom > 1 ? "900px" : undefined,
            }}
          >
            <Image
              src={src}
              alt={title}
              width={1800}
              height={2400}
              sizes="100vw"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-border bg-surface p-10 text-center shadow-sm">
      <p className="text-text-secondary">
        Unsupported report file format.
      </p>
    </div>
  );
}