export default function PropertyShowcase() {
  return (
    <section className="bg-[#1a2947] text-white py-16 lg:py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section 1 - Above the Waves */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-20 lg:mb-32">
          {/* Left Content */}
          <div>
            {/* Logo */}
            <div className="mb-8 lg:mb-12">
              <div className="inline-block">
                <h1 className="text-2xl sm:text-3xl font-normal tracking-wider mb-1">
                  THE
                </h1>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-wider border-l-4 border-white pl-3 mb-1">
                  PRESIDENT
                </h1>
                <p className="text-sm tracking-[0.3em] text-white/80 ml-3">
                  BY ASTA
                </p>
              </div>
              <div className="w-32 h-px bg-white/40 mt-6"></div>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight mb-6">
              Above the Waves,<br />
              Beyond Ordinary Living
            </h2>

            {/* Description */}
            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-lg">
              Where legacy meets luxury. Rising proudly on the iconic RK Salai which was once home to the legendary Hotel President, this 22-storey landmark by Asta redefines Chennai's skyline.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/images/living-room-1.jpg"
                alt="Luxury Living Room Interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Section 2 - Discover Residences */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Image */}
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/images/outside-img.jpg"
                alt="Building Exterior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight mb-6">
              Discover spacious<br />
              3, 4 & 5 BHK residences
            </h2>

            {/* Description */}
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-6">
              and two exclusive Sky Villas, designed with precision and timeless sophistication, offering panoramic sea views and private pools.
            </p>

            <div className="w-24 h-px bg-[#c9a961] mt-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

