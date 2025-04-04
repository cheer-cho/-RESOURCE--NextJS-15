import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import { Navigation } from './components/navigation';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <header className='bg-slate-900 text-white p-4 text-center'>
            {/* <p>Welcome to Next.js 15</p> */}
            <Navigation />
          </header>
          {children}
          <footer className='bg-slate-900 text-white p-4 text-center'>
            <p className='text-sm'>
              © {new Date().getFullYear()} My Company. All rights reserved.
            </p>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
