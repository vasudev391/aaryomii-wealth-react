import { useState, useEffect } from 'react'

/**
 * Tracks scroll position to toggle navbar "scrolled" state.
 * @param {number} threshold - Pixels scrolled before activating (default 40)
 */
export function useNavScroll(threshold = 40) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [threshold])

  return scrolled
}
