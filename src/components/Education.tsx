import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  return (
    <section id="formacao" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Formação e Certificações</h2>
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <GraduationCap className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Análise e Desenvolvimento de Sistemas</h3>
                <p className="text-gray-600">UNESA – Fortaleza</p>
                <p className="text-gray-500">Formação prevista para 2025</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Award className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Certificações</h3>
                <ul className="space-y-4">
                  <li>
                    <h4 className="font-medium">Desenvolvimento Web Full-Stack</h4>
                    <p className="text-gray-600">Infinity School – Fortaleza</p>
                    <p className="text-gray-500">2022</p>
                  </li>
                  <li>
                    <h4 className="font-medium">DevOps</h4>
                    <p className="text-gray-600">Atlantico Avanti – Fortaleza</p>
                    <p className="text-gray-500">2023</p>
                  </li>
                  <li>
                    <h4 className="font-medium">Curso.dev</h4>
                    <p className="text-gray-600">Filipe Deschamps</p>
                    <p className="text-gray-500">Em andamento</p>
                  </li>
                  <li>
                    <h4 className="font-medium">AWS Certified AI Practitioner</h4>
                    <p className="text-gray-600">Escola da Nuvem</p>
                    <p className="text-gray-500">Em andamento</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
