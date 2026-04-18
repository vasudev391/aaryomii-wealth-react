import { useScrollReveal } from '@/hooks/useScrollReveal'
import { WHY_ITEMS } from '@/features/home/data/homeData'
import styles from './WhyUs.module.css'

function WhyItem({ item }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className={`reveal ${styles.item}`}>
      <div className={styles.number}>{item.number}</div>
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
    </div>
  )
}

export default function WhyUs() {
  const ref = useScrollReveal()
  return (
    <section className={`section ${styles.section}`} id="why-us">
      <div className="container">
        <div className="sectionHeader reveal" ref={ref}>
          <span className="eyebrow">Our Difference</span>
          <h2 className="sectionTitle">Why Choose<br /><em>Aaryomii Wealth</em></h2>
        </div>
        <div className={styles.grid}>
          {WHY_ITEMS.map((item) => <WhyItem key={item.id} item={item} />)}
        </div>
      </div>
    </section>
  )
}
