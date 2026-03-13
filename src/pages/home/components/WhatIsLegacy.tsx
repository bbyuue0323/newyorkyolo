
import ScrollReveal from '../../../components/base/ScrollReveal';

export default function WhatIsLegacy() {
  return (
    <section className="py-24 bg-gray-50" id="what-is-legacy">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-16">
            <div className="flex items-start gap-8 mb-8">
              <p className="text-6xl font-light text-gray-200" style={{ fontFamily: "'Playfair Display', serif" }}>02</p>
              <div>
                <h3 className="text-xs tracking-widest text-gray-400 mb-3">WHAT IS NEWYORK YOLO</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-px bg-[#B11226]"></div>
                  <h2 className="text-2xl font-light text-[#111111]" style={{ fontFamily: "'Playfair Display', serif" }}>What is NewYork YOLO</h2>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={150} direction="up">
          <p className="text-gray-600 max-w-3xl leading-relaxed">
            私たちは、20代〜30代が「何かに本気で熱中するきっかけ」をつくるために立ち上げたブランドです。<br /><br />
            挑戦は怖いものではなく、楽しいもの。そのリアルをSNSや交流会を通じて届け、頼り頼られ合う出会いの中から、人生のかけがえのない"資産"となる時間をご提供できればと思っています。<br /><br />
            今後の新たな展開にも、ぜひご期待ください。
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
