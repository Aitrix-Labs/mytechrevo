import { useEffect, useState } from 'react'
import { About } from './components/About'
import { ChatWidget } from './components/ChatWidget'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'

const SECTION_IDS = [
  { nav: 'home', el: 'home-section-root' },
  { nav: 'service', el: 'service-section-root' },
  { nav: 'testimonial', el: 'testimonial-section-root' },
  { nav: 'contact', el: 'contact-section-root' },
] as const

function scrollToSection(navId: string) {
  const map: Record<string, string> = {
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
  document.getElementById(map[navId] ?? navId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function App() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      const offset = window.scrollY + 140
      let current = 'home'
      for (const section of SECTION_IDS) {
        const el = document.getElementById(section.el)
        if (el && el.offsetTop <= offset) current = section.nav
      }
      const about = document.getElementById('about-section-root')
      if (about && about.offsetTop <= offset && offset < (document.getElementById('service-section-root')?.offsetTop ?? Infinity)) {
        // keep home/service mapping simple; about is reached via blog/developer
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onNavigate = (id: string) => {
    setActive(id === 'blog' || id === 'developer' || id === 'about' ? 'home' : id === 'project' || id === 'customer' ? (id === 'customer' ? 'testimonial' : 'service') : id)
    scrollToSection(id)
  }

  return (
    <div className="min-h-screen bg-[#050816] font-sans antialiased text-white selection:bg-[#00E5FF]/30 selection:text-white">
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-[#7C4DFF]/5 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="fixed top-1/3 right-1/4 w-[400px] h-[400px] bg-[#00E5FF]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <Navbar active={active} onNavigate={onNavigate} />

      <main className="relative z-10">
        <div className="space-y-32">
          <Hero onNavigate={onNavigate} />
          <About />
          <Services onRequest={() => onNavigate('contact')} />
          <Testimonials />
          <Contact />
        </div>
      </main>

      <Footer onNavigate={onNavigate} />
      <ChatWidget />
    </div>
  )
}
