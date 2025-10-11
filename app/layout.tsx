import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Asynqly | DigitalPro - Transform Your Digital Presence',
  description:
    'Asynqly helps you create stunning websites, powerful mobile apps, and data-driven marketing campaigns that drive measurable business growth.',
  keywords: [
    'Asynqly',
    'DigitalPro',
    'web development',
    'mobile apps',
    'digital marketing',
    'SEO',
    'UI UX design',
  ],
  authors: [{ name: 'Asynqly' }],
  openGraph: {
    title: 'Asynqly | DigitalPro - Transform Your Digital Presence',
    description:
      'Build your digital success with Asynqly — experts in websites, mobile apps, and marketing.',
    url: 'https://www.asynqly.com',
    siteName: 'Asynqly',
    images: [
      {
        url: '/logos/asynqly-logo-blue.png', // ✅ replace with your logo path
        width: 1200,
        height: 630,
        alt: 'Asynqly Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asynqly | DigitalPro - Transform Your Digital Presence',
    description:
      'Transform your online presence with Asynqly — from web and app development to data-driven marketing.',
    images: ['/logos/asynqly-logo-blue.png'], // ✅ replace accordingly
    creator: '@asynqly',
  },
  icons: {
    icon: '/logos/asynqly-logo-blue.png', // ✅ add your favicon here
  },
  metadataBase: new URL('https://www.asynqly.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Favicon */}
        <link rel="icon" href="/logos/asynqly-logo-blue.png" />

        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://www.asynqly.com" />

        {/* ✅ Extra SEO meta */}
        <meta
          name="google-site-verification"
          content="YOUR_GOOGLE_VERIFICATION_CODE"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
