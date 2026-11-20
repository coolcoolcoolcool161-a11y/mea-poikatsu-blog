// サイト共通の設定。GA4測定IDはユーザーから提供され次第ここに入れる。
// 空のままならGA4スクリプトは出力されない。
export const SITE = {
  name: 'ポイ活ブログ',
  operator: 'メア',
  siteUrl: 'https://coolcoolcoolcool161-a11y.github.io/mea-poikatsu-blog',
  description:
    'ポイ活の紹介コード・招待コードを全19サービス分まとめて掲載。Freecash 3BQLXB（約1,430円相当）、ワラウ最大2,500pt、ハピタス最大2,300円分、モッピー最大7,000P、TikTok 6,000円分、楽天モバイル最大13,000ポイントなど、特典額・条件・登録リンク・コピーボタン付きで比較できます。',
  dateModified: '2026-11-19',
  gaMeasurementId: 'G-8BB8V3DRW8',
  xAccount: 'https://x.com/pppppuririn',
  hubUrl:
    'https://coolcoolcoolcool161-a11y.github.io/mea-poikatsu-media/',
} as const;

// Astro 5ではcontent collectionのentry.idに拡張子（.md）が付くため、URL用スラッグに変換する
export const slugOf = (id: string) => id.replace(/\.md$/, '');

export const CATEGORIES = [
  { slug: 'point-sites', name: 'ポイントサイト' },
  { slug: 'sns-video', name: 'SNS・動画' },
  { slug: 'payment-bank', name: '決済・銀行・通信' },
  { slug: 'others', name: 'その他' },
  { slug: 'new-apps', name: '新着ポイ活アプリ' },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]['slug'];

export const CATEGORY_NAMES: Record<string, string> = Object.fromEntries(
  CATEGORIES.map((c) => [c.slug, c.name]),
);

// 特典ランキング（旧サイトの表と同じ順序・金額で移行）
export const RANKING = [
  { rank: 1, slug: 'rakuten-mobile', name: '楽天モバイル', benefit: '最大13,000pt' },
  { rank: 2, slug: 'moppy', name: 'モッピー', benefit: '最大7,000P' },
  { rank: 3, slug: 'tiktok', name: 'TikTok', benefit: '6,000円分' },
  { rank: 4, slug: 'warau', name: 'ワラウ', benefit: '最大2,500pt' },
  { rank: 5, slug: 'hapitas', name: 'ハピタス', benefit: '最大2,300円分' },
  { rank: 6, slug: 'olive', name: 'SMBC Olive', benefit: '1,000円相当' },
  { rank: 7, slug: 'tiktok-lite', name: 'TikTok Lite', benefit: '1,400円分' },
  { rank: 8, slug: 'freecash', name: 'Freecash', benefit: '約1,430円相当', featured: true },
  { rank: 9, slug: 'mercari', name: 'メルカリ', benefit: '500円分' },
  { rank: 10, slug: 'paypay', name: 'PayPay', benefit: '300pt' },
  { rank: 11, slug: 'airwallet', name: 'エアウォレット', benefit: 'Ponta 300pt' },
] as const;

// 姉妹ブログ（旧muse.ai URL。2026-11-21にGitHub Pagesの新URLへ更新済み）
export const SISTER_BLOGS = [
  {
    name: '紹介コードランキング',
    note: '特典額の大きい順に並べたランキング形式。まず一番お得なものから選びたい方に。',
    url: 'https://coolcoolcoolcool161-a11y.github.io/mea-ranking/',
  },
  {
    name: 'ポイ活コード検索',
    note: '検索と絞り込みに特化。サービス名やカテゴリから紹介コードを素早く探せます。',
    url: 'https://coolcoolcoolcool161-a11y.github.io/mea-code-search/',
  },
  {
    name: 'ポイ活マガジン',
    note: '読み物スタイルでじっくり紹介。特集記事のように読んでから登録したい方に。',
    url: 'https://coolcoolcoolcool161-a11y.github.io/mea-poikatsu-magazine/',
  },
  {
    name: 'かんたん紹介コード案内',
    note: 'ポイ活が初めての方にも分かりやすく、やさしく案内する初心者向けブログです。',
    url: 'https://coolcoolcoolcool161-a11y.github.io/mea-kantan-guide/',
  },
  {
    name: 'ゲームポイ活ブログ',
    note: 'ゲームを遊んで稼ぐ案件が中心。Freecashなどゲーム系ポイ活を深掘りしています。',
    url: 'https://coolcoolcoolcool161-a11y.github.io/mea-game-poikatsu/',
  },
] as const;

export const FAQS = [
  {
    q: '紹介コードはどこで入力すればいいですか？',
    a: 'サービスによって異なります。リンク型の紹介（ワラウ・ハピタス・Freecash・楽天モバイルなど）は紹介リンクから登録するだけで自動で適用されます。コード入力型（モッピー・PayPay・メルカリ・SMBC Oliveなど）は登録画面やアプリ内の紹介コード欄にコードを入力してください。各カードに手順を記載しています。',
  },
  {
    q: 'ポイ活の紹介特典は本当に無料でもらえますか？',
    a: '登録自体は全サービス無料です。特典には条件（広告利用・支払い・口座残高など）がある場合があり、各カードの条件欄に明記しています。条件を満たせば追加費用なしで特典がもらえるサービスがほとんどです。',
  },
  {
    q: '紹介者に個人情報や契約情報は伝わりますか？',
    a: '伝わりません。楽天モバイルをはじめ、紹介を受けた方の契約情報が紹介者に伝わることはありません。無言利用OKです。',
  },
  {
    q: '一番おすすめの紹介コードはどれですか？',
    a: '特典額では楽天モバイル（最大13,000ポイント）とモッピー（最大7,000P）が大きく、ゲームで気軽に稼ぎたい方にはFreecash（約1,430円相当）がおすすめです。まずは無料登録できるポイントサイト3つ（ワラウ・ハピタス・モッピー）から始めるのが定番です。',
  },
  {
    q: '登録した後から紹介コードを使うことはできますか？',
    a: 'ほとんどのサービスで、紹介特典は新規登録時のみ対象で、後からの入力はできません。まだ登録していないサービスから優先して、このページ経由で登録するのがおすすめです。',
  },
  {
    q: 'TikTokの招待がうまくいかないときは？',
    a: 'Wi-FiをOFFにしてモバイル通信でアクセスし、招待URLを直接開いて進んでください。「ダウンロードを開く」経由だと招待が反映されないことがあります。',
  },
  {
    q: '紹介リンクから登録すると、メアに報酬が入るのですか？',
    a: 'はい、入る場合があります。このページの紹介リンク・紹介コード経由で登録し、条件を満たすと、各サービスの運営会社からメア（紹介者）に紹介報酬が支払われる仕組みです。利用する方の特典や料金に影響はありません。詳しくは「広告・紹介報酬に関する表記」をご覧ください。',
  },
] as const;
