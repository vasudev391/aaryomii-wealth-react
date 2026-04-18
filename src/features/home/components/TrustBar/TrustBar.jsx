import { TRUST_BADGES } from '@/features/home/data/homeData'
import styles from './TrustBar.module.css'

export default function TrustBar() {
  return (
    <div className={styles.bar}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.label}>Regulated &amp; Trusted</p>
        <div className={styles.badges}>
          {TRUST_BADGES.map((badge) => (
            <span key={badge} className={styles.badge}>
              <span className={styles.icon}>◈</span> {badge}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
