import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import StyledComponentsRegistry from '../lib/registry';
import { ThemeRegistry } from '@/theme';
import Header from '@/components/Header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'David Pascual',
  description: 'Web Designer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StyledComponentsRegistry>
          <ThemeRegistry>
            <Header
              height={90}
              pages={[
                { item: 'Home', link: '/' },
                { item: 'Work', link: '/work' },
                { item: 'About', link: '/about' },
                { item: 'Contact', link: '/contact' },
              ]}
            />
            {children}
          </ThemeRegistry>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
