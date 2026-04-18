import { Button } from '@/components/ui'
import styles from './CTABanner.module.css'

export default function CTABanner() {
  return (
    <section className={styles.banner}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <h2 className={styles.title}>Ready to Build Your<br /><em>Financial Legacy?</em></h2>
          <p>Take the first step today — no obligation, no jargon. Just honest, expert guidance.</p>
        </div>
        <div className={styles.actions}>
          <Button variant="white" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Schedule Free Consultation
          </Button>
          <Button variant="ghost-white" onClick={() => window.location.href = 'tel:+919999999999'}>
            Call Us Now
          </Button>
        </div>
      </div>
    </section>
  )
}
