
import React from 'react';
import { Clock, Sun, BookOpen, Utensils, Zap, Users } from 'lucide-react';
import { useTranslation } from '../components/LanguageContext';

const SchoolLife: React.FC = () => {
  const { t, language } = useTranslation();

  const routine = [
    { time: "07:30 AM", icon: <Sun />, title: language === 'en' ? "Morning Assembly" : "Mkusanyiko wa Asubuhi", desc: language === 'en' ? "Worship, songs, and announcements to start the day." : "Ibada, nyimbo, na matangazo kuanza siku." },
    { time: "08:00 AM", icon: <BookOpen />, title: language === 'en' ? "Academic Sessions" : "Vipindi vya Taaluma", desc: language === 'en' ? "Core subjects in English-medium focused on rigorous learning." : "Masomo ya msingi kwa Kiingereza yakilenga ujifunzaji makini." },
    { time: "10:30 AM", icon: <Zap />, title: language === 'en' ? "Healthy Break" : "Mapumziko ya Afya", desc: language === 'en' ? "Supervised playtime and healthy snacks to recharge." : "Muda wa michezo wenye usimamizi na vitafunio vya afya." },
    { time: "12:30 PM", icon: <Utensils />, title: language === 'en' ? "Nutritious Lunch" : "Chakula cha Mchana", desc: language === 'en' ? "Shared meals fostering community and social etiquette." : "Milo ya pamoja inayokuza jamii na adabu za kijamii." },
    { time: "02:00 PM", icon: <Users />, title: language === 'en' ? "Co-curriculars" : "Shughuli za Ziada", desc: language === 'en' ? "Clubs, sports, and creative activities to develop talents." : "Vilabu, michezo, na shughuli za ubunifu kukuza vipaji." },
    { time: "04:00 PM", icon: <Clock />, title: language === 'en' ? "Home Time" : "Muda wa Kurudi Nyumbani", desc: language === 'en' ? "A prayerful closing as children prepare for home." : "Kufunga kwa maombi watoto wanapojiandaa kurudi nyumbani." },
  ];

  const policies = language === 'en' 
    ? ['Peer Mediation Programs', 'Character Building Lessons', 'One-on-one Mentoring', 'Safe-guarding Policies']
    : ['Programu za Usuluhishi wa Rika', 'Masomo ya Kujenga Tabia', 'Ushauri wa Mtu kwa Mtu', 'Sera za Ulinzi wa Mtoto'];

  return (
    <div>
      <section className="bg-yellow-500 py-24 text-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">{t('life.title')}</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">{t('life.sub')}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">{t('life.day.title')}</h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {routine.map((item, i) => (
                <div key={i} className="p-8 bg-white border border-gray-100 shadow-sm rounded-3xl hover:shadow-xl transition-all">
                   <div className="flex justify-between items-center mb-6">
                      <span className="text-yellow-600 font-bold">{item.time}</span>
                      <div className="w-10 h-10 bg-blue-50 text-blue-900 rounded-full flex items-center justify-center">{item.icon}</div>
                   </div>
                   <h4 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h4>
                   <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
         <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
            <div>
               <h2 className="text-3xl font-bold text-blue-900 mb-6">{t('life.discipline.title')}</h2>
               <p className="text-lg text-slate-600 leading-relaxed mb-6">
                 {t('life.discipline.desc')}
               </p>
               <ul className="space-y-4">
                  {policies.map((p, i) => (
                    <li key={i} className="flex gap-3 items-center font-bold text-blue-900">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      {p}
                    </li>
                  ))}
               </ul>
            </div>
            <div className="relative">
               <img src="https://images.unsplash.com/photo-1577891721396-22c5a3171d51?q=80&w=800&auto=format&fit=crop" className="rounded-[3rem] shadow-2xl relative z-10" alt="Students engaging in group activities" />
               <div className="absolute -top-6 -left-6 w-full h-full border-4 border-blue-900 rounded-[3rem] -z-0"></div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default SchoolLife;
