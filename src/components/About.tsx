import { motion } from 'framer-motion'
import { FiCode, FiLayout, FiServer, FiUser } from 'react-icons/fi'
import { useLanguage } from '../contexts/LanguageContext'

export default function About() {
  const { t } = useLanguage();
  
  const skills = [
    {
      icon: <FiCode className="w-8 h-8" />,
      title: t('about.skills.frontend.title'),
      description: t('about.skills.frontend.description'),
    },
    {
      icon: <FiServer className="w-8 h-8" />,
      title: t('about.skills.backend.title'),
      description: t('about.skills.backend.description'),
    },
    {
      icon: <FiLayout className="w-8 h-8" />,
      title: t('about.skills.uiDesign.title'),
      description: t('about.skills.uiDesign.description'),
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
            <span className="animated-gradient-text">{t('about.title')}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('about.description')}
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
              {t('about.skills.cta')}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
