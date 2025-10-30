'use client';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import SidebarWrapper from './components/SidebarWrapper';
import Footer from './components/Footer';
import { SearchProvider } from './components/SearchContext';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SearchProvider>
          <Header />
          <div className="flex">
            <SidebarWrapper />
            <main className="flex-1 bg-gray-50 min-h-[calc(100vh-4rem)] p-6 lg:p-8">
              {children}
            </main>
          </div>
          <Footer />
        </SearchProvider>
      </body>
    </html>
  );
}