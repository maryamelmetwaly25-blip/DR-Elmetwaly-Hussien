
import React from 'react';
import { CheckCircle2, Search, LineChart, FileText } from 'lucide-react';

const steps = [
  { title: 'تقييم مبدئي', desc: 'معاينة القوام وتحديد نقاط الضعف والقوة بدقة.', icon: Search },
  { title: 'تحليل علمي', desc: 'دراسة التاريخ الصحي والنشاط الحركي للطفل.', icon: LineChart },
  { title: 'خطة مخصصة', desc: 'تصميم برنامج تدريبي أو علاجي يناسب الحالة الفردية.', icon: FileText },
  { title: 'متابعة دورية', desc: 'تقارير دورية لقياس مدى تحسن القوام والأداء الرياضي.', icon: CheckCircle2 },
];

const Consultations: React.FC = () => {
  return (
    <section id="consultations" className="py-24 bg-slate-950 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 px-4">
          <h2 className="text-4xl md:text-6xl font-black mb-6">نظام الاستشارات والمتابعة</h2>
          <div className="w-32 h-2.5 bg-emerald-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-bold leading-relaxed">
            نهجنا يعتمد على الدقة العلمية والمتابعة المستمرة لضمان أفضل النتائج لأطفالكم.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="flex flex-col items-center text-center">
                <div className="w-28 h-28 bg-slate-900 rounded-[2.5rem] flex items-center justify-center mb-10 group-hover:bg-emerald-500 transition-all duration-500 border-4 border-slate-800 group-hover:border-emerald-300 transform group-hover:-translate-y-3 group-hover:rotate-6">
                  <step.icon size={48} className="text-emerald-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-5 tracking-tight">{step.title}</h3>
                <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-bold">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 md:p-20 bg-gradient-to-br from-emerald-950/30 to-slate-900/30 rounded-[4rem] border-4 border-emerald-500/10 backdrop-blur-3xl text-center">
          <div className="max-w-4xl mx-auto space-y-10">
            <h3 className="text-3xl md:text-5xl font-black text-emerald-400 leading-tight">لماذا الجمباز لتصحيح القوام؟</h3>
            <p className="text-xl md:text-3xl text-slate-200 leading-relaxed font-bold">
              رياضة الجمباز تعمل بشكل شمولي على تقوية العضلات العميقة التي تسند العمود الفقري، وتزيد من وعي الطفل بجسمه وتوازنه، مما يجعلها الأداة العلاجية والوقائية الأمثل لعلاج انحرافات القوام قبل تفاقمها.
            </p>
          </div>
        </div>
      </div>
      
      {/* Dynamic Background Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-emerald-500/10 blur-[180px] pointer-events-none"></div>
    </section>
  );
};

export default Consultations;
