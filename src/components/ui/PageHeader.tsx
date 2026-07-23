import Link from "next/link";
import { theme } from "@/lib/theme";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs: { label: string; href: string }[];
  compact?: boolean;
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
  compact = false,
}: PageHeaderProps) {
  return (
    <div
      className={`w-full border-b border-gray-200 bg-[#FAF8F5] ${
        compact ? "py-8 lg:py-10" : "py-16 lg:py-24"
      }`}
    >
      <div className={theme.layout.container}>
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm font-medium text-[#6B7280]">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-[#7A5A2B]"
              >
                Home
              </Link>
            </li>

            {breadcrumbs.map((crumb, index) => (
              <li
                key={index}
                className="flex items-center space-x-2"
              >
                <span>/</span>

                {index === breadcrumbs.length - 1 ? (
                  <span className="text-[#7A5A2B]">
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="transition-colors hover:text-[#7A5A2B]"
                  >
                    {crumb.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {eyebrow && (
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            {eyebrow}
          </p>
        )}

          <h1
          className={
            compact
              ? "max-w-5xl text-3xl font-bold leading-tight tracking-tight text-text sm:text-4xl lg:text-5xl"
              : `${theme.typography.h1} max-w-4xl`
          }
          >
          {title}
          </h1>

        {description && (
          <p className="mt-6 max-w-3xl text-lg leading-8 text-text-secondary">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}