import { useScrollReveal } from '@/hooks/useScrollReveal'
import { VALUES, ABOUT_CARDS } from '@/features/home/data/homeData'
import styles from './About.module.css'

export default function About() {
  const ref = useScrollReveal()
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className={`container ${styles.grid}`}>
        {/* Visual cards */}
        <div className={styles.visual} aria-hidden="true">
          <div className={styles.stack}>
            {ABOUT_CARDS.map((card, i) => (
              <div key={card.id} className={`${styles.card} ${styles[`card${i + 1}`]}`}>
                <div className={styles.cardIcon}>{card.icon}</div>
                <div>
                  <strong>{card.title}</strong>
                  <p>{card.desc}</p>
                </div>
              </div>
            ))}
            <div className={styles.bar} />
          </div>
        </div>

        {/* Text */}
        <div className={`reveal ${styles.text}`} ref={ref}>
          <span className="eyebrow">Our Story</span>
          <h2 className="sectionTitle">More Than Advice.<br /><em>A Partnership.</em></h2>
          <p className={styles.lead}>
            At Aaryomii Wealth, we believe that wealth is not just about numbers; it is about
            creating security, opportunities, and a lasting legacy.
          </p>
          <p className={styles.body}>
            Our mission is to empower individuals, families, and businesses to take control of
            their financial future with confidence. We provide holistic financial solutions that
            combine expert advisory with a wide range of investment and protection products.
          </p>
          <p className={styles.body}>
            We believe in long-term vision, ethical practices, and transparency. Our role is not
            just to advise but to <strong>partner</strong> with you — guiding you through every
            stage of life with discipline and clarity.
          </p>
          <div className={styles.values}>
            {VALUES.map((v) => <span key={v} className={styles.pill}>{v}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
