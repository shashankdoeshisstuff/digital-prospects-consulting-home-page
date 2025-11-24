import Image from "next/image";
import { Check } from "lucide-react";

export default function WhyHire() {
  return (
    <section className="w-full relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-[#f7fcff] via-white to-[#fef8fa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">

        {/* SECTION TITLE */}
        <div className="w-full max-w-6xl mx-auto text-center space-y-4 flex flex-col items-center justify-center">
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold text-gray-900">
            Why Hire Developers From Our Name
          </h2>
          <p className="text-center max-w-2xl text-gray-500 text-sm sm:text-base md:text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since.
          </p>
        </div>

        {/* TOP ROW */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center lg:justify-start order-1 lg:order-1">
            <Image
              src="/image2.png"
              width={350}
              height={350}
              alt="Developer Illustration"
              className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[400px] drop-shadow-md"
              sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 350px, 400px"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="order-2 lg:order-2">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold mb-4 sm:mb-5 md:mb-6 text-gray-900">
              High Quality/Cost Ratio
            </h3>

            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <Check className="w-5 h-5 sm:w-6 sm:h-6  bg-green-500 text-white p-1 rounded-full flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-gray-800 text-base sm:text-lg md:text-xl font-normal mb-1 sm:mb-2">
                    Hire Silicon Valley Caliber At Half The Cost
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                    Hire the top 1% of 1.5M+ developers from 150+ countries who have applied.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <Check className="w-5 h-5 sm:w-6 sm:h-6  bg-[#FF7070] text-white p-1 rounded-full flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-gray-800 text-base sm:text-lg md:text-xl font-normal mb-1 sm:mb-2">
                    100+ Skills Available
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                    Hire developers in over 100+ technical skill categories.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center mt-10 sm:mt-12 md:mt-16 lg:mt-20">

          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold mb-4 sm:mb-5 md:mb-6 text-gray-900">
              Rigorous Vetting
            </h3>

            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <Check className="w-5 h-5 sm:w-6 sm:h-6  bg-green-500 text-white p-1 rounded-full flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-gray-800 text-base sm:text-lg md:text-xl font-normal mb-1 sm:mb-2">
                    5+ Hours Of Tests And Interviews
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                    Hire the top 1% of 1.5M+ developers from 150+ countries who apply yearly.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <Check className="w-5 h-5 sm:w-6 sm:h-6  bg-[#FF7070] text-white p-1 rounded-full flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-gray-800 text-base sm:text-lg md:text-xl font-normal mb-1 sm:mb-2">
                    Seniority Tests
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                    Vetting ensures proven expertise, communication, and problem-solving ability.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <Image
              src="/image1.png"
              width={350}
              height={350}
              alt="Developer Illustration"
              className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[400px] drop-shadow-md"
              sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 350px, 400px"
            />
          </div>
        </div>

      </div>

      {/* Background Images */}
      <div className="absolute left-0 top-0">
        <Image src="/section-bg-21.png" width={500} height={500} alt="" />
      </div>

      <div className="absolute right-0 top-0">
        <Image src="/section-bg-22.png" width={500} height={500} alt="" />
      </div>

      <div className="absolute right-5 top-1/2">
        <Image src="/section-bg-23.png" width={50} height={50} alt="" />
      </div>

      {/* Decorative Blurs */}
      <div className="absolute -left-20 -bottom-20 w-80 h-80 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-pink-200/30 rounded-full blur-3xl"></div>
      <div className="absolute -right-20 -top-20 w-80 h-80 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-green-200/40 rounded-full blur-3xl"></div>
    </section>
  );
}
