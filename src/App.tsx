import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProofOfTrustSection } from './components/ProofOfTrustSection';
import { OurCementSection } from './components/OurCementSection';
import { SpecificationsSection } from './components/SpecificationsSection';
import { FindADealerSection } from './components/FindADealerSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#FAF8F5] text-[#211f1c] antialiased selection:bg-[#e15118] selection:text-white">
      {/* 1. Header */}
      <Header />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Proof of Trust Section */}
        <ProofOfTrustSection />

        {/* 4. Our Cement (Product) Section */}
        <OurCementSection />

        {/* 5. Technical Details / Specifications Section */}
        <SpecificationsSection />

        {/* 6. Find a Dealer Section */}
        <FindADealerSection />
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}
