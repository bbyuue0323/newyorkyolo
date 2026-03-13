import ScrollReveal from '../../../components/base/ScrollReveal';

interface LineGroupProps {
  lineUrl?: string;
}

export default function LineGroup({ lineUrl = 'https://line.me/ti/g/YWD-TPuS-R' }: LineGroupProps) {
  return (
    <section id="line-group" className="py-24 bg-[#06C755]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal>
          <div className="w-20 h-20 mx-auto mb-8 bg-white rounded-full flex items-center justify-center">
            <i className="fa-brands fa-line text-4xl text-[#06C755]"></i>
          </div>
          <h2 className="text-3xl font-light text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>LINE グループ</h2>
          <p className="text-white/90 mb-8 leading-relaxed">
            最新のイベント情報やメンバー限定の特典をお届けします。<br />
            ぜひLINEグループにご参加ください。
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150} direction="up">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-white">
              <div>
                <p className="text-3xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>500+</p>
                <p className="text-sm text-white/80">メンバー数</p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>先行</p>
                <p className="text-sm text-white/80">チケット案内</p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>限定</p>
                <p className="text-sm text-white/80">特典あり</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={250} direction="up">
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-[#06C755] px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
          >
            <i className="fa-brands fa-line text-2xl"></i>
            LINEグループに参加する
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
