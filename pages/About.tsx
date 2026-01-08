
import React from 'react';
import { useTranslation } from '../components/LanguageContext';

const About: React.FC = () => {
  const { t, language } = useTranslation();

  return (
    <div>
      {/* Hero */}
      <section className="bg-blue-900 py-24 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {language === 'en' ? 'About Our School' : 'Kuhusu Shule Yetu'}
          </h1>
          <p className="text-xl text-blue-100 opacity-80 max-w-3xl mx-auto">
            {language === 'en' 
              ? 'A legacy of excellence, faith, and character building in the heart of Tanzania.' 
              : 'Urithi wa ubora, imani, na ujengaji wa tabia katikati ya Tanzania.'}
          </p>
        </div>
        <div className="absolute inset-0 bg-blue-900 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/20 via-transparent to-transparent pointer-events-none"></div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-gray-100">
               <h3 className="text-3xl font-bold text-blue-900 mb-6">{t('common.mission')}</h3>
               <p className="text-lg text-slate-600 leading-relaxed italic">
                 {language === 'en'
                   ? '"To provide a high-quality, English-medium education rooted in Seventh-day Adventist values, empowering children to achieve academic excellence and develop Christ-like character for service in this world and the world to come."'
                   : '"Kutoa elimu bora ya lugha ya Kiingereza yenye misingi katika maadili ya Waadventista Wasabato, tukiwawezesha watoto kufikia ubora wa kitaaluma na kukuza tabia inayofanana na Kristo kwa ajili ya huduma katika ulimwengu huu na ulimwengu ujao."'}
               </p>
            </div>
            <div className="bg-blue-900 p-12 rounded-[2.5rem] shadow-xl text-white">
               <h3 className="text-3xl font-bold mb-6 text-yellow-400">{t('common.vision')}</h3>
               <p className="text-lg text-blue-100 leading-relaxed italic">
                 {language === 'en'
                   ? '"To be the premier faith-based educational institution in Tanzania, recognized for academic distinction and spiritual leadership."'
                   : '"Kuwa taasisi bora ya elimu yenye msingi wa imani nchini Tanzania, inayotambulika kwa utofauti wa kitaaluma na uongozi wa kiroho."'}
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* History & Commitment */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-8">
            {language === 'en' ? 'School History & Commitment' : 'Historia ya Shule na Kujitolea kwetu'}
          </h2>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed text-left">
            <p>
              {language === 'en'
                ? 'Nseka Memorial Schools was founded with a deep conviction that every child deserves an education that nurtures the whole person. We are an English-medium Nursery & Primary school that refuses to compromise on academic standards or spiritual grounding.'
                : 'Shule za Ukumbusho za Nseka ziliasisiwa kwa imani thabiti kwamba kila mtoto anastahili elimu inayolea utu wake wote. Sisi ni shule ya Chekechea na Msingi inayofundisha kwa Kiingereza ambayo inakataa kulegeza viwango vya kitaaluma au misingi ya kiroho.'}
            </p>
            <p>
              {language === 'en'
                ? 'As an SDA-based school, we operate under the belief that true education is the restoration of the image of God in the soul. This commitment drives our daily routines, our interactions with students, and our partnership with parents.'
                : 'Kama shule yenye misingi ya SDA (Wasabato), tunafanya kazi chini ya imani kwamba elimu ya kweli ni kurejesha mfano wa Mungu katika nafsi. Ahadi hii inaongoza taratibu zetu za kila siku, mwingiliano wetu na wanafunzi, na ushirikiano wetu na wazazi.'}
            </p>
            <p>
              {language === 'en'
                ? 'Whether in our nursery play areas or our primary classrooms, you will find an atmosphere of respect, discipline, and warmth. We are more than a school; we are a community dedicated to the holistic success of the next generation.'
                : 'Iwe katika maeneo yetu ya michezo ya chekechea au madarasa yetu ya msingi, utapata mazingira ya heshima, nidhamu, na uchangamfu. Sisi ni zaidi ya shule; sisi ni jamii iliyojitolea kwa mafanikio kamili ya kizazi kijacho.'}
            </p>
          </div>
          
          <div className="mt-16 flex justify-center gap-8">
             <div className="text-center">
                <div className="w-24 h-24 bg-white rounded-full mx-auto flex items-center justify-center mb-2 border border-gray-200 overflow-hidden">
                   <span className="text-[8px] font-bold text-gray-400">SCHOOL LOGO</span>
                </div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">NSEKA MEMORIAL</p>
             </div>
             <div className="text-center">
                <div className="w-24 h-24 bg-white rounded-full mx-auto flex items-center justify-center mb-2 border border-gray-200 overflow-hidden p-2">
                   <img src="/SDA-logo.png" alt="SDA Logo" className="w-full h-full object-contain" />
                </div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">SDA IDENTITY</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
