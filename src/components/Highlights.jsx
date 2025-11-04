export default function Highlights() {
  return (
    <section className="bg-[#1a2947] text-white py-8 sm:py-12 lg:py-24 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        {/* Section 1 - Discover Elevated Living */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-12 sm:mb-16 lg:mb-32 w-full overflow-hidden">
          {/* Left Image */}
          <div className="order-2 lg:order-1 relative w-full">
            <div className="w-full max-w-full lg:max-w-[755px] min-h-[300px] sm:min-h-[400px] lg:min-h-[550px] aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/images/balcony-1.jpg"
                alt="Luxury Balcony"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2 w-full overflow-hidden ">
            <img
              src="/images/horizontal-line.png"
              alt=""
              className="h-auto w-32 sm:w-40 mb-6 sm:mb-8"
              //  className="w-12 sm:w-16 mb-6 h-auto sm:mb-8"
            />

            <h2 
              className="text-[40px] font-normal leading-[56px] tracking-normal mb-4  w-full break-words"
              style={{ fontFamily: 'Marcellus, serif' }}
            >
              Discover Elevated Living at<br />
              The President
            </h2>

            <p 
              className="text-[16px] font-normal leading-[30px] tracking-normal uppercase mb-6  w-full" 
              style={{ fontFamily: 'Mulish, sans-serif', color: '#c9a961' }}
            >
              Limited Collection
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8 max-w-sm w-full">
              <div className="border border-white/30 p-4 sm:p-6 lg:p-8 text-center">
                <div 
                  className="text-[60px] font-normal leading-[100%] tracking-[0.05em] uppercase mb-2 sm:mb-3 text-[#D9D9D9]"
                  style={{ fontFamily: 'Marcellus, serif' }}
                >
                  77
                </div>
                <div 
                  className="text-[20px] font-normal leading-[100%] tracking-[0.08em] text-center"
                  style={{ fontFamily: 'Mulish, sans-serif', color: '#F6E5CA' }}
                >
                  luxury<br />residences
                </div>
              </div>
              <div className="border border-white/30 p-4 sm:p-6 lg:p-8 text-center">
                <div 
                  className="text-[60px]  leading-[100%] tracking-[0.05em] uppercase mb-2 sm:mb-3 text-[#D9D9D9]"
                  style={{ fontFamily: 'Marcellus, serif' }}
                >
                  2
                </div>
                <div 
                  className="text-[20px]  leading-[100%] tracking-[0.08em] text-center"
                  style={{ fontFamily: 'Mulish, sans-serif', color: '#F6E5CA' }}
                >
                  Sky<br />Villas
                </div>
              </div>
            </div>

            <p 
              className="text-[20px] leading-[150%] tracking-[0.08em]"
              style={{ fontFamily: 'Mulish, sans-serif', fontWeight: 400, color: '#F6E5CA' }}
            >
              ranging from 3,922 - 6,160 sq.ft.,<br />
              with the Sky Villas extending up<br />
              to 15,223 sq.ft.
            </p>
          </div>
        </div>

        {/* Section 2 - Highlights & Tour */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start w-full">
          {/* Left - Highlights */}
          <div className="w-full lg:w-[455px] lg:min-h-[1227px] overflow-hidden">
            {/* Logo */}
            <div className="mb-6 sm:mb-8">
              <img
                src="/images/president-logo.png"
                alt="The President by Asta"
                className="w-[180px] sm:w-[220px] lg:w-[251px] h-auto object-contain mb-4 sm:mb-6"
              />
              <img
                src="/images/horizontal-line.png"
                alt=""
                className="w-[180px] sm:w-[220px] lg:w-[251px] h-auto"
              />
            </div>

            <h3 className="text-[32px] sm:text-[45px] lg:text-[61.08px] leading-tight lg:leading-[78.53px] font-normal mb-6 sm:mb-8 tracking-normal text-white w-full break-words">Highlights</h3>

            {/* Highlights List */}
            <div className="space-y-4 sm:space-y-6 text-[16px] sm:text-[18px] lg:text-[20px] leading-[120%] sm:leading-[110%] lg:leading-[100%] tracking-[0.05em] sm:tracking-[0.06em] lg:tracking-[0.08em] w-full break-words" style={{ fontFamily: 'Mulish, sans-serif', color: '#F6E5CA' }}>
              <div className="flex items-start gap-3">
                <span className="text-[#B1A490] mt-1">•</span>
                <p>
                  <span className="font-bold">Iconic 22-storey tower</span> <span className="font-light">on RK Salai, a new chapter in Chennai's architectural legacy.</span>
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#B1A490] mt-1">•</span>
                <p>
                  <span className="font-bold">Only 4 bespoke residences per floor</span> <span className="font-light">for absolute privacy.</span>
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#B1A490] mt-1">•</span>
                <p>
                  <span className="font-bold">Sea-facing homes</span> <span className="font-light">with sweeping panoramic views.</span>
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#B1A490] mt-1">•</span>
                <p>
                  <span className="font-bold">Private pools</span> <span className="font-light">and terraces in Sky Villas</span>
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#B1A490] mt-1">•</span>
                <p>
                  <span className="font-bold">Double-height living spaces</span> <span className="font-light">designed for light, openness, and grandeur.</span>
                </p>
              </div>


              <div className="flex items-start gap-3">
                <span className="text-[#B1A490] mt-1">•</span>
                <p className="mb-2">
                  <span className="font-bold">Exclusive amenities</span> <span className="font-light"> across the Ground Floor and Sky Lounge, Including: Rooftop pool.</span>
                </p>
              </div>
              <div className="mt-4 sm:mt-6 lg:mt-8">
                <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 ml-3 sm:ml-4 font-light">
                  <li>Sky lounge</li>
                  <li>Banquet hall</li>
                  <li>Library cum yoga studio</li>
                  <li>Indoor games area</li>
                  <li>Zen garden</li>
                  <li>Therapeutic senior citizens' zone</li>
                  <li>Children's play area</li>
                  <li>Alfresco dining and party lawn</li>
                  <li>Dog walking trail</li>
                  <li>Picnic Ball Court</li>
                </ul>
              </div>

              <div className="mt-4 sm:mt-6 lg:mt-8 flex items-start gap-3">
                <span className="text-[#B1A490] mt-1">•</span>
                <p>
                  <span className="font-bold">Premium hardware</span> <span className="font-light">and curated interior finishes.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right - Building Image & Tour */}
          <div className="space-y-6 sm:space-y-8 mt-8 lg:mt-0 w-full overflow-hidden">
            <div className="w-full max-w-full lg:max-w-[755px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/images/flat-img.png"
                alt="The President Building"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Schedule Tour Box */}
            <div className="bg-[#1a2947]  rounded-none flex flex-col items-start w-full">
              <h4 
                className="text-[40px] font-normal leading-[56px] tracking-normal mb-4 sm:mb-6 text-white w-full"
                style={{ fontFamily: 'Marcellus, serif' }}
              >
                Schedule a Private Tour
              </h4>
              <p className="text-[16px] sm:text-[18px] lg:text-[20px] leading-[140%] tracking-[0.05em] sm:tracking-[0.06em] lg:tracking-[0.08em] mb-6 sm:mb-8 font-normal w-full" style={{ fontFamily: 'Futura Std, sans-serif', color: '#F6E5CA' }}>
                Experience the view from the top. Book a personalized walkthrough of The President by Asta today!
              </p>
              <button className="px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-white/40 hover:bg-white/10 transition-colors text-[12px] sm:text-[13px] tracking-[0.15em] font-medium text-white whitespace-nowrap">
                GET IN TOUCH
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

