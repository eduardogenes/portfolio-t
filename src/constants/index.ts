/**
 * constants/index.ts
 * Arquivo de constantes globais da aplicação.
 * 
 * Contém:
 * - Configurações de navegação
 * - Configurações de animação
 * - Informações de contato
 * - Links de redes sociais
 */

/**
 * Itens do menu de navegação principal
 * Cada item contém label para exibição e href para navegação
 */
export const MENU_ITEMS = [
  { label: 'Início', href: '#home' },
  { label: 'Sobre', href: '#about' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Contato', href: '#contact' }
] as const

/**
 * Configurações globais de animação
 * - scroll: configurações para animação de scroll suave
 * - transition: configurações padrão para transições
 * - stagger: configurações para animações em sequência
 */
export const ANIMATION_CONFIG = {
  scroll: {
    duration: 800, // Duração da animação de scroll em ms
    offset: 20     // Offset para ajuste fino da posição final
  },
  transition: {
    duration: 0.3,                // Duração padrão de transições
    ease: [0.4, 0, 0.2, 1]       // Curva de easing personalizada
  },
  stagger: {
    children: 0.1                 // Delay entre animações de elementos filhos
  }
} as const

/**
 * Informações de contato
 * Cada item contém:
 * - type: tipo de contato
 * - text: texto para exibição
 * - href: link para ação
 */
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

/**
 * Links para redes sociais
 * Cada item contém:
 * - platform: nome da plataforma
 * - url: link para o perfil
 */
export const SOCIAL_LINKS = [
  {
    platform: 'GitHub',
    url: 'https://github.com/eduardogenes'
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/eduardogenes'
  }
] as const
