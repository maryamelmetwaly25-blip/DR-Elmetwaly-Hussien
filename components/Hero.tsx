
import React from 'react';
import { MessageSquare, Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-12 pb-24 md:pt-24 md:pb-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 leading-[1.1]">
          <span className="bg-clip-text text-transparent bg-gradient-to-l from-slate-900 via-emerald-600 to-emerald-400">
            Dr-Elmetwaly Hussain
          </span>
        </h1>
        <p className="text-xl md:text-3xl font-black text-emerald-600 mb-8 uppercase tracking-widest px-4">
          خبير تصحيح القوام واللياقة البدنية
        </p>
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-lg md:text-2xl text-slate-500 mb-12 leading-relaxed font-medium">
            نؤمن بأن الجسم السليم هو أساس المستقبل المشرق. برامجنا المتخصصة تجمع بين العلم الرياضي والخبرة التدريبية لبناء أجسام قوية، مرنة، ومتوازنة منذ الصغر.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-5 px-6 max-w-lg mx-auto sm:max-w-none">
          <a
            href="#consultations"
            className="inline-flex items-center justify-center px-8 py-5 md:px-12 md:py-6 text-xl font-black rounded-3xl text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-2xl shadow-emerald-600/40 transform hover:-translate-y-1 active:scale-95"
          >
            <Calendar className="ml-3" size={24} />
            احجز استشارة الآن
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-5 md:px-12 md:py-6 border-4 border-slate-900 text-xl font-black rounded-3xl text-slate-900 bg-transparent hover:bg-slate-900 hover:text-white transition-all transform hover:-translate-y-1 active:scale-95"
          >
            <MessageSquare className="ml-3" size={24} />
            تواصل معي
          </a>
        </div>
      </div>
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 opacity-10 pointer-events-none hidden md:block">
        <div className="w-[800px] h-[800px] rounded-full border-[80px] border-emerald-500"></div>
      </div>
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 opacity-10 pointer-events-none hidden md:block">
        <div className="w-[600px] h-[600px] rounded-full border-[60px] border-slate-900"></div>
      </div>
    </section>
  );
};

export default Hero;
