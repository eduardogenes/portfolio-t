import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Plataforma de e-commerce completa com carrinho de compras, pagamentos e painel administrativo.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com',
    live: 'https://projeto1.com'
  },
  {
    title: 'Task Manager',
    description: 'Aplicativo de gerenciamento de tarefas com recursos de colaboração em tempo real.',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91',
    tech: ['React', 'Firebase', 'Tailwind'],
    github: 'https://github.com',
    live: 'https://projeto2.com'
  },
  {
    title: 'Weather App',
    description: 'Aplicativo de previsão do tempo com dados em tempo real e visualizações interativas.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b',
    tech: ['React', 'OpenWeather API', 'Chart.js'],
    github: 'https://github.com',
    live: 'https://projeto3.com'
  },
  {
    title: 'Calculadora de Tarifas Interna',
    description: 'Ferramenta desenvolvida para automatizar cálculos de tarifas e orçamentos, otimizando processos internos.',
    image: 'https://via.placeholder.com/400x300',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/eduardogenes/calculadora-tarifas',
    live: null
  }
];

export default function Projects() {
  return (
    <section id="projetos" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
                  >
                    <Github size={20} />
                    <span>Código</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
                    >
                      <ExternalLink size={20} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
