import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("CONTACT REQUEST:", body);
    console.log(
      "RESEND KEY EXISTS:",
      Boolean(process.env.RESEND_API_KEY)
    );

    const {
      name,
      email,
      projectType,
      budget,
      description,
    } = body;

    if (!name || !email || !description) {
      return Response.json(
        {
          error: "لطفاً اطلاعات موردنیاز را کامل کنید.",
        },
        { status: 400 }
      );
    }

    const result = await resend.emails.send({
      from: "B&B Studio <onboarding@resend.dev>",
      to: ["barman.bolhasani@gmail.com"],
      replyTo: email,
      subject: `درخواست پروژه جدید — ${projectType || "پروژه جدید"}`,
      html: `
        <div dir="rtl" style="font-family:Arial,sans-serif;line-height:2">
          <h2>درخواست پروژه جدید از B&B Studio</h2>
          <p><strong>نام:</strong> ${name}</p>
          <p><strong>ایمیل:</strong> ${email}</p>
          <p><strong>نوع پروژه:</strong> ${projectType || "مشخص نشده"}</p>
          <p><strong>بودجه:</strong> ${budget || "مشخص نشده"}</p>
          <hr />
          <h3>توضیحات پروژه</h3>
          <p style="white-space:pre-wrap">${description}</p>
        </div>
      `,
    });

    console.log("RESEND RESULT:", result);

    if (result.error) {
      return Response.json(
        {
          error: result.error.message,
          details: result.error,
        },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      id: result.data?.id,
    });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return Response.json(
      {
        error:
          error instanceof Error
            ? error.message
            : String(error),
      },
      { status: 500 }
    );
  }
}