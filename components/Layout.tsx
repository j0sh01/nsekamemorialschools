
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Languages } from 'lucide-react';
import { useTranslation } from './LanguageContext';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useTranslation();
  const location = useLocation();

  const navItems = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.about'), path: '/about' },
    { label: t('nav.faith'), path: '/faith' },
    { label: t('nav.nursery'), path: '/nursery' },
    { label: t('nav.primary'), path: '/primary' },
    { label: t('nav.admissions'), path: '/admissions' },
    { label: t('nav.academics'), path: '/academics' },
    { label: t('nav.life'), path: '/school-life' },
    { label: t('nav.gallery'), path: '/gallery' },
    { label: t('nav.contact'), path: '/contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 px-4 text-xs md:text-sm">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="flex gap-4 items-center">
            <a href="tel:+255689858287" className="flex items-center gap-1 hover:text-yellow-400 transition-colors">
              <Phone size={14} /> +255 689 858 287
            </a>
            <span className="hidden md:inline text-white/30">|</span>
            <button 
              onClick={() => setLanguage(language === 'en' ? 'sw' : 'en')}
              className="flex items-center gap-1.5 hover:text-yellow-400 font-bold uppercase transition-colors"
            >
              <Languages size={14} />
              {language === 'en' ? 'SW' : 'EN'}
            </button>
          </div>
          <div className="flex gap-4">
            <Link to="/admissions" className="hover:text-yellow-400 font-semibold">{t('nav.adm2026')}</Link>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
        <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center border-2 border-blue-900">
              <span className="text-blue-900 font-bold text-[8px] md:text-[10px] text-center px-1">NSEKA LOGO</span>
            </div>
            <div>
              <h1 className="text-blue-900 font-bold text-lg md:text-xl leading-tight uppercase">NSEKA MEMORIAL</h1>
              <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-widest">{t('nav.nursery')} & {t('nav.primary')}</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-5">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`text-xs xl:text-sm font-bold transition-colors uppercase tracking-tight ${
                    location.pathname === item.path ? 'text-blue-900 border-b-2 border-yellow-500 pb-1' : 'text-gray-600 hover:text-blue-900'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <button className="lg:hidden text-blue-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 animate-in fade-in slide-in-from-top-4 duration-300">
            <ul className="flex flex-col p-4 gap-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-gray-700 font-bold hover:text-blue-900 uppercase text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4 border-t border-gray-100">
                <button 
                  onClick={() => {
                    setLanguage(language === 'en' ? 'sw' : 'en');
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-2 text-blue-900 font-bold uppercase text-sm"
                >
                  <Languages size={18} />
                  {language === 'en' ? 'Badili kwenda Kiswahili' : 'Switch to English'}
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Identity */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-slate-700">
                 <span className="text-blue-900 font-bold text-[8px] text-center">NSEKA LOGO</span>
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden p-1 border border-slate-700">
                 <img src="/SDA-logo.png" alt="SDA Logo" className="w-full h-full object-contain" />
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              {language === 'en' 
                ? 'Dedicated to nurturing young minds for academic and spiritual excellence through a Seventh-day Adventist foundation in Chanika, Dar es Salaam.'
                : 'Tumejitolea kulea akili changa kwa ubora wa kitaaluma na kiroho kupitia misingi ya Waadventista Wasabato huko Chanika, Dar es Salaam.'}
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">{t('nav.about')}</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/about" className="hover:text-yellow-400">{t('nav.about')}</Link></li>
              <li><Link to="/admissions" className="hover:text-yellow-400">{t('nav.admissions')}</Link></li>
              <li><Link to="/faith" className="hover:text-yellow-400">{t('nav.faith')}</Link></li>
              <li><Link to="/academics" className="hover:text-yellow-400">{t('nav.academics')}</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-400">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">{t('nav.contact')}</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="text-yellow-500 shrink-0" size={18} />
                <span>Block 4, Plot 12, Buyuni – Chanika, near SDA Church, Dar es Salaam</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-yellow-500 shrink-0" size={18} />
                <span>+255 689 858 287 (Office)</span>
              </li>
              <li className="flex gap-3">
                <Mail className="text-yellow-500 shrink-0" size={18} />
                <span>nsekamemorialschools@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter/Slogan Placeholder */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">{language === 'en' ? 'Our Vision' : 'Maono Yetu'}</h3>
            <div className="border border-slate-700 p-4 rounded-lg bg-slate-800/50 italic text-sm">
              {language === 'en' 
                ? '[School Vision/Slogan Placeholder Section - To be updated with final branding]'
                : '[Sehemu ya Maono/Kaulimbiu ya Shule - Itasasishwa na chapa ya mwisho]'}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-center text-xs">
          <p>© {new Date().getFullYear()} Nseka Memorial Schools. {t('nav.adm2026')}.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
