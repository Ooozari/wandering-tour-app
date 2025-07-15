import '../globals.css';
import { Inter } from 'next/font/google';
import { HeaderPrimary, Footer } from '@/layout';

export const metadata = {
    title: 'Wandering Earl Tours',
    description: 'Explore private and group tours with our travel services',
};
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-LightGrey text-Black">
        <HeaderPrimary />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
