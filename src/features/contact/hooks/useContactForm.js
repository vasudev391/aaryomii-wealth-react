import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { submitContactForm } from '@/features/contact/services/contactService'

// Zod validation schema
const schema = z.object({
  name:    z.string().min(2, 'Name must be at least 2 characters'),
  phone:   z.string().min(10, 'Enter a valid phone number'),
  email:   z.string().email('Enter a valid email address'),
  service: z.string().optional(),
  message: z.string().optional(),
})

/**
 * Hook encapsulating all contact form logic.
 * Returns form state + handlers — no JSX, no styles.
 * Data flow: Component → useContactForm → submitContactForm → API
 */
export function useContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(schema) })

  const onSubmit = async (data) => {
    setSubmitting(true)
    try {
      await submitContactForm(data)
      setSubmitted(true)
      reset()
    } catch (err) {
      console.error('Contact form error:', err)
    } finally {
      setSubmitting(false)
    }
  }

  return { register, handleSubmit: handleSubmit(onSubmit), errors, submitted, submitting }
}
