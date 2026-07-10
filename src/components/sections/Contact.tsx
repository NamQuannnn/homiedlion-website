import { useTranslations } from "next-intl";

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

  const inputClassName =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-text outline-none transition-colors placeholder:text-text-secondary focus:border-primary focus:bg-surface focus:ring-2 focus:ring-primary/20";

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
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-text"
                  >
                    {t("fullName")}
                  </label>

                  <input
                    type="text"
                    id="name"
                    className={inputClassName}
                    placeholder={t("namePlaceholder")}
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-text"
                  >
                    {t("companyField")}
                  </label>

                  <input
                    type="text"
                    id="company"
                    className={inputClassName}
                    placeholder={t("companyPlaceholder")}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text"
                >
                  {t("emailField")}
                </label>

                <input
                  type="email"
                  id="email"
                  className={inputClassName}
                  placeholder={t("emailPlaceholder")}
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text"
                >
                  {t("message")}
                </label>

                <textarea
                  id="message"
                  rows={4}
                  className={`${inputClassName} resize-none`}
                  placeholder={t("messagePlaceholder")}
                />
              </div>

              <button
                type="button"
                className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                {t("sendInquiry")}
              </button>
            </form>
          </Card>
        </div>
      </Container>
    </Section>
  );
}