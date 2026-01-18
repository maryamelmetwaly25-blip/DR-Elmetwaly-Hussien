
import React from 'react';
import { MapPin } from 'lucide-react';

const venues = [
  'نادي أوليمبيا',
  'مكتبة مصر العامة',
  'الساحة الرياضية',
];

const Locations: React.FC = () => {
  return (
    <section id="locations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 px-4">
          <h2 className="text-4xl md:text-6xl font-black text-slate-950 mb-6">أماكن التدريب</h2>
          <div className="w-32 h-2.5 bg-emerald-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {venues.map((venue, index) => (
            <div key={index} className="group flex flex-col items-center p-12 bg-slate-50 rounded-[3rem] border-4 border-transparent hover:border-emerald-500/30 hover:bg-white hover:shadow-2xl transition-all duration-500 text-center transform hover:-translate-y-3">
              <div className="bg-slate-900 text-emerald-400 p-8 rounded-[2.5rem] mb-10 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-xl group-hover:shadow-emerald-500/20">
                <MapPin size={48} />
              </div>
              <h4 className="text-3xl font-black text-slate-950 group-hover:text-emerald-700 transition-colors">{venue}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
