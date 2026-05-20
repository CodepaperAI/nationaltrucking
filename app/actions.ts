'use server';

import { Resend } from 'resend';
import { leadFormSchema } from '@/lib/lead';

type LeadState = {
  ok: boolean;
  message: string;
};

export async function submitLead(_: LeadState, formData: FormData): Promise<LeadState> {
  const parsed = leadFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    preferredClass: formData.get('preferredClass'),
    funding: formData.get('funding'),
    bestTime: formData.get('bestTime'),
    message: formData.get('message') || undefined,
    company: formData.get('company') || undefined
  });

  if (!parsed.success) {
    return {
      ok: false,
      message: parsed.error.errors[0]?.message || 'Please check the form and try again.'
    };
  }

  if (parsed.data.company) {
    return {
      ok: true,
      message: "We'll call you within one business day. Hablamos español!"
    };
  }

  const resendKey = process.env.RESEND_API_KEY;
  const leadTo = process.env.LEAD_TO_EMAIL;
  const notifyTo = process.env.CODEPAPER_NOTIFY_EMAIL;

  if (!resendKey || !leadTo) {
    return {
      ok: false,
      message: 'Lead email is not configured yet. Please call 510.455.6399 for immediate help.'
    };
  }

  const resend = new Resend(resendKey);
  const recipients = notifyTo ? [leadTo, notifyTo] : [leadTo];

  await resend.emails.send({
    from: 'National Truck Driving School <leads@resend.dev>',
    to: recipients,
    subject: `Free consultation request from ${parsed.data.name}`,
    text: [
      `Name: ${parsed.data.name}`,
      `Email: ${parsed.data.email}`,
      `Phone: ${parsed.data.phone}`,
      `Preferred class: ${parsed.data.preferredClass}`,
      `Funding: ${parsed.data.funding}`,
      `Best time: ${parsed.data.bestTime}`,
      `Message: ${parsed.data.message || 'None'}`
    ].join('\n')
  });

  return {
    ok: true,
    message: "We'll call you within one business day. Hablamos español!"
  };
}
