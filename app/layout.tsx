import type React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { FloatingWhatsApp } from '@/components/whatsapp-button';

export const metadata: Metadata = {
  title: {
    default: 'GritWit | A Thoughtful, Playful Learning Space for Children Ages 6–9',
    template: '%s | GritWit',
  },
  description:
    'Where thinking skills meet kind hearts. GritWit nurtures critical thinking, logical reasoning, comprehension, and problem solving in children aged 6–9 through educator-led interactive pods.',
  keywords: [
    'GritWit',
    'Thinking Skills for Kids',
    'Critical Thinking Children',
    'Logical Reasoning Kids 6-9',
    'Problem Solving for Children',
    'Witty Mascot GritWit',
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
    title: 'GritWit — Where Thinking Meets Kind Hearts',
    description: "Don't just teach children the right answer. Teach them how to think their way towards it. 20 sessions of playful discovery.",
    url: 'https://www.gritwit.com',
    siteName: 'GritWit',
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
