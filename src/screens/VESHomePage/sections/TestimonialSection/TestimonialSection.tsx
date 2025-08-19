import React, { useState, useEffect } from "react";

export const TestimonialSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Define yellow color
  const yellow = "#FEDD00";

  // Brand logos data
  const brands = [
    {
      name: "Payscale",
      vectorSrc: "/images/vector-4.svg",
      vectorWidth: "w-[58px]",
    },
    {
      name: "Arktico",
      vectorSrc: "/images/vector-3.svg",
      vectorWidth: "w-[74px]",
    },
    {
      name: "Getdonelist",
      vectorSrc: "/images/vector-1.svg",
      vectorWidth: "w-[65px]",
    },
    {
      name: "Teamtalk",
      vectorSrc: "/images/vector-2.svg",
      vectorWidth: "w-[77px]",
    },
    // Duplicate for seamless loop
    {
      name: "Payscale",
      vectorSrc: "/images/vector-4.svg",
      vectorWidth: "w-[58px]",
    },
    {
      name: "Arktico",
      vectorSrc: "/images/vector-3.svg",
      vectorWidth: "w-[74px]",
    },
    {
      name: "Getdonelist",
      vectorSrc: "/images/vector-1.svg",
      vectorWidth: "w-[65px]",
    },
    {
      name: "Teamtalk",
      vectorSrc: "/images/vector-2.svg",
      vectorWidth: "w-[77px]",
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-36 bg-[#f4f5f6] overflow-hidden">
      <div className="flex flex-col w-full max-w-[1280px] mx-auto items-center justify-center gap-8 md:gap-16 px-4 md:px-8">
        {/* Header Section */}
        <div
          className={`flex flex-col w-full max-w-[626px] items-center justify-center gap-4 md:gap-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="relative flex items-center gap-2 animate-in slide-in-from-top-2 duration-700 ease-out delay-100">
            <img
              className="w-[60px] h-[70px] sm:w-[80px] sm:h-[95px] lg:w-[99px] lg:h-[117px] object-contain"
              alt="Lightning icon"
              src="/images/2676-080625-vora-hp-png-02-2.png"
            />

            <div className="font-semibold text-xl sm:text-2xl lg:text-3xl tracking-[1.5px] leading-[26px] sm:leading-[30px] lg:leading-[36px]">
              CLIENT FEEDBACK
            </div>
          </div>

          <h2 className="font-semibold text-black text-3xl md:text-5xl text-center tracking-[-1.44px] leading-[43.2px] md:leading-[57.6px] px-4 md:px-0">
            What Our Happy Clients Say
          </h2>
        </div>

        {/* Brand Logos Marquee */}
        <div className={`w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
          <div className="relative overflow-hidden">
            {/* Gradient overlays for smooth fade effect */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-[#f4f5f6] to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-[#f4f5f6] to-transparent z-10"></div>

            <div className="flex items-center">
              <div className="flex animate-marquee gap-16 md:gap-24 lg:gap-32 whitespace-nowrap py-8">
                {[...brands, ...brands].map((brand, index) => (
                  <div
                    key={`${brand.name}-${index}`}
                    className="flex-shrink-0 flex items-center justify-center"
                  >
                    <img
                      className="h-12 md:h-16 lg:h-20 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
                      alt={`${brand.name} logo`}
                      src={brand.vectorSrc}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        /* Pause animation on hover */
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};