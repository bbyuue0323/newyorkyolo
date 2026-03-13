import ScrollReveal from '../../../components/base/ScrollReveal';

interface AttractivePoint {
  title: string;
  description: string;
  image: string;
}

interface AttractiveProps {
  sectionNumber?: string;
  points?: AttractivePoint[];
}

const defaultPoints: AttractivePoint[] = [
  {
    title: 'Premium Venue',
    description: 'ニューヨークの一等地にある厳選された会場で、特別な空間体験を提供します。',
    image: 'https://readdy.ai/api/search-image?query=Premium%20luxury%20venue%20interior%20New%20York%20City%20elegant%20ballroom%20sophisticated%20decor%20warm%20ambient%20lighting%20marble%20floors%20high%20ceilings%20exclusive%20event%20space%20refined%20atmosphere&width=600&height=250&seq=attractive-1&orientation=landscape'
  },
  {
    title: 'Global Network',
    description: '世界各国から集まる多様なゲストとの出会いが、新たな可能性を広げます。',
    image: 'https://readdy.ai/api/search-image?query=Diverse%20international%20guests%20networking%20at%20upscale%20event%20global%20connections%20people%20mingling%20cocktail%20party%20elegant%20venue%20multicultural%20gathering%20professional%20social%20event&width=600&height=250&seq=attractive-2&orientation=landscape'
  },
  {
    title: 'Exclusive Experience',
    description: '細部までこだわり抜いた演出で、忘れられない一夜を創り上げます。',
    image: 'https://readdy.ai/api/search-image?query=Exclusive%20luxury%20event%20experience%20stunning%20visual%20production%20artistic%20lighting%20effects%20immersive%20atmosphere%20elegant%20stage%20design%20unforgettable%20night%20premium%20entertainment&width=600&height=250&seq=attractive-3&orientation=landscape'
  }
];

export default function Attractive({ sectionNumber = '01', points }: AttractiveProps) {
  const displayPoints = points ?? defaultPoints;

  return (
    <section id="attractive" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-16">
            <div className="flex items-start gap-8 mb-8">
              <p className="text-6xl font-light text-gray-100" style={{ fontFamily: "'Playfair Display', serif" }}>{sectionNumber}</p>
              <div>
                <h3 className="text-xs tracking-widest text-gray-400 mb-3">ATTRACTIVE POINT</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-px bg-[#B11226]"></div>
                  <h2 className="text-2xl font-light text-[#111111]" style={{ fontFamily: "'Playfair Display', serif" }}>魅力</h2>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {displayPoints.map((point, index) => (
            <ScrollReveal key={index} delay={index * 150} direction="up">
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={point.image}
                    alt={point.title}
                    className="w-full h-[250px] object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-[#B11226]/30 transition-colors"></div>
                </div>
                <h3 className="text-lg font-medium mb-3 text-[#111111]" style={{ fontFamily: "'Playfair Display', serif" }}>{point.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{point.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
