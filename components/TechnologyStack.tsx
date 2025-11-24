import { Span } from "next/dist/trace";
import Image from "next/image";

export default function TechnologyStack() {
  const items = [
    {
      title: "Backend Development",
      img: "/web-settings1.png",
      bg: "bg-indigo-50",
      border: "border-indigo-300"
    },
    {
      title: "Frontend Development",
      img: "/web-settings2.png",
      bg: "bg-orange-50",
      border: "border-orange-300"
    },
    {
      title: "Mobile Development",
      img: "/web-settings4.png",
      bg: "bg-pink-50",
      border: "border-pink-300"
    },
    {
      title: "Blockchain, AI/ML",
      img: "/web-settings5.png",
      bg: "bg-cyan-50",
      border: "border-cyan-300"
    },
    {
      title: "DevOps & Low-Code",
      img: "/web-settings3.png",
      bg: "bg-amber-50",
      border: "border-amber-300"
    },
    {
      title: "E-commerce & CMS",
      img: "/web-settings6.png",
      bg: "bg-red-50",
      border: "border-red-300"
    }
  ];

  const techStack =
    [".NET", "C/C++", "DJANGO", "Firebase", "GOLANG", "SYMFONY", "LARAVEL", "NODE", "PHP", "PYTHON", "RUBY ON RAILS", "JAVA"];

  return (
    <section className="w-full relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-[#f7fcff] via-white to-[#fef8fa] overflow-hidden">
      
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Small decorative image */}
        <div className="absolute left-20 top-20 opacity-60">
          <Image src="/section-bg-3.png" width={100} height={100} alt="" />
        </div>

        {/* Large blur shapes */}
        <div className="absolute -left-20 -top-20 w-80 h-80 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-pink-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -right-20 -bottom-20 w-80 h-80 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-green-200/30 rounded-full blur-3xl"></div>
        
        {/* Additional subtle shapes for depth */}
        <div className="absolute left-1/3 top-1/4 w-64 h-64 bg-blue-100/10 rounded-full blur-2xl"></div>
        <div className="absolute right-1/4 bottom-1/3 w-48 h-48 bg-purple-100/15 rounded-full blur-2xl"></div>
      </div>

      {/* Content Container - Already has max-w-7xl */}
      <div className="relative max-w-7xl mx-auto px-4 z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-800">
            Our Diverse Technology Competency
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting 
            Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text 
            Ever Since.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 border-b-4 ${item.border} ${item.bg} transition-shadow duration-300 relative z-10 backdrop-blur-sm bg-opacity-70`}
            >
              {/* IMAGE ICON */}
              <div className="mb-4">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {item.title}
              </h3>

              {/* Tech Stack */}
              <p className="text-md text-gray-900 leading-8">
                {techStack.map((text, index) => (
                  <span key={text}>
                    {text}
                    {index !== techStack.length - 1 && (
                      <span className="mx-2 text-gray-300"> | </span>
                    )}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}