// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.resume': 'Resume',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact',
      
      // Home Section
      'home.welcome': 'Welcome',
      'home.title': 'Hi, I\'m Getacher Ashebir',
      'home.subtitle1': 'Passionate Full-Stack 🌐 Developer',
      'home.subtitle2': 'Software Developer at Ethiopian Airlines',
      'home.subtitle3': 'Let\'s connect! Reach me via email or LinkedIn 🤝',
      'home.contactBtn': 'Contact Me',
      
      // About Section
      'about.title': 'About Me 🚀',
      'about.intro': 'I\'m Getacher Ashebir, a Full Stack Developer 💻',
      'about.description1': 'Passionate about building scalable and high-performance applications, I specialize in developing e-services, workflow automation, desktop & mobile apps, and dynamic websites. Always eager to explore the latest technologies and solve complex problems! 🔥',
      'about.description2': 'My tech stack includes .NET, React.js, Node.js, Next.js, Power Automate, TypeScript, and Java, among others. I\'m actively seeking new opportunities 🌍 and excited to collaborate on open-source projects. Let\'s innovate together! 🤝',
      'about.downloadCV': 'Download CV',
      
      // Resume Section
      'resume.title': 'Resume 📄',
      'resume.subtitle': 'My experience, expertise, and achievements',
      'resume.workExperience': 'Work Experience',
      'resume.fullStackDev': 'Full Stack Developer',
      'resume.ethiopianAirlines': 'Ethiopian Airlines - Jan 2022 - Present',
      'resume.backendDev': 'Backend Developer',
      'resume.blueVibe': 'Blue Vibe System Solution - 2020 - 2021',
      'resume.skills': 'Technical Skills',
      'resume.achievements': 'Achievements',
      
      // Projects Section
      'projects.title': 'Projects 💼',
      'projects.subtitle': 'Check out my recent work',
      
      // Contact Section
      'contact.title': 'Contact 📬',
      'contact.subtitle': 'Get in touch with me',
      'contact.name': 'Your Name',
      'contact.email': 'Your Email',
      'contact.message': 'Your Message',
      'contact.send': 'Send Message',
      
      // Theme
      'theme.toggle': 'Toggle theme',
      'theme.dark': 'Dark mode',
      'theme.light': 'Light mode',
      
      // Common
      'common.loading': 'Loading...',
      'common.error': 'Something went wrong',
      'common.retry': 'Try Again',
      'common.language': 'Language'
    }
  },
  am: {
    translation: {
      // Navigation
      'nav.home': 'መነሻ',
      'nav.about': 'ስለ እኔ',
      'nav.resume': 'የሥራ መገልገያ',
      'nav.projects': 'ፕሮጀክቶች',
      'nav.contact': 'እውቂያ',
      
      // Home Section
      'home.welcome': 'እንኳን ደህና መጡ',
      'home.title': 'ሰላም፣ እኔ ጌታቸር አሽቤር ነኝ',
      'home.subtitle1': 'የሙሉ ስታክ የድር ገጽ አበልጻጊ 🌐',
      'home.subtitle2': 'የኢትዮጵያ አየር መንገድ ኩባንያ የሶፍትዌር አበልጻጊ',
      'home.subtitle3': 'እንገናኝ! በኢሜይል ወይም በሊንክድኢን ያግኙኝ 🤝',
      'home.contactBtn': 'እኔን ያነጋግሩ',
      
      // About Section
      'about.title': 'ስለ እኔ 🚀',
      'about.intro': 'እኔ ጌታቸር አሽቤር፣ የሙሉ ስታክ የድር ገጽ አበልጻጊ ነኝ 💻',
      'about.description1': 'ለስፋት እና ለከፍተኛ አፈጻጸም መተግበሪያዎች መገንባት በጣም ደስ የለኝ። የኢ-አገልግሎቶች፣ የሥራ ፍሰት ማውቃች፣ ዴስክቶፕ እና ሞባይል መተግበሪያዎች፣ እና የተለዋዋጭ ድር ጣቢያዎችን መገንባት ላይ ትኩረት አድርጌ ነው። ሁልጊዜ የቅርብ ጊዜ ቴክኖሎጂዎችን ለመዳሰስ እና ውስብስብ ችግሮችን ለመፍታት በጣም ደስ ይበልጣል! 🔥',
      'about.description2': 'የቴክኖሎጂ ስታቬ ውስጥ .NET፣ React.js፣ Node.js፣ Next.js፣ Power Automate፣ TypeScript፣ እና ጃቫ ያካትታል። አዲስ እድልዎችን በማግኘት በጣም እንቅስቃሴ ነኝ 🌍 እና በኦፕን-ሶርስ ፕሮጀክቶች ላይ ለመተባበር በደስታ ነኝ። በተመሳሳይ ኢኖቬሽን እንድንፈጽም! 🤝',
      'about.downloadCV': 'ሲቪ ያውርዱ',
      
      // Resume Section
      'resume.title': 'የሥራ መገልገያ 📄',
      'resume.subtitle': 'የእኔ ተሞክሮ፣ ባለሞያነት፣ እና ስኬቶች',
      'resume.workExperience': 'የሥራ ተሞክሮ',
      'resume.fullStackDev': 'የሙሉ ስታክ አበልጻጊ',
      'resume.ethiopianAirlines': 'የኢትዮጵያ አየር መንገድ - ጃንዩወሪ 2022 - አሁን',
      'resume.backendDev': 'የኋላ ተመሳሳይ አበልጻጊ',
      'resume.blueVibe': 'ብሉ ቪብ ሲስተም ሶሊሽን - 2020 - 2021',
      'resume.skills': 'ቴክኒካል ባለሞያዎች',
      'resume.achievements': 'ስኬቶች',
      
      // Projects Section
      'projects.title': 'ፕሮጀክቶች 💼',
      'projects.subtitle': 'የቅርብ ጊዜ የእኔ ሥራዎችን ይመልከቱ',
      
      // Contact Section
      'contact.title': 'እውቂያ 📬',
      'contact.subtitle': 'እኔን ያነጋግሩ',
      'contact.name': 'የእርስዎ ስም',
      'contact.email': 'የእርስዎ ኢሜይል',
      'contact.message': 'መልእክትዎ',
      'contact.send': 'መልእክት ላክ',
      
      // Theme
      'theme.toggle': 'ቴማ ቀይር',
      'theme.dark': 'ጨለማ ሁኔታ',
      'theme.light': 'ብርሃን ሁኔታ',
      
      // Common
      'common.loading': 'በመጫን ላይ...',
      'common.error': 'የሆነ ችግር አጋጥሟል',
      'common.retry': 'እንደገና ይሞክሩ',
      'common.language': 'ቋንቋ'
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'cookie', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie']
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;