"use client";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  contactSchema,
  type ContactFormData,
} from "@/lib/contact-schema";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("Contact");

  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  
    defaultValues: {
      name: "",
      company: "",
      country: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
      website: "",
    },
  });

  const inputClassName =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-text outline-none transition-colors placeholder:text-text-secondary focus:border-primary focus:bg-surface focus:ring-2 focus:ring-primary/20";

  const errorClassName =
    "mt-1 text-sm text-red-600";

  const onSubmit = async (data: ContactFormData) => {
    setSuccessMessage("");
    setErrorMessage("");
    setIsSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Failed to send inquiry."
        );
      }

      reset();

      setSuccessMessage(t("success"));
    } catch (error) {
        setErrorMessage(
            error instanceof Error
              ? error.message
              : t("error")
          );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      {/* Honeypot */}
      <input
        disabled={isSending}
        type="text"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        {...register("website")}
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-text"
          >
            {t("name")} *
          </label>

          <input
            disabled={isSending}
            id="name"
            className={inputClassName}
            placeholder="John Smith"
            {...register("name")}
          />

          {errors.name && (
            <p className={errorClassName}>
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="company"
            className="block text-sm font-medium text-text"
          >
            {t("companyField")} *
          </label>

          <input
            disabled={isSending}
            id="company"
            className={inputClassName}
            placeholder="ABC Trading"
            {...register("company")}
          />

          {errors.company && (
            <p className={errorClassName}>
              {errors.company.message}
            </p>
          )}
        </div>

      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

        <div className="space-y-2">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-text"
          >
            {t("country")}
          </label>

          <input
            disabled={isSending}
            id="country"
            className={inputClassName}
            placeholder="Vietnam"
            {...register("country")}
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-text"
          >
            {t("phone")}
          </label>

          <input
            disabled={isSending}
            id="phone"
            className={inputClassName}
            placeholder="+84..."
            {...register("phone")}
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

    disabled={isSending}
          id="email"
          type="email"
          className={inputClassName}
          placeholder="you@company.com"
          {...register("email")}
        />

        {errors.email && (
          <p className={errorClassName}>
            {errors.email.message}
          </p>
        )}

      </div>
      <div className="space-y-2">

<label
  htmlFor="subject"
  className="block text-sm font-medium text-text"
>
{t("subject")}
</label>

<input
  disabled={isSending}
  id="subject"
  className={inputClassName}
  placeholder="Raw Cashew Nuts Inquiry"
  {...register("subject")}
/>

</div>

<div className="space-y-2">

<label
  htmlFor="message"
  className="block text-sm font-medium text-text"
>
{t("message")} *
</label>

<textarea
  disabled={isSending}
  id="message"
  rows={6}
  className={`${inputClassName} resize-none`}
  placeholder="Tell us how we can help you..."
  {...register("message")}
/>

{errors.message && (
  <p className={errorClassName}>
    {errors.message.message}
  </p>
)}

</div>

{successMessage && (
<div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
  {successMessage}
</div>
)}

{errorMessage && (
<div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
  {errorMessage}
</div>
)}

<button
type="submit"
disabled={isSending}
className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60"
>
{isSending ? t("sending") : t("sendInquiry")}
</button>

</form>
);
}