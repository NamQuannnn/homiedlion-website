import { useTranslations } from "next-intl";
import AppIcon from "@/components/ui/AppIcon";
import ContactForm from "@/components/contact/ContactForm.tsx";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export default function Contact() {
  const t = useTranslations("Contact");

  const contactItems = [
    {
      label: t("company"),
      value: "Homie D'Lion Group",
      icon: "company" as const,
    },
    {
        label: t("address"),
        value: t("addressValue"),
        href: "https://maps.app.goo.gl/JTAxcFNaNcYVeAbR6",
        external: true,
        icon: "location" as const,
    },
    {
      label: t("email"),
      value: "sales.homiecashews@gmail.com",
      href: "mailto:sales.homiecashews@gmail.com",
      icon: "email" as const,
    },
    {
      label: t("phone"),
      value: "+84 933 220 299",
      href: "tel:+84933220299",
      icon: "phone" as const,
    },
    {
      label: t("website"),
      value: "homiedlion.com",
      href: "https://homiedlion.com",
      icon: "website" as const,
    },
  ];

  return (
    <>
      <Section className="relative overflow-hidden bg-background">

        <Container>

          <Heading
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
          />

          <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">

            {/* LEFT */}

            <Card className="p-10">

              <h3 className="text-3xl font-bold text-text">
                {t("getInTouch")}
              </h3>

              <p className="mt-3 text-text-secondary leading-7">
                We'd love to hear from you. Whether you're looking
                for Raw Cashew Nuts, Cashew Kernels, Logistics
                services or Market Reports, our team is ready.
              </p>

              <div className="mt-10 space-y-8">

                {contactItems.map((item) => (

                  <div
                    key={item.label}
                    className="flex items-start gap-5"
                  >
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-primary-light text-primary">
                      <AppIcon name={item.icon} className="h-7 w-7" />
                    </div>

                    <div>

                      <p className="font-semibold text-text">
                        {item.label}
                      </p>

                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noopener noreferrer" : undefined}
                          className="mt-2 block leading-7 text-text-secondary transition hover:text-primary"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-2 leading-7 text-text-secondary">
                          {item.value}
                        </p>
                      )}

                    </div>
                  </div>

                ))}

              </div>

            </Card>

            {/* RIGHT */}

            <Card className="p-10">

              <ContactForm />

            </Card>

          </div>

        </Container>

      </Section>

      {/* MAP */}

      <Section className="bg-surface">

        <Container>

          <div className="overflow-hidden rounded-3xl border border-border">

            <iframe
              title="Homie D'Lion Group"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d361.4792255209833!2d106.72674184701107!3d10.825311365659438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529006955b3d1%3A0x2e312baf6bf4794e!2sC%C3%B4ng%20ty%20TNHH%20Homie%20D&#39;Lion%20Group!5e1!3m2!1sen!2s!4v1784879295501!5m2!1sen!2s"
              className="h-[420px] w-full border-0"
              loading="lazy"
            />

          </div>

        </Container>

      </Section>

      {/* CTA */}

      <Section className="bg-text">

        <Container>

          <div className="mx-auto max-w-4xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">
              HOMIE D'LION GROUP
            </p>

            <h2 className="mt-6 text-5xl font-bold text-white">
              Built with Trust and Effort
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Building long-term partnerships through trust,
              transparency and continuous effort.
            </p>

          </div>

        </Container>

      </Section>
    </>
  );
}