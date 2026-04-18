import Logo from '@/components/shared/Logo'
import styles from './Footer.module.css'

const FOOTER_LINKS = {
  Company:  [['About Us','#about'],['Why Aaryomii','#why-us'],['Careers','#'],['Press','#']],
  Services: [['Insurance Planning','#services'],['Wealth Management','#services'],['Investment Planning','#services'],['Estate Planning','#services'],['Tax Planning','#services']],
  Legal:    [['Privacy Policy','#'],['Terms of Service','#'],['Disclaimer','#'],['SEBI Registration','#']],
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <a href="#home" className={styles.logoLink}>
            <Logo theme="light" size={40} />
          </a>
          <p className={styles.tagline}>
            Creating security, opportunities,<br />
            and lasting legacies — one family at a time.
          </p>
          <div className={styles.socials}>
            {[['in','LinkedIn'],['𝕏','Twitter'],['◎','Instagram']].map(([icon, label]) => (
              <a key={label} href="#" className={styles.social} aria-label={label}>{icon}</a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(FOOTER_LINKS).map(([title, links]) => (
          <div key={title} className={styles.col}>
            <h4>{title}</h4>
            <ul>
              {links.map(([label, href]) => (
                <li key={label}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.bottom}>
        <p>© 2025 Aaryomii Wealth. All rights reserved. | SEBI Registered Investment Advisor | IRDAI Authorized</p>
        <p className={styles.disclaimer}>
          Investments are subject to market risks. Please read all scheme-related documents carefully before investing.
        </p>
      </div>
    </footer>
  )
}
