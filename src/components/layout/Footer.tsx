import { Link } from "@/i18n/routing";

import Container from "@/components/ui/Container";
import { navigation } from "@/config/navigation";
import { site } from "@/config/site";

export default function Footer() {
  const enabledNavItems = navigation.filter((item) => item.enabled);

  const productLinks = [
    {
      label: "Raw Cashew Nuts",
      href: "/products/raw-cashew-nuts",
    },
    {
      label: "Cashew Kernels",
      href: "/products/cashew-kernels",
    },
    {
      label: "Freight Services",
      href: "/products/freight-services",
    },
  ];

  return (
    <footer className="mt-auto bg-[#2C2C2C] text-white">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-tight">
              {site.name}
            </Link>

            <p className="mt-3 text-sm text-gray-300">{site.tagline}</p>

            <p className="mt-5 max-w-xs text-sm leading-6 text-gray-400">
              {site.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-300">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {enabledNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-300">
              Products
            </h3>

            <ul className="mt-5 space-y-3">
              {productLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-300">
              Contact
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              <li>{site.location}</li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition hover:text-white"
                >
                  {site.email}
                </a>
              </li>
              <li>{site.domain}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}