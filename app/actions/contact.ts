"use server";

import { Resend } from "resend";

type ContactData = {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  description: string;
};

export async function sendContactEmail(data: ContactData) {
  try {
    if (!data.name || !data.email || !data.description) {
      return {
        success: false,
        error: "لطفاً اطلاعات موردنیاز را کامل کنید.",
      };
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data: result, error } = await resend.emails.send({
      from: "B&B Studio <onboarding@resend.dev>",
      to: ["barman.bolhasani@gmail.com"],
      replyTo: data.email,
      subject: `درخواست پروژه جدید — ${data.projectType || "پروژه جدید"}`,
      html: `
        <div dir="rtl" style="font-family:Arial,sans-serif;line-height:2;color:#222">
          <h2>B&B Studio — درخواست پروژه جدید</h2>
          <p><strong>نام:</strong> ${data.name}</p>
          <p><strong>ایمیل:</strong> ${data.email}</p>
          <p><strong>نوع پروژه:</strong> ${data.projectType || "مشخص نشده"}</p>
          <p><strong>بودجه:</strong> ${data.budget || "مشخص نشده"}</p>
          <hr />
          <h3>توضیحات پروژه</h3>
          <p style="white-space:pre-wrap">${data.description}</p>
        </div>
      `,
    });

    if (error) {
      console.error("RESEND ERROR:", error);

      return {
        success: false,
        error: error.message,
      };
    }

    console.log("EMAIL SENT:", result?.id);

    return {
      success: true,
    };
  } catch (error) {
    console.error("CONTACT ACTION ERROR:", error);

    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "خطای ناشناخته",
    };
  }
}