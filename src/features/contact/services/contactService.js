import apiClient from '@/lib/axios'

/**
 * Send contact form data to server.
 * Returns Promise<{ success: boolean, message: string }>
 * Pure async — no UI imports.
 */
export async function submitContactForm(data) {
  // In production, replace with real endpoint
  // return apiClient.post('/contact', data)

  // Mock: simulates 1.2s network delay
  return new Promise((resolve) => {
    setTimeout(() => resolve({ success: true, message: 'Request received' }), 1200)
  })
}
