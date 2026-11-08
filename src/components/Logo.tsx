type LogoProps = {
  className?: string
  showText?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: 36,
  md: 44,
  lg: 128,
}

export function Logo({ className = '', showText = true, size = 'md' }: LogoProps) {
  const dim = sizes[size]
  const uid = `logo-${size}`

  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <div className="flex flex-col items-center justify-center select-none -my-1" style={{ width: dim, height: dim }}>
        <svg width={dim} height={dim} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <defs>
            <linearGradient id={`${uid}-cyan`} x1="150" y1="120" x2="360" y2="280" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00FFCC" />
              <stop offset="40%" stopColor="#00E5FF" />
              <stop offset="100%" stopColor="#0099FF" />
            </linearGradient>
            <linearGradient id={`${uid}-silver`} x1="140" y1="140" x2="300" y2="300" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#64748B" />
            </linearGradient>
            <filter id={`${uid}-neon`} x="-15%" y="-15%" width="130%" height="130%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id={`${uid}-pixel`} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComponentTransfer in="blur" result="glow">
                <feFuncA type="linear" slope="0.6" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d="M 148 245 C 130 190, 160 115, 220 95 C 285 75, 345 130, 348 190"
            stroke={`url(#${uid}-cyan)`}
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
            filter={`url(#${uid}-neon)`}
            opacity="0.9"
          />
          <path
            d="M 135 195 C 130 250, 175 315, 240 315 C 285 315, 318 285, 322 260"
            stroke={`url(#${uid}-silver)`}
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            opacity="0.8"
          />
          <g filter={`url(#${uid}-pixel)`}>
            <rect x="75" y="150" width="8" height="8" fill="#00FFCC" opacity="0.8" />
            <rect x="90" y="170" width="12" height="12" fill="#00E5FF" opacity="0.9" />
            <rect x="110" y="190" width="14" height="14" fill="#00FFCC" opacity="0.95" />
            <rect x="128" y="212" width="10" height="10" fill="#0099FF" opacity="0.9" />
            <rect x="108" y="225" width="8" height="8" fill="#00FFCC" opacity="0.8" />
            <rect x="115" y="132" width="6" height="6" fill="#00E5FF" opacity="0.7" />
            <rect x="100" y="148" width="6" height="6" fill="#00FFCC" opacity="0.6" />
            <rect x="82" y="195" width="8" height="8" fill="#00E5FF" opacity="0.5" />
            <rect x="96" y="215" width="6" height="6" fill="#0099FF" opacity="0.7" />
          </g>
          <text
            x="200"
            y="220"
            textAnchor="middle"
            dominantBaseline="middle"
            fill={`url(#${uid}-cyan)`}
            filter={`url(#${uid}-neon)`}
            fontFamily="Inter, system-ui, sans-serif"
            fontWeight="800"
            fontSize="120"
            letterSpacing="-4"
          >
            MR
          </text>
        </svg>
      </div>
      {showText && (
        <div className="flex flex-col -space-y-1">
          <span className="font-sans font-bold tracking-wider text-[11px] text-white">MYTECH</span>
          <span className="font-sans font-extrabold tracking-wider text-[11px] text-[#10B981]">REVO</span>
        </div>
      )}
    </div>
  )
}
