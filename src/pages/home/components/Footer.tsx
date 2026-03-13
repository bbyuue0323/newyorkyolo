import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold tracking-wider" style={{ fontFamily: "'Playfair Display', serif" }}>NewYork YOLO</span>
            </Link>
            <p className="text-sm text-white/50 mb-6">
              Creating unforgettable experiences<br />
              from New York to the world.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/kenshiro_newyorkyolo?igsh=MWtwNnp3ZTR2amFlNw==" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#B11226] flex items-center justify-center transition-colors cursor-pointer" aria-label="Instagram">
                <i className="ri-instagram-line text-xl"></i>
              </a>
              <a href="https://www.tiktok.com/@newyork.yolo?_r=1&_t=ZS-94FU1wLa7Ns" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#B11226] flex items-center justify-center transition-colors cursor-pointer" aria-label="TikTok">
                <i className="ri-tiktok-line text-xl"></i>
              </a>
              <a href="https://youtube.com/@newyorkyolo?si=ufp0wQGBsGLDbMi4" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#B11226] flex items-center justify-center transition-colors cursor-pointer" aria-label="YouTube">
                <i className="ri-youtube-line text-xl"></i>
              </a>
              <a href="https://www.threads.com/@kenshiro_newyorkyolo" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#B11226] flex items-center justify-center transition-colors cursor-pointer" aria-label="Threads">
                <i className="ri-threads-line text-xl"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 tracking-wider text-white/80" style={{ fontFamily: "'Playfair Display', serif" }}>NewYork YOLO</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li><a href="/#announcement" className="hover:text-[#B11226] transition-colors cursor-pointer">お知らせ</a></li>
              <li><a href="/#what-is-legacy" className="hover:text-[#B11226] transition-colors cursor-pointer">What is NewYork YOLO</a></li>
              <li><a href="/#philosophy" className="hover:text-[#B11226] transition-colors cursor-pointer">理念</a></li>
              <li><a href="/#business" className="hover:text-[#B11226] transition-colors cursor-pointer">事業内容</a></li>
              <li><a href="/#members" className="hover:text-[#B11226] transition-colors cursor-pointer">メンバー</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 tracking-wider text-white/80" style={{ fontFamily: "'Playfair Display', serif" }}>交流会</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li><Link to="/legacy-newyork" className="hover:text-[#B11226] transition-colors cursor-pointer">Legacy NewYork</Link></li>
              <li><Link to="/legacy-tokyo" className="hover:text-[#B11226] transition-colors cursor-pointer">Legacy Tokyo</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 tracking-wider text-white/80" style={{ fontFamily: "'Playfair Display', serif" }}>Web制作</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li><Link to="/web-production" className="hover:text-[#B11226] transition-colors cursor-pointer">Web制作サービス</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/30">
            <p>©︎ NewYork YOLO 2024</p>
            <div className="flex items-center gap-6">
              <Link to="/tokushoho" className="hover:text-white transition-colors cursor-pointer whitespace-nowrap">
                特定商取引法に基づく表記
              </Link>
              <a href="https://readdy.ai/?ref=logo" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors cursor-pointer">
                Powered by Readdy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}