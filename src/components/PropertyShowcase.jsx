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
              <img 
                src="/images/president-logo.png" 
                alt="The President by Asta"
                className="h-24 sm:h-28 lg:h-32 w-auto"
              />
              <img 
                src="/images/horizontal-line.png" 
                alt=""
                className="mt-6 h-auto w-32 sm:w-40"
              />
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight mb-6">
              Above the Waves,<br />
              Beyond Ordinary Living
            </h2>

            {/* Description */}
            <p className="text-[20px] leading-[150%] tracking-[0.08em] max-w-lg font-normal" style={{ fontFamily: 'Mulish, sans-serif', color: '#F6E5CA' }}>
              Where legacy meets luxury. Rising proudly on the iconic RK Salai which was once home to the legendary Hotel President, this 22-storey landmark by Asta redefines Chennai's skyline.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="w-full max-w-[755px] aspect-[755/422] rounded-lg overflow-hidden shadow-2xl">
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
            <div className="w-full max-w-[755px] aspect-[755/422] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/images/outside-img.jpg"
                alt="Building Exterior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight mb-6">
              Discover spacious<br />
              3, 4 & 5 BHK residences
            </h2>

            {/* Description */}
            <p className="text-[20px] leading-[150%] tracking-[0.08em] max-w-lg font-normal mb-8" style={{ fontFamily: 'Mulish, sans-serif', color: '#F6E5CA' }}>
              and two exclusive Sky Villas, designed with precision and timeless sophistication, offering panoramic sea views and private pools.
            </p>

            <img 
              src="/images/horizontal-line.png" 
              alt=""
              className="h-auto w-32 sm:w-40"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

