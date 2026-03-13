import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const items = [
  { label: '販売事業者', value: '請求があった場合は遅滞なく開示いたします' },
  { label: '運営責任者', value: '山本竜也' },
  { label: '所在地', value: '東京都品川区荏原6-13-3ガーラヒルズ武蔵小山202' },
  { label: '電話番号', value: '08036731201' },
  { label: 'メールアドレス', value: 'mail2tatsu8@gmail.com' },
  { label: '販売価格', value: '各イベントページに記載の金額（税込）' },
  {
    label: '商品代金以外の必要料金',
    value: '特になし（決済に伴う通信費等はお客様のご負担となります）',
  },
  { label: '支払方法', value: 'クレジットカード決済（Stripe）' },
  {
    label: '支払時期',
    value: 'クレジットカード決済：お申し込み時に決済が確定します',
  },
  {
    label: 'サービス提供時期',
    value: 'お申し込み完了後、各イベントの開催日時にサービスを提供します。',
  },
];

const cancelItems = [
  {
    title: 'お客様都合によるキャンセル',
    value:
      'イベント開催日の30日前までのキャンセルについては返金対応いたします。それ以降のキャンセルについては返金いたしかねます。',
  },
  {
    title: 'イベント中止の場合',
    value: '主催者都合によりイベントが中止となった場合は、全額返金いたします。',
  },
];

export default function TokushohoPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa]" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
      {/* Header */}
      <header className="bg-[#0a0a0a] py-5 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="text-white text-xl font-bold tracking-wider cursor-pointer"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            NewYork YOLO
          </Link>
          <Link
            to="/"
            className="text-white/60 hover:text-white text-sm transition-colors cursor-pointer flex items-center gap-1"
          >
            <i className="ri-arrow-left-line"></i>
            トップへ戻る
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-bold text-[#111111] mb-2 tracking-wide">
          特定商取引法に基づく表記
        </h1>
        <div className="w-12 h-0.5 bg-[#B11226] mb-10"></div>

        {/* Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-8">
          {items.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col sm:flex-row ${i !== items.length - 1 ? 'border-b border-gray-100' : ''}`}
            >
              <div className="sm:w-56 shrink-0 bg-gray-50 px-6 py-4 text-sm font-medium text-[#111111]">
                {item.label}
              </div>
              <div className="flex-1 px-6 py-4 text-sm text-gray-700 leading-relaxed">
                {item.value}
              </div>
            </div>
          ))}

          {/* キャンセル・返金 */}
          <div className="flex flex-col sm:flex-row border-t border-gray-100">
            <div className="sm:w-56 shrink-0 bg-gray-50 px-6 py-4 text-sm font-medium text-[#111111]">
              キャンセル・返金について
            </div>
            <div className="flex-1 px-6 py-4 text-sm text-gray-700 leading-relaxed space-y-4">
              {cancelItems.map((c, i) => (
                <div key={i}>
                  <p className="font-medium text-[#111111] mb-1">＜{c.title}＞</p>
                  <p>{c.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Back links */}
        <div className="flex flex-wrap gap-4 text-sm">
          <Link
            to="/legacy-newyork"
            className="inline-flex items-center gap-1 text-[#B11226] hover:underline cursor-pointer"
          >
            <i className="ri-arrow-left-line"></i>
            Legacy NewYork へ戻る
          </Link>
          <Link
            to="/legacy-tokyo"
            className="inline-flex items-center gap-1 text-[#B11226] hover:underline cursor-pointer"
          >
            <i className="ri-arrow-left-line"></i>
            Legacy Tokyo へ戻る
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] text-white/30 text-sm py-8 text-center mt-8">
        <p>©︎ NewYork YOLO 2024</p>
      </footer>
    </div>
  );
}
