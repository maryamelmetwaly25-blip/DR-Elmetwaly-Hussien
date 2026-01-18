
import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, User, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'أهلاً بك! أنا المستشار الذكي الخاص بـ د. المتولي حسين. يمكنني مساعدتك في استفسارات الفلات فوت، انحرافات الساقين، وتصحيح القوام. كيف يمكنني إفادتك اليوم؟' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `أنت المستشار الذكي الخاص بالدكتور المتولي حسين. الدكتور متخصص في:
          1. تصحيح انحرافات القوام (الفلات فوت، انحرافات الساقين X و O، وتحدب/جنف الظهر).
          2. تدريب الجمباز للأطفال والناشئين كأداة علاجية ووقائية.
          
          أجب باحترافية وتفاؤل. إذا سأل المستخدم عن الفلات فوت، وضح أنه يمكن تحسينه بتقوية العضلات. إذا سأل عن الساقين أو الظهر، وضح أهمية الفحص المبكر.
          
          رقم التواصل الرسمي: 01069599594 (واتساب متاح).
          الأماكن المتاحة للتدريب: نادي أوليمبيا، مكتبة مصر العامة، الساحة الرياضية.`,
        },
      });

      const botText = response.text || "عذراً، حدث خطأ بسيط. يرجى المحاولة مرة أخرى أو التواصل عبر واتساب.";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: "أعتذر، يوجد مشكلة في الاتصال حالياً. يمكنك التواصل مباشرة عبر واتساب: 01069599594" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-bot" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16 px-4">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-white text-emerald-600 rounded-full font-black mb-6 shadow-xl shadow-emerald-600/10 border-2 border-emerald-100">
            <Bot size={28} />
            المستشار الذكي (AI)
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">اسأل الروبوت عن أي شيء يخص أطفالكم</h2>
        </div>

        <div className="bg-white rounded-[3.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.12)] border-2 border-slate-100 overflow-hidden flex flex-col h-[650px] md:h-[750px]">
          <div className="bg-slate-900 p-8 text-white flex items-center justify-between border-b-4 border-emerald-500">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-emerald-500 rounded-3xl flex items-center justify-center shadow-lg shadow-emerald-500/40">
                <Bot size={40} />
              </div>
              <div>
                <h3 className="text-2xl font-black">مستشار القوام الذكي</h3>
                <p className="text-sm text-emerald-300 font-bold uppercase tracking-widest">متاح 24/7 للإجابة عليكم</p>
              </div>
            </div>
          </div>

          <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 md:p-10 space-y-8 bg-slate-50/30">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] md:max-w-[80%] p-6 md:p-8 rounded-[2.5rem] flex gap-4 ${
                  m.role === 'user' 
                  ? 'bg-emerald-600 text-white rounded-tl-none shadow-xl shadow-emerald-600/20' 
                  : 'bg-white text-slate-900 shadow-xl border border-slate-100 rounded-tr-none'
                }`}>
                  {m.role === 'bot' && <Bot size={24} className="text-emerald-500 flex-shrink-0 mt-1" />}
                  <p className="leading-relaxed font-bold text-lg md:text-xl whitespace-pre-wrap">{m.text}</p>
                  {m.role === 'user' && <User size={24} className="text-emerald-100 flex-shrink-0 mt-1" />}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-6 rounded-[2rem] shadow-lg border border-slate-100 flex items-center gap-4">
                  <Loader2 className="animate-spin text-emerald-500" size={28} />
                  <span className="text-slate-500 font-black italic text-lg">جاري التفكير...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 md:p-8 bg-white border-t-2 border-slate-100">
            <div className="flex gap-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="اسألني عن الفلات فوت أو انحناء الظهر..."
                className="flex-grow px-8 py-5 md:py-6 bg-slate-50 border-4 border-slate-100 rounded-3xl focus:ring-8 focus:ring-emerald-500/10 focus:border-emerald-500 focus:outline-none transition-all font-black text-lg md:text-xl text-slate-900"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="bg-emerald-600 text-white p-6 md:p-7 rounded-3xl hover:bg-emerald-700 transition-all disabled:opacity-50 shadow-2xl shadow-emerald-600/40 active:scale-90"
                aria-label="إرسال"
              >
                <Send size={28} className="rotate-180" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;
