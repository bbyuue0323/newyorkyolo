import { useState, useEffect } from 'react';
import ScrollReveal from '../../../components/base/ScrollReveal';

interface AnnouncementItem {
  date: string;
  category: string;
  title: string;
}

const CSV_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vQZV-4MBNv6Q3dZbe87owMtwwcfcNGOkEzyRKTpCyQngps9poVid1Z4YL-gDZt1k9zf608zSRuwkKf6/pub?output=csv';

function parseCSV(text: string): AnnouncementItem[] {
  const lines = text.trim().split('\n');
  // 1行目はヘッダーとしてスキップ
  return lines.slice(1).map((line) => {
    const cols = line.split(',').map((c) => c.trim().replace(/^"|"$/g, ''));
    return {
      date: cols[0] ?? '',
      category: cols[1] ?? '',
      title: cols[2] ?? '',
    };
  }).filter((item) => item.date || item.title);
}

export default function Announcement() {
  const [announcements, setAnnouncements] = useState<AnnouncementItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(CSV_URL)
      .then((res) => {
        if (!res.ok) throw new Error('fetch error');
        return res.text();
      })
      .then((text) => {
        setAnnouncements(parseCSV(text));
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <section className="relative py-24 bg-white" id="announcement">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-16">
            <div className="flex items-start gap-8 mb-8">
              <p className="text-6xl font-light text-gray-100" style={{ fontFamily: "'Playfair Display', serif" }}>01</p>
              <div>
                <h3 className="text-xs tracking-widest text-gray-400 mb-3">ANNOUNCEMENT</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-px bg-[#B11226]"></div>
                  <h2 className="text-2xl font-light text-[#111111]" style={{ fontFamily: "'Playfair Display', serif" }}>お知らせ</h2>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl space-y-4">
          {loading && (
            <div className="text-gray-400 text-sm py-8 text-center">読み込み中...</div>
          )}
          {error && (
            <div className="text-gray-400 text-sm py-8 text-center">お知らせの取得に失敗しました。</div>
          )}
          {!loading && !error && announcements.length === 0 && (
            <div className="text-gray-400 text-sm py-8 text-center">お知らせはありません。</div>
          )}
          {!loading && !error && announcements.map((item, index) => (
            <ScrollReveal key={index} delay={index * 80} direction="up">
              <div
                className="block bg-gray-50 hover:bg-[#111111] border border-transparent hover:border-[#B11226]/30 rounded-lg p-6 transition-all duration-300 cursor-default group"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex items-center gap-4 md:w-64 flex-shrink-0">
                    <span className="text-sm text-gray-500 font-medium whitespace-nowrap group-hover:text-white/60 transition-colors">{item.date}</span>
                    <span className="px-3 py-1 bg-[#B11226] text-white text-xs rounded-full whitespace-nowrap">
                      {item.category}
                    </span>
                  </div>
                  <div className="flex-1 flex items-center justify-between">
                    <h3 className="text-[#111111] font-medium group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
