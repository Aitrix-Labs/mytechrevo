import { motion } from 'framer-motion'
import {
  Activity,
  Atom,
  Binary,
  Blocks,
  Box,
  CodeXml,
  Cpu,
  Database,
  FileCode2,
  Flame,
  Layers,
  Server,
  Terminal,
  Wind,
} from 'lucide-react'
import { useMemo } from 'react'
import { Logo } from './Logo'

const TECH = [
  { name: 'React', icon: Atom, color: 'text-[#00D5FF]', bg: 'bg-[#00D5FF]/5 border-[#00D5FF]/10' },
  { name: 'TypeScript', icon: CodeXml, color: 'text-[#3178C6]', bg: 'bg-[#3178C6]/5 border-[#3178C6]/10' },
  { name: 'Python', icon: Binary, color: 'text-[#3776AB]', bg: 'bg-[#3776AB]/5 border-[#3776AB]/10' },
  { name: 'JavaScript', icon: Terminal, color: 'text-[#F7DF1E]', bg: 'bg-[#F7DF1E]/5 border-[#F7DF1E]/10' },
  { name: 'Node.js', icon: Server, color: 'text-[#339933]', bg: 'bg-[#339933]/5 border-[#339933]/10' },
  { name: 'PostgreSQL', icon: Database, color: 'text-[#4169E1]', bg: 'bg-[#4169E1]/5 border-[#4169E1]/10' },
  { name: 'HTML5', icon: FileCode2, color: 'text-[#E34F26]', bg: 'bg-[#E34F26]/5 border-[#E34F26]/10' },
  { name: 'CSS3', icon: Layers, color: 'text-[#1572B6]', bg: 'bg-[#1572B6]/5 border-[#1572B6]/10' },
  { name: 'Tailwind CSS', icon: Wind, color: 'text-[#06B6D4]', bg: 'bg-[#06B6D4]/5 border-[#06B6D4]/10' },
  { name: 'Docker', icon: Box, color: 'text-[#2496ED]', bg: 'bg-[#2496ED]/5 border-[#2496ED]/10' },
  { name: 'Firebase', icon: Flame, color: 'text-[#FFCA28]', bg: 'bg-[#FFCA28]/5 border-[#FFCA28]/10' },
  { name: 'Next.js', icon: Blocks, color: 'text-white', bg: 'bg-white/5 border-white/10' },
  { name: 'FastAPI', icon: Cpu, color: 'text-[#009688]', bg: 'bg-[#009688]/5 border-[#009688]/10' },
]

const STATS = [
  { value: '100+', label: 'Projects Completed' },
  { value: '50+', label: 'Happy Clients' },
  { value: '5+', label: 'Years Experience' },
]

const PARTICLE_COLORS = ['#00E5FF', '#7C4DFF', '#00FFB3', '#FF007F', '#FFFF00', '#FFFFFF']

type HeroProps = {
  onNavigate: (id: string) => void
}

export function Hero({ onNavigate }: HeroProps) {
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        color: PARTICLE_COLORS[i % PARTICLE_COLORS.length],
        size: 6 + (i % 5) * 2.5,
        tx: `${(i % 2 === 0 ? 1 : -1) * (40 + (i * 17) % 180)}px`,
        ty: `${(i % 3 === 0 ? -1 : 1) * (60 + (i * 23) % 200)}px`,
        delay: `${(i * 0.35) % 4}s`,
        duration: `${3.5 + (i % 4)}s`,
        kind: i % 3,
      })),
    [],
  )

  const marqueeItems = [...TECH, ...TECH]

  return (
    <section id="home-section-root" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 w-full space-y-10 flex flex-col items-center text-center relative z-20">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08]">
          <span className="w-2 h-2 rounded-full bg-[#00FFB3] animate-pulse" />
          <span className="text-[10px] font-mono tracking-widest text-[#94A3B8] font-bold uppercase">
            Next-Gen Solutions Platform
          </span>
        </div>

        <div className="w-full max-w-2xl">
          <div className="relative w-full h-[380px] sm:h-[450px] flex items-center justify-center select-none overflow-hidden rounded-3xl bg-[#030712]/30 border border-white/[0.03]">
            <div className="absolute inset-0 bg-space-mesh pointer-events-none opacity-40" />
            <div className="absolute w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-[#7C4DFF]/5 to-[#00E5FF]/5 blur-[80px] pointer-events-none" />

            <div className="absolute inset-0 z-[15] pointer-events-none overflow-hidden">
              {particles.map((p) => (
                <div
                  key={p.id}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    width: p.size,
                    height: p.size,
                    marginLeft: -p.size / 2,
                    marginTop: -p.size / 2,
                    color: p.color,
                    ['--tx' as string]: p.tx,
                    ['--ty' as string]: p.ty,
                    animation: `float-particle ${p.duration} linear infinite`,
                    animationDelay: p.delay,
                  }}
                >
                  {p.kind === 0 && (
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <path
                        d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z"
                        fill="currentColor"
                        className="drop-shadow-[0_0_8px_currentColor]"
                      />
                    </svg>
                  )}
                  {p.kind === 1 && (
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="2" fill="none" className="drop-shadow-[0_0_8px_currentColor]" />
                    </svg>
                  )}
                  {p.kind === 2 && (
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <circle cx="12" cy="12" r="5" fill="currentColor" className="drop-shadow-[0_0_8px_currentColor]" />
                    </svg>
                  )}
                </div>
              ))}
            </div>

            <div className="relative z-20 flex flex-col items-center gap-4 px-4">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest text-[#00FFCC] uppercase bg-black/30 border border-[#00FFCC]/20 shadow-[0_0_15px_rgba(0,255,204,0.2)]"
              >
                <Activity className="w-3.5 h-3.5 text-[#00FFB3] animate-pulse" />
                Collision Merge Success
              </motion.div>

              <motion.div
                initial={{ scale: 2.8, rotate: -4, opacity: 0, filter: 'blur(15px)' }}
                animate={{ scale: 1, rotate: 0, opacity: 1, filter: 'blur(0px)' }}
                transition={{ type: 'spring', stiffness: 45, damping: 15, delay: 0.2 }}
                className="relative py-2 px-1"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[#00FFCC]/15 blur-[40px] pointer-events-none" />
                <Logo size="lg" showText={false} className="mx-auto justify-center" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-3xl md:text-5xl font-extrabold text-white tracking-tighter"
              >
                Redefining Digital <span className="text-[#00E5FF]">Landscapes</span>
              </motion.h1>

              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-xl sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00E5FF] to-[#7C4DFF]"
              >
                WELCOME TO MYTECHREVO
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.85 }}
                className="text-[12px] sm:text-sm text-[#94A3B8] font-mono tracking-wide max-w-[420px] mx-auto leading-relaxed"
              >
                New technological paradigms initialized. Digital interfaces and AI-powered systems successfully synchronized.
              </motion.p>

              <p className="text-[9px] font-mono tracking-widest text-[#00E5FF]/50 uppercase animate-pulse">
                SYS_REGENERATION_SEQUENCE_PENDING...
              </p>
            </div>

            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white/[0.08]" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white/[0.08]" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white/[0.08]" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white/[0.08]" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 w-full">
          <div className="w-full max-w-lg mt-4">
            <p className="text-[9px] font-mono tracking-widest text-[#94A3B8]/40 uppercase mb-3">
              [ Secure Stack & Architectural Ecosystems ]
            </p>
            <div className="relative w-full overflow-hidden py-3 select-none">
              <div className="absolute top-0 left-0 bottom-0 w-12 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
              <div className="absolute top-0 right-0 bottom-0 w-12 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />
              <div className="animate-tech-marquee gap-3">
                {marqueeItems.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={`${item.name}-${i}`}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border ${item.bg} backdrop-blur-sm transition-all duration-300 hover:scale-105`}
                    >
                      <Icon className={`w-3.5 h-3.5 ${item.color}`} />
                      <span className="text-[10px] font-mono tracking-wider text-slate-200 font-semibold">{item.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              id="btn-hero-started"
              type="button"
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#00E5FF] to-[#7C4DFF] text-white text-xs font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(0,229,255,0.25)] hover:opacity-95 transition-all"
            >
              Deploy Solution
            </button>
            <button
              id="btn-hero-work"
              type="button"
              onClick={() => onNavigate('service')}
              className="px-6 py-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/[0.15] text-[#94A3B8] hover:text-white text-xs font-bold tracking-wider uppercase transition-all"
            >
              Case Studies
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6 sm:gap-10 pt-2">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center space-y-1">
                <h4 className="text-xl font-extrabold text-white tracking-tight">{stat.value}</h4>
                <p className="text-[9px] font-mono tracking-widest text-[#94A3B8] uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
