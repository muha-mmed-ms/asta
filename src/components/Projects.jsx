import { useRef } from 'react'
import presidentImg from '../assets/projects/president.png'
import auraImg from '../assets/projects/asta-aura.png'
import ariseImg from '../assets/projects/arise.png'
import aspireImg from '../assets/projects/aspire.png'
import avmImg from '../assets/projects/avm.png'
import parkPlazaImg from '../assets/projects/park-plaza.png'
import radisonImg from '../assets/projects/radison.png'
import hdfcImg from '../assets/projects/hdfc-bank.png'
import hclImg from '../assets/projects/hcl-tech.png'

export default function Projects() {
  const scrollerRef = useRef(null)

  const scrollByCards = (direction) => {
    const container = scrollerRef.current
    if (!container) return
    const card = container.querySelector('[data-card]')
    const offset = card ? card.clientWidth + 24 : 320
    const maxScrollLeft = container.scrollWidth - container.clientWidth
    const nextLeft = container.scrollLeft + direction * offset

    if (direction > 0) {
      if (container.scrollLeft >= maxScrollLeft - 4) {
        // already at the end → wrap to start
        container.scrollTo({ left: 0, behavior: 'smooth' })
        return
      }
      if (nextLeft > maxScrollLeft) {
        // show the last card fully first
        container.scrollTo({ left: maxScrollLeft, behavior: 'smooth' })
        return
      }
    } else {
      if (container.scrollLeft <= 4) {
        // already at the start → wrap to end
        container.scrollTo({ left: maxScrollLeft, behavior: 'smooth' })
        return
      }
      if (nextLeft < 0) {
        // show the first card fully first
        container.scrollTo({ left: 0, behavior: 'smooth' })
        return
      }
    }

    container.scrollTo({ left: Math.max(0, Math.min(maxScrollLeft, nextLeft)), behavior: 'smooth' })
  }

  const projects = [
    {
      id: 'president',
      status: 'ONGOING',
      tag: 'RK SALAI',
      title: 'The President',
      description:
        'A 22-storey landmark with 77 luxury residences and 2 exclusive Sky Villas, offering panoramic sea views and timeless elegance.',
      details: 'RESIDENCES',
      image: presidentImg,
    },
    {
      id: 'aura',
      status: 'ONGOING',
      tag: 'GOPALAPURAM',
      title: 'Asta Aura',
      description:
        'Limited collection of 4.5 & 5.6 BHK luxury residences ranging from 4246 sqft – 8825 sqft.',
      details: 'RESIDENCES',
      image: auraImg,
    },
    {
      id: 'arise',
      status: 'SOLD OUT',
      tag: 'RESIDENTIAL',
      title: 'Asta Arise',
      description:
        'Premium residences thoughtfully designed for elevated urban living.',
      details: 'RESIDENCES',
      image: ariseImg,
    },
    {
      id: 'aspire',
      status: 'COMPLETED',
      tag: 'RESIDENTIAL',
      title: 'Asta Aspire',
      description:
        'Contemporary homes with refined finishes, efficient layouts and amenities.',
      details: 'RESIDENCES',
      image: aspireImg,
    },
    {
      id: 'avm',
      status: 'SOLD OUT',
      tag: 'RESIDENTIAL',
      title: 'Asta AVM',
      description:
        'Exclusive residences in a vibrant community setting.',
      details: 'RESIDENCES',
      image: avmImg,
    },
    {
      id: 'park-plaza',
      status: 'COMPLETED',
      tag: 'HOTELS',
      title: 'Park Plaza (Radisson)',
      description:
        'Upscale hotel development with banquet and dining experiences.',
      details: 'HOSPITALITY',
      image: parkPlazaImg,
    },
    {
      id: 'radisson',
      status: 'COMPLETED',
      tag: 'HOTELS',
      title: 'Radisson',
      description:
        'Premium hospitality project delivered to international standards.',
      details: 'HOSPITALITY',
      image: radisonImg,
    },
    {
      id: 'hdfc',
      status: 'COMPLETED',
      tag: 'COMMERCIAL',
      title: 'HDFC Bank',
      description:
        'Spacious, client-focused commercial development for a leading bank.',
      details: 'COMMERCIAL',
      image: hdfcImg,
    },
    {
      id: 'hcl',
      status: 'COMPLETED',
      tag: 'COMMERCIAL',
      title: 'HCL Technologies',
      description:
        'Built for long-term operational efficiency with high-quality infrastructure.',
      details: 'COMMERCIAL',
      image: hclImg,
    },
  ]

  return (
    <section className="bg-[#122549] text-white py-16 lg:py-24 w-full">
      <div className=" mx-auto px-6 sm:px-8 lg:px-28 grid lg:grid-cols-[360px_1fr] gap-10 lg:gap-16 items-start">
        <div className="sticky top-6">
          <div className="flex items-center gap-3 text-white/70 mb-6">
            <span className="inline-block w-8 h-8 rounded-full border border-white/30" />
            <span className="tracking-[0.25em] text-xs">WHAT WE BUILD</span>
          </div>
          <h2 className="font-normal text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">Explore our
            <br />projects</h2>
          <div className="flex items-center gap-4">
            <a href="#projects" className="inline-flex items-center justify-center px-5 py-3 border border-white/30 rounded-md text-sm hover:bg-white hover:text-[#122549] transition">VIEW ALL PROJECTS</a>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <button aria-label="Previous" onClick={() => scrollByCards(-1)} className="w-10 h-10 rounded-full grid place-items-center border border-white/30 hover:bg-white hover:text-[#122549] transition">←</button>
            <button aria-label="Next" onClick={() => scrollByCards(1)} className="w-10 h-10 rounded-full grid place-items-center border border-white/30 hover:bg-white hover:text-[#122549] transition">→</button>
          </div>
        </div>

        <div className="overflow-x-auto no-scrollbar" ref={scrollerRef} id="projects">
          <div className="flex gap-6 min-w-max pr-8 lg:pr-32">
            {projects.map((p) => (
              <article
                key={p.id}
                data-card
                className="bg-white text-[#0f223f] rounded-lg overflow-hidden shadow-sm w-[320px] sm:w-[360px] flex-shrink-0"
              >
                <div className="relative">
                  <img src={p.image} alt={p.title} className="h-60 w-full object-cover" />
                  <span className="absolute top-3 right-3 text-[10px] tracking-widest bg-[#122549] text-white px-2 py-1 rounded">
                    {p.status}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-[10px] tracking-[0.3em] text-[#6b7280] mb-2">{p.tag}</p>
                  <h3 className="text-xl font-normal mb-2 text-[#122549]">{p.title}</h3>
                  <p className="text-sm text-[#334155] leading-relaxed mb-4">{p.description}</p>
                  <div className="text-[11px] tracking-[0.25em] text-[#6b7280]">{p.details}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


