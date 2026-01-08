
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Heart, Shield, Award, Users, Cross, ArrowRight, CheckCircle2 } from 'lucide-react';
import SloganZone from '../components/SloganZone';
import { useTranslation } from '../components/LanguageContext';

const Home: React.FC = () => {
  const { t, language } = useTranslation();

  const features = [
    { icon: <Users />, title: language === 'en' ? "Qualified & Caring Teachers" : "Walimu Wenye Sifa na Wanaojali", desc: language === 'en' ? "Expert educators dedicated to holistic child development." : "Wataalamu wa elimu waliojitolea kwa maendeleo kamili ya mtoto." },
    { icon: <Shield />, title: language === 'en' ? "Safe Learning Environment" : "Mazingira Salama ya Kujifunzia", desc: language === 'en' ? "A secure, nurturing campus where your child feels at home." : "Kampasi salama na inayolea ambapo mtoto wako anajihisi yuko nyumbani." },
    { icon: <Award />, title: language === 'en' ? "Moral & Character Development" : "Maendeleo ya Maadili na Tabia", desc: language === 'en' ? "Focus on discipline, respect, service, and integrity." : "Mkazo katika nidhamu, heshima, huduma, na uadilifu." },
    { icon: <BookOpen />, title: language === 'en' ? "English Medium Excellence" : "Ubora wa Kufundisha kwa Kiingereza", desc: language === 'en' ? "Strong focus on English proficiency and Tanzanian curriculum." : "Mkazo mkubwa kwenye ufasaha wa Kiingereza na mtaala wa Tanzania." },
    { icon: <Cross />, title: language === 'en' ? "SDA Christian Values" : "Maadili ya Kikristo ya SDA", desc: language === 'en' ? "Integration of faith in daily routines and learning." : "Ujumuishaji wa imani katika taratibu za kila siku na ujifunzaji." },
    { icon: <Heart />, title: language === 'en' ? "Child-Centered Learning" : "Kujifunza Kunakomlenga Mtoto", desc: language === 'en' ? "Personalized attention ensuring every child thrives." : "Uangalifu wa kibinafsi unaohakikisha kila mtoto anastawi." },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            // src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1920&auto=format&fit=crop" 
            src="/classroom.png"
            alt="Children in a bright classroom" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-in fade-in slide-in-from-left-8 duration-1000">
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {t('hero.title').split(' ').map((word, i) => 
                word === 'Academic' || word === 'Spiritual' || word === 'Kitaaluma' || word === 'Kiroho' 
                ? <span key={i} className="text-yellow-400">{word} </span> 
                : word + ' '
              )}
            </h1>
            <p className="text-white/90 text-xl md:text-2xl mb-10 font-light leading-relaxed">
              {t('hero.sub')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/admissions" 
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl"
              >
                {t('hero.cta.adm')}
              </Link>
              <Link 
                to="/contact" 
                className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 transition-all shadow-xl"
              >
                {t('hero.cta.visit')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Redesigned Balanced Growth Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="/student-praying.png" 
                  alt="Holistic Growth" 
                  className="w-full h-full object-cover aspect-[4/5]"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply opacity-20 animate-pulse"></div>
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-blue-600 rounded-full mix-blend-multiply opacity-10"></div>
              
              <div className="absolute top-1/2 -right-8 z-20 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 hidden md:block max-w-[200px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="font-bold text-sm text-blue-900">SDA Certified</span>
                </div>
                <p className="text-[10px] text-slate-500 italic">Faith integrated learning for every child.</p>
              </div>
            </div>

            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold tracking-wide">
                <Cross size={16} />
                {language === 'en' ? 'SDA Values' : 'Maadili ya SDA'}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
                {t('home.balanced.title')}
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                {t('home.balanced.desc')}
              </p>
              
              <div className="space-y-6 pt-4">
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 bg-blue-900 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <BookOpen size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-blue-900 mb-1">{language === 'en' ? 'Academic Excellence' : 'Ubora wa Kitaaluma'}</h4>
                    <p className="text-slate-500">{language === 'en' ? 'Tanzanian curriculum delivered in English medium.' : 'Mtaala wa Tanzania unaotolewa kwa lugha ya Kiingereza.'}</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 bg-yellow-500 text-blue-900 rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <Heart size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-blue-900 mb-1">{language === 'en' ? 'Spiritual Foundation' : 'Msingi wa Kiroho'}</h4>
                    <p className="text-slate-500">{language === 'en' ? 'Guided by Christ-centered Adventist norms.' : 'Inayoongozwa na maadili ya Kiadventista yanayomlenga Kristo.'}</p>
                  </div>
                </div>
              </div>

              <Link to="/about" className="inline-flex items-center gap-2 text-blue-900 font-bold group border-b-2 border-yellow-500 pb-1 hover:text-yellow-600 transition-colors">
                {language === 'en' ? 'Learn more about our approach' : 'Jifunze zaidi kuhusu mfumo wetu'}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Redesigned Why Choose Us Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
          <Cross size={400} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">{t('home.why.title')}</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-slate-500 italic">{t('home.why.desc')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item, idx) => (
              <div key={idx} className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all group duration-500">
                <div className="w-20 h-20 bg-blue-50 text-blue-900 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-blue-900 group-hover:text-white transition-all duration-500 shadow-inner">
                  {React.cloneElement(item.icon as React.ReactElement<any>, { size: 36 })}
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Redesigned School Levels Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Nursery */}
            <div className="group relative overflow-hidden rounded-[3rem] shadow-2xl aspect-[4/5] md:aspect-auto md:h-[650px]">
              <img 
                src="/nursery-image.png" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                alt="Young Nursery Scholar"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/40 to-transparent p-10 md:p-16 flex flex-col justify-end">
                <div className="mb-4 inline-block px-4 py-1 bg-yellow-500 text-blue-900 font-black text-xs uppercase tracking-tighter rounded-md">
                  Ages 3 - 5
                </div>
                <h3 className="text-white text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">{t('home.nursery.title')}</h3>
                <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed font-light">
                  {t('home.nursery.desc')}
                </p>
                <Link to="/nursery" className="inline-flex items-center gap-4 bg-white text-blue-950 px-8 py-4 rounded-full font-black uppercase text-sm tracking-widest hover:bg-yellow-500 hover:text-white transition-all shadow-xl group-btn self-start">
                  {language === 'en' ? 'Explore Nursery' : 'Gundua Chekechea'}
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Primary */}
            <div className="group relative overflow-hidden rounded-[3rem] shadow-2xl aspect-[4/5] md:aspect-auto md:h-[650px]">
              <img 
                src="/primary-image.png" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                alt="Primary Student Scholar"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-950/90 via-yellow-950/40 to-transparent p-10 md:p-16 flex flex-col justify-end">
                <div className="mb-4 inline-block px-4 py-1 bg-blue-600 text-white font-black text-xs uppercase tracking-tighter rounded-md">
                  Ages 6 - 12
                </div>
                <h3 className="text-white text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">{t('home.primary.title')}</h3>
                <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed font-light">
                  {t('home.primary.desc')}
                </p>
                <Link to="/primary" className="inline-flex items-center gap-4 bg-white text-yellow-900 px-8 py-4 rounded-full font-black uppercase text-sm tracking-widest hover:bg-blue-900 hover:text-white transition-all shadow-xl group-btn self-start">
                  {language === 'en' ? 'Explore Primary' : 'Gundua Shule ya Msingi'}
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slogan Placeholder Zone */}
      <SloganZone />

      {/* Admissions Banner */}
      <section className="bg-blue-900 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">{t('nav.adm2026')}</h2>
          <p className="text-xl opacity-90 mb-10">
            {language === 'en' ? 'Building Faith, Knowledge & Character. Secure your child\'s spot today.' : 'Kujenga Imani, Maarifa na Tabia. Linda nafasi ya mtoto wako leo.'}
          </p>
          <Link to="/admissions" className="inline-block bg-yellow-500 text-blue-900 px-12 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-colors shadow-2xl">
            {language === 'en' ? 'Start Admission Process' : 'Anza Mchakato wa Udahili'}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
