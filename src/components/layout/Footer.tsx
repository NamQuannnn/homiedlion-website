import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";
import { navigation } from "@/config/navigation";
import { site } from "@/config/site";
import { Link } from "@/i18n/routing";

const navigationKeys: Record<string, string> = {
  "/": "home",
  "/about": "about",
  "/products": "products",
  "/market-insights": "marketInsights",
  "/contact": "contact",
};

export default function Footer() {
  const tFooter = useTranslations("Footer");
  const tNavigation = useTranslations("Navigation");
  const tProducts = useTranslations("Products");
  const tSite = useTranslations("Site");

  const enabledNavItems = navigation.filter((item) => item.enabled);

  const productLinks = [
    {
      label: tProducts("rawCashewNuts.title"),
      href: "/products/raw-cashew-nuts",
    },
    {
      label: tProducts("cashewKernels.title"),
      href: "/products/cashew-kernels",
    },
    {
      label: tProducts("freightServices.title"),
      href: "/products/freight-services",
    },
  ];

  const getNavigationLabel = (href: string) => {
    const translationKey = navigationKeys[href];

    return translationKey ? tNavigation(translationKey) : href;
  };

  return (
    <footer className="mt-auto bg-text text-white">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-tight">
              {site.name}
            </Link>

            <p className="mt-3 text-sm text-white/75">
              Built with Trust and Effort
            </p>

            <p className="mt-5 max-w-xs text-sm leading-6 text-white/60">
              {tSite("description")}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              {tFooter("quickLinks")}
            </h3>

            <ul className="mt-5 space-y-3">
              {enabledNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 transition-colors hover:text-primary"
                  >
                    {getNavigationLabel(item.href)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              {tFooter("products")}
            </h3>

            <ul className="mt-5 space-y-3">
              {productLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              {tFooter("contact")}
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li>{site.location}</li>

              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-primary"
                >
                  {site.email}
                </a>
              </li>

              <li>
                <a
                  href={site.url}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  {site.domain}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-sm text-white/40">
          © {new Date().getFullYear()} {site.name}. {tFooter("rights")}
        </div>
      </Container>
    </footer>
  );
}