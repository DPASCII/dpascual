import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import StyledComponentsRegistry from '../lib/registry';
import { ThemeRegistry } from '@/theme';
import Header from '@/components/header';
import Footer from '@/components/footer';
import SocialsComponent from '@/components/footer/components/socials-component';

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
        <div className='site'>
          <StyledComponentsRegistry>
            <ThemeRegistry>
              <Header
                height={60}
                pages={[
                  { item: 'Home', link: '/' },
                  // { item: 'Work', link: '/work' },
                  // { item: 'About', link: '/about' },
                  { item: 'Contact', link: 'mailto:davidcpascual@gmail.com' },
                ]}
              />
              {children}
              <Footer
                contents={[
                  {
                    title: 'You can reach me at',
                    itemlist: [
                      {
                        item: 'Email',
                        subitem: 'davidcpascual@gmail.com',
                        link: 'mailto:davidcpascual@gmail.com',
                      },
                      {
                        item: 'Viber/WhatsApp',
                        subitem: '+63917 876 1608',
                      },
                    ],
                  },
                ]}
                socialsComponent={
                  <SocialsComponent
                    socialsurl={[
                      'https://github.com/DPASCII',
                      'https://www.linkedin.com/in/davidpascual94/',
                    ]}
                  />
                }
                mailTo='davidcpascual@gmail.com'
              />
            </ThemeRegistry>
          </StyledComponentsRegistry>
        </div>
      </body>
    </html>
  );
}
