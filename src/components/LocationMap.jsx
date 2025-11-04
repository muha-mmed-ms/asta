export default function LocationMap() {
  return (
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Map Image - Static Display */}
        <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-lg">
          <img
            src="/images/map.jpg"
            alt="Chennai Locations Map"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

