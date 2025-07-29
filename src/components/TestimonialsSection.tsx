import { Star } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section
      className="bg-black text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-20"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1200"
    >
      {/* Header */}
      <div className="text-center mb-10 sm:mb-12 md:mb-16">
        <div className="inline-block px-3 py-1 mb-3 sm:mb-4 rounded-full bg-white/10 text-xs sm:text-sm font-medium tracking-wide text-white">
          What Our Users Say
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-hero text-white pt-2 leading-tight">
          Trusted by Businesses Like Yours
        </h2>
      </div>

      {/* Main Testimonial */}
      <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-10 mb-12 sm:mb-16 md:mb-20 text-center md:text-left">
        <img
          src="/zapfast.jpeg"
          alt="Zapfast"
          className="w-full max-w-[350px] sm:w-[80%] md:w-[400px] h-[280px] sm:h-[250px] md:h-[300px] object-cover rounded-xl sm:rounded-2xl shadow-lg mx-auto"
        />

        <div className="w-full max-w-2xl">
          <h3 className="text-xl sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Zapfast</h3>
          <p className="text-base sm:text-base md:text-lg text-white mb-3 sm:mb-4 font-hero line-clamp-3 sm:line-clamp-none">
            "Automatix's fusion of AI and innovation set our project apart.
            Their solutions are second to none."
          </p>
          <div className="font-hero text-base sm:text-base md:text-lg text-white">Zidane Muharto</div>
          <div className="text-gray-400 text-sm sm:text-sm md:text-base">Chief Technology Officer</div>
          <div className="h-[1px] w-16 sm:w-20 bg-gray-600 my-3 sm:my-4 mx-auto md:mx-0" />
          <div className="flex flex-row gap-4 sm:gap-4 md:gap-12 text-white text-sm sm:text-sm md:text-base justify-center md:justify-start">
            <div>
              <span className="text-2xl sm:text-2xl md:text-3xl font-bold">73%</span>
              <br /> Sales increase in first month
            </div>
            <div>
              <span className="text-2xl sm:text-2xl md:text-3xl font-bold">5X</span>
              <br /> Faster customer resolutions
            </div>
          </div>
        </div>
      </div>

      {/* Sub Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        {/* Testimonial Item */}
        {[{
          company: "Creative Edge",
          quote: "The creativity and AI expertise from Automatix set a new benchmark for our industry. Highly recommended!",
          name: "Agus Blimbing",
          role: "Tech Manager"
        },
        {
          company: "BrightNest",
          quote: "Automatix's revolutionary AI approach and creative solutions elevated our project. Stellar performance!",
          name: "Steve Kebalen",
          role: "AI Developer"
        },
        {
          company: "PrimeCore",
          quote: "The blend of AI and creativity at Automatix transformed our vision into reality. Exceptional support!",
          name: "John Kepanjen",
          role: "E-Commerce Stacks"
        }].map((item, i) => (
          <div key={i} className="relative">
            <div className="text-center px-2 sm:px-4">
              <div className="text-gray-400 text-base sm:text-lg font-medium mb-1">{item.company}</div>
            <div className="flex justify-center mb-2">
              {Array(5).fill(0).map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
              ))}
              </div>
              <p className="text-sm sm:text-base md:text-lg font-hero text-gray-400 mb-3 sm:mb-4">"{item.quote}"</p>
              <div className="font-hero text-white text-sm sm:text-base md:text-lg">{item.name}</div>
              <div className="text-gray-400 text-xs sm:text-sm md:text-base">{item.role}</div>
            </div>
            
            {/* Separator Lines */}
            {/* Mobile: Horizontal line below each testimonial (except last) */}
            {i < 2 && (
              <div className="block md:hidden h-[1px] w-full bg-gray-700 mt-6 sm:mt-8" />
            )}
            
            {/* Desktop: Vertical line to the right of each testimonial (except last) */}
            {i < 2 && (
              <div className="hidden md:block absolute top-0 right-0 w-[1px] h-full bg-gray-700" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
