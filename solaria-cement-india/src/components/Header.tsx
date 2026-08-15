import React, { useState } from 'react';
import { SolariaLogo } from './SolariaLogo';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About us', href: '#proof-of-trust' },
    { label: 'Products', href: '#our-cement-section' },
    { label: 'Solutions', href: '#specifications-section' },
    { label: 'Sustainability', href: '#our-cement-section' },
    { label: 'Heritage', href: '#proof-of-trust' },
  ];

  return (
    <header
      id="main-header"
      className="w-full bg-[#faf8f5] transition-colors"
    >
      <div className="mx-auto flex h-20 max-w-[1360px] items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Left: Brand Logo */}
        <div className="flex items-center">
          <a
            href="/"
            id="brand-home-link"
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e15118] focus-visible:ring-offset-2 rounded"
            aria-label="Solaria Cement Home"
          >
            <SolariaLogo
              className="h-8 sm:h-9 md:h-10 w-auto"
              isWhite={false}
            />
          </a>
        </div>

        {/* Center: Desktop Nav Links */}
        <nav
          id="primary-navigation"
          aria-label="Main Navigation"
          className="hidden md:flex items-center space-x-6 lg:space-x-8"
        >
          {navLinks.map((item, idx) => (
            <React.Fragment key={item.label}>
              <a
                href={item.href}
                id={`nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                className="nav-link text-[#211f1c] transition-colors duration-150 hover:text-[#e15118] py-1 font-medium"
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: '16px',
                  lineHeight: '24px',
                  letterSpacing: '-0.32px',
                }}
              >
                {item.label}
              </a>
              {idx < navLinks.length - 1 && (
                <span
                  className="select-none text-[#211f1c]/20 text-xs hidden xl:inline"
                  aria-hidden="true"
                >
                  ·
                </span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Right: Primary CTA Button (Desktop) & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="#find-a-dealer"
            id="header-cta-button"
            className="btn-primary hidden sm:inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-center transition-all duration-150 bg-[#e15118] text-white border border-[#e15118] hover:bg-[#c94512] hover:border-[#c94512] active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e15118] focus-visible:ring-offset-2 cursor-pointer shadow-sm"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '24px',
            }}
          >
            <span>Contact us</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex md:hidden items-center justify-center p-2 rounded-md text-[#211f1c] hover:text-[#e15118] hover:bg-[#211f1c]/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e15118]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden bg-[#faf8f5] border-b border-[#e5e0d6] px-6 py-4 space-y-3 text-[#211f1c]"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#211f1c] hover:text-[#e15118] py-2 text-base font-normal transition-colors"
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: '16px',
                  lineHeight: '24px',
                  letterSpacing: '-0.32px',
                }}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#e5e0d6]">
              <a
                href="#find-a-dealer"
                onClick={() => setMobileMenuOpen(false)}
                id="mobile-drawer-cta"
                className="btn-primary w-full flex items-center justify-center rounded-lg px-5 py-3 text-center transition-all duration-150 bg-[#e15118] text-white border border-[#e15118] hover:bg-[#c94512] hover:border-[#c94512] active:scale-[0.99] cursor-pointer"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: '16px',
                  lineHeight: '24px',
                }}
              >
                <span>Contact us</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
