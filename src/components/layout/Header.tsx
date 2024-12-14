import React from 'react';
import { Github, Linkedin, Mail, FileText, Menu } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';
import NavLink from '../ui/NavLink';
import SocialLink from '../ui/SocialLink';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#habilidades", label: "Habilidades" },
    { href: "#projetos", label: "Projetos" },
    { href: "#formacao", label: "Formação" },
    { href: "#contato", label: "Contato" }
  ];

  const socialLinks = [
    { href: "https://github.com", icon: Github, label: "GitHub" },
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:seu@email.com", icon: Mail, label: "Email" },
    { href: "/cv.pdf", icon: FileText, label: "CV" }
  ];

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 shadow-sm transition-colors">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">João Silva</h1>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>

        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block mt-4 md:mt-0`}>
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            {navLinks.map(link => (
              <NavLink key={link.href} {...link} />
            ))}
            
            <div className="flex items-center gap-4 md:ml-6">
              {socialLinks.map(link => (
                <SocialLink key={link.href} {...link} />
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}