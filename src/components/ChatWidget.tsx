import { MessageCircle, Send, X } from 'lucide-react'
import { useEffect, useRef, useState, type FormEvent } from 'react'

type Msg = { id: string; role: 'assistant' | 'user'; content: string }

const SUGGESTIONS = [
  'How do I request a quote?',
  'What AI integrations do you offer?',
  'Tell me about web app pricing.',
  'Do you support Flutter development?',
]

function replyFor(input: string): string {
  const q = input.toLowerCase()
  if (q.includes('quote') || q.includes('request')) {
    return 'You can submit a proposal through the Interactive Proposal Engine in the contact section. Our solutions team typically replies with an architectural blueprint within 24–48 hours.'
  }
  if (q.includes('ai') || q.includes('gemini') || q.includes('integration')) {
    return 'We specialize in Gemini LLM setups, vector search indexing, semantic agents, and custom chatbots that plug into your existing support and scheduling workflows.'
  }
  if (q.includes('price') || q.includes('budget') || q.includes('cost')) {
    return 'Engagements typically start from $5,000 for focused builds, with larger AI and platform programs ranging $20,000–$50,000+. Share your scope in the proposal form for a precise estimate.'
  }
  if (q.includes('flutter') || q.includes('mobile')) {
    return 'Yes — we ship high-performance iOS, Android, and Flutter applications with native feel, push alerts, and biometrics API support.'
  }
  return 'Great question. MyTechRevo architects web products, AI integrations, mobile apps, and Cloud/DevOps infrastructure. Tell me more about your goals, or jump to Contact Us to submit project parameters.'
}

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(true)
  const [messages, setMessages] = useState<Msg[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        'Welcome to MyTechRevo! I am Revo, your intelligent AI solutions advisor. How can I assist you in architecting your next website, mobile application, or automation pipeline today?',
    },
  ])
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing, open])

  const send = async (text: string) => {
    const trimmed = text.trim()
    if (!trimmed || typing) return
    setShowSuggestions(false)
    setMessages((m) => [...m, { id: `u-${Date.now()}`, role: 'user', content: trimmed }])
    setInput('')
    setTyping(true)
    await new Promise((r) => setTimeout(r, 700 + Math.random() * 600))
    setMessages((m) => [...m, { id: `a-${Date.now()}`, role: 'assistant', content: replyFor(trimmed) }])
    setTyping(false)
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    void send(input)
  }

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[60] flex flex-col items-end gap-3 max-w-[calc(100vw-1.5rem)]">
      {open && (
        <div className="w-[min(100vw-2rem,360px)] h-[min(70vh,480px)] sm:h-[480px] rounded-2xl sm:rounded-3xl bg-[#0B0F19]/95 border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur-xl flex flex-col overflow-hidden">
          <div className="px-4 py-3 border-b border-white/[0.06] flex items-center justify-between bg-gradient-to-r from-[#00E5FF]/10 to-[#7C4DFF]/10">
            <div>
              <p className="text-xs font-bold text-white">Revo AI Advisor</p>
              <p className="text-[10px] text-[#00FFB3] font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00FFB3] animate-pulse" /> Online
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="p-1.5 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/[0.05]"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-[#00E5FF] to-[#7C4DFF] text-white'
                      : 'bg-white/[0.04] border border-white/[0.06] text-[#94A3B8]'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl px-3.5 py-2.5 text-xs text-[#94A3B8]">
                  Revo is typing…
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {showSuggestions && (
            <div className="px-3 pb-2 flex flex-wrap gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => void send(s)}
                  className="text-[10px] px-2.5 py-1.5 rounded-full border border-white/[0.08] text-[#94A3B8] hover:text-white hover:border-[#00E5FF]/30 transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          <form onSubmit={onSubmit} className="p-3 border-t border-white/[0.06] flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Revo anything…"
              className="flex-1 bg-[#050816] border border-white/[0.08] focus:border-[#00E5FF]/40 rounded-xl px-3 py-2.5 text-xs text-white outline-none"
            />
            <button
              type="submit"
              className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#7C4DFF] flex items-center justify-center text-white"
              aria-label="Send"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#00E5FF] to-[#7C4DFF] text-white shadow-[0_0_30px_rgba(0,229,255,0.35)] flex items-center justify-center hover:scale-105 transition-transform"
        aria-label="Open chat"
      >
        {open ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />}
        {!open && (
          <span className="absolute -top-0.5 -right-0.5 w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#00FFB3] border-2 border-[#050816] shadow-[0_0_10px_rgba(0,255,179,0.8)]" />
        )}
      </button>
    </div>
  )
}
