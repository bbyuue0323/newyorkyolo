
export default function OrganizerMessage({ sectionNumber = '04' }: { sectionNumber?: string }) {
  return (
    <section id="organizer-message" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-start gap-8 mb-8">
            <p className="text-6xl font-light text-gray-100" style={{ fontFamily: "'Playfair Display', serif" }}>{sectionNumber}</p>
            <div>
              <h3 className="text-xs tracking-widest text-gray-400 mb-3">ORGANIZER'S MESSAGE</h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-px bg-[#B11226]"></div>
                <h2 className="text-2xl font-light text-[#111111]" style={{ fontFamily: "'Playfair Display', serif" }}>主催者からのメッセージ</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl">
          <div className="relative">
            <div className="absolute -top-4 -left-4 text-8xl text-[#B11226]/10 font-serif leading-none select-none">"</div>
            <div className="space-y-4 text-[#333333] leading-relaxed text-base relative z-10">
              <p>皆さま、はじめまして。</p>
              <p>ニューヨークで日系の不動産会社に勤めております、<strong>國嶋賢志朗（くにしま けんしろう）</strong>です。</p>
              <p>私は「<strong>出会いこそ最大の財産</strong>」だと考えています。</p>
              <p>
                AIが進化し、オンラインで何でも完結できる時代だからこそ、<br />
                あえてオフラインで顔を合わせ、言葉を交わし、刺激を受け合う。<br />
                そこにしか生まれない熱量と化学反応があります。
              </p>
              <p>その想いから、私たちは交流会を開催しています。</p>
              <div className="pl-6 border-l-2 border-[#B11226] space-y-2 my-6">
                <p className="text-[#111111] font-medium">小さな挑戦が連鎖し、</p>
                <p className="text-[#111111] font-medium">一つの出会いが人生を動かし、</p>
                <p className="text-[#111111] font-medium">その連鎖が未来を変えていく。</p>
              </div>
              <p>一緒に、これからの人生をもっと面白くしていきましょう。</p>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-sm font-medium text-[#111111]">國嶋 賢志朗</p>
              <p className="text-xs text-gray-400 mt-1">Kenshiro Kunishima</p>
            </div>
            <div className="absolute -bottom-4 -right-4 text-8xl text-[#B11226]/10 font-serif leading-none select-none rotate-180">"</div>
          </div>
        </div>
      </div>
    </section>
  );
}
