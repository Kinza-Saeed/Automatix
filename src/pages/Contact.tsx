import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen px-4 py-24 bg-black text-white " data-aos="fade-up">
      <div className="max-w-5xl mx-auto text-center space-y-6 pt-10">
        {/* Pill */}
        <div className="inline-block px-4 py-1 mb-5 rounded-full bg-white/10 text-sm font-medium tracking-wide  ">
          Let’s Talk
        </div>

        {/* Heading & Paragraph */}
        <h1 className="text-4xl md:text-5xl font-medium font-hero pt-3">We're Here To Help</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto pt-3 pb-5">
          Our team is ready to support you with expert advice & solutions.
        </p>

        {/* Form */}
        <div className="container mx-auto max-w-5xl bg-[#1a1a1a] p-10 rounded-3xl shadow-lg">
          <form className="mt-10 text-left space-y-8">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-3">
                <label className="text-lg font-medium">Name*</label>
                <input
                  type="text"
                  placeholder="David Johnson"
                  className="w-full text-lg bg-transparent border-b border-gray-500 py-2 focus:outline-none placeholder-gray-400"
                />
              </div>

              <div className="space-y-3">
                <label className="text-lg font-medium">Email*</label>
                <input
                  type="email"
                  placeholder="example@mail.com "
                  className="w-full text-lg bg-transparent border-b border-gray-500 py-2 focus:outline-none placeholder-gray-400"
                />
              </div>

              <div className="space-y-3">
                <label className="text-lg font-medium">Company Name*</label>
                <input
                  type="text"
                  placeholder="Ex.StaticMania"
                  className="w-full text-lg bg-transparent border-b border-gray-500 py-2 focus:outline-none placeholder-gray-400"
                />
              </div>

              <div className="space-y-3">
                <label className="text-lg font-medium">Select Service*</label>
                <select className="w-full bg-transparent border-b border-gray-500 py-2 focus:outline-none text-white">
                  <option value="" disabled selected hidden >
                    Select Your service
                  </option>
                  <option className="bg-black"  >Analytics & Reporting</option>
                  <option className="bg-black">Brand Strategy</option>
                  <option className="bg-black">Event Planning</option>
                  <option className="bg-black">Advertising Campaigns</option>
                  <option className="bg-black">Consulting Services</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-lg font-medium">Project Budget*</label>

                <select className="w-full bg-transparent border-b border-gray-500 py-2 focus:outline-none text-white">
                    <option  value="" disabled selected hidden >
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
            <div className="space-y-3">
              <label className="text-lg font-medium">Project Details*</label>
              <textarea
                rows={4}
                placeholder="Tell us about your project"
                className="w-full text-lg bg-[#1a1a1a] text-white border-b border-gray-500 py-2 resize-none focus:outline-none placeholder-gray-400"
              />
            </div>

            {/* Submit + Note */}
            <div className="flex items-center justify-between flex-wrap gap-4 pt-4">
              <button className="bg-orange-500 text-white text-lg px-11 py-3 rounded-md  transition">
                Submit <ArrowRight size={18} className="inline-block" />
              </button>
              <p className="text-lg text-white">
                We will contact you within 24 business hours.
              </p>
            </div>
          </form>
        </div>

        {/* Contact Info */}
      {/* Contact Info with Separators */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-left text-sm text-white border-t border-gray-700 pt-10">
          <div className="flex flex-col gap-2 pr-4 border-r border-gray-700">
            <h4 className="text-lg font-semibold flex items-center gap-2 mb-1">
              <FaMapMarkerAlt /> Head Office
            </h4>
            <p className="text-lg" >5899 Alexys Highway Suite<br/> 678, NR, Nevada, USA</p>
          </div>

          <div className="flex flex-col gap-2 px-4 border-r border-gray-700">
            <h4 className="text-lg font-semibold flex items-center gap-2 mb-1">
              <FaPhone /> Phone
            </h4>
            <p className="text-lg">+1 234 567 890</p>
            <p className="text-lg">+1 234 567 890</p>
          </div>

          <div className="flex flex-col gap-2 pl-4">
            <h4 className="text-lg font-semibold flex items-center gap-2 mb-1">
              <FaEnvelope /> Email
            </h4>
            <p className="text-lg">customer@automx.com</p>
            <p className="text-lg">client@automx.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;











