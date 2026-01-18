
import React, { useState } from 'react';
import { Phone, MessageCircle, CheckCircle, ChevronLeft } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const phoneNumber = "01069599594";
  const whatsappLink = `https://wa.me/201069599594`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          <div className="order-2 lg:order-1 px-4">
            <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-10 pr-6 border-r-8 border-emerald-500">تواصل معي الآن</h2>
            <p className="text-2xl text-slate-600 mb-12 leading-relaxed font-bold">
              أنا متاح للإجابة على جميع استفساراتكم بخصوص القوام والجمباز. تواصلوا معنا لبدء رحلة التغيير.
            </p>
            
            <div className="space-y-8">
              <a href={`tel:${phoneNumber}`} className="flex items-center p-8 bg-white rounded-[3rem] shadow-sm hover:shadow-2xl transition-all border-2 border-slate-100 group">
                <div className="bg-slate-50 p-6 rounded-3xl ml-8 group-hover:bg-slate-950 group-hover:text-emerald-400 transition-all">
                  <Phone className="text-slate-900 group-hover:text-emerald-400" size={40} />
                </div>
                <div>
                  <span className="block text-sm text-slate-400 font-black uppercase tracking-widest mb-1">اتصال مباشر</span>
                  <span className="text-2xl md:text-3xl font-black text-slate-950 tracking-tighter">{phoneNumber}</span>
                </div>
              </a>

              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center p-8 bg-white rounded-[3rem] shadow-sm hover:shadow-2xl transition-all border-2 border-slate-100 group">
                <div className="bg-emerald-50 p-6 rounded-3xl ml-8 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <MessageCircle className="text-emerald-600 group-hover:text-white" size={40} />
                </div>
                <div>
                  <span className="block text-sm text-slate-400 font-black uppercase tracking-widest mb-1">واتساب فقط</span>
                  <span className="text-2xl md:text-3xl font-black text-slate-950">راسلني الآن</span>
                </div>
              </a>

              <div className="p-10 bg-emerald-600 text-white rounded-[3.5rem] shadow-2xl shadow-emerald-600/30 mt-12 flex items-center gap-6">
                <div className="bg-white/20 p-4 rounded-2xl">
                  <MessageCircle size={40} className="text-emerald-100" />
                </div>
                <p className="text-xl md:text-2xl font-black leading-tight">
                  ملاحظة: الرد سريع جداً عبر الواتساب على مدار اليوم.
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 px-4">
            <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl border-2 border-slate-100 relative overflow-hidden">
              {submitted ? (
                <div className="py-24 text-center space-y-10">
                  <div className="w-32 h-32 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                    <CheckCircle size={80} />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black text-slate-900">تم استلام طلبك!</h3>
                  <p className="text-xl md:text-2xl text-slate-500 font-bold leading-relaxed">سأقوم بالتواصل معك هاتفياً أو عبر واتساب في أقرب وقت.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <h3 className="text-3xl md:text-4xl font-black text-slate-950 mb-4">سجل اهتمامك</h3>
                  <div className="space-y-4">
                    <label className="block text-sm font-black text-slate-400 uppercase tracking-widest">اسم ولي الأمر</label>
                    <input required type="text" className="w-full px-8 py-6 bg-slate-50 border-4 border-slate-100 rounded-3xl focus:ring-8 focus:ring-emerald-500/10 focus:border-emerald-500 focus:outline-none transition-all font-black text-xl text-slate-900" placeholder="أدخل اسمك الكامل" />
                  </div>
                  <div className="space-y-4">
                    <label className="block text-sm font-black text-slate-400 uppercase tracking-widest">رقم الهاتف</label>
                    <input required type="tel" className="w-full px-8 py-6 bg-slate-50 border-4 border-slate-100 rounded-3xl focus:ring-8 focus:ring-emerald-500/10 focus:border-emerald-500 focus:outline-none transition-all font-black text-xl text-slate-900 text-right" placeholder="01xxxxxxxxx" />
                  </div>
                  <div className="space-y-4">
                    <label className="block text-sm font-black text-slate-400 uppercase tracking-widest">نوع الخدمة</label>
                    <select className="w-full px-8 py-6 bg-slate-50 border-4 border-slate-100 rounded-3xl focus:ring-8 focus:ring-emerald-500/10 focus:border-emerald-500 focus:outline-none transition-all font-black text-xl text-slate-900 appearance-none">
                      <option>تصحيح انحرافات القوام</option>
                      <option>تدريب جمباز أطفال</option>
                      <option>استشارة وتقييم</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full py-8 bg-emerald-600 text-white font-black text-2xl rounded-3xl hover:bg-emerald-700 transition-all shadow-2xl shadow-emerald-600/40 active:scale-95 transform hover:-translate-y-2 flex items-center justify-center gap-3">
                    إرسال الطلب الآن
                    <ChevronLeft size={32} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
