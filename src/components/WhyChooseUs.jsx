import iconTrust from '../assets/icons/trust.png'
import iconDelivery from '../assets/icons/delivery.png'
import iconQuality from '../assets/icons/quality.png'
import iconTime from '../assets/icons/time.png'
import iconPremiumLocation from '../assets/icons/premium-location.png'
import iconResidentialCommercial from '../assets/icons/residential-commercial.png'
import iconDialogue from '../assets/dialouge.svg'

export default function WhyChooseUs() {
  const features = [
    {
      iconSrc: iconTrust,
      title: 'Built on Four Decades of Trust',
      description:
        'With over 40+ years of business legacy, we bring credibility and long-term stability to every project.',
    },
    {
      iconSrc: iconDelivery,
      title: 'Delivered Ahead of Time',
      description:
        'We focus on only 3–4 projects at a time, ensuring meticulous execution and delivery before committed timelines.',
    },
    {
      iconSrc: iconQuality,
      title: 'Quality That Speaks for Itself',
      description:
        'We prioritise structural integrity, safety standards and enduring materials that stand the test of time.',
    },
    {
      iconSrc: iconTime,
      title: 'On-Time. Every Time.',
      description:
        'Our track record in early deliveries has built lasting confidence among homeowners and institutional partners.',
    },
    {
      iconSrc: iconPremiumLocation,
      title: 'Premium Locations, Thoughtful Planning',
      description:
        'Every development is placed in Chennai’s most strategic and high-value neighbourhoods, with layouts designed for real-world functionality.',
    },
    {
      iconSrc: iconResidentialCommercial,
      title: 'Residential, Commercial and Hospitality Expertise',
      description:
        'From large communities to five-star hotels and corporate offices, our portfolio reflects proven capability across sectors.',
    },
  ]

  return (
    <section className="relative bg-[#0f2447] text-white">
      <div className="mx-auto px-8 sm:px-12 lg:px-28 pt-16 lg:pt-24 pb-20 lg:pb-28">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-10">
          <div className="relative">
            <img src={iconDialogue} alt="" aria-hidden="true" className="absolute -left-6 md:-top-12 -top-7 md:size-24 size-16 select-none pointer-events-none" />
            <p className="uppercase font-sans tracking-[0.25em] text-sm text-[#B1A490]">Why choose us</p>
            <h2 className="mt-3 font-heading font-normal text-[30px] lg:text-[40px] leading-tight">
              Making living spaces
              <br />
              affordable
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {features.map(({ iconSrc, title, description }) => (
            <div key={title} className="flex flex-col items-start gap-4">
              <div className="size-16 sm:size-20 rounded-full bg-white/10 flex items-center justify-center">
                <img src={iconSrc} alt="" className="size-8 sm:size-10 object-contain" />
              </div>
              <h3 className="sm:text-2xl text-xl font-normal font-heading">{title}</h3>
              <p className="sm:text-lg text-base leading-6 text-[#F6E5CA] font-sans max-w-[360px]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


