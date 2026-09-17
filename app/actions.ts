'use server';

import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';
import { saveProject } from '@/lib/projects';
import { revalidatePath } from 'next/cache';

export async function submitProject(formData: FormData) {
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const budget = formData.get('budget') as string;
  const timeline = formData.get('timeline') as string;
  const clientName = formData.get('clientName') as string;
  const clientEmail = formData.get('clientEmail') as string;
  const clientPhone = formData.get('clientPhone') as string;

  // اعتبارسنجی اولیه
  if (!title || !description || !clientName || !clientEmail) {
    return { success: false, error: 'لطفاً فیلدهای الزامی را پر کنید.' };
  }

  // بررسی با AI
  const { text } = await generateText({
    model: openai('gpt-4o-mini'),
    prompt: `پروژه زیر را بررسی کن. آیا معتبر و قابل قبول است؟ فقط با "APPROVED" یا "REJECTED" و یک توضیح کوتاه پاسخ بده.

عنوان: ${title}
توضیحات: ${description}
بودجه: ${budget || 'نامشخص'}
زمان: ${timeline || 'نامشخص'}
نام مشتری: ${clientName}

معیارها:
- توضیحات باید حداقل ۲۰ کاراکتر باشد
- محتوا نباید اسپم یا توهین‌آمیز باشد
- درخواست باید واقع‌بینانه باشد`,
  });

  const isApproved = text.includes('APPROVED');

  // ذخیره در فایل JSON
  await saveProject({
    id: crypto.randomUUID(),
    title,
    description,
    budget: budget || undefined,
    timeline: timeline || undefined,
    clientName,
    clientEmail,
    clientPhone: clientPhone || undefined,
    status: isApproved ? 'approved' : 'rejected',
    aiFeedback: text,
    createdAt: new Date().toISOString(),
  });

  revalidatePath('/projects');

  if (isApproved) {
    return { success: true, message: 'پروژه با موفقیت ثبت شد! ✅' };
  } else {
    return { success: false, error: text };
  }
}