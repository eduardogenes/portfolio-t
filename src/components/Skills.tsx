import React from 'react';

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
            <div key={skill.name} className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-sm dark:shadow-accent-blue/10 hover:shadow-md dark:hover:shadow-accent-blue/20 transition-all duration-300">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-700 dark:text-gray-200">{skill.name}</span>
                <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-2.5">
                <div
                  className="bg-gradient-to-r from-accent-blue to-accent-purple h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}