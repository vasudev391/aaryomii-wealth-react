import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { FAQS } from '@/features/home/data/homeData'
import styles from './FAQ.module.css'

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={styles.item}>
      <button
        className={styles.question}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {question}
        <span className={`${styles.icon} ${open ? styles.iconOpen : ''}`}>+</span>
      </button>
      <div className={`${styles.answer} ${open ? styles.answerOpen : ''}`}>
        <p>{answer}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const ref = useScrollReveal()
  return (
    <section className={`section ${styles.faq}`} id="faq">
      <div className={`container ${styles.inner}`}>
        <div className="sectionHeader reveal" ref={ref}>
          <span className="eyebrow">Common Questions</span>
          <h2 className="sectionTitle">Frequently Asked<br /><em>Questions</em></h2>
        </div>
        <div className={styles.list}>
          {FAQS.map((faq) => <FAQItem key={faq.id} {...faq} />)}
        </div>
      </div>
    </section>
  )
}
