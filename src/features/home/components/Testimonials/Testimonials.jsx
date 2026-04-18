import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { TESTIMONIALS } from '@/features/home/data/homeData'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const ref = useScrollReveal()

  return (
    <section className={`section ${styles.section}`} id="testimonials">
      <div className="container">
        <div className="sectionHeader reveal" ref={ref}>
          <span className="eyebrow">Client Stories</span>
          <h2 className="sectionTitle">Trusted by Families<br /><em>Across India</em></h2>
        </div>

        {/* Desktop: 3 columns; mobile: carousel */}
        <div className={styles.grid}>
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className={styles.card}>
              <div className={styles.quote}>"</div>
              <p className={styles.text}>{t.text}</p>
              <div className={styles.author}>
                <div className={styles.avatar} style={{ background: t.color }}>{t.initial}</div>
                <div>
                  <strong>{t.author}</strong>
                  <span>{t.role}</span>
                </div>
                <div className={styles.stars}>★★★★★</div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile carousel controls */}
        <div className={styles.controls}>
          <button className={styles.btn} onClick={() => setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}>←</button>
          <div className={styles.dots}>
            {TESTIMONIALS.map((t, i) => (
              <button key={t.id} className={`${styles.dot} ${i === active ? styles.dotActive : ''}`} onClick={() => setActive(i)} />
            ))}
          </div>
          <button className={styles.btn} onClick={() => setActive((a) => (a + 1) % TESTIMONIALS.length)}>→</button>
        </div>
      </div>
    </section>
  )
}
