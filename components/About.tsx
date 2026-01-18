
import React from 'react';
import { Award, ShieldCheck, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-black text-slate-950 border-r-8 border-emerald-500 pr-6">
              من أنا؟
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-slate-600 leading-relaxed">
              <p className="font-black text-emerald-600 text-3xl md:text-4xl">د. المتولي حسين</p>
              <p className="font-bold text-slate-800 text-xl md:text-2xl leading-snug">
                خبير متخصص في العلوم الرياضية وتدريب الجمباز، أكرس جهودي لتقديم رعاية شاملة للأطفال والناشئين من خلال منهج تدريبي علمي وآمن.
              </p>
              <p className="font-medium">
                أمتلك سنوات من الخبرة في العمل مع الفئات العمرية الصغيرة، حيث أركز على تشخيص ومعالجة انحرافات القوام في مراحلها المبكرة لضمان نمو بدني سليم وتفادي المشاكل المزمنة مستقبلاً.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              <div className="p-8 bg-white rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col items-center text-center transition-transform hover:-translate-y-2 group">
                <Award className="text-emerald-500 mb-4 group-hover:scale-110 transition-transform" size={48} />
                <span className="font-black text-slate-900 text-lg">خبرة أكاديمية</span>
              </div>
              <div className="p-8 bg-white rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col items-center text-center transition-transform hover:-translate-y-2 group">
                <ShieldCheck className="text-emerald-500 mb-4 group-hover:scale-110 transition-transform" size={48} />
                <span className="font-black text-slate-900 text-lg">منهج آمن</span>
              </div>
              <div className="p-8 bg-white rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col items-center text-center transition-transform hover:-translate-y-2 group">
                <Users className="text-emerald-500 mb-4 group-hover:scale-110 transition-transform" size={48} />
                <span className="font-black text-slate-900 text-lg">نتائج ملموسة</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 bg-gradient-to-br from-slate-900 to-emerald-900 rounded-[4rem] p-10 md:p-16 text-white relative overflow-hidden shadow-[0_30px_60px_rgba(16,185,129,0.2)]">
            <div className="relative z-10">
              <h3 className="text-4xl font-black mb-8 italic text-emerald-400">فلسفتي</h3>
              <p className="text-2xl md:text-3xl leading-relaxed mb-10 font-bold">
                "الجمباز ليس مجرد رياضة، بل هو أداة فعالة لإعادة تشكيل القوام وبناء الشخصية. هدفي هو تحويل الضعف إلى قوة والاعوجاج إلى استقامة من خلال العلم والتدريب."
              </p>
              <div className="w-32 h-3 bg-emerald-500 rounded-full"></div>
            </div>
            {/* Athletic pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 flex flex-wrap gap-4 p-8 pointer-events-none">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="w-20 h-20 border border-white rotate-12"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
