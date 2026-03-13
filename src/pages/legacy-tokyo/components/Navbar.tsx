import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#111111]/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold tracking-wider text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              NewYork YOLO
            </span>
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-8 h-8 flex flex-col justify-center items-center gap-1.5 cursor-pointer z-[60] relative"
            aria-label="Menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-400 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: 'rgba(0,0,0,0.45)' }}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Slide-in menu panel */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-full z-50 w-80 max-w-full"
        style={{
          background: 'rgba(10, 10, 10, 0.82)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderLeft: '1px solid rgba(255,255,255,0.08)',
          transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: isMenuOpen ? '-8px 0 40px rgba(0,0,0,0.5)' : 'none',
        }}
      >
        <div className="px-8 pt-20 pb-8 space-y-1 overflow-y-auto h-full">

          <div className="py-2">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="block text-white hover:text-[#B11226] transition-colors text-base font-bold cursor-pointer tracking-wide whitespace-nowrap" style={{ fontFamily: "'Playfair Display', serif" }}>
              TOP
            </Link>
          </div>
          <div className="border-t border-white/10"></div>

          <div className="py-2">
            <Link to="/#announcement" onClick={() => setIsMenuOpen(false)} className="block text-white hover:text-[#B11226] transition-colors text-base font-bold cursor-pointer tracking-wide whitespace-nowrap" style={{ fontFamily: "'Playfair Display', serif" }}>
              お知らせ
            </Link>
          </div>
          <div className="border-t border-white/10"></div>

          <div className="py-2">
            <Link to="/#what-is-legacy" onClick={() => setIsMenuOpen(false)} className="block text-white hover:text-[#B11226] transition-colors text-base font-bold cursor-pointer tracking-wide mb-3 whitespace-nowrap" style={{ fontFamily: "'Playfair Display', serif" }}>
              What is NewYork YOLO
            </Link>
            <div className="space-y-2 pl-5 border-l-2 border-[#B11226]">
              <Link to="/#philosophy" onClick={() => setIsMenuOpen(false)} className="block text-white/60 hover:text-[#B11226] transition-colors text-sm cursor-pointer whitespace-nowrap">理念</Link>
              <Link to="/#business" onClick={() => setIsMenuOpen(false)} className="block text-white/60 hover:text-[#B11226] transition-colors text-sm cursor-pointer whitespace-nowrap">事業内容</Link>
              <Link to="/#members" onClick={() => setIsMenuOpen(false)} className="block text-white/60 hover:text-[#B11226] transition-colors text-sm cursor-pointer whitespace-nowrap">メンバー</Link>
            </div>
          </div>
          <div className="border-t border-white/10"></div>

          <div className="py-2">
            <p className="text-base font-bold text-white mb-3 tracking-wide whitespace-nowrap" style={{ fontFamily: "'Playfair Display', serif" }}>SNS</p>
            <div className="space-y-2 pl-5 border-l-2 border-[#B11226]">
              <a href="https://www.instagram.com/kenshiro_newyorkyolo?igsh=MWtwNnp3ZTR2amFlNw==" target="_blank" rel="noopener noreferrer" className="block text-white/60 hover:text-[#B11226] transition-colors text-sm cursor-pointer">Instagram</a>
              <a href="https://www.tiktok.com/@newyork.yolo?_r=1&_t=ZS-94FU1wLa7Ns" target="_blank" rel="noopener noreferrer" className="block text-white/60 hover:text-[#B11226] transition-colors text-sm cursor-pointer">TikTok</a>
              <a href="https://youtube.com/@newyorkyolo?si=ufp0wQGBsGLDbMi4" target="_blank" rel="noopener noreferrer" className="block text-white/60 hover:text-[#B11226] transition-colors text-sm cursor-pointer">YouTube</a>
            </div>
          </div>
          <div className="border-t border-white/10"></div>

          <div className="py-2">
            <p className="text-base font-bold text-white mb-3 tracking-wide whitespace-nowrap" style={{ fontFamily: "'Playfair Display', serif" }}>交流会</p>
            <div className="space-y-2 pl-5 border-l-2 border-[#B11226]">
              <Link to="/legacy-newyork" onClick={() => setIsMenuOpen(false)} className="block text-white/60 hover:text-[#B11226] transition-colors text-sm cursor-pointer whitespace-nowrap">Legacy NewYork</Link>
              <button onClick={() => scrollToSection('attractive')} className="block text-[#B11226] font-medium text-sm cursor-pointer whitespace-nowrap">Legacy Tokyo</button>
            </div>
          </div>

          <div className="border-t border-white/10"></div>

          <div className="py-2">
            <p className="text-base font-bold text-white mb-3 tracking-wide whitespace-nowrap" style={{ fontFamily: "'Playfair Display', serif" }}>SERVICES</p>
            <div className="space-y-2 pl-5 border-l-2 border-[#B11226]">
              <Link to="/web-production" onClick={() => setIsMenuOpen(false)} className="block text-white/60 hover:text-[#B11226] transition-colors text-sm cursor-pointer whitespace-nowrap">Web制作</Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
