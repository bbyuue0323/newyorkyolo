import ScrollReveal from '../../../components/base/ScrollReveal';

interface OverviewItem {
  label: string;
  value: string;
}

interface OverviewProps {
  sectionNumber?: string;
  image?: string;
  items?: OverviewItem[];
}

const defaultItems: OverviewItem[] = [
  { label: '団体名', value: 'Legacy New York' },
  { label: '設立', value: '2023年' },
  { label: '拠点', value: 'New York, USA' },
  { label: '活動内容', value: 'イベントプロデュース・空間デザイン' },
  { label: 'メンバー', value: '10名' },
];

export default function Overview({ sectionNumber = '02', image, items }: OverviewProps) {
  const displayItems = items ?? defaultItems;

  return (
    <section id="overview" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-16">
            <div className="flex items-start gap-8 mb-8">
              <p className="text-6xl font-light text-gray-200" style={{ fontFamily: "'Playfair Display', serif" }}>{sectionNumber}</p>
              <div>
                <h3 className="text-xs tracking-widest text-gray-400 mb-3">OVERVIEW</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-px bg-[#B11226]"></div>
                  <h2 className="text-2xl font-light text-[#111111]" style={{ fontFamily: "'Playfair Display', serif" }}>概要</h2>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
          <ScrollReveal direction="right" delay={100}>
            <div>
              <img
                src={image ?? "https://readdy.ai/api/search-image?query=New%20York%20City%20skyline%20at%20night%20with%20Empire%20State%20Building%20illuminated%20dramatic%20city%20lights%20urban%20landscape%20professional%20photography%20cinematic%20atmosphere&width=600&height=400&seq=8&orientation=landscape"}
                alt="Overview"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={200}>
            <div className="space-y-8">
              {displayItems.map((item, index) => (
                <div key={index} className={index < displayItems.length - 1 ? 'border-b border-gray-200 pb-6' : ''}>
                  <p className="text-xs text-gray-400 mb-2">{item.label}</p>
                  <p className="text-lg text-[#111111]">{item.value}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
