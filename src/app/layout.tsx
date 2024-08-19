import type { Metadata } from 'next';
import { Judson, Libre_Franklin } from 'next/font/google';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './globals.css';

const libre_franklin = Libre_Franklin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre_franklin',
});
const judson = Judson({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-judson',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Advertise with Learn Quran',
  description: 'Advertise with Learn Quran',
  icons: '/logo-lq.png',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-lq.png" type="image/png" sizes="32x32" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>
      <body className={libre_franklin.variable + ' ' + judson.variable}>{children}</body>
    </html>
  );
}
