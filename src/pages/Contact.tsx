import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen px-4 sm:px-6 py-12 sm:py-16 md:py-24 bg-black text-white pt-32 sm:pt-36 md:pt-24" data-aos="fade-up">
      <div className="max-w-5xl mx-auto text-center space-y-4 sm:space-y-6 pt-6 sm:pt-10">
        {/* Pill */}
        <div className="inline-block px-3 sm:px-4 py-1 mb-2 sm:mb-5 rounded-full bg-white/10 text-xs sm:text-sm font-medium tracking-wide">
          Let's Talk
        </div>

        {/* Heading & Paragraph */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-hero pt-1 sm:pt-3 leading-tight">
          We're Here To Help
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto pt-2 sm:pt-3 pb-4 sm:pb-5 px-2">
          Our team is ready to support you with expert advice & solutions.
        </p>

        {/* Form */}
        <div className="container mx-auto max-w-5xl bg-[#1a1a1a] p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-lg relative overflow-hidden">
          {/* Random White Effect */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl transform -translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/8 to-transparent rounded-full blur-2xl transform -translate-x-12 translate-y-12"></div>
          <div className="absolute top-1/2 left-0 w-20 h-20 bg-gradient-to-r from-white/6 to-transparent rounded-full blur-xl transform -translate-x-10"></div>
          
          <form className="mt-6 sm:mt-10 text-left space-y-8 sm:space-y-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-8 md:gap-10">
              <div className="space-y-3 sm:space-y-3">
                <label className="text-base sm:text-lg font-medium">Name*</label>
                <input
                  type="text"
                  placeholder="David Johnson"
                  className="w-full text-base sm:text-lg bg-transparent border-b border-gray-600 sm:border-gray-500 py-3 focus:outline-none placeholder-gray-500 sm:placeholder-gray-400 focus:border-orange-500 transition-colors"
                />
              </div>

              <div className="space-y-3 sm:space-y-3">
                <label className="text-base sm:text-lg font-medium">Email*</label>
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className="w-full text-base sm:text-lg bg-transparent border-b border-gray-600 sm:border-gray-500 py-3 focus:outline-none placeholder-gray-500 sm:placeholder-gray-400 focus:border-orange-500 transition-colors"
                />
              </div>

              <div className="space-y-3 sm:space-y-3">
                <label className="text-base sm:text-lg font-medium">Company Name*</label>
                <input
                  type="text"
                  placeholder="Ex.StaticMania"
                  className="w-full text-base sm:text-lg bg-transparent border-b border-gray-600 sm:border-gray-500 py-3 focus:outline-none placeholder-gray-500 sm:placeholder-gray-400 focus:border-orange-500 transition-colors"
                />
              </div>

              <div className="space-y-3 sm:space-y-3">
                <label className="text-base sm:text-lg font-medium">Select Service*</label>
                <select className="w-full bg-transparent border-b border-gray-600 sm:border-gray-500 py-3 focus:outline-none text-gray-500 text-base sm:text-lg focus:border-orange-500 transition-colors">
                  <option value="" disabled selected hidden>
                    Select Your service
                  </option>
                  <option className="bg-black">Analytics & Reporting</option>
                  <option className="bg-black">Brand Strategy</option>
                  <option className="bg-black">Event Planning</option>
                  <option className="bg-black">Advertising Campaigns</option>
                  <option className="bg-black">Consulting Services</option>
                </select>
              </div>

              <div className="space-y-3 sm:space-y-3">
                <label className="text-base sm:text-lg font-medium">Project Budget*</label>
                <select className="w-full bg-transparent border-b border-gray-600 sm:border-gray-500 py-3 focus:outline-none text-gray-500 text-base sm:text-lg focus:border-orange-500 transition-colors">
                  <option value="" disabled selected hidden>
                    Select Your Range
                  </option>
                  <option className="bg-black">Under $10.000</option>
                  <option className="bg-black">$10.000 - $25.000</option>
                  <option className="bg-black">$25.000 - $50.000</option>
                  <option className="bg-black">Above $50.000</option>
                  <option className="bg-black">Custom Budget</option>
                </select>
              </div>
            </div>

            {/* Textarea */}
            <div className="space-y-3 sm:space-y-3">
              <label className="text-base sm:text-lg font-medium">Project Details*</label>
              <textarea
                rows={4}
                placeholder="Tell us about your project"
                className="w-full text-base sm:text-lg bg-[#1a1a1a] text-white border-b border-gray-600 sm:border-gray-500 py-3 resize-none focus:outline-none placeholder-gray-500 sm:placeholder-gray-400 focus:border-orange-500 transition-colors"
              />
            </div>

            {/* Submit + Note */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
              <button className="bg-orange-500 text-white text-base sm:text-lg px-8 sm:px-11 py-3 rounded-md transition hover:bg-orange-600 w-full sm:w-auto">
                Submit <ArrowRight size={18} className="inline-block ml-2" />
              </button>
              <p className="text-sm sm:text-base md:text-lg text-gray-500 text-center sm:text-left">
                We will contact you within 24 business hours.
              </p>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left text-sm text-white border-t border-gray-700 pt-8 sm:pt-10">
          <div className="flex flex-col gap-2 pb-4 md:pb-0 md:pr-4 md:border-r md:border-gray-700 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-semibold flex items-center justify-center md:justify-start gap-2 mb-1">
              <FaMapMarkerAlt /> Head Office
            </h4>
            <p className="text-sm sm:text-base md:text-lg">
              5899 Alexys Highway Suite<br/> 678, NR, Nevada, USA
            </p>
          </div>

          <div className="flex flex-col gap-2 py-4 md:py-0 md:px-4 md:border-r md:border-gray-700 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-semibold flex items-center justify-center md:justify-start gap-2 mb-1">
              <FaPhone /> Phone
            </h4>
            <p className="text-sm sm:text-base md:text-lg">+1 234 567 890</p>
            <p className="text-sm sm:text-base md:text-lg">+1 234 567 890</p>
          </div>

          <div className="flex flex-col gap-2 pt-4 md:pt-0 md:pl-4 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-semibold flex items-center justify-center md:justify-start gap-2 mb-1">
              <FaEnvelope /> Email
            </h4>
            <p className="text-sm sm:text-base md:text-lg">customer@automx.com</p>
            <p className="text-sm sm:text-base md:text-lg">client@automx.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;











