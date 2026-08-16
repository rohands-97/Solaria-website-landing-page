import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface ProductCardData {
  id: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt: string;
}

const PRODUCTS: ProductCardData[] = [
  {
    id: 'card-opc-43',
    title: 'Solaria OPC 43',
    description:
      'Mixed with water, sand, and aggregate for the everyday work of a build — walls, floors, plaster, and masonry. The cement most homes are built with, start to finish.',
    imageSrc: 'https://res.cloudinary.com/m3byv282/image/upload/v1786798920/Solaria_OPC_34_img.png',
    imageAlt: 'Construction professional smoothly applying cement plaster to exterior wall',
  },
  {
    id: 'card-opc-53',
    title: 'Solaria OPC 53',
    description:
      "The highest-strength OPC grade under BIS standard IS 269:2015. Built for structure that has to carry weight — columns, beams, high-rise cores, and precast elements. Where failure isn't an option, this is the grade contractors specify.",
    imageSrc: 'https://res.cloudinary.com/m3byv282/image/upload/v1786810029/Solaria_OPC_53_card.jpg',
    imageAlt: 'Heavy load-bearing columns and precast structural elements with Solaria OPC 53 cement',
  },
  {
    id: 'card-ecoblend',
    title: 'Solaria EcoBlend',
    description:
      'A blended cement with a smaller carbon footprint, without giving up strength. Resists moisture and micro-cracking — built for coastal foundations, dams, and long-life masonry.',
    imageSrc: 'https://res.cloudinary.com/m3byv282/image/upload/v1786810029/Solaria_OPC_carbon.jpg',
    imageAlt: 'Sustainable eco-engineered modern concrete architectural structure with Solaria EcoBlend',
  },
];

export const OurCementSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  // hoveredCardId tracks manual user hover. If null, activeCardId defaults to 'card-opc-43'
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  // Active card: if none hovered, 'card-opc-43' is active by default.
  const activeCardId = hoveredCardId !== null ? hoveredCardId : 'card-opc-43';

  return (
    <section
      id="our-cement-section"
      className="relative w-full bg-[#FAF7F0] text-[#211f1c] flex items-center justify-center py-20 lg:py-[120px] md:min-h-screen"
      aria-labelledby="cement-headline"
    >
      <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-8 lg:px-12 flex flex-col justify-center">
        {/* Top Row: Left Column (Eyebrow + Headline) & Right Column (Intro Paragraph) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 sm:mb-16 lg:mb-20">
          {/* Left Column: Eyebrow + Headline */}
          <div className="lg:col-span-6 flex flex-col">
            <motion.p
              id="cement-eyebrow"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0 }}
              className="uppercase font-medium text-[#1f4e5f]"
              style={{
                fontFamily: "'Archivo', sans-serif",
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '1px',
              }}
            >
              OUR CEMENT
            </motion.p>
            <motion.h2
              id="cement-headline"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.07 }}
              className="mt-3 sm:mt-4 font-bold text-[#211f1c]"
              style={{
                fontFamily: "'Archivo', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(28px, 3.8vw, 40px)',
                lineHeight: '1.2',
                letterSpacing: '-0.80px',
              }}
            >
              One standard of quality. Three product families.
            </motion.h2>
          </div>

          {/* Right Column: Intro paragraph */}
          <motion.div
            className="lg:col-span-6 flex items-start lg:pt-8"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.14 }}
          >
            <p
              id="cement-intro"
              className="text-[#211f1c]"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '30px',
                letterSpacing: '-0.40px',
              }}
            >
              Every family meets the same BIS standard for quality. Solaria OPC 43 handles the everyday work of a build. Solaria OPC 53 carries the load-bearing structure. Solaria EcoBlend does the same job with a smaller footprint.
            </p>
          </motion.div>
        </div>

        {/* Dynamic Expanding Grid:
            Desktop: 4-fraction layout where active card dynamically expands to 2fr (~50% width)
            while inactive cards contract to 1fr (~25% width). All animate smoothly with 400ms transition. */}
        <div
          id="cement-cards-container"
          className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch w-full"
        >
          {PRODUCTS.map((product, index) => {
            const isActive = activeCardId === product.id;
            const cardBgColor = isActive ? 'bg-[#211f1c]' : 'bg-[#404040]';

            return (
              <motion.div
                key={product.id}
                id={product.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.4,
                  ease: 'easeOut',
                  delay: 0.21 + index * 0.06,
                }}
                onMouseEnter={() => setHoveredCardId(product.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                className={`group relative overflow-hidden rounded-[20px] p-6 sm:p-8 flex flex-col justify-end transition-all duration-400 ease-in-out cursor-pointer select-none shadow-sm hover:shadow-md ${cardBgColor} min-h-[500px] sm:min-h-[540px] lg:min-h-[580px] ${
                  isActive
                    ? 'lg:flex-[2] lg:w-[50%]'
                    : 'lg:flex-[1] lg:w-[25%]'
                }`}
                tabIndex={0}
                role="article"
                aria-label={product.title}
              >
                {/* Text Content Block */}
                <div className="relative z-20 flex flex-col transition-all duration-300 ease-out">
                  {/* Card Title */}
                  <h3
                    className="font-bold text-white tracking-tight"
                    style={{
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: 700,
                      fontSize: '24px',
                      lineHeight: '28px',
                      letterSpacing: '-0.48px',
                    }}
                  >
                    {product.title}
                  </h3>

                  {/* Card Description */}
                  <p
                    className="mt-3.5 text-white/75"
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      letterSpacing: '-0.32px',
                    }}
                  >
                    {product.description}
                  </p>

                  {/* "Learn more" Link with Arrow */}
                  <div className="mt-4 flex items-center">
                    <span
                      className="inline-flex items-center gap-2 font-semibold text-[#ff7a45] group-hover:text-[#ffa07a] transition-colors"
                      style={{
                        fontFamily: "'Source Sans 3', sans-serif",
                        fontWeight: 600,
                        fontSize: '16px',
                        lineHeight: '24px',
                      }}
                    >
                      <span>Learn more</span>
                      <ArrowRight className="h-4 w-4 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </div>

                {/* Product Image Reveal Container: Fades and slides in on active */}
                <div
                  className={`relative z-10 w-full mt-6 overflow-hidden rounded-[14px] transition-all duration-400 ease-in-out ${
                    isActive
                      ? 'opacity-100 max-h-[280px] translate-y-0'
                      : 'opacity-0 max-h-0 translate-y-4 pointer-events-none'
                  }`}
                  style={{
                    aspectRatio: '16 / 8.5',
                  }}
                >
                  {product.imageSrc ? (
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="w-full h-full object-cover object-center rounded-[14px]"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-white/10 rounded-[14px] flex items-center justify-center text-white/50 text-sm">
                      {product.title} Image
                    </div>
                  )}
                </div>

                {/* Subtle Hover Border */}
                <div
                  className="absolute inset-0 rounded-[20px] border border-white/0 group-hover:border-white/10 transition-colors duration-300 pointer-events-none"
                  aria-hidden="true"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
