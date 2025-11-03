import { useEffect, useMemo, useRef, useState } from "react";

// Basic sample videos and posters; replace with real customer videos when available
const VIDEO_TESTIMONIALS = [
  {
    id: "mamus-stephen",
    name: "Mamus Stephen",
    src: "https://media.w3.org/2010/05/bunny/movie.mp4",
    poster: "/images/living-room-1.jpg",
  },
  {
    id: "nisha-arjun",
    name: "Nisha & Arjun",
    src: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    poster: "/images/bedroom-1.jpg",
  },
  {
    id: "sandeep-anjali",
    name: "Sandeep & Anjali",
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    poster: "/images/kitchen-1.jpg",
  },
  {
    id: "rahul-priya",
    name: "Rahul & Priya",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    poster: "/images/amenities-1.jpg",
  },
  {
    id: "vikram-neha",
    name: "Vikram & Neha",
    src: "https://media.w3.org/2010/05/video/movie_300.mp4",
    poster: "/images/outside-img.jpg",
  },
];

export default function Testimonials() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const videoRef = useRef(null);

  const selected = VIDEO_TESTIMONIALS[selectedIndex];

  useEffect(() => {
    if (!videoRef.current) return;
    // Reset the player when selection changes
    try {
      videoRef.current.pause();
      videoRef.current.load();
    } catch (_) {
      // no-op
    }
  }, [selectedIndex]);

  const { leftItems, rightItems } = useMemo(() => {
    // Arrange all other items in circular order starting after the selected,
    // then split half to the right and half to the left like a carousel.
    const total = VIDEO_TESTIMONIALS.length;
    const others = [];
    for (let step = 1; step < total; step += 1) {
      const idx = (selectedIndex + step) % total;
      others.push({ ...VIDEO_TESTIMONIALS[idx], idx });
    }
    const mid = Math.ceil(others.length / 2);
    return { rightItems: others.slice(0, mid), leftItems: others.slice(mid) };
  }, [selectedIndex]);

  return (
    <section id="testimonials" className="bg-[#0f2447] text-white py-16 lg:py-20">
      <div className="mx-auto px-6 sm:px-8 lg:px-12 xl:px-28">
        <h2 className="hidden mb-6 font-heading font-normal text-[32px] leading-tight">
          Testimonials
        </h2>
        {/* Desktop layout */}
        <div className="hidden lg:grid grid-cols-[220px_1fr_220px] gap-6 items-start">
          {/* Left rail: stack (carousel-left) */}
          <aside className="flex flex-col gap-4 max-h-[520px] overflow-y-auto no-scrollbar pr-1">
            <h2 className="mb-2 font-heading font-normal text-[32px] leading-tight">Testimonials</h2>
            <ThumbColumn
              items={leftItems}
              selectedIndex={selectedIndex}
              onSelect={setSelectedIndex}
            />
          </aside>

          {/* Main video as a horizontal carousel */}
          <div className="w-full">
            <div className="relative rounded-lg overflow-hidden border border-white/20 shadow-2xl">
              <div
                className="flex w-full h-[520px] transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
              >
                {VIDEO_TESTIMONIALS.map((item, idx) => (
                  <div key={item.id} className="w-full shrink-0 h-full relative">
                    {idx === selectedIndex ? (
                      <video
                        ref={videoRef}
                        className="w-full h-full object-cover bg-black"
                        poster={item.poster}
                        controls
                      >
                        <source src={item.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setSelectedIndex(idx)}
                        className="group w-full h-full"
                        aria-label={`Open testimonial: ${item.name}`}
                      >
                        <img src={item.poster} alt={item.name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#0f2447]">
                            ▶
                          </span>
                        </div>
                      </button>
                    )}
                  </div>
                ))}
              </div>
              {/* Prev / Next controls */}
              {/* <button
                type="button"
                className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-[#0f2447] hover:bg-white"
                onClick={() => setSelectedIndex((selectedIndex - 1 + VIDEO_TESTIMONIALS.length) % VIDEO_TESTIMONIALS.length)}
                aria-label="Previous testimonial"
              >
                ‹
              </button> */}
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-[#0f2447] hover:bg-white"
                onClick={() => setSelectedIndex((selectedIndex + 1) % VIDEO_TESTIMONIALS.length)}
                aria-label="Next testimonial"
              >
                ›
              </button>
            </div>
          </div>

          {/* Right rail: selected name + stack (carousel-right) */}
          <aside className="flex flex-col gap-4 items-end max-h-[520px] overflow-y-auto no-scrollbar pl-1">
            <div className="w-full">
              <p className="text-right font-heading text-xl">{selected.name}</p>
            </div>
            <ThumbColumn
              items={rightItems}
              selectedIndex={selectedIndex}
              onSelect={setSelectedIndex}
              align="end"
            />
          </aside>
        </div>

        {/* Mobile layout */}
        <div className="lg:hidden">
          <h2 className="font-heading font-normal text-[28px]">Testimonials</h2>
          <div className="mt-4 rounded-lg overflow-hidden border border-white/20 shadow-xl">
            <video
              ref={videoRef}
              className="w-full h-56 sm:h-72 object-cover bg-black"
              poster={selected.poster}
              controls
            >
              <source src={selected.src} type="video/mp4" />
            </video>
          </div>
          <p className="mt-3 text-base">{selected.name}</p>
          <div className="mt-6 -mx-2 flex gap-3 overflow-x-auto no-scrollbar px-2">
            {VIDEO_TESTIMONIALS.map((item, idx) => (
              <Thumb
                key={item.id}
                item={item}
                isActive={idx === selectedIndex}
                onClick={() => setSelectedIndex(idx)}
                variant="landscape"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ThumbColumn({ items, selectedIndex, onSelect, align = "start" }) {
  return (
    <div className={`flex flex-col gap-4 items-${align}`}>
      {items.map((item) => (
        <Thumb
          key={item.id}
          item={item}
          isActive={item.idx === selectedIndex}
          onClick={() => onSelect(item.idx)}
        />
      ))}
    </div>
  );
}

function Thumb({ item, isActive, onClick, variant = "portrait" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative ${
        variant === "portrait" ? "w-[200px] h-[260px]" : "w-[200px] h-[112px]"
      } overflow-hidden rounded-md border transition ${
        isActive ? "border-white" : "border-white/20 hover:border-white/40"
      }`}
      aria-label={`Play testimonial: ${item.name}`}
    >
      <img
        src={item.poster}
        alt={item.name}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#0f2447]">
          {/* triangle play icon */}
          ▶
        </span>
      </div>
    </button>
  );
}

