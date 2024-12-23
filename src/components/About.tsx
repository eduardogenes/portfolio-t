import { motion } from 'framer-motion'
import { FiCode, FiLayout, FiServer, FiUser } from 'react-icons/fi'

export default function About() {
  const skills = [
    {
      icon: <FiCode className="w-8 h-8" />,
      title: 'Front-end',
      description:
        'Desenvolvimento de interfaces web com React e TypeScript, buscando criar experiências responsivas e acessíveis.',
    },
    {
      icon: <FiServer className="w-8 h-8" />,
      title: 'Back-end',
      description:
        'Conhecimento em Node.js e bancos de dados SQL, com foco em boas práticas de desenvolvimento.',
    },
    {
      icon: <FiLayout className="w-8 h-8" />,
      title: 'UI Design',
      description:
        'Implementação de interfaces seguindo princípios de design e usabilidade com Tailwind CSS.',
    },
  ]

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <FiUser className="w-8 h-8 text-blue-500" />
            <span className="animated-gradient-text">Sobre Mim</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Desenvolvedor web focado em criar soluções práticas e funcionais.
            Atualmente me dedicando ao desenvolvimento full-stack, sempre buscando
            aprender e evoluir com cada projeto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl hover:shadow-lg transition-all duration-300"
            >
              <div className="text-blue-500 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {skill.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#skills" className="next-section-button">
              Veja minhas habilidades
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
