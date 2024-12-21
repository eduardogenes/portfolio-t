// Tipos gerais
export type Theme = 'light' | 'dark'

// Interfaces de componentes
export interface MenuItem {
  label: string
  href: string
}

export interface Project {
  title: string
  description: string
  technologies: string[]
  imageUrl?: string
  githubUrl?: string
  liveUrl?: string
}

export interface Skill {
  name: string
  level: number
  icon?: string
}

export interface ContactInfo {
  type: 'email' | 'phone' | 'location'
  text: string
  href: string
}

export interface SocialLink {
  platform: string
  url: string
}

// Tipos de animação
export interface AnimationConfig {
  scroll: {
    duration: number
    offset: number
  }
  transition: {
    duration: number
    ease: number[]
  }
  stagger: {
    children: number
  }
}
