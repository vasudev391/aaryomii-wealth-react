import { useCountUp } from '@/hooks/useCountUp'
import heroImg from '@/assets/hero_teal.png'
import { Button } from '@/components/ui'
import { STATS } from '@/features/home/data/homeData'
import styles from './Hero.module.css'

function StatItem({ target, suffix, label }) {
  const { count, ref } = useCountUp(target)
  return (
    <div className={styles.stat} ref={ref}>
      <div>
        <span className={styles.statNum}>{count}</span>
        <span className={styles.statSuffix}>{suffix}</span>
      </div>
      <span className={styles.statLabel}>{label}</span>
    </div>
  )
}

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    const navH = document.querySelector('nav')?.offsetHeight || 0
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - navH - 16, behavior: 'smooth' })
  }

  return (
    <section className={styles.hero} id="home">
      <div className={styles.bg}>
        <img src={heroImg} alt="" aria-hidden="true" className={styles.bgImg} />
      </div>

      {/* Decorative ring */}
      <div className={styles.deco} aria-hidden="true">
        <div className={styles.decoRing}>
          <div className={styles.decoInner}>
            <svg width="100" height="100" viewBox="0 0 56 56" fill="none" opacity="0.25">
              <circle cx="28" cy="28" r="26" stroke="#1B7A6B" strokeWidth="1.5" />
              <polygon points="28,13 41,37 15,37" fill="#C0272D" opacity="0.5" />
              <path d="M10 38 Q19 34 28 38 Q37 42 46 38" stroke="#1B7A6B" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            </svg>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <p className={styles.eyebrow}>Financial Advisory &amp; Planning</p>
        <div className={styles.tagline}>Protect, Grow &amp; Prosper</div>
        <h1 className={styles.headline}>
          Wealth Beyond<br />
          <em>Numbers.</em><br />
          <span className={styles.accent}>Security</span> for Life.
        </h1>
        <p className={styles.sub}>
          At Aaryomii Wealth, we empower individuals, families, and businesses to take control of
          their financial future — with clarity, discipline, and a lasting legacy in mind.
        </p>
        <div className={styles.actions}>
          <Button variant="primary" onClick={() => scrollTo('contact')}>Begin Your Journey</Button>
          <Button variant="outline" onClick={() => scrollTo('services')}>Explore Services</Button>
        </div>

        <div className={styles.stats}>
          {STATS.map((s, i) => (
            <>
              {i > 0 && <div key={`d${s.id}`} className={styles.divider} />}
              <StatItem key={s.id} {...s} />
            </>
          ))}
        </div>
      </div>

      <div className={styles.scroll} aria-hidden="true">
        <span className={styles.scrollLine} />
        <span className={styles.scrollText}>Scroll</span>
      </div>
    </section>
  )
}
