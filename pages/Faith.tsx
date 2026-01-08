
import React from 'react';
import { Cross, Heart, Users, Star, Anchor, Shield } from 'lucide-react';
import { useTranslation } from '../components/LanguageContext';

const Faith: React.FC = () => {
  const { t, language } = useTranslation();

  const coreValues = [
    { icon: <Cross />, title: language === 'en' ? "Christ-centered" : "Inayomlenga Kristo", desc: language === 'en' ? "Modeling our lives after the character of Jesus Christ." : "Kufanya maisha yetu yafuate mfano wa tabia ya Yesu Kristo." },
    { icon: <Shield />, title: language === 'en' ? "Moral Integrity" : "Uadilifu wa Maadili", desc: language === 'en' ? "Honesty and ethical behavior in every word and action." : "Uaminifu na tabia ya kimaadili katika kila neno na tendo." },
    { icon: <Users />, title: language === 'en' ? "Service" : "Huduma", desc: language === 'en' ? "Developing a heart that seeks to help others and the community." : "Kukuza moyo unaotafuta kusaidia wengine na jamii." },
    { icon: <Star />, title: language === 'en' ? "Excellence" : "Ubora", desc: language === 'en' ? "Striving to do our best for the glory of God in all areas." : "Kujitahidi kufanya vizuri zaidi kwa utukufu wa Mungu katika nyanja zote." },
    { icon: <Heart />, title: language === 'en' ? "Respect" : "Heshima", desc: language === 'en' ? "Valuing every person as a unique creation of God." : "Kumthamini kila mtu kama kiumbe cha kipekee cha Mungu." },
    { icon: <Anchor />, title: language === 'en' ? "Discipline" : "Nidhamu", desc: language === 'en' ? "Cultivating self-control and responsibility for growth." : "Kukuza nidhamu binafsi na uwajibikaji kwa ajili ya ukuaji." },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-blue-950 py-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-yellow-400 font-bold uppercase tracking-widest text-sm mb-4 block">
            {t('common.foundations')}
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {language === 'en' ? 'Our Faith & Values' : 'Imani na Maadili Yetu'}
          </h1>
          <p className="text-xl text-blue-100/80 max-w-3xl mx-auto leading-relaxed italic">
            {language === 'en' 
              ? '"Education is a partnership between school, family, and faith, aimed at the holistic development of every child."'
              : '"Elimu ni ushirikiano kati ya shule, familia, na imani, wenye lengo la maendeleo kamili ya kila mtoto."'}
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
      </section>

      {/* SDA Mission */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  // src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=400&auto=format&fit=crop" 
                  src="/holy.png"
                  className="rounded-2xl shadow-lg mt-8" 
                  alt="Inclusive group of children" 
                />
                <img 
                  // src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=400&auto=format&fit=crop" 
                  src="/holistic.png"
                  className="rounded-2xl shadow-lg" 
                  alt="Instructional environment" 
                />
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center overflow-hidden p-2 shadow-sm border border-gray-100">
                  <img src="/SDA-logo.png" alt="SDA Logo" className="w-full h-full object-contain" />
                </div>
                <h2 className="text-3xl font-bold text-blue-900">
                  {language === 'en' ? 'Seventh-day Adventist Foundation' : 'Msingi wa Waadventista Wasabato'}
                </h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                {language === 'en'
                  ? 'Our educational philosophy is rooted in the belief that every student is a child of God and should be treated with dignity and respect. We strive to provide an environment where faith and learning go hand in hand, nurturing the head, the heart, and the hands.'
                  : 'Falsafa yetu ya elimu imekita katika imani kwamba kila mwanafunzi ni mtoto wa Mungu na anapaswa kutendewa kwa heshima na taadhima. Tunajitahidi kutoa mazingira ambapo imani na ujifunzaji huenda sambamba.'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {coreValues.map((value, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="text-blue-900 shrink-0">{value.icon}</div>
                    <div>
                      <h4 className="font-bold text-blue-900 text-sm">{value.title}</h4>
                      <p className="text-xs text-slate-500">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">
            {language === 'en' ? 'Holistic Development' : 'Maendeleo ya Pamoja'}
          </h2>
          <p className="text-slate-600 leading-relaxed text-lg italic">
            {language === 'en'
              ? 'We believe that true education is the harmonious development of the physical, the mental, and the spiritual powers. It prepares the student for the joy of service in this world and for the higher joy of wider service in the world to come.'
              : 'Tunaamini kwamba elimu ya kweli ni maendeleo ya uwiano ya nguvu za kimwili, kiakili, na kiroho. Inamtayarisha mwanafunzi kwa furaha ya huduma katika ulimwengu huu na kwa furaha ya juu ya huduma pana zaidi katika ulimwengu ujao.'}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Faith;
