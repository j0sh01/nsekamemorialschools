
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'sw';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.faith': 'Faith',
    'nav.nursery': 'Nursery',
    'nav.primary': 'Primary',
    'nav.admissions': 'Admissions',
    'nav.academics': 'Academics',
    'nav.life': 'Life',
    'nav.gallery': 'Gallery',
    'nav.news': 'News',
    'nav.contact': 'Contact',
    'nav.adm2026': 'Admissions 2026 Open',
    
    // Hero
    'hero.title': 'Nurturing Young Minds for Academic & Spiritual Excellence',
    'hero.sub': 'An English-Medium Nursery & Primary School Guided by SDA Christian Values',
    'hero.cta.adm': 'Admissions Open for 2026',
    'hero.cta.visit': 'Visit Our Campus',
    
    // Home Specifics
    'home.balanced.title': 'Balanced Growth: Spirit, Mind, and Body',
    'home.balanced.desc': 'At Nseka Memorial Schools, we believe education is more than just grades. We integrate SDA norms into every lesson, fostering a safe second home where children grow to excel academically, spiritually, and socially.',
    'home.why.title': 'Why Choose Nseka Memorial Schools?',
    'home.why.desc': 'We provide a safe second home where academic rigor meets Christ-centered character building, ensuring your child is prepared for a life of purpose.',
    'home.nursery.desc': 'A play-based foundation integrated with early spiritual values of kindness, sharing, and respect.',
    'home.primary.desc': 'Building a strong academic foundation with English-medium excellence and faith-based discipline.',
    'home.nursery.title': 'Nursery School',
    'home.primary.title': 'Primary School',

    // Common
    'common.readMore': 'Read More',
    'common.explore': 'Explore',
    'common.foundations': 'Foundations',
    'common.mission': 'Our Mission',
    'common.vision': 'Our Vision',
    'common.location': 'Our Location',
    'common.phone': 'Contact Lines',
    'common.hours': 'Operating Hours',

    // Roles
    'role.director': 'Director',
    'role.manager': 'School Manager',
    'office': 'Admission Office',

    // Academics Page
    'academics.title': 'Academics & Curriculum',
    'academics.sub': 'Providing a rigorous academic experience integrated with creative and spiritual development.',
    'academics.highlights.title': 'Curriculum Highlights',
    'academics.highlights.desc': 'Nseka Memorial Schools offers a balanced curriculum that aligns with the Tanzanian Ministry of Education (NECTA) standards while incorporating global best practices in English-medium instruction.',
    'academics.co.title': 'Co-Curricular & Physical Growth',
    'academics.co.sub': 'A healthy mind resides in a healthy body.',
    'academics.stem.title': 'STEM Focus',
    'academics.stem.desc': 'Developing logical reasoning from an early age.',
    'academics.arts.title': 'Creative Arts',
    'academics.arts.desc': 'Nurturing artistic talents and musical skills.',
    'academics.ling.title': 'Linguistics',
    'academics.ling.desc': 'Strong foundations in English and Swahili.',
    'academics.bible.title': 'Biblical Studies',
    'academics.bible.desc': 'Weekly religious instruction based on SDA norms.',

    // Facilities Page
    'facilities.title': 'Our Facilities',
    'facilities.sub': 'A modern, safe, and nurturing environment built for excellence.',
    'facilities.class.title': 'Modern Classrooms',
    'facilities.class.desc': 'Bright, airy, and equipped with modern learning resources to facilitate focused learning and creativity.',
    'facilities.play.title': 'Safe Playgrounds',
    'facilities.play.desc': 'Age-appropriate play areas with safety flooring and modern equipment for healthy physical activity.',
    'facilities.lib.title': 'Learning Library',
    'facilities.lib.desc': 'A well-stocked collection of English and Swahili books to foster a lifelong love for reading.',
    'facilities.clean.title': 'Clean & Healthy Environment',
    'facilities.clean.desc': 'We maintain high hygiene standards across the campus, with modern washrooms and waste management.',

    // Nursery Page
    'nursery.tag': 'Ages 3-5 Years',
    'nursery.title': 'Nursery School',
    'nursery.sub': 'A safe, colorful second home where your child begins their journey of academic and spiritual discovery.',
    'nursery.sec1.title': 'Where Joy Meets Growth',
    'nursery.sec1.desc': 'Our nursery program is designed to nurture the heart as much as the mind. Through a play-based curriculum, children explore the world around them while learning early spiritual values of kindness, sharing, and respect. We provide a safe environment where every child feels secure, loved, and encouraged to grow.',
    'nursery.card1.title': 'Safe & Loving Care',
    'nursery.card1.desc': 'Continuous supervision in a child-proof, nurturing environment.',
    'nursery.card2.title': 'Emotional Growth',
    'nursery.card2.desc': 'Dedicated teachers who focus on building confidence and social skills.',
    'nursery.card3.title': 'Creative Play',
    'nursery.card3.desc': 'Sparking curiosity through art, music, and interactive storytelling.',
    'nursery.card4.title': 'SDA Values',
    'nursery.card4.desc': 'Instilling early spiritual foundations through simple worship and moral stories.',
    'nursery.phi.title': 'Our Early Childhood Philosophy',
    'nursery.phi.desc': 'We follow a holistic approach that respects the natural pace of discovery. By integrating Christ-centered values into games and songs, we build a foundation of moral integrity from the very first step.',
    'nursery.img.alt': 'Young children engaging in creative play and discovery',

    // Primary Page
    'primary.tag': 'Standard 1 - 7',
    'primary.title': 'Primary School',
    'primary.sub': 'Equipping students with academic excellence, English-medium proficiency, and faith-based discipline.',
    'primary.sec1.title': 'Academic Rigor & Moral Discipline',
    'primary.sec1.desc': 'Our primary school offers a strong academic foundation aligned with the NECTA curriculum, delivered through rigorous English-medium instruction. We challenge our students to excel intellectually while guiding their character development through the SDA principles of respect, service, and integrity.',
    'primary.ready.title': 'Prepared for the Future',
    'primary.ready.desc': 'Our graduates are not just ready for secondary school; they are prepared for life as compassionate, principled, and intellectually capable individuals.',
    'primary.img.alt': 'Primary students focused on their academic studies',

    // Admissions Page
    'adm.hero.title': 'Admissions 2026',
    'adm.hero.sub': 'Start your child\'s journey towards academic and spiritual excellence at Nseka Memorial Schools.',
    'adm.steps.title': 'Admission Procedure',
    'adm.age.title': 'Age Requirements',
    'adm.docs.title': 'Required Documents',
    'adm.contact.title': 'Contact Admission Office',
    'adm.tour.btn': 'Book a Campus Tour',

    // School Life
    'life.title': 'School Life',
    'life.sub': 'Explore the daily journey of discovery, faith, and friendship at Nseka.',
    'life.day.title': 'A Typical Day at Nseka',
    'life.discipline.title': 'Student Discipline & Care',
    'life.discipline.desc': 'We believe discipline is a form of love. Our teachers guide students using biblical principles, teaching them to make responsible choices.',

    // Gallery
    'gallery.title': 'School Gallery',
    'gallery.sub': 'Capturing the joy and growth in every corner of our campus.',

    // News
    'news.title': 'News & Announcements',
    'news.sub': 'Stay updated with the latest happenings at Nseka Memorial Schools.',
    'news.archives': 'View Archives',

    // Contact
    'contact.title': 'Connect With Us',
    'contact.sub': 'Have questions? We\'re here to help. Reach out to the Nseka Memorial Schools family.',
    'contact.form.title': 'Send an Inquiry',
    'contact.form.send': 'Send Message'
  },
  sw: {
    // Nav
    'nav.home': 'Nyumbani',
    'nav.about': 'Kuhusu Sisi',
    'nav.faith': 'Imani Yetu',
    'nav.nursery': 'Chekechea',
    'nav.primary': 'Shule ya Msingi',
    'nav.admissions': 'Udahili',
    'nav.academics': 'Taaluma',
    'nav.life': 'Maisha',
    'nav.gallery': 'Picha',
    'nav.news': 'Habari',
    'nav.contact': 'Mawasiliano',
    'nav.adm2026': 'Udahili 2026 Umefunguliwa',
    
    // Hero
    'hero.title': 'Kulea Akili Changa kwa Ubora wa Kitaaluma na Kiroho',
    'hero.sub': 'Shule ya Chekechea na Msingi inayofundisha kwa Kiingereza ikiongozwa na Maadili ya Kikristo ya SDA',
    'hero.cta.adm': 'Udahili 2026 Umefunguliwa',
    'hero.cta.visit': 'Tembelea Shule Yetu',
    
    // Home Specifics
    'home.balanced.title': 'Ukuaji Uwiano: Roho, Akili, na Mwili',
    'home.balanced.desc': 'Katika Shule za Ukumbusho za Nseka, tunaamini elimu ni zaidi ya alama tu. Tunajumuisha misingi ya SDA katika kila somo, tukitengeneza nyumba salama ya pili ambapo watoto hukua ili kufanikiwa kitaaluma, kiroho na kijamii.',
    'home.why.title': 'Kwa Nini Uchague Shule za Ukumbusho za Nseka?',
    'home.why.desc': 'Tunatoa nyumba salama ya pili ambapo juhudi za kitaaluma hukutana na ujengaji wa tabia unaomlenga Kristo, tukihakikisha mtoto wako ameandaliwa kwa maisha yenye malengo.',
    'home.nursery.desc': 'Msingi wa kujifunza kupitia michezo uliounganishwa na maadili ya mapema ya kiroho kama wema, kushirikiana, na heshima.',
    'home.primary.desc': 'Kujenga msingi imara wa kitaaluma kwa ubora wa lugha ya Kiingereza na nidhamu yenye misingi ya imani.',
    'home.nursery.title': 'Shule ya Chekechea',
    'home.primary.title': 'Shule ya Msingi',

    // Common
    'common.readMore': 'Soma Zaidi',
    'common.explore': 'Gundua',
    'common.foundations': 'Misingi',
    'common.mission': 'Dhamira Yetu',
    'common.vision': 'Maono Yetu',
    'common.location': 'Mahali Tulipo',
    'common.phone': 'Namba za Simu',
    'common.hours': 'Muda wa Kazi',

    // Roles
    'role.director': 'Mkurugenzi',
    'role.manager': 'Meneja wa Shule',
    'office': 'Ofisi ya Udahili',

    // Academics Page
    'academics.title': 'Taaluma na Mtaala',
    'academics.sub': 'Kutoa uzoefu makini wa kitaaluma unaojumuisha maendeleo ya ubunifu na kiroho.',
    'academics.highlights.title': 'Vivutio vya Mtaala',
    'academics.highlights.desc': 'Shule za Ukumbusho za Nseka zinatoa mtaala uliowiano ambao unaendana na viwango vya Wizara ya Elimu ya Tanzania (NECTA) huku ikijumuisha mbinu bora za kimataifa katika mafunzo ya lugha ya Kiingereza.',
    'academics.co.title': 'Shughuli za Ziada na Ukuaji wa Kimwili',
    'academics.co.sub': 'Akili yenye afya hukaa katika mwili wenye afya.',
    'academics.stem.title': 'Mkazo wa STEM',
    'academics.stem.desc': 'Kukuza fikra za kimantiki tangu umri mdogo.',
    'academics.arts.title': 'Sanaa za Ubunifu',
    'academics.arts.desc': 'Kulea vipaji vya kisanaa na ujuzi wa muziki.',
    'academics.ling.title': 'Isimu',
    'academics.ling.desc': 'Misingi imara katika Kiingereza na Kiswahili.',
    'academics.bible.title': 'Masomo ya Biblia',
    'academics.bible.desc': 'Mafunzo ya kidini ya kila wiki kulingana na misingi ya SDA.',

    // Facilities Page
    'facilities.title': 'Vifaa na Miundombinu Yetu',
    'facilities.sub': 'Mazingira ya kisasa, salama, na yanayolea yaliyojengwa kwa ajili ya ubora.',
    'facilities.class.title': 'Madarasa ya Kisasa',
    'facilities.class.desc': 'Yenye mwanga, hewa safi, na vifaa vya kisasa vya kujifunzia ili kuwezesha ujifunzaji makini na ubunifu.',
    'facilities.play.title': 'Viwanja Salama vya Michezo',
    'facilities.play.desc': 'Maeneo ya michezo yanayolingana na umri yaliyo na sakafu salama na vifaa vya kisasa kwa ajili ya shughuli za kimwili zenye afya.',
    'facilities.lib.title': 'Maktaba ya Kujifunzia',
    'facilities.lib.desc': 'Mkusanyiko mzuri wa vitabu vya Kiingereza na Kiswahili ili kukuza upendo wa kusoma maisha yote.',
    'facilities.clean.title': 'Mazingira Safi na ya Afya',
    'facilities.clean.desc': 'Tunadumisha viwango vya juu vya usafi katika kampasi nzima, tukiwa na vyoo vya kisasa na usimamizi wa taka.',

    // Nursery Page
    'nursery.tag': 'Umri wa Miaka 3-5',
    'nursery.title': 'Shule ya Chekechea',
    'nursery.sub': 'Nyumba ya pili salama na yenye rangi ambapo mtoto wako anaanza safari yake ya ugunduzi wa kitaaluma na kiroho.',
    'nursery.sec1.title': 'Pale Furaha Inapokutana na Ukuaji',
    'nursery.sec1.desc': 'Programu yetu ya chekechea imeundwa kulea moyo kama vile akili. Kupitia mtaala wa kucheza, watoto hugundua ulimwengu huku wakijifunza maadili ya kiroho ya mapema ya wema, kushirikiana, na heshima. Tunatoa mazingira salama ambapo kila mtoto anahisi salama na anapendwa.',
    'nursery.card1.title': 'Matunzo Salama & ya Upendo',
    'nursery.card1.desc': 'Usimamizi wa mara kwa mara katika mazingira salama na yanayolea watoto.',
    'nursery.card2.title': 'Ukuaji wa Kihisia',
    'nursery.card2.desc': 'Walimu waliojitolea wanaozingatia kujenga kujiamini na ujuzi wa kijamii.',
    'nursery.card3.title': 'Michezo ya Ubunifu',
    'nursery.card3.desc': 'Kuchochea udadisi kupitia sanaa, muziki, na hadithi shirikishi.',
    'nursery.card4.title': 'Maadili ya SDA',
    'nursery.card4.desc': 'Kuweka misingi ya mapema ya kiroho kupitia ibada rahisi na hadithi za maadili.',
    'nursery.phi.title': 'Falsafa Yetu ya Elimu ya Awali',
    'nursery.phi.desc': 'Tunafuata mfumo kamili unaoheshimu kasi ya asili ya ugunduzi ya mtoto. Kwa kujumuisha maadili yanayomlenga Kristo katika michezo na nyimbo, tunajenga msingi wa uadilifu tangu hatua ya kwanza.',
    'nursery.img.alt': 'Watoto wadogo wakishiriki katika michezo ya ubunifu na ugunduzi',

    // Primary Page
    'primary.tag': 'Darasa la 1 - 7',
    'primary.title': 'Shule ya Msingi',
    'primary.sub': 'Kuwaandaa wanafunzi na ubora wa kitaaluma, ufasaha wa Kiingereza, na nidhamu ya kiroho.',
    'primary.sec1.title': 'Juhudi za Kitaaluma & Nidhamu ya Maadili',
    'primary.sec1.desc': 'Shule yetu ya msingi inatoa msingi imara wa kitaaluma unaoendana na mtaala wa NECTA, unaotolewa kupitia mafunzo makini ya Kiingereza. Tunawapa changamoto wanafunzi wetu kufanya vizuri kiakili huku tukiongoza ukuaji wa tabia zao kupitia misingi ya SDA ya heshima, huduma, na uadilifu.',
    'primary.ready.title': 'Tayari kwa Maisha ya Baadaye',
    'primary.ready.desc': 'Wahitimu wetu hawako tayari tu kwa shule ya sekondari; wameandaliwa kwa ajili ya maisha kama watu wenye huruma, kanuni, na uwezo wa kiakili.',
    'primary.img.alt': 'Wanafunzi wa msingi wakizingatia masomo yao ya kitaaluma',

    // Admissions Page
    'adm.hero.title': 'Udahili 2026',
    'adm.hero.sub': 'Anza safari ya mtoto wako kuelekea ubora wa kitaaluma na kiroho katika Shule za Ukumbusho za Nseka.',
    'adm.steps.title': 'Utaratibu wa Udahili',
    'adm.age.title': 'Mahitaji ya Umri',
    'adm.docs.title': 'Nyaraka Zinazohitajika',
    'adm.contact.title': 'Wasiliana na Ofisi ya Udahili',
    'adm.tour.btn': 'Weka Miadi ya Kutembelea Shule',

    // School Life
    'life.title': 'Maisha ya Shule',
    'life.sub': 'Gundua safari ya kila siku ya ugunduzi, imani, na urafiki hapa Nseka.',
    'life.day.title': 'Siku ya Kawaida Nseka',
    'life.discipline.title': 'Nidhamu na Matunzo ya Mwanafunzi',
    'life.discipline.desc': 'Tunaamini nidhamu ni namna ya upendo. Walimu wetu wanawaongoza wanafunzi kwa kutumia misingi ya kibiblia, wakiwafundisha kufanya maamuzi ya kuwajibika.',

    // Gallery
    'gallery.title': 'Picha za Shule',
    'gallery.sub': 'Tukinasisha furaha na ukuaji katika kila kona ya kampasi yetu.',

    // News
    'news.title': 'Habari na Matangazo',
    'news.sub': 'Pata habari za hivi punde na matukio yanayotokea katika Shule za Ukumbusho za Nseka.',
    'news.archives': 'Angalia Kumbukumbu',

    // Contact
    'contact.title': 'Wasiliana Nasi',
    'contact.sub': 'Je, una maswali? Tuko hapa kukusaidia. Wasiliana na familia ya Shule za Ukumbusho za Nseka.',
    'contact.form.title': 'Tuma Swali',
    'contact.form.send': 'Tuma Ujumbe'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('school_lang');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('school_lang', language);
  }, [language]);

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useTranslation must be used within LanguageProvider');
  return context;
};
