import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import { useState } from 'react';

const projects = [
  {
    title: 'InfiniFlix',
    description: 'Plataforma de streaming com catálogo de filmes e séries.',
    images: {
      default: '/images/infiniflix-logo.png',
      hover: '/images/infiniflix-thumb.png'
    },
    tech: ['React', 'Next.js', 'Tailwind'],
    github: 'https://github.com/eduardogenes/infiniflix',
    live: 'https://infiniflix.vercel.app'
  },
  {
    title: 'Dr. Care',
    description: 'Site institucional para clínica médica com agendamento de consultas.',
    images: {
      default: '/images/drcare-logo.png',
      hover: '/images/drcare-thumb.png'
    },
    tech: ['React', 'Next.js', 'Styled Components'],
    github: 'https://github.com/eduardogenes/drCARE',
    live: 'https://dr-care-swart.vercel.app'
  },
  {
    title: 'Orçamento Nano',
    description: 'Aplicativo para gerenciamento de orçamento pessoal e controle financeiro.',
    images: {
      default: '/images/orcamento-thumb.png',
      hover: '/images/orcamento-thumb.png'
    },
    tech: ['React', 'TypeScript', 'Node.js'],
    github: 'https://github.com/eduardogenes/orcamento-nano',
    live: 'https://orcamento-nano.vercel.app'
  },
  {
    title: 'Calculadora',
    description: 'Calculadora web com interface moderna e funcionalidades avançadas.',
    images: {
      default: '/images/calculadora-thumb.png',
      hover: '/images/calculadora-thumb.png'
    },
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/eduardogenes/calculadora',
    live: 'https://calculadora-ochre-ten.vercel.app'
  },
  {
    title: 'Interactive Rating',
    description: 'Componente interativo de avaliação com animações e feedback visual.',
    images: {
      default: '/images/rating-thumb.png',
      hover: '/images/rating-thumb.png'
    },
    tech: ['React', 'CSS', 'JavaScript'],
    github: 'https://github.com/eduardogenes/interactive-rating-component',
    live: 'https://interactive-rating-component-ten-sigma.vercel.app'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 100
    }
  }
}

export default function Projects() {
  const [hoveredProjects, setHoveredProjects] = useState<{ [key: string]: boolean }>({});

  const handleMouseEnter = (projectTitle: string) => {
    setHoveredProjects(prev => ({
      ...prev,
      [projectTitle]: true
    }));
  };

  const handleMouseLeave = (projectTitle: string) => {
    setHoveredProjects(prev => ({
      ...prev,
      [projectTitle]: false
    }));
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Título da seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <FiFolder className="w-8 h-8 text-blue-500" />
            <span className="animated-gradient-text">Projetos</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi, demonstrando minhas habilidades e experiência
          </p>
        </motion.div>

        {/* Lista de Projetos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div 
                className="relative h-48 overflow-hidden"
                onMouseEnter={() => handleMouseEnter(project.title)}
                onMouseLeave={() => handleMouseLeave(project.title)}
              >
                {/* Imagem de fundo (logo) */}
                <img
                  src={project.images.default}
                  alt={project.title}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                    project.images.default.includes('logo')
                      ? 'object-cover bg-[#1B1F27] dark:bg-[#1B1F27]'
                      : 'object-cover'
                  } ${hoveredProjects[project.title] ? 'opacity-0' : 'opacity-100'}`}
                />
                {/* Imagem de hover (thumbnail) */}
                <img
                  src={project.images.hover}
                  alt={project.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                    hoveredProjects[project.title] ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-wrap gap-2 mb-4"
                >
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    <FiGithub className="w-5 h-5" />
                    <span>Código</span>
                  </motion.a>
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      <FiExternalLink className="w-5 h-5" />
                      <span>Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="flex justify-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#contact" className="next-section-button">
              Vamos conversar
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
