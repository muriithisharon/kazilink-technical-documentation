'use client';

import { useSearch } from './SearchContext';

export default function SidebarWrapper() {
  const { searchQuery } = useSearch();

  return (
    <aside>
      <p>Searching for: {searchQuery || 'nothing'}</p>
    </aside>
  );
}