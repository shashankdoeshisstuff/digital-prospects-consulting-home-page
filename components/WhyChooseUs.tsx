export default function WhyHireIndia() {
  return (
    <section className="py-20 bg-indigo-950 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title/Header at the Top */}
        <h2 className="text-4xl font-extrabold mb-2 leading-snug">
          Why Hire Software Developers<br />In India?
        </h2>

        {/* Main Content (Image on Left, List on Right) */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE — IMAGE */}
          <div>
            <img 
              src="/image3.png"
              alt="Developers working"
              className="w-full h-[420px] object-cover rounded-xl opacity-90"
            />
          </div>

          {/* RIGHT SIDE — POINTS */}
          <div>
            <div className="space-y-6">

              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-lg">English Speaking Programmers</span>
                <span className="text-gray-300 text-xl">↗</span>
              </div>

              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-lg">Flexible Work Hours</span>
                <span className="text-gray-300 text-xl">↗</span>
              </div>

              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-lg">Rapid Onboarding Process</span>
                <span className="text-gray-300 text-xl">↗</span>
              </div>

              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-lg">Expertise In Top Technologies</span>
                <span className="text-gray-300 text-xl">↗</span>
              </div>

              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-lg">Reliable Partner Credentials</span>
                <span className="text-gray-300 text-xl">↗</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}