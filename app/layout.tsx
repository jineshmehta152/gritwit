import type React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { FloatingWhatsApp } from '@/components/whatsapp-button';

export const metadata: Metadata = {
  title: {
    default: 'GritWit | Premium Cognitive Enrichment for Children Ages 6–9',
    template: '%s | GritWit Cognitive Academy',
  },
  description:
    'Where thinking skills meet human values. GritWit nurtures critical thinking, logical reasoning, comprehension, and problem solving in children aged 6–9 through educator-led interactive pods.',
  keywords: [
    'GritWit',
    'Cognitive Enrichment for Kids',
    'Critical Thinking Children',
    'Logical Reasoning Kids 6-9',
    'Higher Order Thinking Skills',
    'Problem Solving for Children',
    'Cognitive Skills Academy',
    'Witty Mascot GritWit',
    'Bloom Taxonomy for Kids',
    'Parent Connect GritWit',
  ],
  metadataBase: new URL('https://www.gritwit.com'),
  alternates: {
    canonical: 'https://www.gritwit.com',
  },
  authors: [{ name: 'GritWit Educator Team', url: 'https://www.gritwit.com' }],
  creator: 'GritWit',
  publisher: 'GritWit',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'GritWit — Where Thinking Skills Meet Human Values',
    description: "Don't just teach children the right answer. Teach them how to think their way towards it. 20 sessions of cognitive discovery.",
    url: 'https://www.gritwit.com',
    siteName: 'GritWit Cognitive Academy',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-stone-50/60 text-stone-900 antialiased selection:bg-teal-200 selection:text-teal-950 min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
