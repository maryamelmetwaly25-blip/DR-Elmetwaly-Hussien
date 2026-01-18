
import React from 'react';
import { Footprints, Columns2, Activity, AlertCircle, CheckCircle2 } from 'lucide-react';

const problems = [
  {
    title: 'تسطح القدمين (الفلات فوت)',
    description: 'غياب القوس الطولي للقدم، مما يؤدي إلى اختلال توزيع ثقل الجسم، الشعور بالألم عند الوقوف الطويل، وتأثر مفاصل الركبة والحوض.',
    icon: Footprints,
    symptoms: ['آلام في كعب القدم', 'سرعة التعب عند المشي', 'ميلان القدم للداخل'],
    treatment: 'تقوية العضلات القابضة للقدم وتدريبات التوازن.'
  },
  {
    title: 'انحرافات الساقين (X & O)',
    description: 'تشوه في محاذاة الساقين سواء بالتقارب الشديد للركبتين (X) أو تباعدهما (O)، مما يؤثر على نمو العظام والمشية الطبيعية.',
    icon: Columns2,
    symptoms: ['عدم توازي الركبتين', 'تعثر أثناء الجري', 'تآكل غير متساوٍ للأحذية'],
    treatment: 'تمارين تصحيحية للميكانيكا الحركية وتقوية الأربطة.'
  },
  {
    title: 'تحدب وانحناء الظهر',
    description: 'زيادة غير طبيعية في قوس الظهر العلوي (التحدب) أو ميلان جانبي (الجنف)، ناتج عن ضعف العضلات أو وضعيات الجلوس الخاطئة.',
    icon: Activity,
    symptoms: ['بروز لوحي الكتف', 'ميلان أحد الكتفين', 'صعوبة في الوقوف مستقيماً'],
    treatment: 'تمارين استطالة الصدر وتقوية عضلات الظهر العميقة.'
  }
];

const PostureProblems: React.FC = () => {
  return (
    <section id="problems" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,100 C30,80 70,80 100,100 L100,0 L0,0 Z" fill="currentColor" className="text-emerald-500" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 px-4">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-red-50 text-red-600 rounded-full text-sm font-black mb-6 border border-red-100 animate-pulse">
            <AlertCircle size={18} />
            التشخيص المبكر ينقذ طفلك
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-950 mb-6 leading-tight">
            مشاكل القوام الشائعة
          </h2>
          <div className="w-24 h-2 bg-emerald-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto font-bold leading-relaxed">
            نعتمد في علاجنا على أسس علمية لتصحيح الانحرافات قبل أن تصبح تشوهات دائمة تؤثر على ثقة الطفل بنفسه وصحته البدنية.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {problems.map((prob, index) => (
            <div 
              key={index} 
              className="group relative bg-slate-50 p-8 md:p-12 rounded-[3.5rem] border-2 border-slate-100 hover:border-emerald-500/30 hover:bg-white hover:shadow-[0_40px_100px_-20px_rgba(16,185,129,0.15)] transition-all duration-500 flex flex-col h-full"
            >
              <div className="w-24 h-24 bg-emerald-600 text-white rounded-[2rem] flex items-center justify-center mb-10 shadow-2xl shadow-emerald-600/20 transform group-hover:-translate-y-4 group-hover:rotate-6 transition-all duration-500">
                <prob.icon size={48} />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 group-hover:text-emerald-600 transition-colors">
                {prob.title}
              </h3>
              
              <p className="text-lg md:text-xl text-slate-500 mb-8 leading-relaxed font-bold flex-grow">
                {prob.description}
              </p>

              <div className="space-y-4 mb-10">
                <h4 className="text-emerald-700 font-black text-lg">أعراض ملاحظة:</h4>
                <ul className="space-y-3">
                  {prob.symptoms.map((symptom, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-700 font-bold text-lg">
                      <CheckCircle2 size={20} className="text-emerald-500" />
                      {symptom}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-8 border-t border-slate-200">
                <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100">
                  <span className="block text-xs font-black text-emerald-600 uppercase tracking-widest mb-2">منهجية العلاج</span>
                  <p className="text-emerald-900 font-black text-lg leading-snug">
                    {prob.treatment}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <div className="inline-block p-1 bg-gradient-to-l from-emerald-500 to-slate-900 rounded-[2.5rem]">
            <div className="bg-white px-10 py-6 rounded-[2.4rem] flex flex-col md:flex-row items-center gap-6">
              <span className="text-2xl font-black text-slate-900">هل تلاحظ أحد هذه الأعراض على طفلك؟</span>
              <a 
                href="#contact" 
                className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-black text-xl hover:bg-emerald-700 transition-all transform hover:scale-105"
              >
                احجز فحصاً دقيقاً الآن
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostureProblems;
