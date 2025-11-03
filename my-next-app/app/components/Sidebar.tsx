"use client";

import {
  BookOpen,
  Zap,
  Layout,
  Database,
  Settings,
  HelpCircle,
  Beaker,
  ChevronRight,
  ChevronDown,
  Smartphone,
  Layers,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSearch } from "./SearchContext";

interface MenuItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  sub?: MenuItem[];
}

const menu: MenuItem[] = [
  { label: "Introduction", href: "#introduction", icon: <BookOpen className="h-5 w-5" /> },
  { label: "Who are our users?", href: "#users", icon: <Zap className="h-5 w-5" /> },
  {
    label: "System Overview",
    href: "#system-overview",
    icon: <Layout className="h-5 w-5" />,
    sub: [
      { label: "USSD Flow", href: "#ussd-flow", icon: <Smartphone className="h-4 w-4" /> },
      { label: "Architecture", href: "#architecture", icon: <Layers className="h-4 w-4" /> },
    ],
  },
  { label: "Installation Guide", href: "#installation", icon: <Database className="h-5 w-5" /> },
  { label: "Database Schema", href: "#database", icon: <Database className="h-5 w-5" /> },
  { label: "Testing", href: "#testing", icon: <Beaker className="h-5 w-5" /> },
  { label: "Support Maintenance", href: "#support", icon: <HelpCircle className="h-5 w-5" /> },
];

export default function Sidebar() {
  const { searchQuery } = useSearch();
  const [hash, setHash] = useState("");

  // Set initial hash and listen for changes ONLY on client after mount
  useEffect(() => {
    setHash(window.location.hash);
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const [open, setOpen] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!searchQuery) return;
    const newOpen: Record<string, boolean> = {};
    menu.forEach((item) => {
      if (
        item.sub?.some((subItem) =>
          subItem.label.toLowerCase().includes(searchQuery.toLowerCase())
        )
      ) {
        newOpen[item.label] = true;
      }
    });
    setOpen((prev) => ({ ...prev, ...newOpen }));
  }, [searchQuery]);

  const filteredMenu = menu
    .map((item) => {
      const matchesLabel = item.label.toLowerCase().includes(searchQuery?.toLowerCase() ?? "");
      const subMatches = item.sub?.filter((subItem) =>
        subItem.label.toLowerCase().includes(searchQuery?.toLowerCase() ?? "")
      );
      if (matchesLabel) return item;
      if (subMatches && subMatches.length > 0) return { ...item, sub: subMatches };
      return null;
    })
    .filter(Boolean) as MenuItem[];

  const toggle = (label: string) => {
    setOpen((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", href);
      setHash(href);
    }
    const parent = menu.find((m) => m.sub?.some((s) => s.href === href));
    if (parent) {
      setOpen((prev) => ({ ...prev, [parent.label]: true }));
    }
  };

  const isActive = (item: MenuItem): boolean => {
    if (hash === item.href) return true;
    if (item.sub) {
      return item.sub.some((sub) => sub.href === hash);
    }
    return false;
  };

  const renderItem = (item: MenuItem, depth = 0) => {
    const active = isActive(item);
    const hasSub = !!item.sub?.length;
    const isOpen = open[item.label];
    return (
      <div key={item.href}>
        <a
          href={item.href}
          onClick={(e) => scrollToSection(e, item.href)}
          className={`flex items-center gap-2 px-4 py-2 rounded-md cursor-pointer ${
            depth === 0 ? "font-medium text-base" : "text-sm ml-6"
          } ${active ? "bg-amber-100 text-amber-800" : "text-gray-700 hover:bg-gray-100"}`}
        >
          {item.icon}
          <span>{item.label}</span>
          {hasSub && (isOpen ? <ChevronDown className="ml-auto h-4 w-4" /> : <ChevronRight className="ml-auto h-4 w-4" />)}
        </a>
        {hasSub && isOpen && (
          <div className="mt-1">
            {item.sub!.map((subItem) => renderItem(subItem, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside className="hidden lg:block w-64 bg-white border-r sticky top-0 h-screen overflow-y-auto">
      <nav className="p-4 space-y-1">
        {filteredMenu.length === 0 ? (
          <p className="px-4 py-2 text-sm italic text-gray-500">No results found.</p>
        ) : (
          filteredMenu.map((item) => renderItem(item))
        )}
      </nav>
    </aside>
  );
}
