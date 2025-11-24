"use client";

import Image from "next/image";
import { Play } from "lucide-react";

const testimonials = [
  {
    name: "Krish Bruynson",
    position: "Director",
    company: "Storloft",
    image: "/client1.png",
  },
  {
    name: "Krish Bruynson",
    position: "Director", 
    company: "Storloft",
    image: "/client2.png",
  },
  {
    name: "Krish Bruynson",
    position: "Director",
    company: "Storloft",
    image: "/client3.png",
  },
  {
    name: "Krish Bruynson",
    position: "Director",
    company: "Storloft",
    image: "/client4.png",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-r from-pink-50 to-green-50">
      <div className="container mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          What Our Clients Have To Say About Us
        </h2>

        <p className="text-gray-500 mt-2 mb-12 text-xm md:text-sm">
          Take A Look At Our Simple And Straightforward Process To Hire Software
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="group text-left">
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[3/4] transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="object-cover w-full h-full"
                />
                
                {/* Play Button */}
                <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <span className="w-18 h-18 bg-green-500/40 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
                    <Play className="w-15 h-15 p-4 fill-white bg-green-500 rounded-full"  />
                  </span>
                </button>
              </div>

              {/* Text Content */}
              <div className="mt-4">
                <h4 className="font-semibold text-2xl text-gray-900">{t.name}</h4>
                <p className="text-gray-400 text-lg">
                  {t.position}, {t.company}
                </p>

                {/* Star Ratings */}
                <div className="flex gap-1 mt-2">
                  {Array(5)
                    .fill(0)
                    .map((_, idx) => (
                      <span key={idx} className="text-green-500 text-2xl">
                        ★
                      </span>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}