import { Globe, Mail, Phone, Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

const COUNTRIES = [
  { value: '+251', label: '🇪🇹 Ethiopia (+251)' },
  { value: '+1', label: '🇺🇸 United States (+1)' },
  { value: '+44', label: '🇬🇧 United Kingdom (+44)' },
  { value: '+91', label: '🇮🇳 India (+91)' },
  { value: '+49', label: '🇩🇪 Germany (+49)' },
  { value: '+61', label: '🇦🇺 Australia (+61)' },
  { value: '+33', label: '🇫🇷 France (+33)' },
  { value: '+81', label: '🇯🇵 Japan (+81)' },
  { value: '+86', label: '🇨🇳 China (+86)' },
  { value: '+971', label: '🇦🇪 UAE (+971)' },
  { value: '+254', label: '🇰🇪 Kenya (+254)' },
  { value: '+234', label: '🇳🇬 Nigeria (+234)' },
  { value: '+55', label: '🇧🇷 Brazil (+55)' },
  { value: '+27', label: '🇿🇦 South Africa (+27)' },
  { value: '+39', label: '🇮🇹 Italy (+39)' },
  { value: '+34', label: '🇪🇸 Spain (+34)' },
  { value: '+31', label: '🇳🇱 Netherlands (+31)' },
  { value: '+65', label: '🇸🇬 Singapore (+65)' },
  { value: '+82', label: '🇰🇷 South Korea (+82)' },
  { value: '+20', label: '🇪🇬 Egypt (+20)' },
  { value: '+966', label: '🇸🇦 Saudi Arabia (+966)' },
]

const SERVICES = [
  'Web Development',
  'Mobile App Development',
  'AI Solutions',
  'Cloud & DevOps',
  'UI/UX Design',
  'Digital Marketing',
]

const BUDGETS = ['$5,000 - $10,000', '$10,000 - $20,000', '$20,000 - $50,000', '$50,000+']

const inputClass =
  'w-full bg-[#050816] border border-white/[0.1] focus:border-[#00E5FF]/50 rounded-xl px-4 py-2.5 text-xs text-white outline-none'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    country: '+1',
    phone: '',
    company: '',
    service: 'AI Solutions',
    budget: '$20,000 - $50,000',
    outline: '',
  })

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact-section-root" className="max-w-7xl mx-auto px-6 scroll-mt-24 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-6 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] text-[9px] font-mono font-bold tracking-widest uppercase">
            Deploy Pipeline
          </div>
          <h2 className="font-sans font-extrabold text-3xl tracking-tight leading-tight text-white uppercase">
            Kickstart The Revolution
          </h2>
          <p className="text-xs text-[#94A3B8] leading-relaxed">
            Ready to scale your digital presence? Submit your project parameters using our secure lead intake portal. Our
            elite solutions division will parse your request and reply with a complete architectural blueprint.
          </p>

          <div className="space-y-4 text-xs font-mono">
            <div className="flex gap-3 items-center">
              <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/[0.08] flex items-center justify-center text-[#00E5FF]">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-[#94A3B8]">hello@mytechrevo.com</span>
            </div>
            <div className="flex gap-3 items-center">
              <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/[0.08] flex items-center justify-center text-[#7C4DFF]">
                <Globe className="w-4 h-4" />
              </div>
              <span className="text-[#94A3B8]">HQ: London EC1A, United Kingdom</span>
            </div>
            <a href="tel:0977845135" className="flex gap-3 items-center group/item hover:text-white transition-colors">
              <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/[0.08] flex items-center justify-center text-[#10B981] group-hover/item:border-[#10B981]/40 transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-[#94A3B8] group-hover/item:text-white transition-colors">0977845135</span>
            </a>
            <a
              href="https://github.com/lbekele916"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 items-center group/item hover:text-white transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/[0.08] flex items-center justify-center text-[#00FFB3] group-hover/item:border-[#00FFB3]/40 transition-colors">
                <GithubIcon className="w-4 h-4" />
              </div>
              <span className="text-[#94A3B8] group-hover/item:text-white transition-colors">GitHub Account</span>
            </a>
            <a
              href="https://www.linkedin.com/company/tech-revolution-official/posts/?feedView=all&viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 items-center group/item hover:text-white transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/[0.08] flex items-center justify-center text-[#00E5FF] group-hover/item:border-[#00E5FF]/40 transition-colors">
                <LinkedinIcon className="w-4 h-4" />
              </div>
              <span className="text-[#94A3B8] group-hover/item:text-white transition-colors">LinkedIn Company Page</span>
            </a>
            <a
              href="https://t.me/dollar_maker_vibe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 items-center group/item hover:text-white transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/[0.08] flex items-center justify-center text-[#7C4DFF] group-hover/item:border-[#7C4DFF]/40 transition-colors">
                <Send className="w-4 h-4" />
              </div>
              <span className="text-[#94A3B8] group-hover/item:text-white transition-colors">Telegram Channel</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form onSubmit={onSubmit} className="p-8 rounded-3xl bg-[#0F172A]/40 border border-white/[0.04] shadow-2xl space-y-5">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#00E5FF] font-mono">Interactive Proposal Engine</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] text-[#94A3B8] uppercase font-bold tracking-wider mb-1">Full Name</label>
                <input
                  required
                  className={inputClass}
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-[10px] text-[#94A3B8] uppercase font-bold tracking-wider mb-1">Email Address</label>
                <input
                  required
                  className={inputClass}
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] text-[#94A3B8] uppercase font-bold tracking-wider mb-1">
                  Phone Number (Optional)
                </label>
                <div className="flex gap-2">
                  <select
                    className="w-[105px] shrink-0 bg-[#050816] border border-white/[0.1] focus:border-[#00E5FF]/50 rounded-xl px-1.5 py-2.5 text-[11px] text-white outline-none cursor-pointer"
                    value={form.country}
                    onChange={(e) => setForm((f) => ({ ...f, country: e.target.value }))}
                  >
                    {COUNTRIES.map((c) => (
                      <option key={c.value + c.label} value={c.value}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                  <input
                    placeholder="301-555-0100"
                    className={`flex-1 ${inputClass}`}
                    type="text"
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  />
                </div>
                <p className="text-[9px] text-[#00E5FF]/80 font-mono mt-1">💡 Format: e.g., 10-digit number</p>
              </div>
              <div>
                <label className="block text-[10px] text-[#94A3B8] uppercase font-bold tracking-wider mb-1">Company Name</label>
                <input
                  className={inputClass}
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] text-[#94A3B8] uppercase font-bold tracking-wider mb-1">Service Needed</label>
                <select
                  className={inputClass}
                  value={form.service}
                  onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
                >
                  {SERVICES.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-[10px] text-[#94A3B8] uppercase font-bold tracking-wider mb-1">
                  Budget Allocation Range
                </label>
                <select
                  className={inputClass}
                  value={form.budget}
                  onChange={(e) => setForm((f) => ({ ...f, budget: e.target.value }))}
                >
                  {BUDGETS.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] text-[#94A3B8] uppercase font-bold tracking-wider mb-1">
                Project Outline Description
              </label>
              <textarea
                placeholder="Tell us about your active business targets, timelines, and architectural constraints..."
                className={`${inputClass} h-20 resize-none`}
                value={form.outline}
                onChange={(e) => setForm((f) => ({ ...f, outline: e.target.value }))}
              />
            </div>

            <div className="pt-2">
              <button
                id="btn-lead-submit"
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#7C4DFF] text-white text-xs font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(0,229,255,0.2)] hover:opacity-95 transition-all"
              >
                {submitted ? 'Proposal Received' : 'Submit Proposal Parameters'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
