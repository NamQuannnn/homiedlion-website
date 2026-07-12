import Image from "next/image";

import type { ImpactMetadata } from "@/lib/our-impact";
import { Link } from "@/i18n/routing";

type ImpactCardProps = {
  story: ImpactMetadata;
  locale: string;
  readLabel: string;
};

export default function ImpactCard({
  story,
  locale,
  readLabel,
}: ImpactCardProps) {
  const formattedDate = new Intl.DateTimeFormat(
    locale === "vi" ? "vi-VN" : "en-GB",
    {
      day: "2-digit",
      month: locale === "vi" ? "2-digit" : "long",
      year: "numeric",
    }
  ).format(new Date(`${story.publishedAt}T00:00:00`));

  return (
    <article className="group overflow-hidden rounded-3xl border border-border bg-surface shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link
        href={`/our-impact/${story.slug}`}
        className="block"
        aria-label={`${readLabel}: ${story.title}`}
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
          <Image
            src={story.coverImage}
            alt={story.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="p-7">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-text-secondary">
          <time dateTime={story.publishedAt}>{formattedDate}</time>

          <span aria-hidden="true">•</span>

          <span>{story.location}</span>
        </div>

        <h2 className="mt-4 text-2xl font-bold leading-snug text-text">
          <Link
            href={`/our-impact/${story.slug}`}
            className="transition-colors hover:text-primary"
          >
            {story.title}
          </Link>
        </h2>

        <p className="mt-4 line-clamp-3 text-base leading-7 text-text-secondary">
          {story.summary}
        </p>

        <div className="mt-7 border-t border-border pt-5">
          <Link
            href={`/our-impact/${story.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary-hover"
          >
            {readLabel}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}