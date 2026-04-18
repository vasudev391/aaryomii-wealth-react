import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavScroll } from '@/hooks/useNavScroll'
import Logo from '@/components/shared/Logo'
import { cn } from '@/utils/cn'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'About',        href: '#about' },
  { label: 'Services',     href: '#services' },
  { label: 'Why Us',       href: '#why-us' },
  { label: 'Clients',      href: '#testimonials' },
  { label: 'FAQ',          href: '#faq' },
]

export default function Navbar() {
  const scrolled = useNavScroll()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleAnchorClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const id = href.slice(1)
    const el = document.getElementById(id)
    if (!el) return
    const navH = document.querySelector('nav')?.offsetHeight || 0
    const top = el.getBoundingClientRect().top + window.scrollY - navH - 16
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <nav className={cn(styles.navbar, scrolled && styles.scrolled)} id="navbar">
      <div className={styles.container}>
        <a href="#home" className={styles.logo} onClick={(e) => handleAnchorClick(e, '#home')}>
          <Logo theme={scrolled ? 'dark' : 'light'} size={40} />
        </a>

        {/* Desktop links */}
        <ul className={cn(styles.links, menuOpen && styles.open)}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={styles.link}
                onClick={(e) => handleAnchorClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className={styles.cta}
              onClick={(e) => handleAnchorClick(e, '#contact')}
            >
              Get Started
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={cn(menuOpen && styles.spanOpen1)} />
          <span className={cn(menuOpen && styles.spanOpen2)} />
          <span className={cn(menuOpen && styles.spanOpen3)} />
        </button>
      </div>
    </nav>
  )
}
