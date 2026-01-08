
import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { useTranslation } from '../components/LanguageContext';

const News: React.FC = () => {
  const { t, language } = useTranslation();

  const announcements = [
    { 
      title: language === 'en' ? "Admission for 2026 Academic Year Now Open" : "Udahili wa Mwaka wa Masomo 2026 Umefunguliwa", 
      date: "October 15, 2025", 
      tag: language === 'en' ? "Admissions" : "Udahili", 
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      title: language === 'en' ? "Nseka Memorial Schools Annual Bible Quiz Competition" : "Mashindano ya Mwaka ya Maswali ya Biblia ya Shule za Ukumbusho za Nseka", 
      date: "September 28, 2025", 
      tag: language === 'en' ? "Events" : "Matukio", 
      img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      title: language === 'en' ? "Parent-Teacher Consultation Day Schedule" : "Ratiba ya Siku ya Mashauriano kati ya Wazazi na Walimu", 
      date: "September 10, 2025", 
      tag: language === 'en' ? "Academic" : "Kitaaluma", 
      img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      title: language === 'en' ? "New Modern Playground Expansion Completed" : "Upanuzi wa Uwanja Mpya wa Michezo wa Kisasa Umekamilika", 
      date: "August 20, 2025", 
      tag: language === 'en' ? "Campus" : "Kampasi", 
      img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop" 
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <section className="bg-blue-900 py-24 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">{t('news.title')}</h1>
          <p className="text-xl text-blue-100 opacity-80 max-w-2xl mx-auto">{t('news.sub')}</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {announcements.map((news, idx) => (
             <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
                <div className="h-48 overflow-hidden">
                   <img src={news.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="News" />
                </div>
                <div className="p-8">
                   <div className="flex justify-between items-center mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{news.tag}</span>
                      <div className="flex items-center gap-1 text-xs text-slate-400">
                        <Calendar size={12} />
                        {news.date}
                      </div>
                   </div>
                   <h3 className="text-xl font-bold text-blue-900 mb-6 group-hover:text-yellow-600 transition-colors">{news.title}</h3>
                   <button className="flex items-center gap-2 font-bold text-sm text-blue-900 group">
                      {t('common.readMore')} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                   </button>
                </div>
             </div>
           ))}
        </div>
        
        <div className="mt-16 text-center">
           <button className="px-12 py-4 border-2 border-blue-900 text-blue-900 font-bold rounded-full hover:bg-blue-900 hover:text-white transition-all">
             {t('news.archives')}
           </button>
        </div>
      </div>
    </div>
  );
};

export default News;
