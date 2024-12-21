import { useEffect } from 'react'
import { ANIMATION_CONFIG } from '../constants'

const easeInOutCubic = (t: number) => 
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

export function useScrollNavigation() {
  const smoothScrollTo = (targetPosition: number) => {
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    let startTime: number | null = null

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / ANIMATION_CONFIG.scroll.duration, 1)
      
      window.scrollTo(0, startPosition + distance * easeInOutCubic(progress))

      if (timeElapsed < ANIMATION_CONFIG.scroll.duration) {
        requestAnimationFrame(animation)
      }
    }

    requestAnimationFrame(animation)
  }

  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest('a[href^="#"]')
      if (!link) return

      e.preventDefault()
      const targetId = link.getAttribute('href')
      if (!targetId) return

      const targetElement = document.querySelector(targetId)
      if (!targetElement) return

      const headerHeight = document.querySelector('header')?.offsetHeight || 0
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight - ANIMATION_CONFIG.scroll.offset

      smoothScrollTo(offsetPosition)

      // Highlight da seção
      setTimeout(() => {
        targetElement.classList.add('section-highlight')
        setTimeout(() => {
          targetElement.classList.remove('section-highlight')
        }, 1000)
      }, ANIMATION_CONFIG.scroll.duration)
    }

    document.addEventListener('click', handleSmoothScroll)
    return () => document.removeEventListener('click', handleSmoothScroll)
  }, [])
}
