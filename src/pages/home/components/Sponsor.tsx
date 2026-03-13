import ScrollReveal from '../../../components/base/ScrollReveal';

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

export default function Sponsor() {
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
              href="mailto:mail2tatsu8@gmail.com"
              className="inline-flex items-center gap-2 text-white/70 hover:text-[#B11226] transition-colors cursor-pointer"
            >
              <i className="ri-mail-line"></i>
              <span>mail2tatsu8@gmail.com</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
