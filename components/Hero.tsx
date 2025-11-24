"use client";

import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full bg-white bg-cover bg-center bg-no-repeat bg-[url('/section-bg-1.png')] py-20 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <div>
            <h2 className="text-green-500 text-4xl font-semibold tracking-wide flex items-center gap-4">
              HIRE DEDICATED
              <span className="flex-1 h-[4px] bg-green-500" />
            </h2>

            <h1 className="text-6xl font-extrabold text-gray-900 leading-tight">
              DEVELOPERS
            </h1>
          </div>

          <p className="text-gray-900 font-normal text-lg">
            Top 1% Pre-Vetted, In-House & Dedicated Software Programmers
          </p>

          <p className="text-gray-800 font-light max-w-xl leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-6 py-3 bg-[#FF7070] text-white rounded-lg flex items-center gap-2 hover:bg-[#ff5a5a] transition font-medium">
              View More <ArrowUpRight size={18} />
            </button>

            <button className="px-6 py-3 bg-white border-3 border-green-500 text-black rounded-lg flex items-center gap-2 hover:bg-black/5 transition font-medium">
              Get In Touch <ArrowUpRight size={18} />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE FORM CARD */}
        <div className="p-0 bg-white rounded-xl border border-gray-100">
          <div className="bg-green-50 py-8">
            <h3 className="text-2xl font-semibold text-center text-gray-900">
              Create Your Team
            </h3>

            <p className="text-center text-gray-500">
              Lorem Ipsum Is Simply Dummy Text Of The Printing
            </p>
          </div>

          <form className="space-y-6 p-8">
            
            {/* ROW 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-800 text-md mb-1 font-medium">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter You Name"
                  className="text-gray-800 border border-gray-200 px-4 py-2 w-full focus:outline-none focus:border-green-500"
                />
              </div>

              <div>
                <label className="block text-gray-800 text-md mb-1 font-medium">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter You Email"
                  className="text-gray-800 border border-gray-200 px-4 py-2 w-full focus:outline-none focus:border-green-500"
                />
              </div>
            </div>

            {/* ROW 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-800 text-md mb-1 font-medium">Phone No</label>
                <input
                  type="text"
                  placeholder="Enter You Number"
                  className="text-gray-800 border border-gray-200 px-4 py-2 w-full focus:outline-none focus:border-green-500"
                />
              </div>

              <div>
                <label className="block text-gray-800 text-md mb-1 font-medium">Country</label>
                <input
                  type="text"
                  placeholder="Enter You Country"
                  className="text-gray-800 border border-gray-200 px-4 py-2 w-full focus:outline-none focus:border-green-500"
                />
              </div>
            </div>

            {/* PROJECT BRIEF */}
            <div>
              <label className="block text-gray-800 text-md mb-1 font-medium">Project Brief</label>
              <textarea
                rows={4}
                placeholder="Enter You Project Brief"
                className="text-gray-800 border border-gray-200 px-4 py-2 w-full focus:outline-none focus:border-green-500 resize-none"
              ></textarea>
            </div>

            <button className="w-full px-6 py-3 bg-[#FF7070] text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-[#ff5a5a] transition">
              Hire Software Developer <ArrowUpRight size={18} />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
