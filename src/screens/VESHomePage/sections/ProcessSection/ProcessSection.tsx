import React from "react";
import { Card } from "../../../../components/ui/card";

export const ProcessSection = (): JSX.Element => {
  const processSteps = [
    {
      number: "01",
      title: "Consultation & Assessment",
    },
    {
      number: "02",
      title: "Planning & Installation",
    },
    {
      number: "03",
      title: "Testing & Maintenance",
    },
  ];

  return (
    <section className="w-full py-16 pb-32 bg-[#f4f5f6] overflow-hidden lg:py-16 lg:pb-32">
      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-center gap-16 max-w-[1280px] mx-auto">
          {/* Header Section */}
          <div className="flex flex-col items-center justify-center gap-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
            <div className="flex items-center gap-3 transform translate-y-4 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.4s_forwards]">
              {/* Yellow V Icon */}
              <span
                className="flex items-center justify-center font-extrabold text-2xl sm:text-3xl lg:text-4xl"
                style={{ color: "#fedd00e6" }}
              >
                V
              </span>
              <div className="font-semibold text-xl sm:text-2xl lg:text-3xl tracking-[1.5px] leading-[26px] sm:leading-[30px] lg:leading-[36px]">
                OUR PROCESS
              </div>
            </div>

            <h2 className="w-full max-w-[844px] font-semibold text-[#070700] text-3xl sm:text-4xl lg:text-5xl text-center tracking-[-1.44px] leading-[36px] sm:leading-[48px] lg:leading-[57.6px] transform translate-y-4 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
              Our Efficient Steps For Quality Service
            </h2>
          </div>

          {/* Image and Process Cards Container */}
          <div className="relative w-full rounded-2xl overflow-visible transform translate-y-8 opacity-0 animate-[fadeInUp_1s_ease-out_0.8s_forwards]">
            <img
              className="w-full h-[600px] object-cover rounded-2xl transition-transform duration-700 hover:scale-[1.02]"
              alt="Service professionals working together"
              src="/images/pexels-silverkblack-23496705-1.png"
            />

            {/* Desktop Process Cards - Positioned Absolutely */}
            <div className="hidden lg:block absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-[calc(100%-80px)] max-w-[1200px] opacity-0 animate-[slideUpFade_1s_ease-out_1.2s_forwards]">
              <div className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-lg z-10">
                {processSteps.map((step, index) => (
                  <Card
                    key={index}
                    className="flex items-center gap-4 p-6 flex-1 bg-white rounded-lg border border-solid border-[#0707001a] transition-all duration-300 hover:shadow-md hover:-translate-y-1 group transform translate-y-4 opacity-0"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${1.4 + index * 0.2}s forwards`,
                    }}
                  >
                    <div className="flex w-12 h-12 items-center justify-center rounded-full bg-[#fedd00] transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                      <div className="font-bold text-[#070700] text-lg tracking-[-0.54px] leading-[21.6px] transition-all duration-300">
                        {step.number}
                      </div>
                    </div>

                    <div className="font-semibold text-[#070700] text-[18px] tracking-[-0.63px] leading-[25.2px] transition-colors duration-300 group-hover:text-[#fedd00]">
                      {step.title}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Process Cards - Below Image */}
          <div className="lg:hidden w-full flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 sm:mt-8">
            {processSteps.map((step, index) => (
              <Card
                key={index}
                className="flex items-center gap-4 p-4 sm:p-6 flex-1 bg-white rounded-lg border border-solid border-[#0707001a] transition-all duration-500 hover:shadow-md hover:-translate-y-1 group transform translate-y-6 opacity-0"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${1.2 + index * 0.15}s forwards`,
                }}
              >
                <div className="flex w-10 h-10 sm:w-12 sm:h-12 items-center justify-center rounded-full bg-[#fedd00] transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 flex-shrink-0">
                  <div className="font-bold text-[#070700] text-base sm:text-lg tracking-[-0.54px] leading-[21.6px]">
                    {step.number}
                  </div>
                </div>

                <div className="font-semibold text-[#070700] text-base sm:text-[18px] tracking-[-0.48px] sm:tracking-[-0.63px] leading-[22.4px] sm:leading-[25.2px] transition-colors duration-300 group-hover:text-[#fedd00]">
                  {step.title}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Background Decorative Element */}
        <div className="absolute w-[248px] h-[348px] top-0 right-0 bg-[#ffc700] rounded-[124px/174px] blur-[150px] opacity-50 animate-pulse lg:w-[248px] lg:h-[348px] lg:rounded-[124px/174px] lg:blur-[150px] lg:opacity-50" />
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
      `}</style>
    </section>
  );
};