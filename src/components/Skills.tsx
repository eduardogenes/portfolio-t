import { useEffect, useRef } from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiJavascript, SiTypescript } from 'react-icons/si';
import { BsLightningChargeFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import '../styles/components/skills.css';

export default function Skills() {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll('.skill-bar');
            bars.forEach(bar => bar.classList.add('animate'));
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'React', level: 90, icon: FaReact },
    { name: 'TypeScript', level: 85, icon: SiTypescript },
    { name: 'JavaScript', level: 90, icon: SiJavascript },
    { name: 'Node.js', level: 80, icon: FaNodeJs },
    { name: 'HTML5', level: 95, icon: FaHtml5 },
    { name: 'CSS3', level: 90, icon: FaCss3Alt },
    { name: 'Git', level: 85, icon: FaGitAlt },
    { name: 'SQL', level: 75, icon: FaDatabase }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="section-title gradient-text">
            Habilidades Técnicas
          </h2>
          <div className="learning-status">
            <div className="status-dot" />
            <span>Sempre aprendendo e evoluindo</span>
            <BsLightningChargeFill className="text-blue-500" />
          </div>
        </div>

        <div className="skills-grid" ref={skillsRef}>
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div key={skill.name} className="skill-card">
                <div className="skill-header">
                  <Icon className="skill-icon" />
                  <h3 className="skill-name">{skill.name}</h3>
                </div>
                <div className="skill-bar-container">
                  <div
                    className="skill-bar"
                    style={{ '--skill-level': `${skill.level}%` } as React.CSSProperties}
                  />
                </div>
                <div className="skill-level">{skill.level}%</div>
              </div>
            );
          })}
        </div>
        
        <div className="flex justify-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#projects" className="next-section-button">
              Veja meus projetos
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
