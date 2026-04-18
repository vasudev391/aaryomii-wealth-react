import { useEffect, useRef } from 'react'

/**
 * Adds IntersectionObserver to a ref'd element.
 * When visible, adds the CSS class `visible` to trigger CSS transitions.
 * @param {string} visibleClass - CSS class to add (default: 'visible')
 */
export function useScrollReveal(visibleClass = 'visible') {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(visibleClass)
          observer.unobserve(el)
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [visibleClass])

  return ref
}
