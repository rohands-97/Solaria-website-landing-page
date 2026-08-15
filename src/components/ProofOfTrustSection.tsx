import React from 'react';
import { SolariaLogoMark } from './SolariaLogoMark';

interface ProofItem {
  id: string;
  label: string;
  description: string;
}

const PROOF_STATS: ProofItem[] = [
  {
    id: 'stat-since-1874',
    label: 'SINCE 1874',
    description: 'Founded in Germany. Manufacturing in India since 1998.',
  },
  {
    id: 'stat-local-plants',
    label: 'LOCAL PLANTS',
    description: '12 factories across India, making it fresh.',
  },
  {
    id: 'stat-double-tested',
    label: 'DOUBLE TESTED',
    description: 'Every batch tested in-plant and verified by an independent lab.',
  },
  {
    id: 'stat-cleaner-air',
    label: 'CLEANER AIR',
    description: 'Cut our pollution by 20% since 2010.',
  },
];

export const ProofOfTrustSection: React.FC = () => {
  return (
    <section
      id="proof-of-trust-section"
      className="relative w-full overflow-hidden flex items-center justify-center py-20 lg:py-[120px]"
      style={{
        backgroundColor: '#1f4e5f',
      }}
      aria-labelledby="proof-headline"
    >
      {/* Background Watermark: Exact Cloudinary logomark_trust.svg positioned top-right */}
      <div
        id="proof-watermark-wrapper"
        className="absolute top-0 right-0 pointer-events-none select-none z-0 w-[55vw] sm:w-[46vw] lg:w-[42vw] max-w-[680px] h-[55vw] sm:h-[46vw] lg:h-[42vw] max-h-[680px]"
        aria-hidden="true"
      >
        <SolariaLogoMark className="w-full h-full" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center justify-center">
        {/* Header Block: Eyebrow + Headline (Center Aligned) */}
        <div className="w-full max-w-[840px] text-center mb-14 sm:mb-16 md:mb-20">
          {/* Eyebrow */}
          <p
            id="proof-eyebrow"
            className="uppercase font-medium"
            style={{
              fontFamily: "'Archivo', sans-serif",
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '24px',
              letterSpacing: '1px',
              color: '#f5ca20',
            }}
          >
            WHY TRUST US
          </p>

          {/* Headline */}
          <h2
            id="proof-headline"
            className="mt-3 sm:mt-4 font-bold text-white"
            style={{
              fontFamily: "'Archivo', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(28px, 3.8vw, 40px)',
              lineHeight: '1.2',
              letterSpacing: '-0.80px',
              color: '#ffffff',
            }}
          >
            We build to a higher standards
          </h2>
        </div>

        {/* 4-Column Stat Row */}
        <dl
          id="proof-stats-grid"
          className="w-full max-w-[1240px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-0 items-start"
        >
          {PROOF_STATS.map((stat, index) => {
            const isLast = index === PROOF_STATS.length - 1;

            return (
              <div
                key={stat.id}
                id={stat.id}
                className={`relative flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 ${
                  !isLast
                    ? 'lg:border-r lg:border-[rgba(255,255,255,0.15)]'
                    : ''
                }`}
              >
                {/* Stat Label */}
                <dt
                  className="font-bold uppercase text-white"
                  style={{
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: 700,
                    fontSize: '20px',
                    lineHeight: '24px',
                    letterSpacing: '-0.40px',
                    color: '#ffffff',
                  }}
                >
                  {stat.label}
                </dt>

                {/* Stat Description */}
                <dd
                  className="mt-3.5 max-w-[260px] mx-auto"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    letterSpacing: '-0.32px',
                    color: 'rgba(255, 255, 255, 0.65)',
                  }}
                >
                  {stat.description}
                </dd>

                {/* Mobile/Tablet separator for stacked layout */}
                {!isLast && (
                  <div
                    className="w-16 h-px mt-8 bg-[rgba(255,255,255,0.15)] sm:hidden"
                    aria-hidden="true"
                  />
                )}
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
};
