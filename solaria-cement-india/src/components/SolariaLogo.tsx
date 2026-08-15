import React, { useState, useEffect, useMemo } from 'react';

const LOGO_SVG_URL = 'https://res.cloudinary.com/m3byv282/image/upload/v1786794617/Solaria_Logo.svg';

interface SolariaLogoProps {
  className?: string;
  height?: number | string;
  emblemColor?: string;
  textColor?: string;
  accentColor?: string;
  isWhite?: boolean;
}

export const SolariaLogo: React.FC<SolariaLogoProps> = ({
  className = 'h-8 sm:h-9 md:h-10 w-auto',
  height,
  emblemColor = '#e15118',
  textColor = '#000000',
  accentColor = '#e15118',
  isWhite = false,
}) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const [loadError, setLoadError] = useState(false);

  const effectiveTextColor = isWhite ? '#ffffff' : textColor;

  useEffect(() => {
    fetch(LOGO_SVG_URL)
      .then((res) => {
        if (res.ok) {
          return res.text();
        }
        throw new Error('Failed to fetch SVG');
      })
      .then((text) => {
        if (text && text.includes('<svg')) {
          let cleanedSvg = text
            .replace(/width="[^"]*"/, 'width="100%"')
            .replace(/height="[^"]*"/, 'height="100%"');
          setSvgContent(cleanedSvg);
        } else {
          setLoadError(true);
        }
      })
      .catch(() => {
        setLoadError(true);
      });
  }, []);

  // Modify fetched SVG content dynamically based on isWhite / effectiveTextColor
  const renderedSvgHtml = useMemo(() => {
    if (!svgContent) return null;
    let modified = svgContent;
    if (isWhite || effectiveTextColor.toLowerCase() === '#ffffff') {
      // Replace black/dark text fills with white, while preserving the orange emblem (#e15118 / rgb(225,81,24))
      modified = modified
        .replace(/fill="#000000"/gi, 'fill="#ffffff"')
        .replace(/fill="#000"/gi, 'fill="#ffffff"')
        .replace(/fill="#211f1c"/gi, 'fill="#ffffff"')
        .replace(/fill="black"/gi, 'fill="#ffffff"');
    }
    return modified;
  }, [svgContent, isWhite, effectiveTextColor]);

  // If fetched successfully, render the actual SVG with color transformation
  if (renderedSvgHtml && !loadError) {
    return (
      <div
        id="solaria-svg-logo"
        className={`inline-flex items-center justify-center transition-all duration-300 ${className}`}
        style={height ? { height } : undefined}
        dangerouslySetInnerHTML={{ __html: renderedSvgHtml }}
        role="img"
        aria-label="Solaria Cement"
      />
    );
  }

  // Standalone high-fidelity vector fallback
  return (
    <svg
      viewBox="0 0 380 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-all duration-300 ${className}`}
      style={height ? { height } : undefined}
      role="img"
      aria-label="Solaria Cement"
      id="solaria-brand-logo"
    >
      <g id="solaria-emblem" fill={emblemColor}>
        <polygon points="0,90 56,90 38,62 0,72" />
        <polygon points="12,42 52,24 68,54 36,68" />
        <polygon points="68,0 108,0 108,66 88,48 68,66" />
        <polygon points="124,24 164,42 140,68 108,54" />
        <polygon points="120,90 176,90 176,72 138,62" />
        <polygon points="56,90 88,58 120,90 98,90 88,78 78,90" />
      </g>
      <g id="solaria-text" fill={effectiveTextColor} className="transition-colors duration-300">
        <text
          x="192"
          y="48"
          fontFamily="'Archivo Black', 'Arial Black', -apple-system, sans-serif"
          fontSize="48"
          fontWeight="900"
          letterSpacing="-0.03em"
        >
          Solaria
        </text>
        <text
          x="192"
          y="96"
          fontFamily="'Archivo Black', 'Arial Black', -apple-system, sans-serif"
          fontSize="48"
          fontWeight="900"
          letterSpacing="-0.03em"
        >
          Cement
        </text>
      </g>
      <rect
        id="solaria-i-dot"
        x="329"
        y="0"
        width="11"
        height="12"
        fill={accentColor}
        rx="0.5"
      />
    </svg>
  );
};
