
import React from 'react';
import { Home, Library, Shield, TreePine } from 'lucide-react';
import { useTranslation } from '../components/LanguageContext';

const Facilities: React.FC = () => {
  const { t } = useTranslation();

  const facilityItems = [
    { 
      title: t('facilities.class.title'), 
      icon: <Home size={32} />, 
      desc: t('facilities.class.desc'),
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop"
    },
    { 
      title: t('facilities.play.title'), 
      icon: <TreePine size={32} />, 
      desc: t('facilities.play.desc'),
      image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop"
    },
    { 
      title: t('facilities.lib.title'), 
      icon: <Library size={32} />, 
      desc: t('facilities.lib.desc'),
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop"
    },
    { 
      title: t('facilities.clean.title'), 
      icon: <Shield size={32} />, 
      desc: t('facilities.clean.desc'),
      image: "https://images.unsplash.com/photo-1527525443983-6e60c75fed4a?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div>
      <section className="bg-blue-900 py-24 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">{t('facilities.title')}</h1>
          <p className="text-xl text-blue-100 opacity-80 max-w-2xl mx-auto">{t('facilities.sub')}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 space-y-24">
           {facilityItems.map((item, i) => (
             <div key={i} className={`flex flex-col lg:flex-row gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
               <div className="lg:w-1/2">
                 <img src={item.image} className="rounded-[3rem] shadow-2xl" alt={item.title} />
               </div>
               <div className="lg:w-1/2 space-y-6">
                 <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-900">{item.icon}</div>
                 <h2 className="text-3xl font-bold text-blue-900">{item.title}</h2>
                 <p className="text-lg text-slate-600 leading-relaxed">{item.desc}</p>
               </div>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
};

export default Facilities;
