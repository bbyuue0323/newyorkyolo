
export default function LegacyTokyo() {
  return (
    <section id="legacy-tokyo" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest text-gray-500 mb-3">SISTER TEAM</p>
          <h2 className="text-3xl font-light">Legacy Tokyo</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://static.readdy.ai/image/0c61843cac5595a4ea86012b4ca98e8d/834dbb67fe203089a997f26e602bbe32.jpeg"
              alt="Legacy Tokyo"
              className="w-full h-[500px] object-cover rounded-lg"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-light">東京から世界へ</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Legacy Tokyoは、Legacy New Yorkの姉妹チームとして2024年に東京で活動を開始しました。
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              ニューヨークで培ったノウハウと、東京ならではの文化・感性を融合させ、日本でも唯一無二の体験価値を提供しています。
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              渋谷、六本木、表参道など、東京の主要エリアで定期的にイベントを開催中。
            </p>
            
            <div className="pt-6">
              <a 
                href="#"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Legacy Tokyo 詳細</span>
                <i className="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
