import { EmailTemplate } from '../../../components/email-template/email-template';
import { Resend } from 'resend';
import * as React from 'react';

// const resend = new Resend('re_Gsb8r1gW_7dxnUsyZczNLwwY8dzFbDm9y');
const resend = new Resend('re_72SrG6X2_8vfPVP83MauQGHPLafXqDG6a')

export async function POST(req: Request) {
  const body = await req.json()
  try {
    
    const { data, error } = await resend.emails.send({
      from: 'Admin Learn Quran <onboarding@resend.dev>',
      to: ['admin@learn-quran.co'],
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