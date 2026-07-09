import Link from 'next/link';
import { theme } from '@/lib/theme';

export default function About() {
  const features = [
    'Premium Products',
    'Reliable Supply Chain',
    'Global Trading Experience',
    'Market Intelligence',
  ];

  return (
    <section className={`bg-white ${theme.layout.section}`}>
      <div className={theme.layout.container}>
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/3] sm:aspect-square lg:aspect-[4/5] w-full mx-auto max-w-md lg:max-w-none">
              <div className="absolute inset-0 bg-[#FAF8F5] rounded-3xl overflow-hidden border border-gray-100 shadow-sm flex items-center justify-center">
                <span className={theme.typography.bodyText}>
                  [Image Placeholder]
                </span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <span className={theme.typography.sectionSubtitle}>
                ABOUT US
              </span>
              <h2 className={theme.typography.h2}>
                Trusted Partner in Global Cashew Trade
              </h2>
            </div>

            <div className="space-y-6">
              <p className={theme.typography.bodyText}>
                Homie D'Lion Group is committed to providing premium Raw Cashew Nuts, Cashew Kernels, and reliable logistics solutions to customers worldwide.
              </p>
              <p className={theme.typography.bodyText}>
                Our focus is transparency, long-term partnerships, and market intelligence that helps clients make better business decisions.
              </p>
            </div>

            <div className="pt-2">
              <ul className="space-y-4 inline-block text-left w-full max-w-sm mx-auto lg:mx-0">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3 text-[#2C2C2C]">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#FAF8F5] text-[#7A5A2B] text-sm border border-[#7A5A2B]/20">
                      ✔
                    </span>
                    <span className="font-medium text-[1.05rem]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 flex justify-center lg:justify-start">
              <Link href="/about" className={theme.buttons.primary}>
                Learn More
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}