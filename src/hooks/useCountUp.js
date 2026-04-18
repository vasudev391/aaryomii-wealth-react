import { useState, useEffect, useRef } from 'react'

/**
 * Animates a number from 0 → target when the element enters the viewport.
 * @param {number} target - Final value
 * @param {number} duration - Animation duration in ms (default 1800)
 */
export function useCountUp(target, duration = 1800) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const step = (target / duration) * 16
          let current = 0
          const tick = () => {
            current = Math.min(current + step, target)
            setCount(Math.floor(current))
            if (current < target) requestAnimationFrame(tick)
            else setCount(target)
          }
          requestAnimationFrame(tick)
          observer.unobserve(el)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return { count, ref }
}
