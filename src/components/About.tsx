import { Activity, Cloud, Shield, Sparkles } from 'lucide-react'

const FEATURES = [
  {
    label: 'Enterprise Speed',
    title: 'Sub-2s Loads',
    text: 'Vite code-splitting and asset compression for immediate viewport reactions.',
    icon: Activity,
    color: 'text-[#00E5FF]',
    border: 'border-[#00E5FF]/20 bg-[#00E5FF]/5',
  },
  {
    label: 'Ironclad Security',
    title: 'Server Proxy API',
    text: 'Encrypted server pipelines protecting model endpoints and credentials.',
    icon: Shield,
    color: 'text-amber-400',
    border: 'border-amber-400/20 bg-amber-400/5',
  },
  {
    label: 'Bespoke AI Workflows',
    title: 'Gemini Integrations',
    text: 'Automating customer support desks and scheduling modules natively.',
    icon: Sparkles,
    color: 'text-[#00FFB3]',
    border: 'border-[#00FFB3]/20 bg-[#00FFB3]/5',
  },
  {
    label: 'Infinite Scaling',
    title: 'Serverless Infrastructure',
    text: 'Docker container deployments and cloud routing for zero downtime.',
    icon: Cloud,
    color: 'text-pink-400',
    border: 'border-pink-400/20 bg-pink-400/5',
  },
]

export function About() {
  return (
    <section id="about-section-root" className="max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
        <div className="lg:col-span-5 space-y-5 sm:space-y-6 min-w-0">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00FFB3]/10 border border-[#00FFB3]/30 text-[#00FFB3] text-[9px] font-mono font-bold tracking-widest uppercase">
            Our DNA
          </div>
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl tracking-tight leading-tight text-white uppercase">Who We Are</h2>
          <p className="text-xs text-[#94A3B8] leading-relaxed">
            MyTechRevo was forged by elite engineers with a simple vision: to eliminate the friction between complex
            technology pipelines and beautiful, intuitive customer experiences.
          </p>
          <p className="text-xs text-[#94A3B8] leading-relaxed">
            We do not build generic templates. Every script, node, and layout design is engineered from scratch for high
            conversions, extreme fluid speeds, and ironclad security.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start">
              <div className="w-5 h-5 rounded-full bg-[#00E5FF]/20 flex items-center justify-center text-[#00E5FF] text-[10px] font-bold mt-0.5">
                ✓
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Vision</h4>
                <p className="text-[10px] text-[#94A3B8]">
                  Leading global digital transitions through ethical AI and serverless pipelines.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="w-5 h-5 rounded-full bg-[#00E5FF]/20 flex items-center justify-center text-[#00E5FF] text-[10px] font-bold mt-0.5">
                ✓
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Core Values</h4>
                <p className="text-[10px] text-[#94A3B8]">
                  Architectural honesty, pixel-perfect layouts, and responsive support.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {FEATURES.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className={`p-5 sm:p-6 rounded-2xl sm:rounded-3xl border ${feature.color} ${feature.border} space-y-4 hover:-translate-y-1.5 transition-transform duration-500 flex flex-col justify-between min-w-0`}
              >
                <div className="w-10 h-10 rounded-2xl bg-[#050816]/60 border border-white/[0.1] flex items-center justify-center">
                  <Icon className={`w-5 h-5 ${feature.color}`} />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-white/[0.4]">
                    {feature.label}
                  </span>
                  <h4 className="text-sm font-bold text-white">{feature.title}</h4>
                  <p className="text-[10px] text-[#94A3B8] leading-relaxed">{feature.text}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
