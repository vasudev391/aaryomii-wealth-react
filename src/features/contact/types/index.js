// Contact form shape — used by RHF + Zod schema
export const SERVICE_OPTIONS = [
  { value: '', label: 'Select a Service' },
  { value: 'insurance',   label: 'Insurance Planning' },
  { value: 'wealth',      label: 'Wealth Management' },
  { value: 'investment',  label: 'Investment Planning' },
  { value: 'estate',      label: 'Estate & Legacy Planning' },
  { value: 'tax',         label: 'Tax & Retirement Planning' },
  { value: 'other',       label: 'General Consultation' },
]

export const CONTACT_DETAILS = [
  { id: 'email',    icon: '✉', label: 'Email Us',        value: 'hello@aaryomiiwealth.com', href: 'mailto:hello@aaryomiiwealth.com' },
  { id: 'phone',    icon: '☎', label: 'Call Us',         value: '+91 99999 99999',           href: 'tel:+919999999999' },
  { id: 'location', icon: '◎', label: 'Serving Pan-India', value: 'Virtual & In-Person Consultations', href: null },
]
