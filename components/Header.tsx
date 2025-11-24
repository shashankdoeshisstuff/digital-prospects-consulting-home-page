'use client';

import { useState } from 'react';
import Navbar from './Navbar';
import MobileMenu from './MobileMenu';
import { ArrowUpRight, Zap } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div onClick={() => router.push("/")}  className="flex gap-2 items-center justify-center text-xl font-bold text-black">
              <div className='bg-green-500 p-2 rounded-4xl'>
                <Zap className='text-white'/>
              </div>
              Logoipsum
            </div>
          </div>

          {/* Desktop Navigation */}
          <Navbar />

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button onClick={() => router.push("/")} className="px-6 py-2 flex gap-2 items-center justify-center bg-white text-black rounded-lg border-3 border-green-500 hover:bg-black/5 transition duration-300">
              Get In Touch
              <ArrowUpRight size={18} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col space-y-1"
            onClick={toggleMobileMenu}
          >
            <span className={`block h-0.5 w-6 bg-gray-600 transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-gray-600 opacity-100 transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-gray-600 transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
      </div>
    </header>
  );
}