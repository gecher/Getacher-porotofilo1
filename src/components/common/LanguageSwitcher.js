import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Language Switcher Component
 * Allows users to switch between languages
 */
export function LanguageSwitcher({ className = '', variant = 'dropdown' }) {
  const { i18n, t } = useTranslation();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'am', name: 'አማርኛ', flag: '🇪🇹' }
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  if (variant === 'dropdown') {
    return (
      <div className={`relative ${className}`}>
        <select
          value={i18n.language}
          onChange={(e) => changeLanguage(e.target.value)}
          className="bg-gray-800 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none pr-8 cursor-pointer hover:bg-gray-700 transition-colors"
          aria-label={t('common.language')}
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.flag} {lang.name}
            </option>
          ))}
        </select>
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex gap-2 ${className}`}>
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`px-3 py-1 rounded-full text-sm transition-all ${
            i18n.language === lang.code
              ? 'bg-blue-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
          aria-label={`Switch to ${lang.name}`}
        >
          {lang.flag} {lang.name}
        </button>
      ))}
    </div>
  );
}

/**
 * Simple Language Toggle Button
 */
export function LanguageToggle({ className = '' }) {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'am' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors ${className}`}
      aria-label={`Switch language to ${i18n.language === 'en' ? 'Amharic' : 'English'}`}
    >
      {i18n.language === 'en' ? '🇪🇹 አማ' : '🇺🇸 EN'}
    </button>
  );
}