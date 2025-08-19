import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activePersonCard, setActivePersonCard] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Testimonial data for mapping
  const testimonials = [
    {
      name: "Bromi Guden",
      position: "CEO, Payscale",
      vectorSrc: "/images/vector-4.svg",
      vectorWidth: "w-[58px]",
    },
    {
      name: "Sophia Martinez",
      position: "CEO, Arktico",
      vectorSrc: "/images/vector-3.svg",
      vectorWidth: "w-[74px]",
    },
    {
      name: "Serene Logia",
      position: "CEO, Getdonelist",
      vectorSrc: "/images/vector-1.svg",
      vectorWidth: "w-[65px]",
    },
    {
      name: "Brandon Suelu",
      position: "CEO, Teamtalk",
      vectorSrc: "/images/vector-2.svg",
      vectorWidth: "w-[77px]",
    },
  ];

  // Person cards data
  const personCards = [
    {
      name: "David Wilson",
      position: "CEO, Selfast",
      image: "/images/bearded-south-asian-man-wearing-turban-smiling-and-2025-02-14-06.png",
      alt: "Bearded south asian man"
    },
    {
      name: "Sarah Johnson",
      position: "CTO, TechFlow",
      image: "/images/bearded-south-asian-man-wearing-turban-smiling-and-2025-02-14-06.png",
      alt: "Professional woman"
    },
    {
      name: "Michael Chen",
      position: "CEO, InnovateLab",
      image: "/images/bearded-south-asian-man-wearing-turban-smiling-and-2025-02-14-06.png",
      alt: "Asian businessman"
    },
    {
      name: "Emma Rodriguez",
      position: "Founder, StartupHub",
      image: "/images/bearded-south-asian-man-wearing-turban-smiling-and-2025-02-14-06.png",
      alt: "Latina entrepreneur"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextPersonCard = () => {
    setActivePersonCard((prev) => (prev + 1) % personCards.length);
  };

  const prevPersonCard = () => {
    setActivePersonCard((prev) => (prev - 1 + personCards.length) % personCards.length);
  };

  return (
    <section className="relative w-full py-16 md:py-36 bg-[#f4f5f6] overflow-hidden">
      <div className="flex flex-col w-full max-w-[1280px] mx-auto items-center justify-center gap-8 md:gap-16 px-4 md:px-8">
        {/* Header Section */}
        <div
          className={`flex flex-col w-full max-w-[626px] items-center justify-center gap-4 md:gap-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="relative flex items-center gap-2">
            <img className="w-5 h-5" alt="Lightning" src="/images/lightning.svg" />
            <div className="font-medium text-black text-base tracking-[1.28px] leading-[19.2px] whitespace-nowrap">
              CLIENT FEEDBACK
            </div>
          </div>

          <h2 className="font-semibold text-black text-3xl md:text-5xl text-center tracking-[-1.44px] leading-[43.2px] md:leading-[57.6px] px-4 md:px-0">
            What Our Happy Clients Say
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-start gap-8 w-full">
          {/* Left side testimonials grid */}
          <div className="flex flex-col gap-8 flex-1">
            {/* First row */}
            <div className="flex items-center gap-8">
              {testimonials.slice(0, 2).map((testimonial, index) => (
                <Card
                  key={`testimonial-${index}`}
                  className={`p-8 rounded-2xl border-[none] relative before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(180deg,rgba(254,221,0,1)_0%,rgba(254,221,0,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none transform transition-all duration-700 hover:scale-105 hover:shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-0 flex flex-col gap-6">
                    <img
                      className="w-15 h-5 self-start"
                      alt="Star icon"
                      src="/images/star-icon.svg"
                    />

                    <div className="w-[336px] font-normal text-black text-base leading-6">
                      &#34;Amazing service! The team was punctual,
                      knowledgeable, and fixed. Great customer support and
                      top-notch expertise.&#34;
                    </div>

                    <div className="flex items-end justify-between w-full">
                      <div className="flex flex-col items-start gap-1 transform transition-all duration-300 hover:translate-x-1">
                        <div className="font-semibold text-black text-base tracking-[-0.32px] leading-[17.6px] whitespace-nowrap mt-[-1.00px]">
                          {testimonial.name}
                        </div>

                        <div className="font-normal text-[#000000b2] text-sm leading-[21px] whitespace-nowrap">
                          {testimonial.position}
                        </div>
                      </div>

                      <img
                        className={`h-3 ${testimonial.vectorWidth}`}
                        alt="Vector"
                        src={testimonial.vectorSrc}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Second row */}
            <div className="flex items-center gap-8">
              {testimonials.slice(2, 4).map((testimonial, index) => (
                <Card
                  key={`testimonial-${index + 2}`}
                  className={`p-8 rounded-2xl border-[none] relative before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(180deg,rgba(254,221,0,1)_0%,rgba(254,221,0,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none transform transition-all duration-700 hover:scale-105 hover:shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                  style={{ animationDelay: `${(index + 2) * 200}ms` }}
                >
                  <CardContent className="p-0 flex flex-col gap-6">
                    <img
                      className="w-15 h-5 self-start"
                      alt="Star icon"
                      src="/images/star-icon.svg"
                    />

                    <div className="w-[336px] font-normal text-black text-base leading-6">
                      &#34;Amazing service! The team was punctual,
                      knowledgeable, and fixed. Great customer support and
                      top-notch expertise.&#34;
                    </div>

                    <div className="flex items-end justify-between w-full">
                      <div className="flex flex-col items-start gap-1 transform transition-all duration-300 hover:translate-x-1">
                        <div className="font-semibold text-black text-base tracking-[-0.32px] leading-[17.6px] whitespace-nowrap mt-[-1.00px]">
                          {testimonial.name}
                        </div>

                        <div className="font-normal text-[#000000b2] text-sm leading-[21px] whitespace-nowrap">
                          {testimonial.position}
                        </div>
                      </div>

                      <img
                        className={`h-3 ${testimonial.vectorWidth}`}
                        alt="Vector"
                        src={testimonial.vectorSrc}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Featured person cards slider - Reduced size */}
          <div className={`w-full max-w-[280px] xl:max-w-[320px] relative transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}>
            <div className="relative overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activePersonCard * 100}%)` }}
              >
                {personCards.map((person, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <Card className="rounded-2xl overflow-hidden bg-[#e6e6e6] transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                      <CardContent className="p-0 relative">
                        <div className="relative w-full aspect-[4/5] overflow-hidden">
                          <img
                            className="w-full h-full object-cover"
                            alt={person.alt}
                            src={person.image}
                          />
                        </div>

                        <div className="p-4 xl:p-6 bg-[#e6e6e6] flex flex-col items-start gap-1">
                          <div className="font-semibold text-black text-base tracking-[-0.32px] leading-[17.6px] whitespace-nowrap">
                            {person.name}
                          </div>

                          <div className="font-normal text-[#000000b2] text-sm leading-[21px] whitespace-nowrap">
                            {person.position}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation arrows - Updated progress indicator */}
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
              <div className="flex items-center gap-2">
                <button
                  onClick={prevPersonCard}
                  className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black hover:bg-yellow-500 transition-all duration-200 transform hover:scale-105 font-bold text-xl shadow-md"
                >
                  ←
                </button>

                {/* Dynamic progress indicator */}
                <div className="flex items-center gap-1 px-4">
                  {personCards.map((_, index) => (
                    <div
                      key={index}
                      className={`h-0.5 rounded-full transition-all duration-300 ${index === activePersonCard
                        ? 'w-8 bg-yellow-400'
                        : 'w-2 bg-gray-300'
                        }`}
                    ></div>
                  ))}
                </div>

                <button
                  onClick={nextPersonCard}
                  className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black hover:bg-yellow-500 transition-all duration-200 transform hover:scale-105 font-bold text-xl shadow-md"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden w-full">
          {/* Mobile Testimonial Carousel */}
          <div className="relative">
            <Card
              className={`mx-4 p-6 md:p-8 rounded-2xl border-[none] relative before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(180deg,rgba(254,221,0,1)_0%,rgba(254,221,0,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none transform transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <CardContent className="p-0 flex flex-col gap-6">
                <img
                  className="w-15 h-5 self-start"
                  alt="Star icon"
                  src="/images/star-icon.svg"
                />

                <div className="font-normal text-black text-base leading-6">
                  &#34;Amazing service! The team was punctual,
                  knowledgeable, and fixed. Great customer support and
                  top-notch expertise.&#34;
                </div>

                <div className="flex items-end justify-between w-full">
                  <div className="flex flex-col items-start gap-1">
                    <div className="font-semibold text-black text-base tracking-[-0.32px] leading-[17.6px] whitespace-nowrap mt-[-1.00px]">
                      {testimonials[activeTestimonial].name}
                    </div>

                    <div className="font-normal text-[#000000b2] text-sm leading-[21px] whitespace-nowrap">
                      {testimonials[activeTestimonial].position}
                    </div>
                  </div>

                  <img
                    className={`h-3 ${testimonials[activeTestimonial].vectorWidth}`}
                    alt="Vector"
                    src={testimonials[activeTestimonial].vectorSrc}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Mobile Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-xl font-bold transform transition-all duration-300 hover:scale-110 hover:bg-yellow-500 active:scale-95"
              >
                ←
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeTestimonial ? 'bg-yellow-400 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-xl font-bold transform transition-all duration-300 hover:scale-110 hover:bg-yellow-500 active:scale-95"
              >
                →
              </button>
            </div>
          </div>

          {/* Featured person cards for mobile */}
          <div className={`mt-12 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            <div className="relative overflow-hidden mx-4">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activePersonCard * 100}%)` }}
              >
                {personCards.map((person, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <Card className="rounded-2xl overflow-hidden bg-[#e6e6e6] transform transition-all duration-500 hover:scale-105">
                      <CardContent className="p-0 relative">
                        <div className="relative w-full aspect-[4/5] overflow-hidden">
                          <img
                            className="w-full h-full object-cover"
                            alt={person.alt}
                            src={person.image}
                          />
                        </div>

                        <div className="p-6 md:p-8 bg-[#e6e6e6] flex flex-col items-start gap-1">
                          <div className="font-semibold text-black text-base tracking-[-0.32px] leading-[17.6px] whitespace-nowrap">
                            {person.name}
                          </div>

                          <div className="font-normal text-[#000000b2] text-sm leading-[21px] whitespace-nowrap">
                            {person.position}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile person card navigation - Dynamic progress indicator */}
            <div className="flex items-center justify-center gap-2 mt-6">
              <button
                onClick={prevPersonCard}
                className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-xl font-bold transform transition-all duration-300 hover:scale-105 hover:bg-yellow-500 shadow-md"
              >
                ←
              </button>

              <div className="flex items-center gap-1 px-4">
                {personCards.map((_, index) => (
                  <div
                    key={index}
                    className={`h-0.5 rounded-full transition-all duration-300 ${index === activePersonCard
                      ? 'w-8 bg-yellow-400'
                      : 'w-2 bg-gray-300'
                      }`}
                  ></div>
                ))}
              </div>

              <button
                onClick={nextPersonCard}
                className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-xl font-bold transform transition-all duration-300 hover:scale-105 hover:bg-yellow-500 shadow-md"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};