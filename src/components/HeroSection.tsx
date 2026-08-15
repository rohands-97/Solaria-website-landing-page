import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const HERO_IMAGE_URL = 'https://res.cloudinary.com/m3byv282/image/upload/f_auto,q_auto/Hero_Image';

export const HeroSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="hero-section"
      className="relative w-full bg-[#FAF7F0] pt-[60px] pb-16 sm:pb-20 md:pb-24"
      aria-label="Solaria Cement Hero"
    >
      <div className="mx-auto max-w-[1360px] px-6 sm:px-8 lg:px-12">
        {/* Intro Block: Headline, Subhead, CTA Buttons */}
        <div className="mx-auto max-w-[840px] text-center">
          {/* Headline */}
          <h1
            id="hero-headline"
            className="hero-headline text-center text-[#211f1c]"
            style={{
              fontFamily: "'Archivo', sans-serif",
              fontWeight: 800,
              fontSize: '48px',
              lineHeight: '56px',
              letterSpacing: '-0.96px',
              color: '#211f1c',
              textAlign: 'center',
            }}
          >
            <span>Trusted for </span>
            <span className="italic" style={{ fontStyle: 'italic' }}>
              150
            </span>
            <span> years</span>
          </h1>

          {/* Subhead */}
          <div
            id="hero-subhead"
            className="hero-subhead mx-auto mt-4 max-w-[620px] text-[#211F1C]"
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '28px',
              letterSpacing: '-0.32px',
              color: '#211F1C',
            }}
          >
            <p className="text-[#211F1C] text-[20px] leading-[28px]" style={{ color: '#211F1C', fontSize: '20px', lineHeight: '28px' }}>
              150 years of German engineering. Tested at every plant, in
            </p>
            <p className="text-[#211F1C] text-[20px] leading-[28px]" style={{ color: '#211F1C', fontSize: '20px', lineHeight: '28px' }}>
              every batch, before it reaches your site.
            </p>
          </div>

          {/* CTA Buttons Row */}
          <div
            id="hero-cta-group"
            className="mt-6 mb-[80px] flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#find-a-dealer"
              id="hero-primary-cta"
              className="btn-primary group inline-flex items-center justify-center gap-1.5 rounded-lg px-6 py-3 text-center transition-all duration-150 bg-[#e15118] text-white border border-[#e15118] hover:bg-[#c94512] hover:border-[#c94512] active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e15118] focus-visible:ring-offset-2 cursor-pointer shadow-sm"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '24px',
              }}
            >
              <span>Find a dealer</span>
              <ArrowRight
                className="h-4 w-4 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>

            <a
              href="#our-cement-section"
              id="hero-secondary-cta"
              className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-center transition-all duration-150 border border-[#211f1c] bg-transparent text-[#211f1c] hover:bg-[#211f1c]/5 active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#211f1c] focus-visible:ring-offset-2 cursor-pointer"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '24px',
              }}
            >
              <span>See our products</span>
            </a>
          </div>
        </div>

        {/* Inset Hero Image with Rounded Corners & Reveal Overlay Card */}
        <div
          id="hero-image-wrapper"
          className="relative mx-auto w-full overflow-hidden rounded-2xl md:rounded-3xl shadow-md border border-[#211f1c]/5 flex items-end justify-start min-h-[480px] sm:min-h-[580px] md:min-h-[660px] lg:min-h-[760px]"
        >
          <img
            src={HERO_IMAGE_URL}
            alt="Solaria cement manufacturing plant at twilight, showcasing illuminated German-engineered production facilities"
            className="absolute inset-0 w-full h-full object-cover object-center block"
            loading="eager"
            fetchPriority="high"
          />

          {/* Reveal Container: Aligned in bottom-left corner with 80px bottom and left padding */}
          <div className="relative z-10 w-full flex items-end justify-start p-5 sm:p-8 md:p-12 lg:pl-[80px] lg:pb-[80px] lg:pt-12 lg:pr-12">
            <motion.div
              id="hero-low-carbon-card"
              initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              style={{
                backgroundColor: 'rgba(33, 31, 28, 0.8)',
                borderRadius: '8px',
                padding: '24px',
                maxWidth: '680px',
              }}
              className="w-full max-w-[680px] shadow-2xl"
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h2
                  id="hero-overlay-headline"
                  className="font-black text-white text-[28px] leading-[34px] sm:text-[36px] sm:leading-[42px] md:text-[42px] md:leading-[50px] lg:text-[48px] lg:leading-[56px]"
                  style={{
                    fontFamily: "'Archivo Black', sans-serif",
                    letterSpacing: '-1.20px',
                    color: '#ffffff',
                    margin: 0,
                  }}
                >
                  Global leader in low-carbon cement
                </h2>

                <p
                  id="hero-overlay-subhead"
                  className="font-normal text-white"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontWeight: 400,
                    fontSize: 'clamp(16px, 1.5vw, 20px)',
                    lineHeight: 'clamp(24px, 2.1vw, 30px)',
                    letterSpacing: '-0.40px',
                    color: '#ffffff',
                    margin: 0,
                  }}
                >
                  Committed to a sustainable future, we are pioneering eco-friendly construction by maintaining one of the lowest carbon footprints in the industry.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
