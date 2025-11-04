export default function DistinctionHero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image - Full Frame */}
      <div className="relative w-full h-[500px] sm:h-[550px] lg:h-[613px] mx-auto">
        <img
          src="/images/full-frame.jpg"
          alt="Architectural Detail"
          className="w-full h-full object-cover"
        />

        {/* Content Container */}
        {/* Blue Box with Text */}
        <div
          className="absolute backdrop-blur-sm w-[95%] sm:w-[90%] md:w-[700px] lg:w-[900px] xl:w-[1030px] h-auto lg:h-[310px] top-[29px] sm:top-[100px] lg:top-[152px] right-0 sm:right-0 lg:right-0 p-6 pb-8 sm:p-8 lg:p-10 xl:p-[40px_50px]"
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
            className="absolute left-6 top-[30%] h-[70%] lg:h-auto lg:left-[350px] xl:left-[420px] lg:top-auto bottom-0 lg:translate-y-0"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 items-start lg:items-end w-full h-full pl-10 pr-2 lg:pl-0 lg:pr-0">
            {/* Left Side - Heading and Keywords */}
            <div>
              {/* Main Heading */}
              <h1 className="text-white text-[26px] sm:text-[32px] lg:text-[40px] font-normal leading-[1.3] lg:leading-[56px] tracking-normal mb-6 sm:mb-6 lg:mb-8" style={{ fontFamily: 'Marcellus, serif' }}>
                Where Distinction Finds<br />
                Its Address
              </h1>

              {/* Three Keywords */}
              <div className="space-y-0 mb-0">
                <p className="text-[12px] sm:text-[14px] lg:text-[16px] font-normal leading-[22px] lg:leading-[30px] tracking-normal uppercase" style={{ fontFamily: 'Mulish, sans-serif', color: '#B1A490' }}>
                  LEGACY.
                </p>
                <p className="text-[12px] sm:text-[14px] lg:text-[16px] font-normal leading-[22px] lg:leading-[30px] tracking-normal uppercase" style={{ fontFamily: 'Mulish, sans-serif', color: '#B1A490' }}>
                  LOCATION.
                </p>
                <p className="text-[12px] sm:text-[14px] lg:text-[16px] font-normal leading-[22px] lg:leading-[30px] tracking-normal uppercase" style={{ fontFamily: 'Mulish, sans-serif', color: '#B1A490' }}>
                  LUXURY.
                </p>
              </div>
            </div>

            {/* Right Side - Description */}
            <div className="mt-6 lg:mt-0 lg:ml-[-30px]">
              {/* Description Text */}
              <div>
                <p className="text-[13px] sm:text-[18px] lg:text-[20px] leading-[150%] sm:leading-[130%] lg:leading-[140%] tracking-[0.04em] sm:tracking-[0.06em] lg:tracking-[0.08em]" style={{ fontFamily: 'Mulish, sans-serif', fontWeight: 400, color: '#F6E5CA' }}>
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

