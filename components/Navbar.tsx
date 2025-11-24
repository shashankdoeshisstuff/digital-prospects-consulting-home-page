'use client';

import { useState } from 'react';
import { NavItem } from '@/types';

const navigation: NavItem[] = [
  {
    label: 'Software Team',
    href: '/software-team',
    children: [
      { label: 'Hire Developers', href: '/hire-developers' },
      { label: 'Team Structure', href: '/team-structure' },
      { label: 'Our Process', href: '/our-process' },
    ]
  },
  {
    label: 'Services',
    href: '/services',
  },
  {
    label: 'Technologies',
    href: '/technologies',
  },
  {
    label: 'Resources',
    href: '/resources',
  },
  {
    label: 'Company',
    href: '/company',
  },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {navigation.map((item) => (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => handleMouseEnter(item.label)}
          onMouseLeave={handleMouseLeave}
        >
          <button className="flex items-center text-black/80 hover:text-green-500 font-medium py-2 transition duration-300">
            {item.label}
            {item.children && (
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </button>

          {/* Dropdown Menu */}
          {item.children && activeDropdown === item.label && (
            <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg py-2 z-50 border border-gray-200">
              {item.children.map((child) => (
                <a
                  key={child.href}
                  href={child.href}
                  className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition duration-300"
                >
                  {child.label}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}