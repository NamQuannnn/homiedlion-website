import { useTranslations } from "next-intl";

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
      icon: "🏢",
    },
    {
      label: t("address"),
      value:
        "11 Street No. 1, Quarter 56, Hiep Binh Ward, Ho Chi Minh City, Vietnam",
      icon: "📍",
    },
    {
      label: t("email"),
      value: "sales.homiecashews@gmail.com",
      icon: "✉️",
    },
    {
      label: t("website"),
      value: "homiedlion.com",
      icon: "🌐",
    },
  ];

  return (
    <Section className="bg-background">
      <Container>
        <Heading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <Card>
            <h3 className="mb-8 text-2xl font-bold text-text">
              {t("getInTouch")}
            </h3>

            <div className="space-y-8">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-start space-x-4">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-primary-light text-3xl">
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-lg font-medium text-text">
                      {item.label}
                    </p>

                    <p className="mt-1 text-base leading-7 text-text-secondary">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <ContactForm />
          </Card>
        </div>
      </Container>
    </Section>
  );
}