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
                <h3 className="text-xl font-bold mb-2">Bacharelado em Ciência da Computação</h3>
                <p className="text-gray-600">Universidade Federal do Brasil</p>
                <p className="text-gray-500">2020 - 2024</p>
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
                    <h4 className="font-medium">Web Development Bootcamp</h4>
                    <p className="text-gray-600">Udemy</p>
                    <p className="text-gray-500">2023</p>
                  </li>
                  <li>
                    <h4 className="font-medium">React Developer Certificate</h4>
                    <p className="text-gray-600">Meta</p>
                    <p className="text-gray-500">2023</p>
                  </li>
                  <li>
                    <h4 className="font-medium">JavaScript Algorithms and Data Structures</h4>
                    <p className="text-gray-600">freeCodeCamp</p>
                    <p className="text-gray-500">2022</p>
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