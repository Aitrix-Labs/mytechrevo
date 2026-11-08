import { useEffect, useRef, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About } from './components/About'
import { ChatWidget } from './components/ChatWidget'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'

const NAV_TO_SECTION: Record<string, string> = {
  home: 'home-section-root',
  service: 'service-section-root',
  blog: 'about-section-root',
  project: 'service-section-root',
  testimonial: 'testimonial-section-root',
  customer: 'testimonial-section-root',
  contact: 'contact-section-root',
  developer: 'about-section-root',
  about: 'about-section-root',
}

const SCROLL_SECTIONS = [
  { key: 'home', el: 'home-section-root' },
  { key: 'blog', el: 'about-section-root' },
  { key: 'service', el: 'service-section-root' },
  { key: 'testimonial', el: 'testimonial-section-root' },
  { key: 'contact', el: 'contact-section-root' },
] as const

/** Nav items that share a page section */
const SECTION_VARIANTS: Record<string, string[]> = {
  home: ['home'],
  blog: ['blog', 'developer'],
  service: ['service', 'project'],
  testimonial: ['testimonial', 'customer'],
  contact: ['contact'],
}

function sectionKeyForNav(navId: string): string {
  for (const [key, variants] of Object.entries(SECTION_VARIANTS)) {
    if (variants.includes(navId)) return key
  }
  return navId
}

function scrollToSection(navId: string) {
  const el = document.getElementById(NAV_TO_SECTION[navId] ?? navId)
  if (!el) return
  const navHeight = document.getElementById('main-navigation')?.offsetHeight ?? 72
  const top = el.getBoundingClientRect().top + window.scrollY - navHeight - 8
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
}

export default function App() {
  const [active, setActive] = useState('home')
  const [presetService, setPresetService] = useState('')
  /** Remembers which nav item the user last chose for each shared section */
  const preferredNav = useRef<Record<string, string>>({
    home: 'home',
    blog: 'blog',
    service: 'service',
    testimonial: 'testimonial',
    contact: 'contact',
  })

  useEffect(() => {
    const resolveActive = () => {
      const offset = window.scrollY + 160
      let sectionKey = 'home'
      for (const section of SCROLL_SECTIONS) {
        const el = document.getElementById(section.el)
        if (el && el.offsetTop <= offset) sectionKey = section.key
      }
      const preferred = preferredNav.current[sectionKey]
      const variants = SECTION_VARIANTS[sectionKey] ?? [sectionKey]
      setActive(preferred && variants.includes(preferred) ? preferred : sectionKey)
    }

    resolveActive()
    window.addEventListener('scroll', resolveActive, { passive: true })
    return () => window.removeEventListener('scroll', resolveActive)
  }, [])

  const onNavigate = (id: string) => {
    const key = sectionKeyForNav(id)
    preferredNav.current[key] = id
    setActive(id)
    scrollToSection(id)
  }

  const requestService = (serviceTitle: string) => {
    setPresetService(serviceTitle)
    onNavigate('contact')
  }

  return (
    <BrowserRouter basename="/mytechrevo">
      <Routes>
        <Route
          path="*"
          element={
            <div className="min-h-screen bg-[#050816] font-sans antialiased text-white selection:bg-[#00E5FF]/30 selection:text-white">
              <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-[#7C4DFF]/5 rounded-full blur-[150px] pointer-events-none -z-10" />
              <div className="fixed top-1/3 right-1/4 w-[400px] h-[400px] bg-[#00E5FF]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

              <Navbar active={active} onNavigate={onNavigate} />

              <main className="relative z-10 w-full overflow-x-hidden">
                <div className="space-y-16 sm:space-y-24 lg:space-y-32">
                  <Hero onNavigate={onNavigate} />
                  <About />
                  <Services onRequest={requestService} />
                  <Testimonials />
                  <Contact presetService={presetService} />
                </div>
              </main>

              <Footer onNavigate={onNavigate} />
              <ChatWidget />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
