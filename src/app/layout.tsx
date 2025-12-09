import type { Metadata } from 'next';
import './globals.css';
import { Inter, Roboto_Flex } from 'next/font/google';
import { cn } from '@/lib/utils';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import ContactStrip from '@/components/layout/contact-strip';

const fontHeadline = Inter({
  subsets: ['latin'],
  variable: '--font-headline',
});

const fontBody = Roboto_Flex({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Thorat Motors India - Modern Industrial',
  description: 'High-Performance Trailers & Modular Cabin Solutions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Roboto+Flex:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          fontHeadline.variable,
          fontBody.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <ContactStrip />
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
