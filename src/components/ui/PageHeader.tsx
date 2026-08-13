import Link from "next/link";
import { theme } from "@/lib/theme";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs: { label: string; href: string }[];
  compact?: boolean;
  backgroundImage?: string;
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
  compact = false,
  backgroundImage,
}: PageHeaderProps) {
  const hasBackground = Boolean(backgroundImage);

  return (
    <div
      className={`relative w-full overflow-hidden border-b border-gray-200 ${
        compact ? "py-8 lg:py-10" : "py-16 lg:py-24"
      }`}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {
              backgroundColor: "#FAF8F5",
            }
      }
    >
      {hasBackground && (
        <div className="absolute inset-0 bg-black/45" />
      )}

      <div className={`${theme.layout.container} relative z-10`}>
        <nav className="mb-8">
          <ol
            className={`flex items-center space-x-2 text-sm font-medium ${
              hasBackground ? "text-white/80" : "text-[#6B7280]"
            }`}
          >
            <li>
              <Link
                href="/"
                className={`transition-colors ${
                  hasBackground
                    ? "hover:text-white"
                    : "hover:text-[#7A5A2B]"
                }`}
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
                  <span
                    className={
                      hasBackground
                        ? "text-white"
                        : "text-[#7A5A2B]"
                    }
                  >
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    href={crumb.href}
                    className={`transition-colors ${
                      hasBackground
                        ? "hover:text-white"
                        : "hover:text-[#7A5A2B]"
                    }`}
                  >
                    {crumb.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {eyebrow && (
          <p
            className={`mb-4 text-sm font-semibold uppercase tracking-[0.3em] ${
              hasBackground ? "text-white" : "text-primary"
            }`}
          >
            {eyebrow}
          </p>
        )}

        <h1
          className={
            compact
              ? `max-w-5xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
                  hasBackground ? "text-white" : "text-text"
                }`
              : `${theme.typography.h1} max-w-4xl ${
                  hasBackground ? "!text-white" : ""
                }`
          }
        >
          {title}
        </h1>

        {description && (
          <p
            className={`mt-6 max-w-3xl text-lg leading-8 ${
              hasBackground
                ? "text-white/85"
                : "text-text-secondary"
            }`}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}