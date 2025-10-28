import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import SidebarWrapper from './components/SidebarWrapper';


import Footer from './components/Footer'; 

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KaziLink Technical Documentation',
  description: 'USSD-based labor coordination platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="flex">
     <SidebarWrapper />
          <main className="flex-1 bg-gray-50 min-h-[calc(100vh-4rem)]">
            {children}
          </main>
        </div>

        <Footer />
      </body>
    </html>
  );
}