import { useScrollReveal } from '@/hooks/useScrollReveal'
import { PROCESS_STEPS } from '@/features/home/data/homeData'
import styles from './Process.module.css'

export default function Process() {
  const ref = useScrollReveal()
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="sectionHeader reveal" ref={ref}>
          <span className={styles.eyebrow}>How It Works</span>
          <h2 className={styles.title}>Your Journey to<br /><em>Financial Clarity</em></h2>
          <p className={styles.sub}>A simple, transparent 4-step process — from confusion to confidence.</p>
        </div>
        <div className={styles.steps}>
          {PROCESS_STEPS.map((step) => (
            <div key={step.id} className={styles.step}>
              <div className={styles.num}>{step.number}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
