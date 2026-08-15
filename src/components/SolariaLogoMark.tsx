import React from 'react';

interface SolariaLogoMarkProps {
  className?: string;
}

export const SolariaLogoMark: React.FC<SolariaLogoMarkProps> = ({
  className = 'w-full h-full',
}) => {
  return (
    <div
      id="solaria-logomark-trust-watermark"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 357 216"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain"
        preserveAspectRatio="xMaxYMin meet"
      >
        <path
          d="M357 216H354.864C353.345 216 352.113 214.768 352.113 213.249V176.625C352.116 175.829 351.959 175.041 351.654 174.306C351.349 173.57 350.901 172.9 350.335 172.339L319.98 142.051C318.842 140.916 317.297 140.279 315.688 140.279C314.078 140.279 312.534 140.916 311.396 142.051L281.041 172.339C280.475 172.9 280.027 173.57 279.722 174.306C279.417 175.041 279.26 175.829 279.263 176.625V213.249C279.263 214.768 278.03 216 276.511 216H2.75098C1.23168 216 6.22113e-05 214.768 0 213.249V174.833C0 173.314 1.23164 172.082 2.75098 172.082H141.14C143.955 172.082 144.952 168.353 142.513 166.947L22.6758 97.9111C21.3576 97.1517 20.9062 95.4662 21.668 94.1494L62.9268 22.8418C63.6867 21.5284 65.3668 21.0785 66.6816 21.8359L186.541 90.8838C188.98 92.2884 191.704 89.5582 190.295 87.1221L139.884 0H241.531L266.541 43.2236C267.95 45.6584 271.674 44.6588 271.674 41.8457V0H357V216Z"
          fill="#215365"
        />
      </svg>
    </div>
  );
};
