
import React, { useState } from 'react';
import { Menu, X, Bot } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'من أنا؟', href: '#about' },
    { name: 'مشاكل القوام', href: '#problems' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'المستشار الذكي (روبوت)', href: '#ai-bot' },
    { name: 'أماكن التدريب', href: '#locations' },
    { name: 'تواصل معنا', href: '#contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              onClick={(e) => handleScroll(e, '#home')}
              className="text-2xl font-black tracking-tighter text-slate-900 cursor-pointer flex items-center gap-2"
              style={{ direction: 'ltr' }}
            >
              <span className="bg-emerald-500 text-white px-3 py-1 rounded-lg">DR</span>
              <span>ELMETWALY</span>
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-reverse space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={`text-slate-600 hover:text-emerald-600 font-bold transition-colors flex items-center gap-1 text-sm lg:text-base ${item.href === '#ai-bot' ? 'text-emerald-600' : ''}`}
              >
                {item.name}
                {item.href === '#ai-bot' && <Bot size={18} className="mr-1" />}
              </a>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 hover:text-emerald-500 focus:outline-none p-2"
              aria-label="القائمة"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100 bg-white' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pt-4 pb-12 space-y-4 shadow-xl border-t border-slate-50">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="block px-4 py-4 text-slate-900 hover:bg-emerald-50 hover:text-emerald-600 rounded-2xl font-bold transition-all text-lg"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
