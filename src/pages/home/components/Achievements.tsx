import { useState } from 'react';
import ScrollReveal from '../../../components/base/ScrollReveal';

export interface Achievement {
  title: string;
  date: string;
  visitors: string;
  description: string;
  image: string;
}

const defaultAchievements: Achievement[] = [
  {
    title: "#1 Launch Party",
    date: "2023.06.15 (Thu.) @Manhattan",
    visitors: "来場者数: 200人",
    description: "Legacy New York初のイベント。マンハッタンの高層ビル屋上で開催し、NYの夜景を一望できる特別な空間を演出。",
    image: "https://readdy.ai/api/search-image?query=Elegant%20rooftop%20party%20in%20Manhattan%20New%20York%20City%20at%20night%20with%20city%20skyline%20view%20champagne%20glasses%20guests%20in%20formal%20attire%20luxury%20event%20atmosphere%20warm%20golden%20lighting&width=800&height=500&seq=achievement-1&orientation=landscape"
  },
  {
    title: "#2 Summer Night",
    date: "2023.08.20 (Sun.) @Brooklyn",
    visitors: "来場者数: 350人",
    description: "ブルックリンの倉庫をリノベーションした会場で、アートと音楽が融合した夏の夜を演出。",
    image: "https://readdy.ai/api/search-image?query=Brooklyn%20warehouse%20party%20summer%20night%20art%20and%20music%20event%20industrial%20chic%20venue%20colorful%20lighting%20crowd%20dancing%20vibrant%20atmosphere%20creative%20space&width=800&height=500&seq=achievement-2&orientation=landscape"
  },
  {
    title: "#3 Winter Gala",
    date: "2023.12.16 (Sat.) @Midtown",
    visitors: "来場者数: 400人",
    description: "ホリデーシーズンに合わせた特別なガライベント。シャンパンタワーとライブパフォーマンスで華やかな一夜を。",
    image: "https://readdy.ai/api/search-image?query=Winter%20gala%20event%20Midtown%20Manhattan%20holiday%20season%20champagne%20tower%20live%20performance%20elegant%20ballroom%20crystal%20chandeliers%20formal%20attire%20luxury%20celebration&width=800&height=500&seq=achievement-3&orientation=landscape"
  },
  {
    title: "#4 Spring Bloom",
    date: "2024.04.06 (Sat.) @SoHo",
    visitors: "来場者数: 300人",
    description: "春の訪れを祝うガーデンパーティー。フラワーアレンジメントとオリジナルカクテルで春の息吹を表現。",
    image: "https://readdy.ai/api/search-image?query=Spring%20garden%20party%20SoHo%20New%20York%20floral%20arrangements%20original%20cocktails%20outdoor%20event%20pastel%20colors%20blooming%20flowers%20elegant%20guests%20warm%20daylight&width=800&height=500&seq=achievement-4&orientation=landscape"
  }
];

interface AchievementsProps {
  sectionNumber?: string;
  achievements?: Achievement[];
}

export default function Achievements({ sectionNumber = '03', achievements }: AchievementsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayAchievements = achievements ?? defaultAchievements;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? displayAchievements.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === displayAchievements.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="achievements" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-16">
            <div className="flex items-start gap-8 mb-8">
              <p className="text-6xl font-light text-white/10" style={{ fontFamily: "'Playfair Display', serif" }}>{sectionNumber}</p>
              <div>
                <h3 className="text-xs tracking-widest text-white/40 mb-3">ACHIEVEMENTS</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-px bg-[#B11226]"></div>
                  <h2 className="text-2xl font-light text-white" style={{ fontFamily: "'Playfair Display', serif" }}>実績</h2>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150} direction="up">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {displayAchievements.map((achievement, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="relative h-[500px] rounded-lg overflow-hidden">
                      <img
                        src={achievement.image}
                        alt={achievement.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <h3 className="text-xl font-light mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{achievement.title}</h3>
                        <p className="text-sm mb-2">{achievement.date}</p>
                        <p className="text-sm mb-4 text-[#B11226]">{achievement.visitors}</p>
                        <p className="text-sm leading-relaxed text-white/90">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#B11226] flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Previous"
              >
                <i className="ri-arrow-left-s-line text-2xl"></i>
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#B11226] flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Next"
              >
                <i className="ri-arrow-right-s-line text-2xl"></i>
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {displayAchievements.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    index === currentIndex ? 'bg-[#B11226] w-8' : 'bg-white/30 w-2'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
