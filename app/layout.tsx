// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Asynqly | Web & Mobile App Development Agency | DigitalPro',
  description:
    'Asynqly builds stunning websites, mobile applications, and digital marketing campaigns that drive measurable business growth.',
  keywords: [
    'Asynqly',
    'web development',
    'mobile app development',
    'digital marketing',
    'SEO',
    'UI UX design',
  ],
  authors: [{ name: 'Asynqly' }],
  metadataBase: new URL('https://www.asynqly.com'),
  alternates: {
    canonical: 'https://www.asynqly.com',
  },
  openGraph: {
    title: 'Asynqly | Web & Mobile App Development Agency | DigitalPro',
    description:
      'Build your digital success with Asynqly — experts in websites, mobile apps, and marketing.',
    url: 'https://www.asynqly.com',
    siteName: 'Asynqly',
    images: [
      {
        url: 'https://www.asynqly.com/logos/asynqly-logo-blue.png',
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
    title: 'Asynqly | Web & Mobile App Development Agency | DigitalPro',
    description:
      'Transform your online presence with Asynqly — from web and app development to data-driven marketing.',
    images: ['https://www.asynqly.com/logos/asynqly-logo-blue.png'],
    creator: '@asynqly',
  },
  icons: {
    icon: '/logos/asynqly-logo-blue.png', // favicon can be relative
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* viewport & robots (explicit for clarity) */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        {/* Google verification: replace with your real code */}
        <meta
          name="google-site-verification"
          content="YOUR_GOOGLE_VERIFICATION_CODE"
        />
      </head>
      <body className={inter.className}>
        {/* Organization structured data for rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Asynqly",
              url: "https://www.asynqly.com",
              logo: "https://www.asynqly.com/logos/asynqly-logo-blue.png",
              sameAs: [
                "https://www.facebook.com/asynqly",
                "https://www.instagram.com/asynqly",
                "https://www.linkedin.com/company/asynqly"
              ],
              description:
                "Asynqly builds websites, mobile apps, and digital marketing campaigns to help businesses grow online."
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
