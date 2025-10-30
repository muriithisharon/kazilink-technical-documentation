'use client';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import SidebarWrapper from './components/SidebarWrapper';
import Footer from './components/Footer';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });



export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [searchQuery, setSearchQuery] = useState(''); 

  return (
    <html lang="en">
      <body className={inter.className}>
       
        <Header onSearch={setSearchQuery} />
        <div className="flex">
          <SidebarWrapper searchQuery={searchQuery} />
          <main className="flex-1 bg-gray-50 min-h-[calc(100vh-4rem)] p-6 lg:p-8">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}