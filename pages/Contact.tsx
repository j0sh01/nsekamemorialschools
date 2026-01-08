
import React from 'react';
import { Mail, Phone, MapPin, Clock, Send, UserCircle } from 'lucide-react';
import { useTranslation } from '../components/LanguageContext';

const Contact: React.FC = () => {
  const { t, language } = useTranslation();

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-blue-950 py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">{t('contact.title')}</h1>
          <p className="text-xl text-blue-100 opacity-80 max-w-2xl mx-auto">
            {t('contact.sub')}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-16 pb-24">
        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100">
          <div className="grid lg:grid-cols-2">
            {/* Contact Form */}
            <div className="p-8 md:p-16">
              <h2 className="text-3xl font-bold text-blue-900 mb-8">{t('contact.form.title')}</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{language === 'en' ? 'Full Name' : 'Jina Kamili'}</label>
                    <input type="text" name="name" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{language === 'en' ? 'Email Address' : 'Barua Pepe'}</label>
                    <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">{language === 'en' ? 'Subject' : 'Mada'}</label>
                  <select name="subject" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all">
                    <option>{language === 'en' ? 'Admissions Inquiry' : 'Maswali ya Udahili'}</option>
                    <option>{language === 'en' ? 'General Information' : 'Habari za Jumla'}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">{language === 'en' ? 'Message' : 'Ujumbe'}</label>
                  <textarea name="message" required rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all"></textarea>
                </div>
                <button type="submit" className="flex items-center justify-center gap-2 w-full bg-blue-900 text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition-all shadow-lg">
                  <Send size={18} />
                  {t('contact.form.send')}
                </button>
              </form>
            </div>

            {/* Info and Map */}
            <div className="bg-blue-900 text-white p-8 md:p-16 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-10">{language === 'en' ? 'Campus Contact Info' : 'Maelezo ya Mawasiliano'}</h2>
                <ul className="space-y-8">
                  <li className="flex gap-6">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                      <MapPin className="text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{t('common.location')}</h4>
                      <p className="opacity-80 text-sm leading-relaxed">
                        Block 4, Plot 12, Buyuni – Chanika, Dar es Salaam
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-6">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                      <Phone className="text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-3">{t('common.phone')}</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <UserCircle size={16} className="text-yellow-500/60" />
                          <span className="text-xs uppercase tracking-widest font-bold opacity-60 mr-2">{t('role.director')}:</span>
                          <a href="tel:+255767379897" className="hover:text-yellow-400 transition-colors font-semibold">+255 767 379 897</a>
                        </div>
                        <div className="flex items-center gap-2">
                          <UserCircle size={16} className="text-yellow-500/60" />
                          <span className="text-xs uppercase tracking-widest font-bold opacity-60 mr-2">{t('role.manager')}:</span>
                          <a href="tel:+255785828333" className="hover:text-yellow-400 transition-colors font-semibold">+255 785 828 333</a>
                        </div>
                        <div className="flex items-center gap-2">
                          <UserCircle size={16} className="text-yellow-500/60" />
                          <span className="text-xs uppercase tracking-widest font-bold opacity-60 mr-2">{t('office')}:</span>
                          <a href="tel:+255689858287" className="hover:text-yellow-400 transition-colors font-semibold">+255 689 858 287</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-6">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                      <Clock className="text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{t('common.hours')}</h4>
                      <p className="opacity-80 text-sm leading-relaxed">
                        {language === 'en' ? 'Mon - Fri: 7:30 AM to 4:30 PM' : 'Jumatatu - Ijumaa: Saa 1:30 hadi 10:30'}
                      </p>
                      <p className="opacity-50 text-[10px] mt-1">{language === 'en' ? 'Closed on Saturdays for Sabbath observance' : 'Imefungwa Jumamosi kwa ajili ya Sabato'}</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="pt-10 border-t border-white/10 mt-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <span className="text-blue-950 font-black text-[8px] text-center">NSEKA LOGO</span>
                  </div>
                  <p className="text-xs font-bold opacity-60 uppercase tracking-widest">Nseka Memorial Schools Official Administration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
