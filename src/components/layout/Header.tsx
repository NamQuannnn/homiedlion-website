import { Link } from "@/i18n/routing";
import Container from "@/components/ui/Container";
import { navigation } from "@/config/navigation";
import { site } from "@/config/site";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const enabledNavItems = navigation.filter((item) => item.enabled);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-[#FAF8F5]/95 backdrop-blur">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-shrink-0 items-center">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-[#7A5A2B]"
            >
              {site.name}
            </Link>
          </div>

          <div className="hidden items-center space-x-8 md:flex">
            <nav className="flex space-x-8">
              {enabledNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-[#6B7280] transition-colors hover:text-[#7A5A2B]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="h-5 border-l border-gray-300" />

            <LanguageSwitcher />
          </div>
        </div>
      </Container>
    </header>
  );
}