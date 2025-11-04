export default function GetInTouch() {
  const locations = [
    {
      name: "Asta Arise",
      address: "8/91, CP Ramaswamy Road,\nAlwarpet, Chennai – 600018.",
      email: "info@astaproperties.com",
      phone: "+91 7550022222"
    },
    {
      name: "Asta AVM",
      address: "AVM Studio Complex, 38, Arcot Road,\nVadapalani, Chennai 600 026",
      email: "info@astaproperties.com",
      phone: "+91 7550022222"
    },
    {
      name: "Asta Aura",
      address: "Padmavathiar Salai, Gopalapuram,\nChennai, Tamil Nadu 600086",
      email: "info@astaproperties.com",
      phone: "+91 7550022222"
    },
    {
      name: "Corporate Office",
      address: "No 2, Ethiraj Salai, C-in-CRoad,\nEgmore, Tamil Nadu, 600008",
      email: "info@astaproperties.com",
      phone: "+91 7550022222"
    }
  ];

  return (
    <section className="bg-[#1a2947] text-white py-16 lg:py-20 w-full">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <p className="text-[11px] sm:text-[12px] tracking-[0.25em] uppercase text-[#B1A490] mb-4 font-light" style={{ fontFamily: 'Mulish, sans-serif' }}>
            GET IN TOUCH
          </p>
          <h2 className="text-[40px] sm:text-[45px] lg:text-[50px] font-normal leading-tight">
            Reach Us Across<br />Our Locations
          </h2>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {locations.map((location, index) => (
            <div key={index} className="">
              {/* Location Name */}
              <h3 className="text-[14px] sm:text-[20px] font-normal mb-5 text-white">
                {location.name}
              </h3>

              {/* Address */}
              <p 
                className="text-[#B1A490] text-[14px] font-normal leading-[30px] tracking-normal whitespace-pre-line"
                style={{ fontFamily: 'Mulish, sans-serif' }}
              >
                {location.address}
              </p>

              {/* Email */}
              <a
                href={`mailto:${location.email}`}
                className="text-[#B1A490] transition-colors text-[14px] font-normal leading-[30px] tracking-normal underline"
                style={{ 
                  fontFamily: 'Mulish, sans-serif',
                  textDecorationStyle: 'solid'
                }}
              >
                {location.email}
              </a>

              {/* Phone */}
              <a
                href={`tel:${location.phone.replace(/\s/g, '')}`}
                className="block text-[#B1A490] transition-colors text-[14px] font-normal leading-[30px] tracking-normal mb-4"
                style={{ fontFamily: 'Mulish, sans-serif' }}
              >
                {location.phone}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

