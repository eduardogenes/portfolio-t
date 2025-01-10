import { useLanguage } from '../../contexts/LanguageContext';
import { FiGlobe } from 'react-icons/fi';

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle language"
    >
      <FiGlobe className="w-5 h-5" />
      <span className="text-sm font-medium uppercase">{language}</span>
    </button>
  );
}
