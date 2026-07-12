import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100),

  company: z
    .string()
    .trim()
    .min(2, "Please enter your company name.")
    .max(100),

  country: z
    .string()
    .trim()
    .max(100)
    .optional(),

  phone: z
    .string()
    .trim()
    .max(50)
    .optional(),

  email: z
    .email("Please enter a valid email address.")
    .trim(),

  subject: z
    .string()
    .trim()
    .max(150)
    .optional(),

  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(5000),

  // Honeypot chống bot
  website: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;