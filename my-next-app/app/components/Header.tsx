'use client';

import Image from 'next/image';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center space-x-2">
          <Image
            src="/Images/logo.png"
            alt="KaziLink logo"
            width={80}
            height={80}
            className="rounded"
          />
          <div>
            <p className="font-semibold text-gray-900">KaziLink</p>
            <p className="text-xs text-gray-500">Technical Documentation</p>
          </div>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t bg-white p-4">
          <p className="text-sm text-gray-500 text-center">Menu</p>
        </nav>
      )}
    </header>
  );
}