import { Menu, Sparkles, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Logo } from './Logo'

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'service', label: 'Service' },
  { id: 'blog', label: 'Blog' },
  { id: 'project', label: 'Project' },
  { id: 'testimonial', label: 'Testimonial' },
  { id: 'customer', label: 'Customer' },
  { id: 'contact', label: 'Contact Us' },
  { id: 'developer', label: 'Developer' },
] as const

type NavbarProps = {
  active: string
  onNavigate: (id: string) => void
}

export function Navbar({ active, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const go = (id: string) => {
    onNavigate(id)
    setMobileOpen(false)
  }

  return (
    <nav
      id="main-navigation"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled || mobileOpen
          ? 'py-3 bg-[#050816]/90 backdrop-blur-md border-b border-[#7C4DFF]/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'py-4 sm:py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-3">
        <button type="button" id="nav-logo" className="cursor-pointer group shrink-0" onClick={() => go('home')}>
          <Logo />
        </button>

        <div
          id="desktop-menu-items"
          className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.05] p-1.5 rounded-full backdrop-blur-sm"
        >
          {NAV_LINKS.map((link) => {
            const isActive = active === link.id
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                type="button"
                onClick={() => go(link.id)}
                className={`relative px-3 xl:px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                  isActive ? 'text-[#00E5FF] font-semibold' : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00E5FF]/10 to-[#7C4DFF]/15 border border-[#00E5FF]/30 rounded-full -z-10 shadow-[0_0_15px_rgba(0,229,255,0.15)]" />
                )}
                {link.label}
              </button>
            )
          })}
        </div>

        <div id="nav-actions" className="hidden lg:flex items-center gap-4">
          <button
            id="btn-nav-portal"
            type="button"
            onClick={() => go('contact')}
            className="relative px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider text-white overflow-hidden group transition-all duration-300 border border-[#00E5FF]/40 bg-transparent hover:border-transparent"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#00E5FF] group-hover:text-white transition-colors duration-300" />
              Client Portal
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#00E5FF] to-[#7C4DFF] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#00E5FF]/10 to-[#7C4DFF]/10 -z-20" />
          </button>
        </div>

        <button
          id="nav-mobile-toggle"
          type="button"
          className="lg:hidden p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#94A3B8] hover:text-white transition-all duration-300"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 max-h-[min(70vh,520px)] overflow-y-auto border-b border-white/[0.08] bg-[#050816]/98 backdrop-blur-xl">
          <div className="mx-4 sm:mx-6 my-3 p-3 sm:p-4 rounded-2xl bg-[#0B0F19]/95 border border-white/[0.08] space-y-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => go(link.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium ${
                  active === link.id ? 'text-[#00E5FF] bg-[#00E5FF]/10' : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => go('contact')}
              className="w-full mt-2 px-4 py-3 rounded-xl text-sm font-semibold border border-[#00E5FF]/40 text-white"
            >
              Client Portal
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
