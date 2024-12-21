// Navegação
export const MENU_ITEMS = [
  { label: 'Início', href: '#home' },
  { label: 'Sobre', href: '#about' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Contato', href: '#contact' }
] as const

// Animações
export const ANIMATION_CONFIG = {
  scroll: {
    duration: 800,
    offset: 20
  },
  transition: {
    duration: 0.3,
    ease: [0.4, 0, 0.2, 1]
  },
  stagger: {
    children: 0.1
  }
} as const

// Contato
export const CONTACT_INFO = [
  {
    type: 'email',
    text: 'eduardogenes95@gmail.com',
    href: 'mailto:eduardogenes95@gmail.com'
  },
  {
    type: 'phone',
    text: '(85) 98109-7155',
    href: 'tel:+5585981097155'
  },
  {
    type: 'location',
    text: 'Fortaleza, CE',
    href: 'https://maps.google.com/?q=Fortaleza,CE'
  }
] as const

// Redes Sociais
export const SOCIAL_LINKS = [
  {
    platform: 'GitHub',
    url: 'https://github.com/eduardogenes'
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/eduardo-genes'
  }
] as const
