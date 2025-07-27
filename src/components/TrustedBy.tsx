const logos = [
  "https://framerusercontent.com/images/gtA2k0HxvLgyb2ShavqPh2ut8M.svg",
  "https://framerusercontent.com/images/v8pRoXjGv8Kuqg4GJYQjdWqJD0.svg",
  "https://framerusercontent.com/images/z6DLxkMPmuYBeO3zshpNfjAxLg8.svg",
  "https://framerusercontent.com/images/tnjkbQJwRbdGkxEcDO0Jqu1aTZM.svg",
  "https://framerusercontent.com/images/497xK9DhewPLaDj5d8bkw0cAg.svg",
];

export default function TrustedBy() {
  return (
    <section
      className="w-full py-12 sm:py-16 bg-black text-white"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1200"
    >
      <div className="font-inter text-[12px] leading-normal tracking-normal max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-sm text-gray-400 mb-6 sm:mb-8">
          Our services are featured on
        </p>

        <div className="relative w-full overflow-hidden">
          {/* Gradient Mask for Scroll Effect */}
          <div
            className="mx-auto w-full max-w-full sm:max-w-4xl overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          >
            <ul className="flex animate-scroll items-center gap-8 sm:gap-12 w-max">
              {[...logos, ...logos].map((logo, i) => (
                <li key={i} className="flex-shrink-0 w-24 h-10 sm:w-32 sm:h-12">
                  <img
                    src={logo}
                    alt={`Logo ${i}`}
                    className="w-full h-full object-contain pointer-events-none select-none"
                    draggable={false}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
