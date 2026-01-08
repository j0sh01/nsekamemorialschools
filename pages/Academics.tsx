
import React from 'react';
import { CheckCircle, Book, Music, Calculator, Globe } from 'lucide-react';
import { useTranslation } from '../components/LanguageContext';

const Academics: React.FC = () => {
  const { t, language } = useTranslation();

  const curriculumHighlights = language === 'en' ? [
    "Complete NECTA aligned core subjects",
    "Advanced English Language proficiency programs",
    "Mathematics and Science focus",
    "Information & Communications Technology (ICT)",
    "Moral and Religious (SDA) instruction",
    "Creative Arts, Music and Physical Education"
  ] : [
    "Masomo ya msingi yanayoendana na NECTA",
    "Programu za juu za ufasaha wa Lugha ya Kiingereza",
    "Mkazo katika Hisabati na Sayansi",
    "Teknolojia ya Habari na Mawasiliano (ICT)",
    "Mafundisho ya Maadili na Dini (SDA)",
    "Sanaa za Ubunifu, Muziki na Elimu ya Viungo"
  ];

  const activities = language === 'en' 
    ? ['Sports & Games', 'Debate Club', 'School Choir', 'Gardening', 'Health Club', 'Bible Quiz Team']
    : ['Michezo na Michezo', 'Klabu ya Mdahalo', 'Kwaya ya Shule', 'Bustani', 'Klabu ya Afya', 'Timu ya Maswali ya Biblia'];

  return (
    <div>
      <section className="bg-slate-900 py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">{t('academics.title')}</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">{t('academics.sub')}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">{t('academics.highlights.title')}</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {t('academics.highlights.desc')}
              </p>
              <div className="space-y-4">
                {curriculumHighlights.map((item, i) => (
                  <div key={i} className="flex gap-3 items-center">
                    <CheckCircle className="text-green-500" size={20} />
                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-8 rounded-3xl text-center">
                <Calculator className="mx-auto mb-4 text-blue-900" size={40} />
                <h4 className="font-bold text-blue-900">{t('academics.stem.title')}</h4>
                <p className="text-xs text-slate-500 mt-2">{t('academics.stem.desc')}</p>
              </div>
              <div className="bg-yellow-50 p-8 rounded-3xl text-center">
                <Music className="mx-auto mb-4 text-yellow-600" size={40} />
                <h4 className="font-bold text-yellow-900">{t('academics.arts.title')}</h4>
                <p className="text-xs text-slate-500 mt-2">{t('academics.arts.desc')}</p>
              </div>
              <div className="bg-green-50 p-8 rounded-3xl text-center">
                <Globe className="mx-auto mb-4 text-green-700" size={40} />
                <h4 className="font-bold text-green-900">{t('academics.ling.title')}</h4>
                <p className="text-xs text-slate-500 mt-2">{t('academics.ling.desc')}</p>
              </div>
              <div className="bg-red-50 p-8 rounded-3xl text-center">
                <Book className="mx-auto mb-4 text-red-700" size={40} />
                <h4 className="font-bold text-red-900">{t('academics.bible.title')}</h4>
                <p className="text-xs text-slate-500 mt-2">{t('academics.bible.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900">{t('academics.co.title')}</h2>
              <p className="text-slate-500">{t('academics.co.sub')}</p>
           </div>
           <div className="flex flex-wrap justify-center gap-6">
              {activities.map((activity, idx) => (
                <div key={idx} className="bg-white px-8 py-4 rounded-full shadow-sm border border-gray-200 font-bold text-slate-700 hover:text-blue-900 transition-colors">
                  {activity}
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
