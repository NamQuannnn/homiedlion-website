import type { Report } from "@/content/reports/types";
import { Link } from "@/i18n/routing";

type ReportCardProps = {
  report: Report;
  locale: string;
  readLabel: string;
};

export default function ReportCard({
  report,
  locale,
  readLabel,
}: ReportCardProps) {
  const formattedDate = new Intl.DateTimeFormat(
    locale === "vi" ? "vi-VN" : "en-GB",
    {
      day: "2-digit",
      month: locale === "vi" ? "2-digit" : "long",
      year: "numeric",
    }
  ).format(new Date(`${report.publishedAt}T00:00:00`));

  return (
    <article className="group flex min-h-[390px] flex-col rounded-3xl border border-border bg-surface p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-light">
        <svg
          viewBox="0 0 64 64"
          aria-hidden="true"
          className="h-10 w-10"
        >
          <path
            d="M18 8h20l10 10v38H18z"
            fill="white"
            stroke="currentColor"
            strokeWidth="3"
            className="text-primary"
          />
          <path
            d="M38 8v12h12"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-primary"
          />
          <path
            d="M24 31h18M24 39h18M24 47h12"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            className="text-primary"
          />
        </svg>
      </div>

      <h2 className="text-xl font-bold leading-snug text-text">
        {report.title}
      </h2>

      <time
        dateTime={report.publishedAt}
        className="mt-4 text-sm font-medium text-text-secondary"
      >
        {formattedDate}
      </time>

      <p className="mt-6 flex-grow text-sm leading-7 text-text-secondary">
        {report.summary}
      </p>

      <div className="mt-8 border-t border-border pt-5">
        <Link
          href={`/market-insights/${report.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
        >
          {readLabel}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}