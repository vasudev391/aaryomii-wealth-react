import { useContactForm } from '@/features/contact/hooks/useContactForm'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SERVICE_OPTIONS, CONTACT_DETAILS } from '@/features/contact/types'
import { Button } from '@/components/ui'
import styles from './ContactSection.module.css'

export default function ContactSection() {
  const { register, handleSubmit, errors, submitted, submitting } = useContactForm()
  const ref = useScrollReveal()

  return (
    <section className={`section ${styles.section}`} id="contact">
      <div className={`container ${styles.grid}`}>

        {/* Info side */}
        <div className="reveal" ref={ref}>
          <span className="eyebrow">Get In Touch</span>
          <h2 className="sectionTitle">Let's Start Your<br /><em>Financial Journey</em></h2>
          <p className={styles.lead}>
            Reach out for a free 30-minute discovery call. No commitment, no jargon — just clarity about your financial future.
          </p>
          <div className={styles.details}>
            {CONTACT_DETAILS.map((d) => (
              <div key={d.id} className={styles.detail}>
                <span className={styles.detailIcon}>{d.icon}</span>
                <div>
                  <strong>{d.label}</strong>
                  {d.href
                    ? <a href={d.href}>{d.value}</a>
                    : <span>{d.value}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form side */}
        <div className={styles.formWrap}>
          {submitted ? (
            <div className={styles.success}>
              <div className={styles.successIcon}>✓</div>
              <h3>Request Received!</h3>
              <p>Thank you for reaching out. Our advisor will contact you within 24 business hours.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.row}>
                <div className={styles.group}>
                  <label htmlFor="cf-name">Full Name</label>
                  <input id="cf-name" type="text" placeholder="Your Name" {...register('name')} />
                  {errors.name && <span className={styles.error}>{errors.name.message}</span>}
                </div>
                <div className={styles.group}>
                  <label htmlFor="cf-phone">Phone Number</label>
                  <input id="cf-phone" type="tel" placeholder="+91 XXXXX XXXXX" {...register('phone')} />
                  {errors.phone && <span className={styles.error}>{errors.phone.message}</span>}
                </div>
              </div>
              <div className={styles.group}>
                <label htmlFor="cf-email">Email Address</label>
                <input id="cf-email" type="email" placeholder="you@email.com" {...register('email')} />
                {errors.email && <span className={styles.error}>{errors.email.message}</span>}
              </div>
              <div className={styles.group}>
                <label htmlFor="cf-service">Service of Interest</label>
                <select id="cf-service" {...register('service')}>
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
              <div className={styles.group}>
                <label htmlFor="cf-message">Tell Us About Your Goals</label>
                <textarea id="cf-message" rows="4" placeholder="Briefly describe your financial goals..." {...register('message')} />
              </div>
              <Button type="submit" variant="primary" full disabled={submitting}>
                {submitting ? 'Sending…' : 'Send My Request'}
              </Button>
              <p className={styles.disclaimer}>🔒 Your information is 100% confidential and never shared.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
