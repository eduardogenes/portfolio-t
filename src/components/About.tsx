import React from 'react';

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white dark:bg-dark-800/50 transition-colors">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Sobre Mim</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
              alt="Foto de perfil"
              className="rounded-lg shadow-lg w-full max-w-md mx-auto dark:shadow-accent-blue/20 hover:shadow-xl dark:hover:shadow-accent-blue/30 transition-shadow duration-300"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Olá! Sou um desenvolvedor web apaixonado por criar soluções digitais inovadoras. 
              Com foco em desenvolvimento front-end, busco constantemente aprender novas tecnologias 
              e aprimorar minhas habilidades.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Meu objetivo é contribuir para projetos desafiadores que me permitam crescer 
              profissionalmente enquanto crio experiências digitais excepcionais para os usuários.
            </p>
            <div className="flex gap-4">
              <a
                href="#contato"
                className="px-6 py-3 bg-gradient-to-r from-accent-blue to-accent-purple text-white rounded-md hover:opacity-90 transition-all duration-300 hover:scale-105"
              >
                Entre em Contato
              </a>
              <a
                href="/cv.pdf"
                className="px-6 py-3 border border-accent-blue text-accent-blue dark:text-accent-blue rounded-md hover:bg-accent-blue/10 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}