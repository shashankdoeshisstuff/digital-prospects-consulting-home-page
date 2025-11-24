'use client';

import { useState } from 'react';
import { NavItem } from '@/types';
import { ArrowUpRight } from 'lucide-react';

const navigation: NavItem[] = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Dedicated Development', href: '/services/dedicated' },
      { label: 'Staff Augmentation', href: '/services/staff-augmentation' },
      { label: 'Software Development', href: '/services/software-development' },
      { label: 'Development Center', href: '/services/development-center' },
    ]
  },
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
    label: 'Technologies',
    href: '/technologies',
    children: [
      { label: 'Backend Development', href: '/technologies/backend' },
      { label: 'Frontend Development', href: '/technologies/frontend' },
      { label: 'Mobile Development', href: '/technologies/mobile' },
      { label: 'DevOps & Cloud', href: '/technologies/devops' },
    ]
  },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Blog', href: '/blog' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Whitepapers', href: '/whitepapers' },
    ]
  },
  {
    label: 'Company',
    href: '/company',
    children: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Story', href: '/our-story' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact Us', href: '/contact' },
    ]
  },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [openSubmenus, setOpenSubmenus] = useState<Set<string>>(new Set());

  const toggleSubmenu = (label: string) => {
    const newOpenSubmenus = new Set(openSubmenus);
    if (newOpenSubmenus.has(label)) {
      newOpenSubmenus.delete(label);
    } else {
      newOpenSubmenus.add(label);
    }
    setOpenSubmenus(newOpenSubmenus);
  };

  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto">
      <div className="container mx-auto px-4 py-6">
        <nav className="space-y-4">
          {navigation.map((item) => (
            <div key={item.label}>
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <a
                  href={item.href}
                  className="text-lg font-medium text-gray-700 hover:text-green-600"
                  onClick={onClose}
                >
                  {item.label}
                </a>
                {item.children && (
                  <button
                    onClick={() => toggleSubmenu(item.label)}
                    className="p-1"
                  >
                    <svg
                      className={`w-5 h-5 transition-transform ${openSubmenus.has(item.label) ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Mobile Submenu */}
              {item.children && openSubmenus.has(item.label) && (
                <div className="ml-4 mt-2 space-y-2 pb-3">
                  {item.children.map((child) => (
                    <a
                      key={child.href}
                      href={child.href}
                      className="block py-2 text-gray-600 hover:text-green-600 transition duration-300"
                      onClick={onClose}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile CTA Button */}
          <div className="pt-6">
            <button
              className="flex gap-2 items-center justify-center w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
              onClick={onClose}
            >
              Get In Touch
              <ArrowUpRight size={20} />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}