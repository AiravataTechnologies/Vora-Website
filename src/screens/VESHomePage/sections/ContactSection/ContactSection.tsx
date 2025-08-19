import React, { useState } from "react";

const Button = ({ children, className, ...props }) => (
  <button className={className} {...props}>
    {children}
  </button>
);

const Card = ({ children, className }) => (
  <div className={className}>
    {children}
  </div>
);

const CardContent = ({ children, className }) => (
  <div className={className}>
    {children}
  </div>
);

const Input = ({ className, ...props }) => (
  <input className={className} {...props} />
);

const Select = ({ children, onValueChange }) => (
  <select className="w-full h-auto px-3 sm:px-4 py-2 sm:py-3 bg-[#f4f5f6] rounded-[24px] sm:rounded-[32px] border-[#0707001a] text-[#07070099] text-xs sm:text-sm transition-all duration-300 hover:shadow-lg hover:bg-white focus:scale-[1.02] focus:shadow-xl focus:border-yellow-400" onChange={(e) => onValueChange(e.target.value)}>
    {children}
  </select>
);

const SelectTrigger = ({ children, className }) => children;

const SelectValue = ({ placeholder }) => (
  <>
    <option value="">{placeholder}</option>
    <option value="wiring">Wiring & Installation</option>
    <option value="repair">Electrical Repair</option>
    <option value="maintenance">Maintenance</option>
    <option value="consultation">Consultation</option>
  </>
);

const Textarea = ({ className, ...props }) => (
  <textarea className={className} {...props} />
);

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  // Contact information data
  const contactInfo = [
    {
      title: "Call Us",
      value: "(+91) 8912 3456 7890",
      icon: "📞",
    },
    {
      title: "Email Us",
      value: "hello@elektrix.com",
      icon: "✉️",
    },
  ];

  // Form field data
  const formFields = [
    { label: "First Name", placeholder: "e.g. Sahaari", hasBorder: true },
    { label: "Last Name", placeholder: "e.g. Manehteh", hasBorder: false },
    {
      label: "Email",
      placeholder: "e.g. hello@elektrix.com",
      hasBorder: false,
    },
    {
      label: "Phone",
      placeholder: "e.g. (+91) 8912 3456 7890",
      hasBorder: false,
    },
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="relative w-full max-w-[1440px] mx-auto py-8 px-3 sm:py-16 md:py-20 lg:py-[150px] sm:px-4 md:px-6 lg:px-0">
      <div className="relative w-full max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start gap-6 sm:gap-8 md:gap-12 lg:gap-[77px]">
          {/* Left column with image and contact info */}
          <div className="flex flex-col w-full lg:w-[574px] items-start gap-4 sm:gap-6 lg:gap-8 transform transition-all duration-700 ease-out animate-in slide-in-from-left-8 fade-in">
            <div className="relative w-full h-[280px] xs:h-[320px] sm:h-[400px] md:h-[500px] lg:h-[697px] bg-[#c4c4c4] rounded-xl sm:rounded-2xl overflow-hidden group">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt="Contact Us - Get in touch with our team"
                src="https://img.freepik.com/premium-vector/contact-us-label-contact-information-about-company-individual_123447-6082.jpg"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <Card className="w-full bg-[#070700] rounded-xl sm:rounded-2xl border-none transform transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400/10 hover:-translate-y-1">
              <CardContent className="flex flex-col items-start gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8">
                <h3 className="w-fit mt-[-1.00px] font-semibold text-white text-base sm:text-lg lg:text-[21px] tracking-[-0.63px] leading-[25.2px] font-sans transition-colors duration-300 hover:text-yellow-400">
                  Contact Us!
                </h3>

                <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row lg:flex-wrap lg:items-center lg:gap-8 w-full">
                  {contactInfo.map((item, index) => (
                    <div
                      key={index}
                      className="inline-flex items-center gap-2.5 transform transition-all duration-300 hover:scale-105 hover:translate-x-2 cursor-pointer"
                      style={{
                        animationDelay: `${index * 200}ms`
                      }}
                    >
                      <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center transition-colors duration-300 hover:bg-yellow-400/30">
                        <span className="text-lg">{item.icon}</span>
                      </div>

                      <div className="inline-flex flex-col items-start gap-2">
                        <div className="self-stretch mt-[-1.00px] font-normal text-white text-sm leading-[14px] transition-colors duration-300">
                          {item.title}
                        </div>

                        <div className="self-stretch font-normal text-[#ffffff99] text-sm leading-[14px] transition-colors duration-300 hover:text-white">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right column with form */}
          <div className="flex flex-col items-center gap-4 sm:gap-6 lg:gap-8 flex-1 transform transition-all duration-700 ease-out animate-in slide-in-from-right-8 fade-in delay-300">
            <div className="inline-flex flex-col items-start gap-3 sm:gap-4 lg:gap-6 w-full">
              {/* V Logo + GET IN TOUCH */}
              <div className="flex items-center gap-2 transform transition-all duration-500 hover:scale-105">
                {/* Yellow V icon */}
                <span
                  className="font-extrabold text-lg sm:text-xl md:text-2xl"
                  style={{ color: "rgb(250 204 21)" }} // yellow-400
                  aria-hidden
                >
                  V
                </span>

                {/* <span className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 transition-transform duration-300 hover:rotate-12 inline-block text-lg">⚡</span> */}

                <div className="font-semibold text-xl sm:text-2xl lg:text-3xl tracking-[1.5px] leading-[26px] sm:leading-[30px] lg:leading-[36px]">
                  GET IN TOUCH
                </div>
              </div>

              <h2 className="self-stretch font-semibold text-[#070700] text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[-1.44px] leading-tight lg:leading-[57.6px] transition-colors duration-300 hover:text-gray-800">
                Reach Out For Expert Let&apos;s Contact Assistance
              </h2>

              <p className="w-full max-w-[626px] font-normal text-[#07070099] text-xs sm:text-sm lg:text-base leading-5 sm:leading-6 transition-colors duration-300 hover:text-[#070700cc]">
                Need electrical services? Contact our expert team for reliable
                solutions, professional advice, and quick assistance. We&apos;re
                ready to power your needs!
              </p>
            </div>

            <div className="gap-4 sm:gap-6 lg:gap-8 self-stretch w-full flex flex-col items-start">
              {/* First row of form fields */}
              <div className="flex flex-col gap-3 sm:gap-4 lg:flex-row lg:flex-wrap lg:items-center lg:gap-8 w-full">
                {formFields.slice(0, 2).map((field, index) => (
                  <div
                    key={index}
                    className="gap-2 sm:gap-3 flex-1 min-w-full lg:min-w-[250px] flex flex-col items-start transform transition-all duration-500 hover:-translate-y-1"
                    style={{
                      animationDelay: `${(index + 2) * 100}ms`
                    }}
                  >
                    <label className="self-stretch mt-[-1.00px] font-medium text-[#070700] text-xs sm:text-sm leading-[21px] transition-colors duration-300">
                      {field.label}
                    </label>
                    <Input
                      className={`h-[40px] sm:h-[45px] px-3 sm:px-4 py-2 sm:py-3 bg-[#f4f5f6] rounded-[24px] sm:rounded-[32px] text-xs sm:text-sm transition-all duration-300 hover:shadow-lg hover:bg-white focus:scale-[1.02] focus:shadow-xl border w-full ${field.hasBorder
                        ? "border-[#070700] focus:border-yellow-400"
                        : "border-[#0707001a] focus:border-yellow-400"
                        }`}
                      placeholder={field.placeholder}
                      value={formData[field.label.toLowerCase().replace(' ', '')]}
                      onChange={(e) => handleInputChange(field.label.toLowerCase().replace(' ', ''), e.target.value)}
                    />
                  </div>
                ))}
              </div>

              {/* Second row of form fields */}
              <div className="flex flex-col gap-3 sm:gap-4 lg:flex-row lg:flex-wrap lg:items-center lg:gap-8 w-full">
                {formFields.slice(2, 4).map((field, index) => (
                  <div
                    key={index}
                    className="gap-2 sm:gap-3 flex-1 min-w-full lg:min-w-[250px] flex flex-col items-start transform transition-all duration-500 hover:-translate-y-1"
                    style={{
                      animationDelay: `${(index + 4) * 100}ms`
                    }}
                  >
                    <label className="self-stretch mt-[-1.00px] font-medium text-[#070700] text-xs sm:text-sm leading-[21px] transition-colors duration-300">
                      {field.label}
                    </label>
                    <Input
                      className="h-[40px] sm:h-[45px] px-3 sm:px-4 py-2 sm:py-3 bg-[#f4f5f6] rounded-[24px] sm:rounded-[32px] border-[#0707001a] text-xs sm:text-sm transition-all duration-300 hover:shadow-lg hover:bg-white focus:scale-[1.02] focus:shadow-xl focus:border-yellow-400 border w-full"
                      placeholder={field.placeholder}
                      value={formData[field.label.toLowerCase()]}
                      onChange={(e) => handleInputChange(field.label.toLowerCase(), e.target.value)}
                    />
                  </div>
                ))}
              </div>

              {/* Service selection dropdown */}
              <div className="flex flex-col items-start gap-2 sm:gap-3 w-full transform transition-all duration-500 hover:-translate-y-1" style={{ animationDelay: '600ms' }}>
                <label className="self-stretch mt-[-1.00px] font-medium text-[#070700] text-xs sm:text-sm leading-[21px] transition-colors duration-300">
                  Choose Services
                </label>
                <Select onValueChange={(value) => handleInputChange('service', value)}>
                  <SelectTrigger className="w-full h-auto px-3 sm:px-4 py-2 sm:py-3 bg-[#f4f5f6] rounded-[24px] sm:rounded-[32px] border-[#0707001a] text-[#07070099] text-xs sm:text-sm transition-all duration-300 hover:shadow-lg hover:bg-white focus:scale-[1.02] focus:shadow-xl focus:border-yellow-400">
                    <SelectValue placeholder="Wiring & Installation" />
                  </SelectTrigger>
                </Select>
              </div>

              {/* Message textarea */}
              <div className="flex flex-col items-start gap-2 sm:gap-3 w-full transform transition-all duration-500 hover:-translate-y-1" style={{ animationDelay: '700ms' }}>
                <label className="self-stretch mt-[-1.00px] font-medium text-[#070700] text-xs sm:text-sm leading-[21px] transition-colors duration-300">
                  Message
                </label>
                <Textarea
                  className="h-[100px] sm:h-[120px] lg:h-[180px] px-3 sm:px-4 py-2 sm:py-3 bg-[#f4f5f6] rounded-xl sm:rounded-2xl border-[#0707001a] text-xs sm:text-sm resize-none transition-all duration-300 hover:shadow-lg hover:bg-white focus:scale-[1.02] focus:shadow-xl focus:border-yellow-400 border w-full"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                />
              </div>

              {/* Submit button */}
              <Button className="inline-flex items-center justify-center gap-1 pl-4 sm:pl-[18px] pr-1 sm:pr-2 py-1.5 sm:py-2 rounded-[24px] sm:rounded-[32px] shadow-[inset_0px_1px_1px_#e3eb00,inset_0px_-1px_4px_#e4ec00] bg-[linear-gradient(180deg,rgba(254,221,0,1)_0%,rgba(254,221,0,1)_100%)] text-[#070700] font-medium text-sm sm:text-base tracking-[-0.32px] transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1 active:scale-95 group" style={{ animationDelay: '800ms' }}>
                Submit
                <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center transition-transform duration-300 group-hover:rotate-12">
                  <span className="text-lg">→</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-in-from-left-8 {
          from { transform: translateX(-2rem); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes slide-in-from-right-8 {
          from { transform: translateX(2rem); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        .animate-in {
          animation-fill-mode: both;
          animation-duration: 0.7s;
          animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
        }

        .fade-in {
          animation-name: fade-in;
        }

        .slide-in-from-left-8 {
          animation-name: slide-in-from-left-8;
        }

        .slide-in-from-right-8 {
          animation-name: slide-in-from-right-8;
        }

        .delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </section>
  );
};