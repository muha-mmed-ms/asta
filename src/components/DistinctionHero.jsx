export default function DistinctionHero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image - Full Frame */}
      <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[613px] mx-auto">
        <img
          src="/images/full-frame.jpg"
          alt="Architectural Detail"
          className="w-full h-full object-cover"
        />
      
        {/* Content Container */}
        {/* Blue Box with Text */}
        <div 
          className="absolute backdrop-blur-sm w-[90%] sm:w-[90%] md:w-[700px] lg:w-[900px] xl:w-[1030px] h-auto lg:h-[310px] top-[50px] sm:top-[80px] lg:top-[152px] left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-0 lg:right-0 p-6 sm:p-8 lg:p-10 xl:p-[40px_50px]"
          style={{
            backgroundImage: 'url(/images/blue-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
            {/* Vertical Line - Positioned on left for mobile, bottom for desktop */}
            <img 
              src="/images/vertical-line.png" 
              alt="" 
              className="absolute left-4 top-1/2 -translate-y-1/2 h-[60%] lg:h-auto lg:left-[350px] xl:left-[420px] lg:top-auto lg:bottom-0 lg:translate-y-0"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-end w-full h-full pl-8 lg:pl-0">
              {/* Left Side - Heading and Keywords */}
              <div>
                {/* Main Heading */}
                <h1 className="text-white text-[28px] sm:text-[32px] lg:text-[40px] font-normal leading-tight lg:leading-[56px] tracking-normal mb-4 sm:mb-6 lg:mb-8" style={{ fontFamily: 'Marcellus, serif' }}>
                  Where Distinction Finds<br />
                  Its Address
                </h1>

                {/* Three Keywords */}
                <div className="space-y-0 mb-0">
                  <p className="text-[13px] sm:text-[14px] lg:text-[16px] font-normal leading-[24px] lg:leading-[30px] tracking-normal uppercase" style={{ fontFamily: 'Mulish, sans-serif', color: '#B1A490' }}>
                    LEGACY
                  </p>
                  <p className="text-[13px] sm:text-[14px] lg:text-[16px] font-normal leading-[24px] lg:leading-[30px] tracking-normal uppercase" style={{ fontFamily: 'Mulish, sans-serif', color: '#B1A490' }}>
                    LOCATION
                  </p>
                  <p className="text-[13px] sm:text-[14px] lg:text-[16px] font-normal leading-[24px] lg:leading-[30px] tracking-normal uppercase" style={{ fontFamily: 'Mulish, sans-serif', color: '#B1A490' }}>
                    LUXURY
                  </p>
                </div>
              </div>

              {/* Right Side - Description */}
              <div className="mt-6 lg:mt-0 lg:ml-[-30px]">
                {/* Description Text */}
                <div>
                  <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-normal leading-[120%] sm:leading-[110%] lg:leading-[100%] tracking-[0.05em] sm:tracking-[0.06em] lg:tracking-[0.08em]" style={{ fontFamily: 'Mulish, sans-serif', color: '#F6E5CA' }}>
                    The President by Asta stands at the confluence of Chennai's cultural heritage and contemporary sophistication. RK Salai that was once graced by Dr. S. Radhakrishnan, remains a symbol of prestige, with The President redefining its skyline for a new era.
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}

