import ScrollReveal from '../../../components/base/ScrollReveal';

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>理念</h2>
            <div className="w-16 h-1 bg-[#B11226] mx-auto mb-6"></div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            { title: '理念', text: '人生一度きり。\n今日が最後だと考えた行動を全力で。' },
            { title: 'ビジョン', text: '同じ志を持つ仲間とつながり、\n互いに頼り、頼られる関係を築く。' },
            { title: 'バリュー', text: 'Inspiration starts here\n人生の刺激の出発点。\n全員でやろう' },
          ].map((item, index) => (
            <ScrollReveal key={index} delay={index * 150} direction="up">
              <div className="text-center">
                <h3 className="text-2xl font-light text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                <p className="text-lg text-white/70 leading-relaxed whitespace-pre-line">{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
