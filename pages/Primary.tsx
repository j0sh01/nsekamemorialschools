
import React from 'react';
import { Award, BookOpen, Brain, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../components/LanguageContext';

const Primary: React.FC = () => {
  const { t, language } = useTranslation();

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-blue-50 py-24 text-center relative">
        <div className="container mx-auto px-4 relative z-10">
          <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-6 inline-block shadow-lg">
            {t('primary.tag')}
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6 font-poppins tracking-tight">{t('primary.title')}</h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto italic leading-relaxed">
            {t('primary.sub')}
          </p>
        </div>
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
          <BookOpen size={300} className="text-blue-900" />
        </div>
      </section>

      {/* Main Academic Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
           <div className="order-2 lg:order-1 space-y-8">
             <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 rounded-lg text-sm font-black uppercase tracking-widest">Excellence in Education</div>
             <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">{t('primary.sec1.title')}</h2>
             <p className="text-xl text-slate-600 leading-relaxed">
               {t('primary.sec1.desc')}
             </p>
             <div className="space-y-6 pt-4">
                {[
                  { icon: <BookOpen />, title: language === 'en' ? "English-Medium Proficiency" : "Ufasaha wa Lugha ya Kiingereza", desc: language === 'en' ? "Immersive English environment for linguistic mastery." : "Mazingira rafiki ya Kiingereza kwa umahiri wa lugha." },
                  { icon: <Award />, title: language === 'en' ? "Competitive Academics" : "Kitaaluma Chenye Ushindani", desc: language === 'en' ? "Standardized testing and continuous assessment excellence." : "Upimaji wa viwango na tathmini ya mara kwa mara ya ubora." },
                  { icon: <ShieldCheck />, title: language === 'en' ? "Faith-Based Discipline" : "Nidhamu Inayozingatia Imani", desc: language === 'en' ? "Encouraging self-respect and integrity through SDA values." : "Kuhimiza kujiheshimu na uadilifu kupitia maadili ya SDA." },
                  { icon: <Brain />, title: language === 'en' ? "Critical Thinking" : "Fikra Tunduizi", desc: language === 'en' ? "Developing problem-solving skills across all subjects." : "Kukuza ujuzi wa kutatua matatizo katika masomo yote." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all group">
                    <div className="w-14 h-14 bg-blue-900 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-blue-900 mb-1">{item.title}</h4>
                      <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
             </div>
           </div>
           
           <div className="order-1 lg:order-2 relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] relative z-10 border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop" 
                  className="w-full h-full object-cover" 
                  alt={t('primary.img.alt')} 
                />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply opacity-20 -z-0"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-600 rounded-full mix-blend-multiply opacity-10 -z-0"></div>
              
              {/* SDA Logo Badge */}
              <div className="absolute bottom-8 right-8 z-20 bg-blue-900 text-white p-6 rounded-[2rem] shadow-2xl border border-blue-800 flex items-center gap-4">
                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden p-2 shadow-inner">
                   <img src="/SDA-logo.png" alt="SDA Logo" className="w-full h-full object-contain" />
                 </div>
                 <div>
                   <p className="text-xs font-bold uppercase tracking-widest text-yellow-400 mb-0.5 leading-none">Faith Guided</p>
                   <p className="text-sm font-black uppercase tracking-tight">Academic Excellence</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Graduation / Success Section */}
      <section className="bg-blue-950 py-24 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h3 className="text-4xl font-bold mb-8">{t('primary.ready.title')}</h3>
          <p className="text-blue-100 max-w-3xl mx-auto text-xl leading-relaxed mb-12 italic opacity-90">
            "{t('primary.ready.desc')}"
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-16">
             <div className="px-8 py-4 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-md font-bold hover:bg-white/20 transition-colors">Standard 1 - 7</div>
             <div className="px-8 py-4 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-md font-bold hover:bg-white/20 transition-colors">NECTA Aligned</div>
             <div className="px-8 py-4 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-md font-bold hover:bg-white/20 transition-colors">English Medium</div>
          </div>
          <Link to="/admissions" className="inline-flex items-center gap-3 bg-yellow-500 text-blue-950 px-12 py-5 rounded-full font-black uppercase text-sm tracking-widest hover:bg-white transition-all shadow-2xl group">
            {language === 'en' ? 'Join Our Primary School' : 'Jiunge na Shule ya Msingi'}
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
           <div className="absolute bottom-20 right-20 w-64 h-64 border-4 border-white/20 rounded-full"></div>
        </div>
      </section>
    </div>
  );
};

export default Primary;
