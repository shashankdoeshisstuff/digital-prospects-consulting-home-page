"use client";

import Image from "next/image";
import { Facebook, Twitter, Linkedin, Youtube, Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Logo + About + Social */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                <Zap className="text-black" />
              </div>
              <span className="text-2xl font-semibold whitespace-nowrap">Logoipsum</span>
            </div>

            <p className="text-gray-200 text-md leading-relaxed mb-6 max-w-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
            </p>

            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Youtube].map((Icon, idx) => (
                <button key={idx} className="w-9 h-9 bg-white text-green-500 rounded-full flex items-center justify-center hover:bg-green-500 transition">
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="sm:mx-auto">
            <h3 className="text-xl font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3 text-gray-300 text-md">
              <li className="hover:text-white cursor-pointer">Software Team</li>
              <li className="hover:text-white cursor-pointer">Technologies</li>
              <li className="hover:text-white cursor-pointer">Resources</li>
              <li className="hover:text-white cursor-pointer">Company</li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
              <li className="hover:text-white cursor-pointer">FAQ</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Services</h3>
            <ul className="space-y-3 text-gray-300 text-md">
              <li className="hover:text-white cursor-pointer">Dedicated Development</li>
              <li className="hover:text-white cursor-pointer">Staff Augmentation Services</li>
              <li className="hover:text-white cursor-pointer">Software Development</li>
              <li className="hover:text-white cursor-pointer">Development Center</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Contact Us</h3>
            <div className="space-y-4 text-gray-300 text-md">
              <div className="flex items-start gap-3">
                <Image src="/location.svg" alt="Location" width={20} height={20} className="mt-1" />
                <span>
                  Envato, Level 13, 2 Elizabeth <br /> Victoria 3000 India
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Image src="/call.svg" alt="Phone" width={20} height={20} />
                <span>+91 861 944 1176</span>
              </div>

              <div className="flex items-center gap-3">
                <Image src="/sms.svg" alt="Email" width={20} height={20} />
                <span>ezyoga@gmail.com</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="bg-green-500 text-center py-3 text-white font-medium text-md">
        logoname. 2023. All rights reserved
      </div>
    </footer>
  );
}
