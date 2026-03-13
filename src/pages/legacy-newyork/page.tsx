import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Attractive from '../home/components/Attractive';
import Overview from '../home/components/Overview';
import Achievements from '../home/components/Achievements';
import OrganizerMessage from './components/OrganizerMessage';
import LineGroup from '../home/components/LineGroup';
import Footer from '../home/components/Footer';
import SectionDivider from '../../components/feature/SectionDivider';
import ScrollReveal from '../../components/base/ScrollReveal';

const nyAttractivePoints = [
  {
    title: 'Premium Venue',
    description: 'ニューヨークの一等地にある厳選された会場で、特別な空間体験を提供します。',
    image: 'https://readdy.ai/api/search-image?query=Luxurious%20rooftop%20venue%20in%20Manhattan%20with%20stunning%20city%20skyline%20view%20elegant%20outdoor%20seating%20warm%20string%20lights%20sophisticated%20atmosphere%20premium%20event%20space%20sunset%20golden%20hour&width=400&height=300&seq=5&orientation=landscape'
  },
  {
    title: 'Global Network',
    description: 'NY駐在員や起業家、インフルエンサー等NYで挑戦されている方々と出会い人生の刺激となる空間をご提供します。',
    image: 'https://static.readdy.ai/image/0c61843cac5595a4ea86012b4ca98e8d/1bd25d14384aa85850802e0ebdd64662.jpeg'
  },
  {
    title: 'Exclusive Experience',
    description: '細部までこだわり抜いた演出で、忘れられない一夜を創り上げます。',
    image: 'https://readdy.ai/api/search-image?query=Exclusive%20VIP%20lounge%20area%20with%20premium%20bottle%20service%20elegant%20decor%20soft%20ambient%20lighting%20velvet%20seating%20crystal%20glasses%20sophisticated%20nightlife%20experience&width=400&height=300&seq=7&orientation=landscape'
  }
];

const nyOverviewItems = [
  { label: '団体名', value: 'Legacy New York' },
  { label: '設立', value: '2024年' },
  { label: '拠点', value: 'New York, USA' },
  { label: '活動内容', value: 'イベントプロデュース・空間デザイン' },
  { label: '参加者', value: '150人〜300人' },
];

const nyAchievements = [
  {
    title: '#1',
    date: '2025.08.23 (Sat.) @Manhattan',
    visitors: '来場者数: 86人',
    description: 'Legacy New York初のイベント。セントラルパーク近くのマンハッタンの高層ビル内で開催',
    image: 'https://static.readdy.ai/image/0c61843cac5595a4ea86012b4ca98e8d/03b61461a2a2f157871c228f9351a576.jpeg'
  },
  {
    title: '#2',
    date: '2025.10.11 (Sat.) @Manhattan',
    visitors: '来場者数: 91人',
    description: 'Legacy New York2回目となるイベント。1回目と同じくセントラルパーク近くのマンハッタンの高層ビル内で開催',
    image: 'https://static.readdy.ai/image/0c61843cac5595a4ea86012b4ca98e8d/eff95d896f55f2177f34d8a80ae0eba6.jpeg'
  },
  {
    title: '#3',
    date: '2026.1.17 (Sat.) @Manhattan',
    visitors: '来場者数: 160人',
    description: 'Legacy New York3回目となるイベント。マンハッタン中心部の高層ビル内で開催。160人規模と大盛況した会となった。',
    image: 'https://static.readdy.ai/image/0c61843cac5595a4ea86012b4ca98e8d/02076cd05080e62bae849390fdb6b10e.jpeg'
  },
];

function NYNextEvent({ sectionNumber = '05' }: { sectionNumber?: string }) {
  return (
    <section id="next-event" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-16">
            <div className="flex items-start gap-8 mb-8">
              <p className="text-6xl font-light text-gray-100" style={{ fontFamily: "'Playfair Display', serif" }}>{sectionNumber}</p>
              <div>
                <h3 className="text-xs tracking-widest text-gray-400 mb-3">NEXT EVENT</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-px bg-[#B11226]"></div>
                  <h2 className="text-2xl font-light text-[#111111]" style={{ fontFamily: "'Playfair Display', serif" }}>NEXT開催</h2>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="right" delay={100}>
            <div className="relative">
              <img
                src="https://static.readdy.ai/image/0c61843cac5595a4ea86012b4ca98e8d/a22249f961a405e68ac30c023133c072.jpeg"
                alt="第4回 Legacy New York"
                className="w-full h-[500px] object-cover object-top rounded-lg"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={200}>
            <div className="space-y-8">
              <div>
                <p className="text-xs text-gray-400 mb-2">EVENT NAME</p>
                <h3 className="text-2xl font-light text-[#111111]" style={{ fontFamily: "'Playfair Display', serif" }}>第4回 Legacy New York</h3>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-2">DATE</p>
                <p className="text-4xl font-light text-[#111111]" style={{ fontFamily: "'Playfair Display', serif" }}>2026.04.18</p>
                <p className="text-lg text-gray-500">Saturday</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-2">TIME</p>
                <p className="text-lg text-[#111111]">18:30 - 21:30</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-2">VENUE</p>
                <p className="text-lg text-[#111111]">230 Fifth Rooftop Bar Penthouse (20th Floor)</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-2">TICKET</p>
                <p className="text-lg text-[#111111]">$40</p>
                <p className="text-sm text-gray-500">※ドリンク費は別となります。</p>
              </div>

              <button
                disabled
                className="w-full text-center bg-gray-300 text-gray-500 px-8 py-4 text-sm whitespace-nowrap rounded-lg cursor-not-allowed opacity-60"
              >
                今回は現地支払いのみとさせていただきます。
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function NYSponsor() {
  const sponsors = [
    { name: '株式会社BentOn' },
    { name: '株式会社HIS USA' },
    { name: '株式会社LINC ORIGINAL MAKERS' },
    { name: '株式会社Sapporo Beer USA' },
    { name: '株式会社SOWAKA' },
    { name: '株式会社Yogibo' },
    { name: '株式会社Iichiko' },
    { name: '株式会社Naxly' },
    { name: '株式会社Sato Shiki Whisky' },
  ];

  return (
    <section id="sponsor" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest text-white/40 mb-3">SUPPORTED BY</p>
            <h2 className="text-3xl font-light text-white" style={{ fontFamily: "'Playfair Display', serif" }}>交流会スポンサー様</h2>
            <div className="w-16 h-px bg-[#B11226] mx-auto mt-4"></div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {sponsors.map((sponsor, index) => (
            <ScrollReveal key={index} delay={index * 60} direction="up">
              <div className="bg-white/5 border border-white/10 hover:border-[#B11226]/40 rounded-xl px-6 py-5 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center">
                <p className="text-sm font-medium text-white/80 tracking-wide text-center">
                  {sponsor.name}様
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="text-center">
            <p className="text-sm text-white/50 mb-4">スポンサーシップに関するお問い合わせ</p>
            <a
              href="mailto:new-york-yolo@googlegroups.com"
              className="inline-flex items-center gap-2 text-white/70 hover:text-[#B11226] transition-colors cursor-pointer"
            >
              <i className="ri-mail-line"></i>
              <span>new-york-yolo@googlegroups.com</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default function LegacyNewYork() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <SectionDivider fromColor="#111111" toColor="#ffffff" />
      <Attractive sectionNumber="01" points={nyAttractivePoints} />
      <SectionDivider fromColor="#ffffff" toColor="#f9fafb" flip />
      <Overview sectionNumber="02" items={nyOverviewItems} />
      <SectionDivider fromColor="#f9fafb" toColor="#111111" />
      <Achievements sectionNumber="03" achievements={nyAchievements} />
      <SectionDivider fromColor="#111111" toColor="#ffffff" flip />
      <OrganizerMessage sectionNumber="04" />
      <SectionDivider fromColor="#ffffff" toColor="#ffffff" flip />
      <NYNextEvent sectionNumber="05" />
      <SectionDivider fromColor="#ffffff" toColor="#06C755" />
      <LineGroup lineUrl="https://line.me/ti/g/VrhAFUvADx" />
      <SectionDivider fromColor="#06C755" toColor="#111111" flip />
      <NYSponsor />
      <SectionDivider fromColor="#111111" toColor="#0a0a0a" />
      <Footer />
    </div>
  );
}
