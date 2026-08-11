import type { Metadata } from 'next';
import './globals.css';
import SiteFooter from '@/components/SiteFooter';
import PageBackground from '@/components/PageBackground';

export const metadata: Metadata = {
  title: 'Rafly - Software Engineer Portfolio',
  description: 'Software engineer focused on Next.js, Vue, Springboot, and Go building performant, accessible interfaces with clean architecture and thoughtful UX.',
  icons: {
    icon: '/handwave.png',
    shortcut: '/handwave.png',
    apple: '/handwave.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <PageBackground />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
