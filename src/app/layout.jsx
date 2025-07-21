'use client';

import '../globals.css';
import { Inter } from 'next/font/google';
import { HeaderPrimary, TransparentHeader, Footer } from '@/layout';
import { usePathname } from 'next/navigation';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <html lang="en" className={inter.className}>
      <body>
        {isHome ? <TransparentHeader /> : <HeaderPrimary />}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

