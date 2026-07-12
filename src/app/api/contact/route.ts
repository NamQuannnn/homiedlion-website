import { NextResponse } from "next/server";

import {
  contactSchema,
  type ContactFormData,
} from "@/lib/contact-schema";
import { resend } from "@/lib/resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid form data.",
          errors: parsed.error.flatten(),
        },
        {
          status: 400,
        }
      );
    }

    const data: ContactFormData = parsed.data;

    // Honeypot chống bot
    if (data.website && data.website.trim() !== "") {
      return NextResponse.json(
        {
          success: true,
        },
        {
          status: 200,
        }
      );
    }

    const { data: emailData, error: emailError } =
      await resend.emails.send({
        from: "Homie D'Lion Website <website@homiedlion.com>",
        to: ["namquan.homiecashews@gmail.com"],
        replyTo: data.email,
        subject:
          data.subject?.trim() ||
          `New inquiry from ${data.name}`,

        html: `
          <div style="font-family:Arial,sans-serif;max-width:700px;margin:0 auto;padding:32px;border:1px solid #e5e7eb;border-radius:12px;background:#ffffff;color:#111827">

            <h2 style="margin:0;color:#111827">
              🌰 Homie D'Lion Group
            </h2>

            <p style="margin-top:8px;color:#6b7280">
              New website inquiry
            </p>

            <hr style="margin:24px 0;border:0;border-top:1px solid #e5e7eb" />

            <table style="width:100%;border-collapse:collapse">
              <tr>
                <td style="padding:8px 0;font-weight:bold;width:160px">
                  Full Name
                </td>
                <td style="padding:8px 0">${data.name}</td>
              </tr>

              <tr>
                <td style="padding:8px 0;font-weight:bold">
                  Company
                </td>
                <td style="padding:8px 0">${data.company}</td>
              </tr>

              <tr>
                <td style="padding:8px 0;font-weight:bold">
                  Country
                </td>
                <td style="padding:8px 0">${data.country || "-"}</td>
              </tr>

              <tr>
                <td style="padding:8px 0;font-weight:bold">
                  Phone
                </td>
                <td style="padding:8px 0">${data.phone || "-"}</td>
              </tr>

              <tr>
                <td style="padding:8px 0;font-weight:bold">
                  Email
                </td>
                <td style="padding:8px 0">${data.email}</td>
              </tr>

              <tr>
                <td style="padding:8px 0;font-weight:bold">
                  Subject
                </td>
                <td style="padding:8px 0">${data.subject || "-"}</td>
              </tr>
            </table>

            <hr style="margin:24px 0;border:0;border-top:1px solid #e5e7eb" />

            <h3 style="margin-bottom:12px">Message</h3>

            <div style="white-space:pre-wrap;background:#f9fafb;padding:16px;border-radius:8px;line-height:1.6">
              ${data.message}
            </div>

            <hr style="margin:24px 0;border:0;border-top:1px solid #e5e7eb" />

            <p style="margin:0;color:#9ca3af;font-size:13px">
              Sent from https://homiedlion.com
            </p>
          </div>
        `,
      });

    if (emailError) {
      console.error("Resend error:", emailError);

      return NextResponse.json(
        {
          success: false,
          message: "Failed to send email.",
        },
        {
          status: 500,
        }
      );
    }

    console.log("Email sent successfully:", emailData?.id);

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email.",
      },
      {
        status: 500,
      }
    );
  }
}