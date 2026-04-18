import { Outlet } from 'react-router-dom'
import { Navbar } from '@/components/shared'
import { Footer } from '@/components/shared'

/**
 * MainLayout — wraps all public pages.
 * Navbar + page content (via <Outlet />) + Footer.
 * No business logic allowed here.
 */
export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main><Outlet /></main>
      <Footer />
    </>
  )
}
