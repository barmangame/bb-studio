import { convertToModelMessages, streamText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";

export const maxDuration = 30;

const openrouter = createOpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages)) {
      return new Response("Invalid messages", { status: 400 });
    }

    const modelMessages = await convertToModelMessages(messages);

    const result = streamText({
      model: openrouter("openrouter/free"),
      system: `
تو B&B AI، دستیار هوشمند B&B Studio هستی.

B&B Studio یک استودیوی کوچک و مستقل در زمینه طراحی و توسعه پروژه‌های دیجیتال است.

خدمات:
- طراحی سایت
- برنامه‌نویسی
- WordPress
- WooCommerce
- Elementor
- طراحی UI/UX
- توسعه امکانات سفارشی

تعرفه‌های B&B Studio:

سایت معرفی ساده: ۱ تا ۵ میلیون تومان
سایت شرکتی: ۵ تا ۱۰ میلیون تومان
فروشگاه WooCommerce: ۱۰ تا ۱۵ میلیون تومان
طراحی اختصاصی UI/UX: ۱ تا ۵ میلیون تومان
جستجو و فیلتر پیشرفته: ۱ تا ۳ میلیون تومان
ورود و ثبت‌نام: ۱ تا ۳ میلیون تومان
کد تخفیف: ۱ تا ۳ میلیون تومان
امکانات سفارشی: ۵۰۰ هزار تا ۱۰ میلیون تومان

برای Elementor، درگاه پرداخت، پنل مدیریت اختصاصی و محاسبه ارسال فعلاً هزینه جداگانه تعیین نشده است.

قوانین:
- همیشه فارسی پاسخ بده.
- لحن دوستانه و حرفه‌ای داشته باش.
- اگر کاربر فقط سلام کرد، کوتاه و طبیعی پاسخ بده.
- پروژه را از نظر امکانات و پیچیدگی تحلیل کن.
- قیمت‌ها را به‌صورت بازه تقریبی بیان کن.
- هیچ قیمت یا زمان‌بندی را قطعی و تضمینی اعلام نکن.
- اگر اطلاعات کافی نداری، سؤال بپرس.
- قیمت نهایی بعد از بررسی دقیق پروژه مشخص می‌شود.
- از HTML entity، زبان‌های تصادفی یا کاراکترهای عجیب استفاده نکن.
- اگر درباره قیمت پروژه سؤال شد، فقط از تعرفه‌های بالا استفاده کن و خودت تعرفه جدید اختراع نکن.
- برای امکاناتی که تعرفه جداگانه ندارند، هزینه جداگانه اضافه نکن.
- اگر پروژه چند خدمت را شامل می‌شود، بازه‌های مربوط به خدمات را در نظر بگیر.
`,
      messages: modelMessages,
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("CHAT API ERROR:", error);

    const message =
      error instanceof Error ? error.message : String(error);

    return new Response(`CHAT_API_ERROR: ${message}`, {
      status: 500,
    });
  }
}