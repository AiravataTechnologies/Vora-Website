
import {
  ArrowUp,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import React from "react";

export const FooterSection = (): JSX.Element => {
  // Quick links data
  const quickLinks = [
    { title: "About Us" },
    { title: "Services" },
    { title: "Case Studies" },
  ];

  // Contact information data
  const contactInfo = [
    {
      icon: <Phone className="w-4 h-4" />,
      text: "(+91) 8912 3456 7890",
    },
    {
      icon: <Mail className="w-4 h-4" />,
      text: "hello@consultix.com",
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      text: "123 Business Avenue, Suite",
    },
  ];

  return (
    <footer className="w-full bg-[#f3f3f3]">
      <div className="container mx-auto px-5 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-10 lg:py-12">
        {/* Main footer content */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
          {/* Left section - Logo and description */}
          <div className="flex flex-col mb-8 lg:mb-0 lg:w-[350px]">
            {/* Logo */}
            <div className="mb-6">
              <img
                className="w-[120px] h-[83px] sm:w-[140px] sm:h-[97px] lg:w-[159px] lg:h-[110px]"
                alt="Vora logo"
                src="/images/2676-080625-vora-hp-png-01-2.png"
              />
            </div>

            {/* Description */}
            <p className="font-normal text-sm sm:text-base text-[#00000099] leading-5 sm:leading-6 font-['Inter',Helvetica] mb-6 lg:mb-8">
              We provide professional electrical solutions with safety, efficiency, ensure seamless energy flow for homes and businesses.
            </p>

            {/* Social icons */}
            <img
              className="w-[120px] sm:w-[150px]"
              alt="Social icons"
              src="/images/social-icons.svg"
            />
          </div>

          {/* Right section - Links, Contact, Newsletter */}
          <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row gap-8 sm:gap-x-8 sm:gap-y-8 lg:gap-12 xl:gap-24 w-full lg:w-auto">
            {/* Quick Links column */}
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg sm:text-xl lg:text-[21px] tracking-[-0.42px] leading-[20px] sm:leading-[22px] lg:leading-[23.1px] font-['Inter',Helvetica] mb-4 lg:mb-6">
                Quick Links
              </h3>
              <div className="flex flex-col gap-2 lg:gap-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="font-normal text-sm text-[#000000b2] leading-[18px] sm:leading-[21px] font-['DM_Sans',Helvetica] hover:text-black transition-colors"
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Us column */}
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg sm:text-xl lg:text-[21px] tracking-[-0.42px] leading-[20px] sm:leading-[22px] lg:leading-[23.1px] font-['Inter',Helvetica] mb-4 lg:mb-6">
                Contact Us
              </h3>
              <div className="flex flex-col gap-2 lg:gap-3">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {item.icon}
                    <span className="font-normal text-sm text-[#000000b2] leading-[14px] font-['DM_Sans',Helvetica]">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter column */}
            <div className="flex flex-col sm:col-span-2 lg:col-span-1 lg:w-72">
              <h3 className="font-semibold text-lg sm:text-xl lg:text-[21px] tracking-[-0.42px] leading-[20px] sm:leading-[22px] lg:leading-[23.1px] font-['Inter',Helvetica] mb-4 lg:mb-6">
                Subscribe Our Newsletter
              </h3>
              <div className="flex flex-col gap-3 lg:gap-4">
                <input
                  type="email"
                  className="h-9 sm:h-10 px-3 sm:px-4 py-2 sm:py-3 bg-[#bfbfbf] rounded-[32px] border border-solid border-[#ffffff1a] text-[#020202b2] text-sm font-['Inter',Helvetica] placeholder-[#020202b2] focus:outline-none w-full"
                  placeholder="Your Email"
                />
                <button className="flex items-center gap-1 pl-3 sm:pl-4 pr-2 py-1.5 rounded-[32px] shadow-[inset_0px_1px_1px_#e3eb00,inset_0px_-1px_4px_#e4ec00] bg-[linear-gradient(180deg,rgba(254,221,0,1)_0%,rgba(254,221,0,1)_100%)] text-black font-medium text-sm tracking-[-0.32px] leading-6 font-['Inter',Helvetica] w-fit">
                  Submit
                  <div className="w-4 sm:w-5 h-4 sm:h-5">
                    <ArrowUp className="w-4 sm:w-5 h-4 sm:h-5 rotate-90" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-8 sm:mt-10 lg:mt-12 pt-6 lg:pt-8">
          <div className="border-t border-[#2d2d2d] mb-6 lg:mb-8"></div>
          <div className="flex flex-col items-center sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0 mb-[-15px] sm:mb-[-29px]">
            <p className="text-[#000000b2] text-sm font-['Inter',Helvetica] text-center sm:text-left order-2 sm:order-1">
              © 2025 All Right Reserved by VESP...
            </p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 text-black font-medium text-sm font-['Inter',Helvetica] hover:text-gray-700 transition-colors order-1 sm:order-2"
            >
              Back To Top
              <div className="w-6 sm:w-8 h-6 sm:h-8 bg-yellow-400 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-105">
                <ArrowUp className="w-3 sm:w-4 h-3 sm:h-4 text-black" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;