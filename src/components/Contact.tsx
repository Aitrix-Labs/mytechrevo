import { CheckCircle2, Globe, Loader2, Mail, Phone, RotateCcw, Send } from 'lucide-react'
import { useEffect, useState, type FormEvent } from 'react'
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

const CONTACT_EMAIL = 'hello@mytechrevo.com'

type FormState = {
  name: string
  email: string
  country: string
  phone: string
  company: string
  service: string
  budget: string
  outline: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

const emptyForm: FormState = {
  name: '',
  email: '',
  country: '+1',
  phone: '',
  company: '',
  service: 'AI Solutions',
  budget: '$20,000 - $50,000',
  outline: '',
}

const inputClass =
  'w-full bg-[#050816] border border-white/[0.1] focus:border-[#00E5FF]/50 rounded-xl px-4 py-2.5 text-xs text-white outline-none transition-colors'
const errorInputClass =
  'w-full bg-[#050816] border border-rose-400/50 focus:border-rose-400 rounded-xl px-4 py-2.5 text-xs text-white outline-none transition-colors'

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!form.name.trim() || form.name.trim().length < 2) errors.name = 'Enter your full name'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errors.email = 'Enter a valid email address'
  if (form.phone.trim() && !/^[\d\s().-]{7,20}$/.test(form.phone.trim())) {
    errors.phone = 'Use a valid phone format'
  }
  if (!form.service) errors.service = 'Select a service'
  if (!form.budget) errors.budget = 'Select a budget range'
  if (!form.outline.trim() || form.outline.trim().length < 20) {
    errors.outline = 'Describe your project in at least 20 characters'
  }
  return errors
}

type ContactProps = {
  presetService?: string
}

export function Contact({ presetService }: ContactProps) {
  const [form, setForm] = useState<FormState>(emptyForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [touched, setTouched] = useState(false)

  useEffect(() => {
    if (presetService && SERVICES.includes(presetService)) {
      setForm((f) => ({ ...f, service: presetService }))
      setStatus('idle')
    }
  }, [presetService])

  const setField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }))
    if (touched) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[key]
        return next
      })
    }
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setTouched(true)
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('submitting')
    await new Promise((r) => setTimeout(r, 900))
    setStatus('success')
  }

  const resetForm = () => {
    setForm({
      ...emptyForm,
      service: presetService && SERVICES.includes(presetService) ? presetService : emptyForm.service,
    })
    setErrors({})
    setTouched(false)
    setStatus('idle')
  }

  return (
    <section id="contact-section-root" className="max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-24 pb-12 sm:pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start lg:items-center">
        <div className="lg:col-span-5 space-y-5 sm:space-y-6 text-left min-w-0">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] text-[9px] font-mono font-bold tracking-widest uppercase">
            Deploy Pipeline
          </div>
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl tracking-tight leading-tight text-white uppercase">
            Kickstart The Revolution
          </h2>
          <p className="text-xs text-[#94A3B8] leading-relaxed">
            Ready to scale your digital presence? Submit your project parameters using our secure lead intake portal. Our
            elite solutions division will parse your request and reply with a complete architectural blueprint.
          </p>

          <div className="space-y-4 text-xs font-mono">
            <a href={`mailto:${CONTACT_EMAIL}`} className="flex gap-3 items-center group/item hover:text-white transition-colors">
              <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/[0.08] flex items-center justify-center text-[#00E5FF] group-hover/item:border-[#00E5FF]/40 transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-[#94A3B8] group-hover/item:text-white transition-colors break-all">{CONTACT_EMAIL}</span>
            </a>
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
          {status === 'success' ? (
            <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#0F172A]/40 border border-[#00FFB3]/20 shadow-2xl space-y-6 text-center sm:text-left">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#00FFB3]/10 border border-[#00FFB3]/30 text-[#00FFB3]">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#00FFB3] font-mono">Proposal Queued</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Thanks {form.name.split(' ')[0] || 'there'}. Your {form.service} proposal was received. Our team will
                  review your parameters and follow up soon.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-[11px] font-mono">
                <div className="rounded-xl border border-white/[0.06] bg-[#050816]/60 p-3">
                  <p className="text-[#94A3B8] mb-1">Service</p>
                  <p className="text-white">{form.service}</p>
                </div>
                <div className="rounded-xl border border-white/[0.06] bg-[#050816]/60 p-3">
                  <p className="text-[#94A3B8] mb-1">Budget</p>
                  <p className="text-white">{form.budget}</p>
                </div>
                <div className="rounded-xl border border-white/[0.06] bg-[#050816]/60 p-3 sm:col-span-2">
                  <p className="text-[#94A3B8] mb-1">Contact</p>
                  <p className="text-white">{form.email}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={resetForm}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#7C4DFF] text-white text-xs font-bold tracking-wider uppercase"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Submit Another
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#0F172A]/40 border border-white/[0.04] shadow-2xl space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#00E5FF] font-mono">Interactive Proposal Engine</h3>
                {presetService && (
                  <span className="self-start text-[9px] font-mono text-[#00FFB3] bg-[#00FFB3]/10 border border-[#00FFB3]/20 px-2 py-1 rounded-full">
                    Prefill: {presetService}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] text-[#94A3B8] uppercase font-bold tracking-wider mb-1">Full Name</label>
                  <input
                    className={errors.name ? errorInputClass : inputClass}
                    type="text"
                    value={form.name}
                    onChange={(e) => setField('name', e.target.value)}
                    placeholder="Jane Doe"
                    autoComplete="name"
                  />
                  {errors.name && <p className="text-[9px] text-rose-400 font-mono mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-[10px] text-[#94A3B8] uppercase font-bold tracking-wider mb-1">Email Address</label>
                  <input
                    className={errors.email ? errorInputClass : inputClass}
                    type="email"
                    value={form.email}
                    onChange={(e) => setField('email', e.target.value)}
                    placeholder="jane@company.com"
                    autoComplete="email"
                  />
                  {errors.email && <p className="text-[9px] text-rose-400 font-mono mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] text-[#94A3B8] uppercase font-bold tracking-wider mb-1">
                    Phone Number (Optional)
                  </label>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <select
                      className="w-full sm:w-[140px] shrink-0 bg-[#050816] border border-white/[0.1] focus:border-[#00E5FF]/50 rounded-xl px-2 py-2.5 text-[11px] text-white outline-none cursor-pointer"
                      value={form.country}
                      onChange={(e) => setField('country', e.target.value)}
                    >
                      {COUNTRIES.map((c) => (
                        <option key={c.value + c.label} value={c.value}>
                          {c.label}
                        </option>
                      ))}
                    </select>
                    <input
                      placeholder="301-555-0100"
                      className={`flex-1 min-w-0 ${errors.phone ? errorInputClass : inputClass}`}
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setField('phone', e.target.value)}
                      autoComplete="tel-national"
                    />
                  </div>
                  {errors.phone ? (
                    <p className="text-[9px] text-rose-400 font-mono mt-1">{errors.phone}</p>
                  ) : (
                    <p className="text-[9px] text-[#00E5FF]/80 font-mono mt-1">💡 Format: e.g., 10-digit number</p>
                  )}
                </div>
                <div>
                  <label className="block text-[10px] text-[#94A3B8] uppercase font-bold tracking-wider mb-1">Company Name</label>
                  <input
                    className={inputClass}
                    type="text"
                    value={form.company}
                    onChange={(e) => setField('company', e.target.value)}
                    placeholder="Acme Labs"
                    autoComplete="organization"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] text-[#94A3B8] uppercase font-bold tracking-wider mb-1">Service Needed</label>
                  <select
                    className={errors.service ? errorInputClass : inputClass}
                    value={form.service}
                    onChange={(e) => setField('service', e.target.value)}
                  >
                    {SERVICES.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                  {errors.service && <p className="text-[9px] text-rose-400 font-mono mt-1">{errors.service}</p>}
                </div>
                <div>
                  <label className="block text-[10px] text-[#94A3B8] uppercase font-bold tracking-wider mb-1">
                    Budget Allocation Range
                  </label>
                  <select
                    className={errors.budget ? errorInputClass : inputClass}
                    value={form.budget}
                    onChange={(e) => setField('budget', e.target.value)}
                  >
                    {BUDGETS.map((b) => (
                      <option key={b}>{b}</option>
                    ))}
                  </select>
                  {errors.budget && <p className="text-[9px] text-rose-400 font-mono mt-1">{errors.budget}</p>}
                </div>
              </div>

              <div>
                <label className="block text-[10px] text-[#94A3B8] uppercase font-bold tracking-wider mb-1">
                  Project Outline Description
                </label>
                <textarea
                  placeholder="Tell us about your active business targets, timelines, and architectural constraints..."
                  className={`${errors.outline ? errorInputClass : inputClass} h-24 resize-none`}
                  value={form.outline}
                  onChange={(e) => setField('outline', e.target.value)}
                />
                <div className="flex items-center justify-between gap-2 mt-1">
                  {errors.outline ? (
                    <p className="text-[9px] text-rose-400 font-mono">{errors.outline}</p>
                  ) : (
                    <p className="text-[9px] text-[#94A3B8]/60 font-mono">Min 20 characters</p>
                  )}
                  <p className="text-[9px] text-[#94A3B8]/60 font-mono">{form.outline.trim().length}/20+</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  id="btn-lead-submit"
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#7C4DFF] text-white text-xs font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(0,229,255,0.2)] hover:opacity-95 transition-all disabled:opacity-70 disabled:cursor-wait inline-flex items-center justify-center gap-2"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Parsing Proposal…
                    </>
                  ) : (
                    'Submit Proposal Parameters'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
