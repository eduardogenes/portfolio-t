import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // lógica para enviar o formulário de email
    const sendFormData = async () => {
      try {
      const response = await fetch('https://your-api-endpoint.com/contact', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Formulário enviado com sucesso:', result);
      setFormData({ name: '', email: '', message: '' });
      } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      alert('Formulário enviado com sucesso!');
      }
    };

    sendFormData();
    console.log('Formulário enviado:', formData);
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contato</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6">Vamos conversar!</h3>
            <p className="text-gray-600 mb-8">
              Estou sempre aberto a novas oportunidades e parcerias. 
              Sinta-se à vontade para entrar em contato comigo pelo formulário ou pelas informações abaixo.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="text-blue-600" size={20} />
                <span className="text-gray-600">eduardogenes95@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-blue-600" size={20} />
                <span className="text-gray-600">(85) 98109-7155</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-blue-600" size={20} />
                <span className="text-gray-600">Fortaleza, CE</span>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nome
              </label>
              <input
                type="text"
                id="name"
                placeholder="Digite seu nome"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Digite seu email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Escreva sua mensagem"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
