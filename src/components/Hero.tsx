import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 pt-16 transition-colors relative overflow-hidden">
      <div className="absolute inset-0 dark:bg-[radial-gradient(circle_at_center,_rgba(96,165,250,0.1)_0%,_transparent_70%)]"></div>
      <div className="text-center px-4 relative z-10">
        <div className="mb-6 inline-block">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan bg-clip-text text-transparent animate-gradient">
            Eduardo Genes
          </h1>
        </div>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Desenvolvedor Front-End com foco em criar interfaces modernas, responsivas e funcionais. Acredito no equilíbrio entre código limpo e uma experiência do usuário excepcional.
        </p>
        <a
          href="#projetos"
          className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-gradient-to-r from-accent-blue to-accent-purple hover:opacity-90 transition-all duration-300 transform hover:scale-105"
        >
          Meus Projetos
        </a>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-gray-400 dark:text-accent-blue" />
        </div>
      </div>
    </section>
  );
}
