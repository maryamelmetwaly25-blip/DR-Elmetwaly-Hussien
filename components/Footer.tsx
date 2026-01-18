
import React from 'react';
import { MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white py-24 border-t-4 border-emerald-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-16">
          <span className="text-4xl md:text-6xl font-black tracking-tighter inline-flex items-center gap-2" style={{ direction: 'ltr' }}>
            <span className="text-emerald-500">DR</span>-ELMETWALY
          </span>
          <p className="mt-8 text-slate-400 max-w-2xl mx-auto text-xl md:text-2xl font-bold leading-relaxed">
            منصة احترافية متخصصة في بناء القوام السليم والتدريب الرياضي للناشئين تحت إشراف علمي متخصص.
          </p>
        </div>

        <div className="flex justify-center mb-20">
          <a 
            href="https://wa.me/201069599594" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-6 bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-6 rounded-3xl font-black text-2xl transition-all shadow-2xl shadow-emerald-600/30 transform hover:-translate-y-2"
          >
            <MessageCircle size={36} />
            تحدث معي عبر واتساب
          </a>
        </div>
        
        <div className="border-t border-slate-900 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 text-lg font-black">
            © {currentYear} جميع الحقوق محفوظة لـ د. المتولي حسين.
          </p>
          <div className="text-sm text-slate-600 font-black uppercase tracking-[0.2em]">
            بنيت لتقديم أفضل رعاية رياضية لأطفالكم
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
