import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const socialLinks = [
    {
      icon: <FiGithub className="w-5 h-5" />,
      href: 'https://github.com/eduardogenes',
      label: 'GitHub',
    },
    {
      icon: <FiLinkedin className="w-5 h-5" />,
      href: 'https://linkedin.com/in/eduardogenes',
      label: 'LinkedIn',
    },
    {
      icon: <FiMail className="w-5 h-5" />,
      href: 'mailto:eduardogenes95@gmail.com',
      label: 'Email',
    },
  ]

  return (
    <footer className="bg-white dark:bg-gray-900 py-8 transition-colors">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-300 flex items-center">
              Feito com{' '}
              <FiHeart className="w-4 h-4 mx-1 text-red-500" /> por Eduardo Genes
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {currentYear} Todos os direitos reservados
            </p>
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
