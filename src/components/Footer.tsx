import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
    }
  };

  return (
    <footer
      id="main-footer"
      className="w-full bg-[#211f1c] text-white pt-20 pb-10 px-6 sm:px-12 lg:px-20"
      role="contentinfo"
    >
      <div className="mx-auto w-full max-w-[1360px] flex flex-col gap-[60px]">
        {/* Block 1: Brand Logo */}
        <div className="flex items-center">
          <a
            href="#"
            id="footer-logo-link"
            className="inline-flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e15118] rounded-sm"
            aria-label="Solaria Cement India homepage"
          >
            <img
              src="https://res.cloudinary.com/m3byv282/image/upload/v1786802038/Solaria_Logo_white.svg"
              alt="Solaria Cement"
              className="h-10 sm:h-12 w-auto"
            />
          </a>
        </div>

        {/* Block 2: Newsletter Block (Left) + Link Columns (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Newsletter Form Block (Left ~42%) */}
          <motion.div
            className="lg:col-span-5 flex flex-col max-w-[460px]"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0 }}
          >
            <h3
              id="newsletter-heading"
              className="font-bold text-white tracking-tight"
              style={{
                fontFamily: "'Archivo', sans-serif",
                fontWeight: 700,
                fontSize: '20px',
                lineHeight: '24px',
                letterSpacing: '-0.40px',
                color: '#ffffff',
              }}
            >
              Subscribe To Our Newsletter
            </h3>

            <p
              id="newsletter-body"
              className="mt-3"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '-0.32px',
                color: '#d4d4d4',
              }}
            >
              Technical notes, new dealer openings, and product updates — sent when there's something worth telling you, not before.
            </p>

            {/* Newsletter Input + Submit Button Form */}
            <form
              id="newsletter-form"
              onSubmit={handleNewsletterSubmit}
              className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full"
            >
              <div className="relative flex-1">
                <label htmlFor="newsletter-email-input" className="sr-only">
                  Enter your email
                </label>
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#737373]">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </div>
                <input
                  id="newsletter-email-input"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full h-12 pl-11 pr-4 rounded-[8px] bg-[#FAF7F0] text-[#211f1c] placeholder-[#737373] text-base transition-shadow duration-150 focus:outline-none focus:ring-2 focus:ring-[#e15118] border-none"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
                  }}
                />
              </div>

              <button
                id="newsletter-submit-btn"
                type="submit"
                className="h-12 px-6 sm:px-7 shrink-0 rounded-[8px] bg-[#e15118] border border-[#e15118] text-white font-semibold flex items-center justify-center transition-all duration-150 hover:bg-[#c94512] active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontWeight: 600,
                  fontSize: '16px',
                  lineHeight: '24px',
                  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
                }}
              >
                {isSubmitted ? 'Subscribed' : 'Submit'}
              </button>
            </form>
          </motion.div>

          {/* 3 Equal Link Columns (Right ~58%) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-8 pt-2 lg:pt-0">
            {/* Column 1: Company */}
            <motion.div
              className="flex flex-col"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.08 }}
            >
              <h4
                className="font-bold text-white tracking-tight"
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: 700,
                  fontSize: '20px',
                  lineHeight: '24px',
                  letterSpacing: '-0.40px',
                  color: '#ffffff',
                }}
              >
                Company
              </h4>
              <ul className="mt-4 flex flex-col gap-3" role="list">
                {['About Us', 'Careers', 'Investors', 'CSR'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-[#d4d4d4] hover:text-[#e15118] transition-colors duration-150 inline-block"
                      style={{
                        fontFamily: "'Source Sans 3', sans-serif",
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '24px',
                        letterSpacing: '-0.32px',
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 2: Products */}
            <motion.div
              className="flex flex-col"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.14 }}
            >
              <h4
                className="font-bold text-white tracking-tight"
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: 700,
                  fontSize: '20px',
                  lineHeight: '24px',
                  letterSpacing: '-0.40px',
                  color: '#ffffff',
                }}
              >
                Products
              </h4>
              <ul className="mt-4 flex flex-col gap-3" role="list">
                {['Solaria OPC 43', 'Solaria OPC 53', 'Solaria Ecoblend'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-[#d4d4d4] hover:text-[#e15118] transition-colors duration-150 inline-block"
                      style={{
                        fontFamily: "'Source Sans 3', sans-serif",
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '24px',
                        letterSpacing: '-0.32px',
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3: Find us */}
            <motion.div
              className="flex flex-col"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.20 }}
            >
              <h4
                className="font-bold text-white tracking-tight"
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: 700,
                  fontSize: '20px',
                  lineHeight: '24px',
                  letterSpacing: '-0.40px',
                  color: '#ffffff',
                }}
              >
                Find us
              </h4>
              <ul className="mt-4 flex flex-col gap-3" role="list">
                {['Find a dealer', 'Contact Us'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-[#d4d4d4] hover:text-[#e15118] transition-colors duration-150 inline-block"
                      style={{
                        fontFamily: "'Source Sans 3', sans-serif",
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '24px',
                        letterSpacing: '-0.32px',
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Block 3: Bottom Bar (Copyright left, Social icons right) */}
        <div
          id="footer-bottom-bar"
          className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          {/* Left: Copyright */}
          <p
            id="footer-copyright"
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24px',
              letterSpacing: '-0.32px',
              color: '#d4d4d4',
            }}
          >
            © 2026 Solaria Cement India. All rights reserved.
          </p>

          {/* Right: "Follow us on" + Social Icons */}
          <div className="flex items-center gap-4">
            <span
              id="footer-follow-label"
              className="text-white font-normal"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: '16px',
                lineHeight: '24px',
                color: '#ffffff',
              }}
            >
              Follow us on
            </span>

            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-1 text-white hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
                aria-label="Solaria Cement on Facebook"
              >
                <img
                  src="https://res.cloudinary.com/m3byv282/image/upload/v1786801824/facebook.svg"
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-1 text-white hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
                aria-label="Solaria Cement on Instagram"
              >
                <img
                  src="https://res.cloudinary.com/m3byv282/image/upload/v1786801824/instagram.svg"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-1 text-white hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
                aria-label="Solaria Cement on LinkedIn"
              >
                <img
                  src="https://res.cloudinary.com/m3byv282/image/upload/v1786801824/linkedin.svg"
                  alt="LinkedIn"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
