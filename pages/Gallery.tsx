
import React, { useState } from 'react';
import { useTranslation } from '../components/LanguageContext';

const Gallery: React.FC = () => {
  const { t, language } = useTranslation();
  const [filter, setFilter] = useState('All');
  
  const categoriesEN = ['All', 'Learning', 'Worship & Values', 'Playtime', 'Facilities'];
  const categoriesSW = ['Zote', 'Kujifunza', 'Ibada na Maadili', 'Muda wa Michezo', 'Vifaa'];
  
  const categories = language === 'en' ? categoriesEN : categoriesSW;
  
  const images = [
    { cat: language === 'en' ? 'Learning' : 'Kujifunza', src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop' },
    { cat: language === 'en' ? 'Learning' : 'Kujifunza', src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop' },
    { cat: language === 'en' ? 'Playtime' : 'Muda wa Michezo', src: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop' },
    { cat: language === 'en' ? 'Worship & Values' : 'Ibada na Maadili', src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop' },
    { cat: language === 'en' ? 'Facilities' : 'Vifaa', src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop' },
    { cat: language === 'en' ? 'Learning' : 'Kujifunza', src: 'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?q=80&w=800&auto=format&fit=crop' },
  ];

  const filteredImages = filter === 'All' || filter === 'Zote' ? images : images.filter(img => img.cat === filter);

  return (
    <div className="pb-20">
      <section className="bg-blue-950 py-24 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">{t('gallery.title')}</h1>
          <p className="text-xl text-blue-100 opacity-80 max-w-2xl mx-auto">{t('gallery.sub')}</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-8 py-3 rounded-full font-bold transition-all ${
                filter === c ? 'bg-blue-900 text-white shadow-lg' : 'bg-white text-slate-500 hover:bg-slate-50 border border-gray-100'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((img, i) => (
            <div key={i} className="group relative overflow-hidden rounded-[2rem] aspect-[4/3] shadow-lg animate-in fade-in zoom-in duration-500">
              <img src={img.src} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={img.cat} />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <span className="text-white font-bold border-2 border-white px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                   {img.cat}
                 </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
