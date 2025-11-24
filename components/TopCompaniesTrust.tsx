import { CircleCheckBig } from "lucide-react";

export default function TopCompaniesTrust() {
  return (
    <section className="py-20 bg-white text-gray-900 relative overflow-hidden">
      {/* Background Blur Shape */}
      <div className="absolute right-0 top-0 w-80 h-80 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-pink-200/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE - IMAGE (Computer with hands typing) */}
          <div className="flex justify-center md:justify-start">
            <img 
              src="/image4.png" // Replace this path with the actual image URL
              alt="Computer and Hands"
              className="w-[300px] md:w-[400px] object-contain"
            />
          </div>

          {/* RIGHT SIDE - TEXT (Title, Description, and Bullet Points) */}
          <div className="space-y-6">
            
            {/* Header Title */}
            <h2 className="text-2xl font-semibold mb-6">
              Top Companies Trust ValueCoders For Hiring Software Developers
            </h2>

            {/* Description Text */}
            <p className="text-lg text-gray-700 mb-12">
              Lorem Ipsum is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s. When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
            </p>

            {/* Bullet Points */}
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <CircleCheckBig size={18} className="text-green-500 mr-4"/>
                <span className="text-lg">Client-Centric Approach</span>
              </div>
              <div className="flex items-center">
                <CircleCheckBig size={18} className="text-green-500 mr-4"/>
                <span className="text-lg">Global Quality Standards</span>
              </div>
              <div className="flex items-center">
                <CircleCheckBig size={18} className="text-green-500 mr-4"/>
                <span className="text-lg">Cutting-Edge Infrastructure</span>
              </div>
              <div className="flex items-center">
                <CircleCheckBig size={18} className="text-green-500 mr-4"/>
                <span className="text-lg">Best-In-Class Project Management</span>
              </div>
              <div className="flex items-center">
                <CircleCheckBig size={18} className="text-green-500 mr-4"/>
                <span className="text-lg">Time-Zone Compatibility</span>
              </div>
              <div className="flex items-center">
                <CircleCheckBig size={18} className="text-green-500 mr-4"/>
                <span className="text-lg">Agile Adaptability</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}