import { BadgeCheck, Quote, Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    quote:
      'Working with MyTechRevo was a paradigm shift. They delivered our bespoke AI automation suite in record time.',
    name: 'Sarah Jenkins',
    role: 'CTO, Prisma Solutions',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
  },
  {
    quote:
      'The dashboard built by MyTechRevo has become our core competitive advantage. It loads in under 1 second.',
    name: 'Marcus Aurelius',
    role: 'Managing Partner, Stoic Wealth',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
  },
]

function Card({ quote, name, role, avatar }: (typeof TESTIMONIALS)[number]) {
  return (
    <div className="w-[300px] sm:w-[380px] flex-shrink-0 p-6 sm:p-8 rounded-3xl bg-[#0B0F19]/60 border border-white/[0.04] hover:border-[#00E5FF]/20 flex flex-col justify-between space-y-6 relative overflow-hidden backdrop-blur-md cursor-pointer transition-colors duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
      <Quote className="absolute -top-3 -right-2 w-16 h-16 text-white/[0.015] pointer-events-none rotate-12" />
      <div className="space-y-3 relative z-10">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400 drop-shadow-[0_0_4px_rgba(251,191,36,0.3)]" />
          ))}
        </div>
        <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed italic">&ldquo;{quote}&rdquo;</p>
      </div>
      <div className="flex items-center gap-3 relative z-10 pt-2 border-t border-white/[0.04]">
        <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover border border-white/[0.1]" />
        <div className="flex-1 min-w-0">
          <h4 className="text-xs font-bold text-white truncate">{name}</h4>
          <p className="text-[10px] text-[#94A3B8] truncate">{role}</p>
        </div>
        <div className="flex items-center gap-1 text-[9px] font-mono font-bold text-[#00FFB3] uppercase tracking-wider">
          <BadgeCheck className="w-3.5 h-3.5" />
          Verified
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  const loop = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS]

  return (
    <section id="testimonial-section-root" className="max-w-7xl mx-auto px-6 scroll-mt-24">
      <div className="text-center max-w-xl mx-auto space-y-2 mb-16">
        <span className="text-[10px] uppercase tracking-widest font-mono text-[#00FFB3] font-bold bg-[#00FFB3]/10 px-3 py-1 rounded-full">
          Verified Trust
        </span>
        <h2 className="font-sans font-extrabold text-3xl tracking-tight leading-tight text-white uppercase">
          Client Partnerships
        </h2>
        <p className="text-xs text-[#94A3B8]">
          See why tech startups and enterprise teams trust MyTechRevo to architect their core pipelines.
        </p>
      </div>

      <div className="relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[150px] bg-gradient-to-r from-[#00E5FF]/3 via-[#7C4DFF]/3 to-[#00FFB3]/3 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute top-0 left-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#050816] via-[#050816]/70 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#050816] via-[#050816]/70 to-transparent z-10 pointer-events-none" />

        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee-ltr gap-6 px-4">
            {loop.map((item, i) => (
              <Card key={`${item.name}-${i}`} {...item} />
            ))}
          </div>
        </div>
      </div>

      <p className="text-center text-[9px] font-mono tracking-widest text-[#94A3B8]/40 uppercase mt-8">
        [ Hover Cursor To Pause Transmission Loop ]
      </p>
    </section>
  )
}
