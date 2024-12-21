import { useEffect } from 'react';
import { motion, useAnimation, animate } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaGitAlt, FaDatabase, FaUsers, FaGraduationCap, FaLanguage, FaBrain } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiVite, SiTailwindcss, SiDocker, SiKubernetes, SiAmazonaws } from 'react-icons/si';
import { BsLightbulb, BsBook } from 'react-icons/bs';
import { MdOutlineEngineering } from 'react-icons/md';
import { IoMdAnalytics, IoMdSchool } from 'react-icons/io';

export default function Skills() {
  const controls = useAnimation();

  const skills = [
    { name: 'JavaScript', level: 80, icon: SiJavascript },
    { name: 'TypeScript', level: 60, icon: SiTypescript },
    { name: 'React', level: 70, icon: FaReact },
    { name: 'Node.js', level: 65, icon: FaNodeJs },
    { name: 'HTML/CSS', level: 85, icon: FaHtml5 },
    { name: 'Git', level: 80, icon: FaGitAlt },
    { name: 'SQL', level: 60, icon: FaDatabase },
    { name: 'Docker', level: 40, icon: SiDocker },
    { name: 'AWS', level: 30, icon: SiAmazonaws }
  ];

  const competencies = [
    {
      icon: <MdOutlineEngineering className="w-6 h-6" />,
      title: "Resolução de Problemas",
      subtitle: "Pensamento Lógico",
      description: "Capacidade analítica para encontrar soluções eficientes e criativas"
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Trabalho em Equipe",
      subtitle: "Comunicação Clara",
      description: "Experiência com metodologias ágeis e ferramentas colaborativas"
    },
    {
      icon: <BsLightbulb className="w-6 h-6" />,
      title: "Aprendizado e Dedicação",
      subtitle: "Foco em Evolução",
      description: "Facilidade em aprender novas tecnologias e adaptar-se a mudanças"
    },
    {
      icon: <IoMdAnalytics className="w-6 h-6" />,
      title: "Organização",
      subtitle: "Gestão de Tempo",
      description: "Habilidade em gerenciar tarefas e priorizar demandas"
    },
    {
      icon: <IoMdSchool className="w-6 h-6" />,
      title: "Formação Acadêmica",
      subtitle: "Em formação",
      description: "Análise e Desenvolvimento de Sistemas - UNESA"
    },
    {
      icon: <FaLanguage className="w-6 h-6" />,
      title: "Inglês C1",
      subtitle: "Avançado",
      description: "Proficiência para comunicação e documentação técnica"
    }
  ];

  const certifications = [
    { 
      name: "Desenvolvimento Web Full-Stack",
      institution: "Infinity School",
      year: "2022"
    },
    {
      name: "DevOps",
      institution: "Atlantico Avanti",
      year: "2023"
    },
    {
      name: "Curso.dev",
      institution: "Curso.dev",
      year: "Em andamento",
      status: "current"
    },
    {
      name: "AWS Cloud Practitioner",
      institution: "Escola da Nuvem",
      year: "Em andamento",
      status: "current"
    }
  ];

  return (
    <section id="skills" className="relative py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4">
        {/* Título da seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-500 flex items-center justify-center gap-3">
            <FaBrain className="w-8 h-8" />
            Habilidades
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Minhas competências técnicas e conhecimentos na área de desenvolvimento
          </p>
        </motion.div>

        {/* Habilidades Técnicas */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card bg-white dark:bg-gray-700 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    {skill.icon && <skill.icon className="w-5 h-5 text-blue-500" />}
                  </motion.div>
                  <h3 className="text-base font-semibold text-gray-800 dark:text-white">{skill.name}</h3>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300">{skill.level}%</span>
              </div>
              <motion.div 
                className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1.5"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.div
                  className="bg-blue-500 h-1.5 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Competências */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-500 flex items-center justify-center gap-3">
            <MdOutlineEngineering className="w-8 h-8" />
            Competências
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
            Habilidades e conhecimentos que complementam minha formação técnica
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {competencies.map((comp, index) => (
            <motion.div
              key={comp.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-2 text-blue-500">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  {comp.icon}
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {comp.title}
                  </h3>
                  <p className="text-sm text-blue-500">
                    {comp.subtitle}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {comp.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certificações */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8"
        >
          <div className="flex items-center gap-4 mb-6 text-blue-500">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <BsBook className="w-8 h-8" />
            </motion.div>
            <h2 className="text-2xl font-bold text-blue-500 mb-4 inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
              Certificações
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: idx * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ x: 5 }}
                className="border-l-2 border-blue-500 pl-4"
              >
                <h4 className="font-medium text-gray-800 dark:text-white flex items-center gap-2">
                  {cert.name}
                  {cert.status === 'current' && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-xs bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 px-2 py-0.5 rounded-full"
                    >
                      Em andamento
                    </motion.span>
                  )}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {cert.institution} • {cert.year}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Botão de navegação */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-16"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('projects');
              if (element) {
                const header = document.querySelector('header');
                const headerOffset = header ? header.offsetHeight : 0;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                animate(window.scrollY, offsetPosition, {
                  duration: 0.8,
                  ease: [0.32, 0.72, 0, 1],
                  onUpdate: (value) => {
                    window.scrollTo(0, value);
                  }
                });
              }
            }}
            className="next-section-button"
          >
            Ver meus projetos
          </a>
        </motion.div>
      </div>
    </section>
  );
}
