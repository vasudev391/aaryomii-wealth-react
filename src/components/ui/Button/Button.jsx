import { cn } from '@/utils/cn'
import styles from './Button.module.css'

/**
 * Base Button — presentational only, zero business logic.
 * @param {'primary'|'outline'|'ghost'|'white'|'ghost-white'} variant
 * @param {'sm'|'md'|'lg'} size
 * @param {boolean} full - full width
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  full = false,
  className,
  ...props
}) {
  return (
    <button
      className={cn(
        styles.btn,
        styles[variant],
        styles[size],
        full && styles.full,
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
