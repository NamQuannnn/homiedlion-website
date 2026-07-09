import Link from 'next/link';
import { theme } from '@/lib/theme';

interface PageHeaderProps {
  title: string;
  breadcrumbs: { label: string; href: string }[];
}

export default function PageHeader({ title, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="bg-[#FAF8F5] border-b border-gray-200 py-12 lg:py-16 w-full">
      <div className={theme.layout.container}>
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm font-medium text-[#6B7280]">
            <li>
              <Link href="/" className="hover:text-[#7A5A2B] transition-colors">Home</Link>
            </li>
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span>/</span>
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-[#7A5A2B]">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-[#7A5A2B] transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className={theme.typography.h1}>{title}</h1>
      </div>
    </div>
  );
}