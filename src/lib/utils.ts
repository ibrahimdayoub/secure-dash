import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function usernameToName (username: string) {
  const parts = username.split(/[_\-]/)

  const capitalized = parts.map(part => {
    if (!part) return ''
    return part[0].toUpperCase() + part.slice(1).toLowerCase()
  })

  return capitalized.join(' ')
}

export function cn (...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
