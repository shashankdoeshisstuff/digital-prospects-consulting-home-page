import { ProcessStep } from '@/types';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';

const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "INQUIRY",
    image: "/image5.png",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    step: 2,
    title: "SELECT DEVELOPERS",
    image: "/image6.png",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    step: 3,
    title: "TEAM INTEGRATION",
    image: "/image7.png",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    step: 4,
    title: "TEAM SCALING",
    image: "/image8.png",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  }
];

export default function HiringProcess() {
  return (
    <section className="w-full bg-white bg-cover bg-center bg-no-repeat bg-[url('/section-bg-4.png')] py-20 flex items-center justify-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center text-gray-900 mb-6">
          Our Hiring Process
        </h2>
        <p className="text-sm text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Take a look at our simple and straightforward process to hire software developers from ValueCoders.
        </p>

        <div className="flex flex-col md:flex-row gap-8 md:gap-0 items-center justify-center">
          {processSteps.map((step, index) => (
            <div key={step.step} className="flex">
              {/* Step Container */}
              <div className="flex flex-col items-center">
                {/* Step Circle */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 bg-white border-6 border-green-500 rounded-full">
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="relative w-full h-full max-w-[50%] max-h-[50%]">
                      <Image
                        src={`/hiring-process${step.step}.png`}
                        alt={`Step ${step.step}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 80px, 100px"
                      />
                    </div>
                    <div
                      className="
                        absolute top-0 right-0 flex items-center justify-center 
                        text-lg md:text-xl font-bold text-white pointer-events-none
                        aspect-[1/1] w-8 h-8 md:w-10 md:h-10 bg-[#FF7070] rounded-full
                        border-3 border-white
                      "
                    >
                      {step.step}
                    </div>
                  </div>
                </div>

                {/* Step Title and Description */}
                <div className="mt-4 text-center max-w-xs">
                  <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 mt-2 text-sm">{step.description}</p>
                </div>
              </div>

              {/* Arrow separator - only show after item except for last */}
              {index < processSteps.length - 1 && (
                <div className="text-gray-400 hidden md:flex flex-col">
                  <div className='flex-1 flex items-end justify center'>
                    <MoveRight className='mb-6'/>
                  </div>
                  <div className='flex-1'/>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
