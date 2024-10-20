import { EmailTemplate } from '../../../components/email-template/email-template';
import { Resend } from 'resend';
import * as React from 'react';
import envConfig from '@/lib/env.config';

const resend = new Resend(`${envConfig.resendApiKey}`)

export async function POST(req: Request) {
  const body = await req.json()
  const sendEmailTo = process.env.NEXT_PUBLIC_SEND_EMAIL_TO?.split(',') || [];
  
  try {
    const { data, error } = await resend.emails.send({
      from: 'Learn Quran Info <no-reply@learn-quran.co>',
      to: sendEmailTo,
      subject: "New Learn Quran Advertising Client",
      react: EmailTemplate({ fullname: body.fullname, email: body.email, businessEntityName:body.businessEntityName, budget:body.budget, date:body.date}) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}