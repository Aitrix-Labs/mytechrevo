import { ArrowRight, Mail, Phone, Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { Logo } from './Logo'

type FooterProps = {
  onNavigate: (id: string) => void
}

export function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const subscribe = (e: FormEvent) => {
    e.preventDefault()
    setDone(true)
    setEmail('')
    setTimeout(() => setDone(false), 2500)
  }

  return (
    <footer id="footer-section-root" className="relative bg-[#050816] border-t border-white/[0.04] text-white pt-14 sm:pt-20 pb-8 sm:pb-10 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] bg-gradient-to-l from-[#7C4DFF]/5 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-0 left-0 w-[220px] sm:w-[300px] h-[220px] sm:h-[300px] bg-gradient-to-r from-[#00E5FF]/3 to-transparent rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-12 border-b border-white/[0.04] pb-12 sm:pb-16">
        <div className="sm:col-span-2 md:col-span-3 space-y-6">
          <button type="button" className="flex items-center gap-2 cursor-pointer group" onClick={() => onNavigate('home')}>
            <Logo showText={false} />
            <span className="font-sans font-bold tracking-tight text-base sm:text-lg text-white">
              MYTECH <span className="text-[#10B981] font-extrabold">REVO</span>
            </span>
          </button>
          <p className="text-xs text-[#94A3B8] leading-relaxed max-w-xs">
            We architect and deploy next-generation web products, scalable AI integrations, offline-first mobile
            applications, and zero-downtime Cloud/DevOps infrastructure.
          </p>
          <div className="flex items-center gap-2 text-xs text-[#94A3B8] font-mono">
            <Phone className="w-3.5 h-3.5 text-[#10B981]" />
            <a href="tel:0977845135" className="hover:text-white transition-colors">
              0977845135
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/lbekele916"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/[0.08] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#00E5FF]/40 transition-all duration-300"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/tech-revolution-official/posts/?feedView=all&viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/[0.08] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#00E5FF]/40 transition-all duration-300"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="https://t.me/dollar_maker_vibe"
              target="_blank"
              rel="noopener noreferrer"
              title="Telegram"
              className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/[0.08] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#00E5FF]/40 transition-all duration-300"
            >
              <Send className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#00E5FF] font-mono">Expertise</h4>
          <ul className="space-y-2.5 text-xs text-[#94A3B8]">
            {['Web Development', 'Mobile App Development', 'AI Solutions', 'Cloud & DevOps', 'UI/UX Design'].map((item) => (
              <li key={item}>
                <button type="button" className="hover:text-white transition-colors" onClick={() => onNavigate('service')}>
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#7C4DFF] font-mono">Company</h4>
          <ul className="space-y-2.5 text-xs text-[#94A3B8]">
            {[
              { label: 'Home', id: 'home' },
              { label: 'Blog Briefs', id: 'blog' },
              { label: 'Case Studies', id: 'service' },
              { label: 'Client Area', id: 'contact' },
              { label: 'System Specs', id: 'about' },
            ].map((item) => (
              <li key={item.label}>
                <button type="button" className="hover:text-white transition-colors" onClick={() => onNavigate(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-white font-mono">Newsletter</h4>
          <p className="text-xs text-[#94A3B8] leading-relaxed">
            Get elite technology insights and strategy briefs directly in your inbox. No spam.
          </p>
          <form className="space-y-2" onSubmit={subscribe}>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
              <input
                required
                placeholder="Email address"
                className="w-full bg-[#050816] border border-white/[0.08] focus:border-[#00E5FF]/40 rounded-xl pl-10 pr-10 py-2.5 text-xs text-white outline-none"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg bg-gradient-to-r from-[#00E5FF] to-[#7C4DFF] flex items-center justify-center text-white disabled:opacity-40"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            {done && <p className="text-[10px] text-[#00FFB3] font-mono">Subscribed successfully.</p>}
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-[10px] text-[#94A3B8] font-mono text-center sm:text-left">
        <p>© 2026 mytechrevo.com. World class custom engineering. All rights reserved.</p>
        <p>Engineered for raw performance (60 FPS)</p>
      </div>
    </footer>
  )
}
