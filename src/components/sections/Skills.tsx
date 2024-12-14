import React from 'react';
import SkillCard from '../ui/SkillCard';

const skills = [
  { name: 'HTML5', level: 90 },
  { name: 'CSS3', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'React', level: 75 },
  { name: 'TypeScript', level: 70 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'Git', level: 75 },
  { name: 'Responsive Design', level: 90 },
];

export default function Skills() {
  return (
    <section id="habilidades" className="py-20 bg-gray-50 dark:bg-dark-900/50 transition-colors">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Habilidades Técnicas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}