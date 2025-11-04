import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <section id="who-we-are" ref={ref} className="py-20 md:py-32 relative" style={{ backgroundColor: '#0F2847', overflow: 'visible' }}>
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image with Golden Curve */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative h-96 lg:h-[600px]"
            style={{ overflow: 'visible' }}
          >
            {/* Mustard semi-circle behind image bottom-left */}
            <div
              className="absolute z-0"
              style={{
                bottom: '0%',
                left: '0',
                width: '107%',
                height: '100%',
                backgroundColor: '#D4AF37',
                clipPath: 'ellipse(75% 65% at 18% 92%)',
                WebkitClipPath: 'ellipse(75% 65% at 18% 92%)',
              }}
            />
            {/* Building Image - Positioned on top of golden curve */}
            <div className="relative z-10 h-full w-full flex items-center justify-start">
              <img
                src="/images/whoweare.png"
                alt="About ASTA Properties"
                className="h-full w-auto object-contain"
                style={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  position: 'relative',
                  zIndex: 10
                }}
                onError={(e) => {
                  // Hide broken image - gradient background will show
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </motion.div>
          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10"
          >
            {/* Translucent droplet near eyebrow */}
            <div
              className="absolute -top-4 -left-4 w-32 h-32 bg-accent-beige rounded-full opacity-20 blur-2xl z-0"
            />
            <div className="relative z-10">
              {/* Eyebrow */}
              <p className="text-accent-beige text-sm font-medium uppercase tracking-wider mb-4 font-sans">
                WHO WE ARE
              </p>
              {/* H1 Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-heading">
                Homes, commercial spaces and hospitality
              </h1>
              {/* Body text - single paragraph with bold on brand name */}
              <p className="text-cream-light text-lg mb-8 leading-relaxed font-sans">
                <strong className="font-bold">Asta Properties</strong> is a Chennai-based real estate and hospitality company, founded by Vikram Agarwal, backed by over four decades of trust and nearly 30 years of experience in property development. We build structurally strong, functionally efficient residential, commercial, and hospitality projects that are consistently delivered on time. As pioneers of Chennai&apos;s real estate growth, our portfolio includes landmark residences, commercial spaces, and hospitality ventures such as Park Plaza and Radisson Blu in Egmore, developed and owned by the group under global hotel brands.
              </p>
              {/* CTA - Ghost button */}
              <Link to="/about">
                <button
                  type="button"
                  className="px-10 py-4 text-base font-normal uppercase tracking-wide transition-all duration-300 border border-white text-white hover:bg-white hover:text-primary-dark font-sans"
                >
                  more about us
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default About;