import { ChevronRight, Cloud, Globe, Smartphone, Sparkles, Wand2, BarChart3 } from 'lucide-react'
import type { ReactNode } from 'react'

type Service = {
  id: string
  title: string
  text: string
  icon: typeof Globe
  color: string
  cursorColor: string
  tags: string[]
  preview: ReactNode
}

const SERVICES: Service[] = [
  {
    id: 'web',
    title: 'Web Development',
    text: 'Next-gen web applications, high-performance SaaS interfaces, and e-commerce pipelines.',
    icon: Globe,
    color: 'text-[#00E5FF]',
    cursorColor: '#00E5FF',
    tags: ['React / Vite', 'Next.js App Routing', 'Stripe checkout'],
    preview: (
      <div className="relative w-full h-24 bg-[#050816]/80 rounded-2xl border border-white/[0.06] overflow-hidden flex flex-col">
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-amber-500/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/60" />
          <div className="w-16 h-2 bg-white/[0.05] rounded-full ml-2" />
        </div>
        <div className="flex-1 p-3 grid grid-cols-12 gap-2 items-center">
          <div className="col-span-4 h-full bg-[#00E5FF]/10 rounded border border-[#00E5FF]/20 flex flex-col justify-between p-1.5">
            <div className="w-full h-1 bg-[#00E5FF]/30 rounded-full" />
            <div className="w-2/3 h-1 bg-[#00E5FF]/20 rounded-full" />
          </div>
          <div className="col-span-8 h-full flex flex-col gap-1.5 justify-center">
            <div className="h-2 bg-white/[0.06] rounded-full w-full" />
            <div className="h-2 bg-white/[0.04] rounded-full w-4/5" />
            <div className="h-2 bg-white/[0.02] rounded-full w-1/2" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'mobile',
    title: 'Mobile App Development',
    text: 'High-performance iOS, Android, and cross-platform Flutter mobile applications.',
    icon: Smartphone,
    color: 'text-[#7C4DFF]',
    cursorColor: '#7C4DFF',
    tags: ['Native performance', 'Push Alerts', 'Biometrics API'],
    preview: (
      <div className="relative w-full h-24 bg-[#050816]/80 rounded-2xl border border-white/[0.06] overflow-hidden flex justify-center items-center">
        <div className="w-16 h-28 border border-white/[0.1] rounded-xl bg-white/[0.01] flex flex-col p-1.5 relative -bottom-6">
          <div className="w-6 h-1 bg-white/[0.2] rounded-full mx-auto mb-1.5" />
          <div className="space-y-1.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="p-1 rounded-md border border-white/[0.05] bg-[#7C4DFF]/5 flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-[#7C4DFF] flex-shrink-0" />
                <div className="w-6 h-1 bg-white/[0.1] rounded-full" />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-4 right-4 text-[10px] text-[#7C4DFF] font-mono font-bold">• LIVE_UI</div>
      </div>
    ),
  },
  {
    id: 'ai',
    title: 'AI Solutions',
    text: 'Cognitive agent automation, custom chatbots, and neural processing pipelines.',
    icon: Sparkles,
    color: 'text-[#00FFB3]',
    cursorColor: '#00FFB3',
    tags: ['Gemini LLM setups', 'Vector search indexing', 'Semantic Agents'],
    preview: (
      <div className="relative w-full h-24 bg-[#050816]/80 rounded-2xl border border-white/[0.06] overflow-hidden flex items-center justify-center">
        <div className="w-8 h-8 rounded-full bg-[#00FFB3]/10 border border-[#00FFB3]/30 flex items-center justify-center shadow-[0_0_12px_rgba(0,255,179,0.25)] animate-pulse">
          <div className="w-3 h-3 rounded-full bg-[#00FFB3]" />
        </div>
      </div>
    ),
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    text: 'Secure CI/CD build channels, robust Kubernetes setup, and cloud resource management.',
    icon: Cloud,
    color: 'text-amber-400',
    cursorColor: '#FBBF24',
    tags: ['AWS & GCP Cloud', 'Docker clusters', '99.99% Availability'],
    preview: (
      <div className="relative w-full h-24 bg-[#050816]/80 rounded-2xl border border-white/[0.06] overflow-hidden p-3 flex flex-col justify-between">
        <div className="flex items-center justify-between text-[9px] font-mono text-amber-400/80">
          <span>CI / CD</span>
          <span className="text-emerald-400">● ONLINE</span>
        </div>
        <div className="flex gap-1.5 items-end h-10">
          {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
            <div key={i} className="flex-1 rounded-t bg-amber-400/30 border border-amber-400/20" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    text: 'Stunning glassmorphic visual systems, interactive wireframing, and branding guidelines.',
    icon: Wand2,
    color: 'text-pink-400',
    cursorColor: '#F472B6',
    tags: ['Framer & Figma guides', 'Interaction design', 'Design Systems'],
    preview: (
      <div className="relative w-full h-24 bg-[#050816]/80 rounded-2xl border border-white/[0.06] overflow-hidden p-3 flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-400/30 to-[#7C4DFF]/20 border border-white/[0.08]" />
        <div className="flex-1 space-y-2">
          <div className="h-2 w-3/4 bg-white/[0.08] rounded-full" />
          <div className="h-2 w-1/2 bg-white/[0.05] rounded-full" />
          <div className="flex gap-1">
            <div className="w-4 h-4 rounded bg-pink-400/40" />
            <div className="w-4 h-4 rounded bg-[#00E5FF]/30" />
            <div className="w-4 h-4 rounded bg-[#7C4DFF]/30" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    text: 'Growth hacking models, semantic SEO structuring, and dynamic marketing metrics.',
    icon: BarChart3,
    color: 'text-[#00E5FF]',
    cursorColor: '#00E5FF',
    tags: ['Semantic search SEO', 'Pixel trackers', 'CRO Maximization'],
    preview: (
      <div className="relative w-full h-24 bg-[#050816]/80 rounded-2xl border border-white/[0.06] overflow-hidden p-3 flex flex-col justify-center gap-2">
        <div className="flex justify-between text-[9px] font-mono text-[#94A3B8]">
          <span>TRAFFIC</span>
          <span className="text-[#00FFB3]">+184%</span>
        </div>
        <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
          <div className="h-full w-3/4 bg-gradient-to-r from-[#00E5FF] to-[#7C4DFF] rounded-full" />
        </div>
        <div className="flex justify-between text-[9px] font-mono text-[#94A3B8]">
          <span>CONVERSION</span>
          <span className="text-[#00E5FF]">12.4%</span>
        </div>
      </div>
    ),
  },
]

type ServicesProps = {
  onRequest: () => void
}

export function Services({ onRequest }: ServicesProps) {
  return (
    <section id="service-section-root" className="max-w-7xl mx-auto px-6 scroll-mt-24">
      <div className="text-center max-w-xl mx-auto space-y-2 mb-16">
        <span className="text-[10px] uppercase tracking-widest font-mono text-[#7C4DFF] font-bold bg-[#7C4DFF]/10 px-3 py-1 rounded-full">
          Excellence Matrix
        </span>
        <h2 className="font-sans font-extrabold text-3xl tracking-tight leading-tight text-white uppercase">Our Capabilities</h2>
        <p className="text-xs text-[#94A3B8]">
          From pixel rendering to vector databases, we construct cohesive tech ecosystems for forward-thinking enterprises.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => {
          const Icon = service.icon
          return (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group p-8 rounded-3xl bg-[#0F172A]/40 border border-white/[0.04] hover:border-white/[0.1] hover:shadow-[0_0_40px_rgba(0,229,255,0.06)] transition-all duration-500 space-y-6 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#050816]/60 border border-white/[0.1] flex items-center justify-center relative overflow-hidden">
                  <Icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-sans font-bold text-base text-white group-hover:text-[#00E5FF] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">{service.text}</p>
                </div>
              </div>

              {service.preview}

              <div className="space-y-3.5 pt-4 border-t border-white/[0.03]">
                {service.tags.map((tag) => (
                  <div key={tag} className="flex items-center gap-2 text-[10px] text-slate-300 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00FFB3]" />
                    <span>{tag}</span>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={onRequest}
                  className="flex items-center gap-1.5 text-xs font-semibold text-[#00E5FF] hover:text-white transition-colors duration-300 pt-2 cursor-pointer"
                >
                  Request Solution <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
