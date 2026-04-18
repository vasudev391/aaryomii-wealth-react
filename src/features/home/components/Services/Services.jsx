import insuranceIcon from '@/assets/insurance_icon.png'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SERVICES } from '@/features/home/data/homeData'
import { Button } from '@/components/ui'
import styles from './Services.module.css'

function ServiceCard({ service }) {
  const ref = useScrollReveal()
  const { id, tag, title, desc, features, primary, badge, hasImage } = service
  return (
    <div ref={ref} className={`reveal ${styles.card} ${primary ? styles.primary : ''}`}>
      {badge && <span className={styles.badge}>{badge}</span>}
      <div className={styles.top}>
        <div className={`${styles.iconWrap} ${primary ? styles.iconWrapInv : ''}`}>
          {hasImage
            ? <img src={insuranceIcon} alt="Insurance" className={styles.iconImg} />
            : <ServiceSvg id={id} primary={primary} />}
        </div>
        <span className={`${styles.tag} ${primary ? styles.tagLight : ''}`}>{tag}</span>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{desc}</p>
      <ul className={styles.features}>
        {features.map((f) => <li key={f}>{f}</li>)}
      </ul>
      <a href="#contact" className={`${styles.link} ${primary ? styles.linkLight : ''}`}>Know More →</a>
    </div>
  )
}

function ServiceSvg({ id, primary }) {
  const c = primary ? 'white' : '#1B7A6B'
  const a = primary ? 'rgba(255,255,255,0.5)' : '#C0272D'
  if (id === 'wealth') return (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="17" stroke={c} strokeWidth="1.2" opacity="0.5"/>
      <path d="M12 28 L20 12 L28 28" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="14" y1="23" x2="26" y2="23" stroke={c} strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
    </svg>
  )
  if (id === 'investment') return (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
      <rect x="6" y="6" width="28" height="28" rx="2" stroke={c} strokeWidth="1.5"/>
      <path d="M12 26 L18 18 L24 22 L30 14" stroke={a} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="30" cy="14" r="2" fill={a}/>
    </svg>
  )
  if (id === 'estate') return (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
      <polygon points="20,6 34,34 6,34" stroke={c} strokeWidth="1.5" fill="rgba(27,122,107,0.06)" strokeLinejoin="round"/>
      <polygon points="20,14 28,30 12,30" stroke={a} strokeWidth="1.2" fill="none" strokeLinejoin="round"/>
    </svg>
  )
  return (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="14" stroke={c} strokeWidth="1.5"/>
      <text x="20" y="26" textAnchor="middle" fontSize="14" fill={a} fontFamily="serif" fontWeight="600">₹</text>
    </svg>
  )
}

export default function Services() {
  const ref = useScrollReveal()
  return (
    <section className={`section ${styles.section}`} id="services">
      <div className="container">
        <div className="sectionHeader reveal" ref={ref}>
          <span className="eyebrow">What We Offer</span>
          <h2 className="sectionTitle">Financial Services,<br /><em>Thoughtfully Crafted</em></h2>
          <p className="sectionSub">Comprehensive solutions built around your life goals — not just your portfolio.</p>
        </div>
        <div className={styles.grid}>
          {SERVICES.map((s) => <ServiceCard key={s.id} service={s} />)}
          <div className={styles.ctaCard}>
            <div className={styles.ctaInner}>
              <span className={styles.ctaIcon} aria-hidden="true">
                <svg width="48" height="48" viewBox="0 0 56 56" fill="none">
                  <circle cx="28" cy="28" r="26" stroke="#C0272D" strokeWidth="2"/>
                  <polygon points="28,14 42,38 14,38" fill="#C0272D" opacity="0.85"/>
                  <path d="M12 40 Q20 36 28 40 Q36 44 44 40" stroke="#1B7A6B" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                </svg>
              </span>
              <h3 className={styles.ctaTitle}>Not Sure Where to Start?</h3>
              <p className={styles.ctaText}>Book a free 30-minute consultation and let us map out your financial future.</p>
              <Button variant="primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
