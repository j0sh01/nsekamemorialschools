
import React from 'react';
import { Heart, Smile, Sparkles, Sun } from 'lucide-react';
import { useTranslation } from '../components/LanguageContext';

const Nursery: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-pink-50 py-24 text-center relative">
        <div className="container mx-auto px-4 relative z-10">
          <span className="bg-white text-pink-600 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-6 inline-block shadow-sm border border-pink-100">
            {t('nursery.tag')}
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 font-poppins tracking-tight">{t('nursery.title')}</h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto italic leading-relaxed">
            {t('nursery.sub')}
          </p>
        </div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-pink-400/10 rounded-full blur-3xl"></div>
      </section>

      {/* Main Feature Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
           <div className="relative">
             <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] md:aspect-video lg:aspect-square relative z-10">
               <img 
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop" 
                className="w-full h-full object-cover" 
                alt={t('nursery.img.alt')} 
               />
             </div>
             <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-400 rounded-3xl -z-0 rotate-12"></div>
             <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-200 rounded-full -z-0"></div>
             
             {/* Small Badge overlay */}
             <div className="absolute top-8 right-8 z-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white flex items-center gap-3">
                <div className="w-10 h-10 bg-pink-50 rounded-full flex items-center justify-center overflow-hidden p-1.5 border border-pink-100">
                   <img src="/SDA-logo.png" alt="SDA Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-pink-600 tracking-tighter leading-none">Faith Based</p>
                  <p className="text-[12px] font-bold text-slate-800">Learning Through Play</p>
                </div>
             </div>
           </div>

           <div className="space-y-8">
             <div className="inline-block px-4 py-1.5 bg-pink-50 text-pink-600 rounded-lg text-sm font-black uppercase tracking-widest">Our Approach</div>
             <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">{t('nursery.sec1.title')}</h2>
             <p className="text-xl text-slate-600 leading-relaxed">
               {t('nursery.sec1.desc')}
             </p>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                {[
                  { icon: <Heart className="text-pink-500" size={32} />, title: t('nursery.card1.title'), desc: t('nursery.card1.desc') },
                  { icon: <Smile className="text-yellow-500" size={32} />, title: t('nursery.card2.title'), desc: t('nursery.card2.desc') },
                  { icon: <Sparkles className="text-blue-500" size={32} />, title: t('nursery.card3.title'), desc: t('nursery.card3.desc') },
                  { icon: <Sun className="text-orange-500" size={32} />, title: t('nursery.card4.title'), desc: t('nursery.card4.desc') },
                ].map((item, i) => (
                  <div key={i} className="group p-6 bg-slate-50 rounded-3xl border border-transparent hover:border-pink-200 hover:bg-white hover:shadow-xl transition-all duration-300">
                    <div className="mb-4 bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-slate-800 text-lg mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
             </div>
           </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-pink-50 py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
           <div className="max-w-4xl mx-auto bg-white p-12 md:p-16 rounded-[3rem] text-center shadow-2xl border border-pink-100">
              <div className="w-16 h-16 bg-pink-50 rounded-2xl mx-auto mb-8 flex items-center justify-center overflow-hidden p-3 border border-pink-100">
                <img src="/SDA-logo.png" alt="SDA Logo" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-8">{t('nursery.phi.title')}</h3>
              <p className="text-slate-600 italic leading-relaxed text-xl md:text-2xl">
                "{t('nursery.phi.desc')}"
              </p>
           </div>
        </div>
        <div className="absolute top-0 left-0 p-20 opacity-5 pointer-events-none">
          <Heart size={400} className="text-pink-600" />
        </div>
      </section>
    </div>
  );
};

export default Nursery;
