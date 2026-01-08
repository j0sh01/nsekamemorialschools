
import React from 'react';
import { ClipboardList, Calendar, MapPin, CheckCircle, FileText } from 'lucide-react';
import { useTranslation } from '../components/LanguageContext';

const Admissions: React.FC = () => {
  const { t, language } = useTranslation();

  const steps = [
    { step: "1", title: language === 'en' ? "Visit & Inquiry" : "Kutembelea na Maswali", desc: language === 'en' ? "Visit our campus to see the facilities and learn about our SDA curriculum." : "Tembelea kampasi yetu kuona vifaa na kujifunza kuhusu mtaala wetu wa SDA." },
    { step: "2", title: language === 'en' ? "Application Form" : "Fomu ya Maombi", desc: language === 'en' ? "Obtain and fill the application form from the school office." : "Pata na ujaze fomu ya maombi kutoka ofisi ya shule." },
    { step: "3", title: language === 'en' ? "Assessment Interview" : "Mahojiano ya Tathmini", desc: language === 'en' ? "An informal session to understand the child's academic level." : "Kikao kisicho rasmi kuelewa kiwango cha kitaaluma cha mtoto." },
    { step: "4", title: language === 'en' ? "Final Enrollment" : "Uandikishaji wa Mwisho", desc: language === 'en' ? "Complete the registration by paying the required fees." : "Kamilisha usajili kwa kulipa ada zinazohitajika." }
  ];

  const docs = language === 'en' ? [
    "Copy of Birth Certificate",
    "Recent Passport Size Photos (4)",
    "Previous School Reports (for Primary)",
    "Transfer Certificate (if applicable)",
    "Immunization Card (for Nursery)"
  ] : [
    "Nakala ya Cheti cha Kuzaliwa",
    "Picha za Karibuni za Pasipoti (4)",
    "Ripoti za Shule ya Awali (kwa Shule ya Msingi)",
    "Cheti cha Uhamisho (ikihitajika)",
    "Kadi ya Chanjo (kwa Chekechea)"
  ];

  return (
    <div className="pb-20">
      <section className="bg-blue-900 py-24 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">{t('adm.hero.title')}</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">{t('adm.hero.sub')}</p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Steps */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold text-blue-900 mb-8 flex items-center gap-3">
                <ClipboardList className="text-yellow-500" />
                {t('adm.steps.title')}
              </h2>
              <div className="space-y-12 relative before:absolute before:left-6 before:top-4 before:bottom-4 before:w-0.5 before:bg-blue-100">
                {steps.map((item, idx) => (
                  <div key={idx} className="relative pl-16 group">
                    <div className="absolute left-0 top-0 w-12 h-12 bg-white border-2 border-blue-900 rounded-full flex items-center justify-center font-bold text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-colors z-10">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold text-blue-900 mb-8">{t('adm.age.title')}</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-blue-900 mb-2">{language === 'en' ? 'Nursery School' : 'Chekechea'}</h4>
                  <p className="text-sm text-slate-500">
                    {language === 'en' ? 'Children must be 3 years of age by January 1st.' : 'Watoto lazima wawe na umri wa miaka 3 ifikapo Januari 1.'}
                  </p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-blue-900 mb-2">{language === 'en' ? 'Primary School' : 'Shule ya Msingi'}</h4>
                  <p className="text-sm text-slate-500">
                    {language === 'en' ? 'Standard 1 entry requires the child to be 6 years of age.' : 'Kuingia Darasa la 1 kunahitaji mtoto awe na umri wa miaka 6.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            <div className="bg-yellow-500 p-8 rounded-[2rem] text-blue-950">
              <h3 className="text-2xl font-bold mb-6">{t('adm.contact.title')}</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <Calendar className="shrink-0" />
                  <div>
                    <span className="block font-bold">{language === 'en' ? 'Office Hours' : 'Muda wa Ofisi'}</span>
                    <span className="text-sm opacity-80">Mon - Thu: 8:00 AM - 4:00 PM<br/>Fri: 8:00 AM - 1:00 PM</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <MapPin className="shrink-0" />
                  <div>
                    <span className="block font-bold">{language === 'en' ? 'Location' : 'Mahali'}</span>
                    <span className="text-sm opacity-80">{language === 'en' ? 'Main Admin Building' : 'Jengo Kuu la Utawala'}</span>
                  </div>
                </li>
              </ul>
              <button className="w-full mt-8 bg-blue-900 text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition-colors">
                {t('adm.tour.btn')}
              </button>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                <FileText className="text-blue-900" />
                {t('adm.docs.title')}
              </h3>
              <ul className="space-y-4">
                {docs.map((doc, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-600">
                    <CheckCircle size={18} className="text-green-500 shrink-0" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
