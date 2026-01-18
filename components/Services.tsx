
import React from 'react';
import { ClipboardCheck, Activity, Target, Zap, Clock } from 'lucide-react';

const services = [
  {
    title: 'تقييم شامل للقوام',
    description: 'فحص دقيق لتشخيص أي انحرافات (مثل تقوس الظهر أو جنف العمود الفقري) ووضع خطة علاجية مخصصة لكل طفل.',
    icon: ClipboardCheck,
  },
  {
    title: 'برامج تصحيح القوام',
    description: 'تمارين تصحيحية وعلاجية تهدف إلى إعادة محاذاة الجسم وتحسين شكل القوام بشكل طبيعي وآمن.',
    icon: Target,
  },
  {
    title: 'تدريب جمباز (أساسي)',
    description: 'تعليم أساسيات الجمباز للمبتدئين، مع التركيز على المهارات الحركية الأساسية وبناء الثقة بالنفس.',
    icon: Activity,
  },
  {
    title: 'تدريب جمباز (متقدم)',
    description: 'برامج مكثفة للناشئين الراغبين في الاحتراف، تشمل مهارات معقدة وزيادة القوة العضلية والتحمل.',
    icon: Zap,
  },
  {
    title: 'تحسين المرونة والتوازن',
    description: 'تمارين متخصصة لزيادة المدى الحركي للمفاصل وتحسين القدرة على التحكم في توازن الجسم.',
    icon: Activity,
  },
  {
    title: 'جلسات متابعة فردية',
    description: 'إشراف شخصي مباشر لضمان تنفيذ التمارين بالشكل الصحيح ومراقبة التطور دورياً.',
    icon: Clock,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">خدماتنا المتخصصة</h2>
          <div className="w-32 h-2.5 bg-emerald-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto font-bold leading-relaxed">
            نقدم حزمة متكاملة من الخدمات المصممة خصيصاً لبناء جيل سليم بدنياً ورياضياً.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-10 bg-slate-50 border-4 border-transparent rounded-[3rem] hover:bg-white hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-500/20 transition-all duration-500 group"
            >
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-10 shadow-lg group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6">
                <service.icon size={40} className="text-emerald-500 group-hover:text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 group-hover:text-emerald-600 transition-colors">{service.title}</h3>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-bold group-hover:text-slate-800 transition-colors">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
