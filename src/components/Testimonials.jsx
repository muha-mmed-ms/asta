import React from "react";
import { useEffect, useMemo, useState } from "react";

// Helpers to construct YouTube thumbnails
function getYouTubeId(url) {
  try {
    const u = new URL(url);
    if (u.hostname === "youtu.be") return u.pathname.slice(1);
    if (u.searchParams.get("v")) return u.searchParams.get("v");
    const parts = u.pathname.split("/");
    return parts[parts.length - 1] || "";
  } catch (_) {
    return "";
  }
}

const VIDEO_TESTIMONIALS = [
  {
    id: "mamus-stephen",
    name: "Mamus Stephen",
    src: "https://www.youtube.com/watch?v=Nqx43k1PMBk",
    poster: `https://img.youtube.com/vi/${getYouTubeId("https://www.youtube.com/watch?v=Nqx43k1PMBk")}/hqdefault.jpg`,
  },
  {
    id: "nisha-arjun",
    name: "Nisha & Arjun",
    src: "https://www.youtube.com/watch?v=tfrnf25DY9o",
    poster: `https://img.youtube.com/vi/${getYouTubeId("https://www.youtube.com/watch?v=tfrnf25DY9o")}/hqdefault.jpg`,
  },
  {
    id: "sandeep-anjali",
    name: "Sandeep & Anjali",
    src: "https://www.youtube.com/watch?v=-X9mhaE5COo",
    poster: `https://img.youtube.com/vi/${getYouTubeId("https://www.youtube.com/watch?v=-X9mhaE5COo")}/hqdefault.jpg`,
  },
  {
    id: "rahul-priya",
    name: "Rahul & Priya",
    src: "https://www.youtube.com/watch?v=-soACy5ME20",
    poster: `https://img.youtube.com/vi/${getYouTubeId("https://www.youtube.com/watch?v=-soACy5ME20")}/hqdefault.jpg`,
  },
  {
    id: "vikram-neha",
    name: "Vikram & Neha",
    src: "https://www.youtube.com/watch?v=2XMG-OIWKyY",
    poster: `https://img.youtube.com/vi/${getYouTubeId("https://www.youtube.com/watch?v=2XMG-OIWKyY")}/hqdefault.jpg`,
  },
];

export default function Testimonials() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false); // desktop player
  const [isPlayingMobile, setIsPlayingMobile] = useState(false); // mobile player

  const selected = VIDEO_TESTIMONIALS[selectedIndex];
  const total = VIDEO_TESTIMONIALS.length;
  const prevIndex = (selectedIndex - 1 + total) % total;
  const nextIndex = (selectedIndex + 1) % total;
  
  // Reset play state when the selected video changes
  // so each new selection shows the preview first
  // and starts playing only on user interaction.
  useEffect(() => {
    setIsPlaying(false);
    setIsPlayingMobile(false);
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
      <div className="mx-auto">
        {/* Desktop layout */}
        <div className="hidden lg:grid grid-cols-[450px_1fr_450px] gap-8 items-end">
          {/* Left rail: heading + smaller previous preview */}
          <aside className="pr-1 flex flex-col gap-4 ">
            <h2 className="font-heading font-normal text-[32px] leading-tight text-right ">Testimonials</h2>
            <Thumb
              item={VIDEO_TESTIMONIALS[prevIndex]}
              isActive={false}
              onClick={() => setSelectedIndex(prevIndex)}
              variant="landscape"
              className="w-full h-[320px]"
            />
          </aside>

          {/* Main video */}
          <div className="w-full">
            <div className="relative rounded-lg overflow-hidden border border-white/20 shadow-2xl">
              <div
                className="flex w-full h-[520px] transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
              >
                {VIDEO_TESTIMONIALS.map((item, idx) => (
                  <div key={item.id} className="w-full shrink-0 h-full relative">
                    {idx === selectedIndex ? (
                      isPlaying ? (
                        <iframe
                          src={`https://www.youtube.com/embed/${getYouTubeId(item.src)}?autoplay=1&rel=0&modestbranding=1&playsinline=1&origin=${encodeURIComponent(window.location.origin)}`}
                          title={item.name}
                          className="w-full h-full"
                          allow="autoplay; encrypted-media; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <button
                          type="button"
                          onClick={() => setIsPlaying(true)}
                          className="group w-full h-full"
                          aria-label={`Play testimonial: ${item.name}`}
                        >
                          <img src={item.poster} alt={item.name} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-[#0f2447]">
                              ▶
                            </span>
                          </div>
                        </button>
                      )
                    ) : (
                      <button
                        type="button"
                        onClick={() => setSelectedIndex(idx)}
                        className="group w-full h-full"
                        aria-label={`Open testimonial: ${item.name}`}
                      >
                        <img src={item.poster} alt={item.name} className="w-full h-full object-cover" />
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
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-[#0f2447] hover:bg-white"
                onClick={() => setSelectedIndex((selectedIndex + 1) % VIDEO_TESTIMONIALS.length)}
                aria-label="Next testimonial"
              >
                ›
              </button>
              <button
                type="button"
                className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-[#0f2447] hover:bg-white"
                onClick={() => setSelectedIndex((selectedIndex - 1 + VIDEO_TESTIMONIALS.length) % VIDEO_TESTIMONIALS.length)}
                aria-label="Previous testimonial"
              >
                ‹
              </button>
            </div>
          </div>

          {/* Right rail: name heading + smaller next preview */}
          <aside className="pl-1 flex flex-col gap-4 items-end">
            <div className="w-full text-left">
              <p className="font-heading text-xl">{selected.name}</p>
              <div className=" mt-2 h-px w-40 bg-white/60" />
            </div>
            <Thumb
              item={VIDEO_TESTIMONIALS[nextIndex]}
              isActive={false}
              onClick={() => setSelectedIndex(nextIndex)}
              variant="landscape"
              className="w-full h-[320px]"
            />
          </aside>
        </div>

        {/* Mobile layout */}
        <div className="lg:hidden">
          <h2 className="font-heading font-normal text-[28px]">Testimonials</h2>
          <div className="mt-4 rounded-lg overflow-hidden border border-white/20 shadow-xl">
            <div className="w-full h-56 sm:h-72 relative">
              {isPlayingMobile ? (
                <iframe
                  src={`https://www.youtube.com/embed/${getYouTubeId(selected.src)}?autoplay=1&rel=0&modestbranding=1&playsinline=1&origin=${encodeURIComponent(window.location.origin)}`}
                  title={selected.name}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setIsPlayingMobile(true)}
                  className="group w-full h-full"
                  aria-label={`Play testimonial: ${selected.name}`}
                >
                  <img src={selected.poster} alt={selected.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#0f2447]">▶</span>
                  </div>
                </button>
              )}
            </div>
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

// function Thumb({ item, isActive, onClick, variant = "portrait", className = "" }) {
//   const aspect = variant === "portrait" ? "aspect-[9/16]" : "aspect-video"; // 16:9

//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       aria-label={`Play testimonial: ${item.name}`}
//       className={`group relative w-[200px] ${aspect} ${className} overflow-hidden rounded-md border transition ${
//         isActive ? "border-white" : "border-white/20 hover:border-white/40"
//       }`}
//     >
//       {/* Make the image fill & crop instead of letterboxing */}
//       <img
//         src={item.poster}
//         alt={item.name}
//         className="absolute inset-0 h-full w-full object-cover object-center [clip-path:inset(12%_0_12%_0)]"
//         loading="lazy"
//       />

//       {/* centered play button */}
//       <div className="absolute inset-0 flex items-center justify-center">
//         <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#0f2447]">
//           ▶
//         </span>
//       </div>
//     </button>
//   );
// }



function getYoutubeIdFromPoster(poster) {
  // Matches both i.ytimg.com and img.youtube.com formats
  const m = poster.match(/\/vi\/([^/]+)/);
  return m ? m[1] : null;
}

function buildYoutubeThumbChain(videoId) {
  // 16:9 first, then degrade if unavailable
  return [
    `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
    `https://i.ytimg.com/vi/${videoId}/hq720.jpg`,
    `https://i.ytimg.com/vi/${videoId}/sddefault.jpg`,
    `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`,
  ];
}

function Thumb({
  item,
  isActive,
  onClick,
  variant = "portrait",
  className = "",
}) {
  const aspect = variant === "portrait" ? "aspect-[9/16]" : "aspect-video"; // 16:9 box
  const explicitVideoId = item.videoId; // optional: pass videoId directly if you have it

  // If poster is a YouTube hqdefault (4:3 letterboxed), build a better chain
  const posterIsYt = /(?:i\.ytimg|img\.youtube)\.com\/vi\//.test(item.poster);
  const posterLooksLetterboxed = /hqdefault\.jpg$/i.test(item.poster);

  const inferredId = posterIsYt ? getYoutubeIdFromPoster(item.poster) : null;
  const sourceChain =
    explicitVideoId
      ? buildYoutubeThumbChain(explicitVideoId)
      : inferredId && posterLooksLetterboxed
      ? buildYoutubeThumbChain(inferredId)
      : [item.poster];

  const [idx, setIdx] = React.useState(0);
  const src = sourceChain[idx];

  // If we're stuck with hqdefault.jpg, gently crop the letterbox
  const shouldCrop = /hqdefault\.jpg$/i.test(src);

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Play testimonial: ${item.name}`}
      className={`group relative w-[200px] ${aspect} ${className} overflow-hidden rounded-md border transition ${
        isActive ? "border-white" : "border-white/20 hover:border-white/40"
      }`}
    >
      <img
        src={src}
        alt={item.name}
        loading="lazy"
        onError={() => setIdx((i) => (i < sourceChain.length - 1 ? i + 1 : i))}
        className={[
          "absolute inset-0 h-full w-full object-cover object-center",
          // crop only when forced to use hqdefault
          shouldCrop ? "[clip-path:inset(12%_0_12%_0)]" : "",
        ].join(" ")}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#0f2447]">
          ▶
        </span>
      </div>
    </button>
  );
}


