"use client";

import { Montserrat } from 'next/font/google';
import AboutUs from '@/components/about-us';
import ContactUs from '@/components/contact-us';
import Features from '@/components/features';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Services from '@/components/services';
import WorkProcess from '@/components/work-process';

// Montserrat font with thin, regular, semi-bold, and bold weights
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'], // Thin, Regular, Semi-Bold, Bold
  display: 'swap',
});

export default function App() {
  return (
    <div className={`${montserrat.className} min-h-screen`}>
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <WorkProcess />
      <Features />
      <ContactUs />
      <Footer />
    </div>
  );
}
