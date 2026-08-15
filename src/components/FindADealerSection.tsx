import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { MapPin } from 'lucide-react';

export const FindADealerSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [locationQuery, setLocationQuery] = useState('');
  const [isLocating, setIsLocating] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!locationQuery.trim()) {
      setStatusMessage('Please enter a city or pin code to search.');
      return;
    }
    setStatusMessage(`Searching for certified Solaria dealers near "${locationQuery.trim()}"...`);
  };

  const handleUseMyLocation = () => {
    if (!navigator.geolocation) {
      setStatusMessage('Geolocation is not supported by your browser.');
      return;
    }

    setIsLocating(true);
    setStatusMessage('Locating your nearest Solaria dealer...');

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setIsLocating(false);
        const { latitude, longitude } = position.coords;
        setLocationQuery(`${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
        setStatusMessage(`Found your location! Showing certified dealers nearby.`);
      },
      (error) => {
        setIsLocating(false);
        if (error.code === error.PERMISSION_DENIED) {
          setStatusMessage('Location permission was declined. Please enter your city manually.');
        } else {
          setStatusMessage('Unable to retrieve location. Please enter your city manually.');
        }
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  };

  return (
    <section
      id="find-a-dealer-section"
      className="relative w-full overflow-hidden flex items-center justify-center min-h-[580px] md:min-h-screen py-16 sm:py-20 lg:py-24"
      aria-labelledby="dealer-headline"
    >
      {/* Full-bleed Background Video: rendered slightly oversized at ~106% */}
      <div
        id="dealer-bg-container"
        className="absolute inset-0 z-0 w-full h-[106%] -top-[3%] left-0 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <video
          id="dealer-bg-video"
          autoPlay
          loop
          muted
          playsInline
          poster="https://res.cloudinary.com/m3byv282/image/upload/v1786801082/Find_your_dealer.jpg"
          className="w-full h-full object-cover object-center"
        >
          <source
            src="https://res.cloudinary.com/m3byv282/video/upload/v1786813431/Dealer_video_2.mp4"
            type="video/mp4"
          />
        </video>
        {/* Subtle darkening gradient overlay for balanced contrast */}
        <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
      </div>

      {/* Centered Overlay Card */}
      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <motion.div
          id="dealer-overlay-card"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="w-full max-w-[525px] shadow-2xl flex flex-col"
          style={{
            backgroundColor: 'rgba(33, 31, 28, 0.8)',
            borderRadius: '8px',
            padding: '24px',
          }}
        >
          {/* Text Block: Headline + Subhead (8px vertical gap) */}
          <div className="flex flex-col items-center text-center">
            <motion.h2
              id="dealer-headline"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0 }}
              className="font-bold text-white tracking-tight"
              style={{
                fontFamily: "'Archivo', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(28px, 3.8vw, 40px)',
                lineHeight: '48px',
                letterSpacing: '-0.80px',
                color: '#ffffff',
              }}
            >
              Find your nearest dealer.
            </motion.h2>
            <motion.p
              id="dealer-subhead"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.07 }}
              className="mt-2 text-white text-center"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '-0.32px',
                color: '#ffffff',
              }}
            >
              Enter your location, or let us find it for you.
            </motion.p>
          </div>

          {/* Form Block (24px gap from text block) */}
          <motion.form
            id="dealer-search-form"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.14 }}
            onSubmit={handleSearchSubmit}
            className="mt-6 flex flex-col w-full"
          >
            {/* Input Field: full width, 8px rounded, #faf8f5 bg */}
            <div className="w-full">
              <label htmlFor="dealer-location-input" className="sr-only">
                Enter location or city
              </label>
              <input
                id="dealer-location-input"
                type="text"
                value={locationQuery}
                onChange={(e) => {
                  setLocationQuery(e.target.value);
                  if (statusMessage) setStatusMessage(null);
                }}
                placeholder="Enter location or city"
                className="w-full h-12 px-4 rounded-[8px] bg-[#FAF7F0] text-[#211f1c] placeholder-[#737373] text-base transition-shadow duration-150 focus:outline-none focus:ring-2 focus:ring-[#e15118] border-none"
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '24px',
                  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
                }}
              />
            </div>

            {/* Button Row: 16px gap below input, 2 equal 50% width buttons side-by-side */}
            <div className="mt-4 flex flex-col sm:flex-row items-center gap-3 w-full">
              {/* Primary Search Button (50% width) */}
              <button
                id="dealer-search-submit-btn"
                type="submit"
                className="w-full sm:flex-1 h-12 rounded-[8px] bg-[#e15118] border border-[#e15118] text-white font-semibold flex items-center justify-center transition-all duration-150 hover:bg-[#c94512] active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontWeight: 600,
                  fontSize: '16px',
                  lineHeight: '24px',
                  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
                }}
              >
                Search
              </button>

              {/* Secondary "Use my location" Button (50% width) */}
              <button
                id="dealer-use-location-btn"
                type="button"
                onClick={handleUseMyLocation}
                disabled={isLocating}
                className="w-full sm:flex-1 h-12 rounded-[8px] bg-transparent text-white font-semibold flex items-center justify-center gap-2 transition-all duration-150 hover:bg-white/10 active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer disabled:opacity-60"
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontWeight: 600,
                  fontSize: '16px',
                  lineHeight: '24px',
                }}
              >
                <MapPin className="h-4 w-4 stroke-[2.2] text-white shrink-0" aria-hidden="true" />
                <span>{isLocating ? 'Locating...' : 'Use my location'}</span>
              </button>
            </div>

            {/* Optional Interactive Feedback Banner */}
            {statusMessage && (
              <p
                id="dealer-status-feedback"
                className="mt-3 text-sm text-center text-white/90 bg-white/10 py-1.5 px-3 rounded-[6px]"
                role="status"
              >
                {statusMessage}
              </p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};
