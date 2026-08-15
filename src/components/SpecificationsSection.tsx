import React from 'react';
import { ArrowDown } from 'lucide-react';

interface SpecRow {
  id: string;
  productName: string;
  officialStandard: string;
  compressiveStrength: string;
  initialSettingTime: string;
}

const SPECIFICATIONS_DATA: SpecRow[] = [
  {
    id: 'spec-opc-53',
    productName: 'Solaria opc 53',
    officialStandard: 'IS: 269-2015',
    compressiveStrength: '> 43.0',
    initialSettingTime: '> 30',
  },
  {
    id: 'spec-high-strength-plus',
    productName: 'Solaria high strength plus',
    officialStandard: 'Proprietary Mix',
    compressiveStrength: '> 53.0',
    initialSettingTime: '> 30',
  },
  {
    id: 'spec-ecoblend',
    productName: 'Solaria Ecoblend',
    officialStandard: 'IS: 1489 (Part 1)',
    compressiveStrength: '> 33.0',
    initialSettingTime: '> 180',
  },
];

export const SpecificationsSection: React.FC = () => {
  const handleDownloadPdf = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Interactive download anchor triggering mock spec sheet download
    const dummyBlob = new Blob([
      `SOLARIA CEMENT TECHNICAL SPECIFICATIONS\n\n` +
      `Product Name | Official Standard | Compressive Strength | Initial Setting Time\n` +
      `Solaria opc 53 | IS: 269-2015 | > 43.0 | > 30\n` +
      `Solaria high strength plus | Proprietary Mix | > 53.0 | > 30\n` +
      `Solaria Ecoblend | IS: 1489 (Part 1) | > 33.0 | > 180\n`
    ], { type: 'text/plain;charset=utf-8' });
    
    const url = URL.createObjectURL(dummyBlob);
    e.currentTarget.href = url;
    e.currentTarget.download = 'Solaria_Technical_Specifications.txt';
  };

  return (
    <section
      id="specifications-section"
      className="relative w-full bg-[#1f4e5f] text-white py-20 lg:py-[120px] overflow-hidden"
      aria-labelledby="specs-headline"
    >
      <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-8 lg:px-12">
        {/* Top Area: Eyebrow + Headline on left, Ghost Action Button on right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 lg:mb-20">
          {/* Left Title Block */}
          <div className="flex flex-col">
            <p
              id="specs-eyebrow"
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
              TECHNICAL DETAILS
            </p>
            <h2
              id="specs-headline"
              className="mt-3 sm:mt-4 font-bold text-white tracking-tight"
              style={{
                fontFamily: "'Archivo', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(28px, 3.8vw, 40px)',
                lineHeight: '1.2',
                letterSpacing: '-0.80px',
                color: '#ffffff',
              }}
            >
              The exact numbers
            </h2>
          </div>

          {/* Right Action: Secondary Ghost Button (Text + Down Arrow) */}
          <div className="flex items-center">
            <a
              id="download-specs-btn"
              href="#download"
              onClick={handleDownloadPdf}
              className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-[8px] bg-transparent text-[#f5ca20] font-semibold transition-all duration-150 hover:bg-white/10 active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f5ca20] cursor-pointer"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '24px',
                color: '#f5ca20',
              }}
              aria-label="Download PDF specifications"
            >
              <span>Download Pdf specs</span>
              <ArrowDown className="h-4 w-4 stroke-[2.2] text-[#f5ca20] transition-transform duration-200 group-hover:translate-y-0.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Semantic Data Table with Desktop Table and Mobile Responsive Stacked Cards */}
        {/* Desktop / Tablet Semantic Table */}
        <div className="hidden sm:block w-full overflow-x-auto">
          <table
            id="specs-data-table"
            className="w-full text-left border-collapse"
          >
            <thead>
              <tr className="border-b" style={{ borderColor: 'rgba(140, 133, 121, 0.3)' }}>
                <th
                  scope="col"
                  className="pb-6 font-normal uppercase text-white tracking-normal"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    width: '32%',
                  }}
                >
                  PRODUCT NAME
                </th>
                <th
                  scope="col"
                  className="pb-6 font-normal uppercase text-white tracking-normal"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    width: '26%',
                  }}
                >
                  OFFICIAL STANDARD
                </th>
                <th
                  scope="col"
                  className="pb-6 font-normal uppercase text-white tracking-normal"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    width: '24%',
                  }}
                >
                  COMPRESSIVE STRENGTH
                </th>
                <th
                  scope="col"
                  className="pb-6 font-normal uppercase text-white tracking-normal"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    width: '18%',
                  }}
                >
                  INITIAL SETTING TIME
                </th>
              </tr>
            </thead>
            <tbody>
              {SPECIFICATIONS_DATA.map((row) => (
                <tr
                  key={row.id}
                  id={row.id}
                  className="group transition-colors duration-150"
                >
                  {/* Product Name */}
                  <td
                    className="py-8 sm:py-9 lg:py-10 text-white"
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      letterSpacing: '-0.32px',
                    }}
                  >
                    {row.productName}
                  </td>

                  {/* Official Standard */}
                  <td
                    className="py-8 sm:py-9 lg:py-10"
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      letterSpacing: '-0.32px',
                      color: 'rgba(255, 255, 255, 0.7)',
                    }}
                  >
                    {row.officialStandard}
                  </td>

                  {/* Compressive Strength (Visually Emphasized in Yellow) */}
                  <td
                    className="py-8 sm:py-9 lg:py-10"
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      letterSpacing: '-0.32px',
                      color: '#f5ca20',
                    }}
                  >
                    {row.compressiveStrength}
                  </td>

                  {/* Initial Setting Time */}
                  <td
                    className="py-8 sm:py-9 lg:py-10"
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      letterSpacing: '-0.32px',
                      color: 'rgba(255, 255, 255, 0.7)',
                    }}
                  >
                    {row.initialSettingTime}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View: Labeled Card Key-Value Stacks for seamless reading */}
        <div className="sm:hidden flex flex-col divide-y divide-[rgba(140,133,121,0.3)]">
          {SPECIFICATIONS_DATA.map((row) => (
            <div key={`mobile-${row.id}`} className="py-6 flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <span className="text-xs uppercase text-white/60">Product</span>
                <span
                  className="font-medium text-white text-right"
                  style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  {row.productName}
                </span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-xs uppercase text-white/60">Standard</span>
                <span
                  className="text-white/70 text-right"
                  style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  {row.officialStandard}
                </span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-xs uppercase text-white/60">Compressive Strength</span>
                <span
                  className="font-medium text-[#f5ca20] text-right"
                  style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  {row.compressiveStrength}
                </span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-xs uppercase text-white/60">Initial Setting Time</span>
                <span
                  className="text-white/70 text-right"
                  style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  {row.initialSettingTime}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
