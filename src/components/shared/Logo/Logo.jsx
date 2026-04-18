/**
 * Logo — Inline SVG recreating the Aaryomii Wealth brand mark.
 * Circle (teal) + triangle (red) + wave = logo symbol.
 * @param {number} size - Width/height of the SVG icon (default 44)
 * @param {'dark'|'light'} theme - 'light' for use on dark backgrounds
 */
export default function Logo({ size = 44, theme = 'dark' }) {
  const isLight = theme === 'light'
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
      {/* Icon mark */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="28" cy="28" r="26" stroke="#1B7A6B" strokeWidth="2.5" />
        <path d="M2 28 A26 26 0 0 1 54 28 Z" fill="#B8D4E0" opacity="0.35" />
        <path d="M2 28 A26 26 0 0 0 54 28 Z" fill="#1B7A6B" opacity="0.2" />
        <polygon points="28,13 41,37 15,37" fill="#C0272D" opacity="0.92" />
        <polygon points="28,17 37,35 19,35" fill="white" opacity="0.2" />
        <path
          d="M10 38 Q19 34 28 38 Q37 42 46 38"
          stroke="#1B7A6B"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Wordmark */}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '1rem',
          fontWeight: 800,
          letterSpacing: '0.08em',
          color: isLight ? '#2A9684' : '#1B7A6B',
        }}>
          AARYOMII
        </span>
        <span style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '1rem',
          fontWeight: 700,
          letterSpacing: '0.14em',
          color: isLight ? 'rgba(255,255,255,0.92)' : '#3D1A1A',
        }}>
          WEALTH
        </span>
        <span style={{
          fontSize: '0.52rem',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: isLight ? 'rgba(255,255,255,0.45)' : '#C0272D',
          marginTop: '1px',
        }}>
          Protect, Grow &amp; Prosper
        </span>
      </div>
    </div>
  )
}
