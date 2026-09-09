import { useEffect } from 'react'

export default function useReveal() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll('[data-reveal]'))
    if (!items.length) return undefined

    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -4% 0px' })

    requestAnimationFrame(() => items.forEach((item) => observer.observe(item)))
    return () => observer.disconnect()
  }, [])
}
