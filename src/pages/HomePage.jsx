import {
  Hero, TrustBar, About, Services,
  WhyUs, Process, Testimonials, FAQ, CTABanner,
} from '@/features/home'
import { ContactSection } from '@/features/contact'

/**
 * HomePage — thin route-level component.
 * Only responsibility: composing features in order.
 * Zero business logic, zero API calls directly here.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <WhyUs />
      <Process />
      <Testimonials />
      <FAQ />
      <CTABanner />
      <ContactSection />
    </>
  )
}
