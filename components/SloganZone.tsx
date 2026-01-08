
import React, { useState } from 'react';

interface SloganZoneProps {
  dark?: boolean;
}

const SloganZone: React.FC<SloganZoneProps> = ({ dark = false }) => {
  const [showScripture, setShowScripture] = useState(false);

  return (
    <section className={`py-20 text-center ${dark ? 'bg-blue-950 text-white' : 'bg-gray-50 text-blue-900'}`}>
      <div className="container mx-auto px-4 max-w-4xl">
        <span className="inline-block px-4 py-1 rounded-full bg-yellow-500/20 text-yellow-600 font-bold text-xs uppercase tracking-widest mb-6">
          Nseka Memorial Schools Branding
        </span>
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          [School Slogan Goes Here]
        </h2>
        <p className="text-xl md:text-2xl opacity-80 max-w-2xl mx-auto mb-10 leading-relaxed">
          [Nseka Memorial Schools – Official Tagline Placeholder]
        </p>
        
        <div className="flex flex-col items-center gap-4">
          <button 
            onClick={() => setShowScripture(!showScripture)}
            className="text-sm font-semibold underline underline-offset-4 hover:text-yellow-500 transition-colors"
          >
            {showScripture ? 'Hide Value Statement' : 'Show Value Statement / Scripture'}
          </button>
          
          {showScripture && (
            <div className="mt-4 p-6 border border-dashed border-gray-400 rounded-xl animate-in fade-in zoom-in duration-300">
              <p className="italic text-lg">
                "Train up a child in the way he should go: and when he is old, he will not depart from it." — Proverbs 22:6
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SloganZone;
