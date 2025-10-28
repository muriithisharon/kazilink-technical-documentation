'use client';

import { Suspense } from 'react';
import Sidebar from './Sidebar';

export default function SidebarWrapper() {
  return (
    <Suspense fallback={<div className="w-64 p-4 text-sm text-gray-500">Loading...</div>}>
      <Sidebar />
    </Suspense>
  );
}