"use client";

import { useState } from "react";
import Image from "next/image";
import { CircleCheckBig } from "lucide-react";

const menuItems = [
  "Benefits Of Hiring Developers",
  "Key Factors To Consider While Hiring",
  "Defining Your Project Requirements",
  "Choosing The Right Development Model",
  "Typical Challenges For Hiring Developers",
  "Hiring Freelancers Vs. Dedicated Developers",
  "Communication With Remote Developers",
];

export default function HireGuideSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            User Guide To Hire Dedicated Software Developers
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <ul className="bg-white overflow-hidden">
              {menuItems.map((item, idx) => (
                <li
                  key={idx}
                  onClick={() => setActive(idx)}
                  className={`cursor-pointer text-sm md:text-base px-4 py-8 transition-all duration-200 border-b border-gray-100 last:border-b-0 ${
                    active === idx
                      ? "bg-green-500 text-white font-medium"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Content */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
                {menuItems[active]}
              </h3>

              <p className="text-gray-600 text-sm md:text-base mb-8 leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>

              {/* Benefits List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
                {[
                  "Client-Centric Approach",
                  "Best-In-Class Project Management",
                  "Global Quality Standards",
                  "Time-Zone Compatibility",
                  "Cutting-Edge Infrastructure",
                  "Agile Adaptability",
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm md:text-base">
                    <CircleCheckBig className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-800">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Image */}
              <div className="mt-8">
                <div className="relative w-full h-auto">
                  <Image
                    src="/image5.png"
                    alt="Software development team"
                    width={800}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}