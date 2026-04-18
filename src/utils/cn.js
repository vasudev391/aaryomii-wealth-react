// Pure utility: merge class names, filtering falsy values
export const cn = (...classes) => classes.filter(Boolean).join(' ')
