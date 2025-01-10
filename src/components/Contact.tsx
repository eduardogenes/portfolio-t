/**
 * Contact.tsx
 * Componente de formulário de contato com integração EmailJS e animações.
 * 
 * Funcionalidades:
 * - Formulário de contato interativo
 * - Integração com EmailJS para envio de emails
 * - Animações usando Framer Motion
 * - Feedback visual de sucesso/erro
 * - Informações de contato com ícones
 */

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    emailjs.init('heb98utZ3Qz_MHPoR');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      setLoading(true);
      setError('');
      setSuccess(false);

      console.log('Enviando email...');
      const result = await emailjs.send(
        'eduardogenes',
        'template_dcoh7mb',
        {
          from_name: formRef.current?.from_name.value,
          from_email: formRef.current?.from_email.value,
          message: formRef.current?.message.value,
        },
        'heb98utZ3Qz_MHPoR'
      );
      console.log('Resultado:', result);

      setSuccess(true);
      formRef.current.reset();
    } catch (err) {
      console.error('Erro detalhado:', err);
      setError(t('contact.form.error'));
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <FiMail className="w-6 h-6" />,
      text: 'eduardogenes95@gmail.com',
      href: 'mailto:eduardogenes95@gmail.com'
    },
    {
      icon: <FiPhone className="w-6 h-6" />,
      text: '(85) 98109-7155',
      href: 'tel:+5585981097155'
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      text: 'Fortaleza, CE',
      href: 'https://maps.google.com/?q=Fortaleza,CE'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <FiMail className="w-8 h-8 text-blue-500" />
            <span className="animated-gradient-text">{t('contact.title')}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              {contactInfo.map((info) => (
                <motion.a
                  key={info.text}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-full">
                    {info.icon}
                  </div>
                  <span>{info.text}</span>
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-6 bg-blue-50 dark:bg-blue-900/30 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                {t('contact.workingHours.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('contact.workingHours.days')}
                <br />
                {t('contact.workingHours.hours')}
              </p>
            </motion.div>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                {t('contact.form.name')}
              </label>
              <input
                type="text"
                id="name"
                name="from_name"
                required
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors dark:text-white"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                id="email"
                name="from_email"
                required
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors dark:text-white"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                {t('contact.form.message')}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors dark:text-white resize-none"
              />
            </motion.div>

            <motion.button
              variants={itemVariants}
              type="submit"
              disabled={loading}
              className={`w-full px-6 py-3 flex items-center justify-center gap-2 text-white rounded-lg transition-all duration-300 ${
                loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <FiSend className="w-5 h-5" />
                  {t('contact.form.send')}
                </>
              )}
            </motion.button>

            {success && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-500 text-center"
              >
                {t('contact.form.success')}
              </motion.p>
            )}

            {error && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-center"
              >
                {error}
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
