import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export default function About() {
  const features = [
    "Premium Products",
    "Reliable Supply Chain",
    "Global Trading Experience",
    "Market Intelligence",
  ];

  return (
    <Section className="bg-white">
      <Container>
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-24">
          <div className="w-full lg:w-1/2">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-md sm:aspect-square lg:aspect-[4/5] lg:max-w-none">
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-3xl border border-gray-100 bg-[#FAF8F5] shadow-sm">
                <span className="text-base leading-7 text-gray-600">
                  [Image Placeholder]
                </span>
              </div>
            </div>
          </div>

          <div className="w-full space-y-8 text-center lg:w-1/2 lg:text-left">
            <Heading
              eyebrow="ABOUT US"
              title="Trusted Partner in Global Cashew Trade"
              center={false}
            />

            <div className="space-y-6">
              <p className="text-base leading-7 text-gray-600">
                Homie D&apos;Lion Group is committed to providing premium Raw
                Cashew Nuts, Cashew Kernels, and reliable logistics solutions to
                customers worldwide.
              </p>

              <p className="text-base leading-7 text-gray-600">
                Our focus is transparency, long-term partnerships, and market
                intelligence that helps clients make better business decisions.
              </p>
            </div>

            <ul className="mx-auto inline-block w-full max-w-sm space-y-4 text-left lg:mx-0">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center space-x-3 text-[#2C2C2C]"
                >
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-[#7A5A2B]/20 bg-[#FAF8F5] text-sm text-[#7A5A2B]">
                    ✔
                  </span>
                  <span className="text-[1.05rem] font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex justify-center pt-6 lg:justify-start">
              <Button href="/about">Learn More</Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}