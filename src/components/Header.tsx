import React from 'react';
import { Github, Linkedin, Mail, FileText, Menu } from 'lucide-react';
import ThemeToggle from './ui/ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
            <a href="#sobre" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Sobre</a>
            <a href="#habilidades" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Habilidades</a>
            <a href="#projetos" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Projetos</a>
            <a href="#formacao" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Formação</a>
            <a href="#contato" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contato</a>
            
            <div className="flex items-center gap-4 md:ml-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <Linkedin size={20} />
              </a>
              <a href="mailto:seu@email.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <Mail size={20} />
              </a>
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <FileText size={20} />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}