import Link from 'next/link';
import { SECTIONS } from '@/lib/config';
import { supabaseServer } from '@/lib/supabase/server';
export default async function Home() {
  const sb = supabaseServer();
  const { data: news } = await sb.from('announcements').select('id,title_bn,body_bn').eq('status', 'published').order('published_at', { ascending: false }).limit(3);
  return (<>
    <section className="hero"><div className="wrap hg"><div>
      <h1>সত্য তরিকার প্রচারে ZP Digital।</h1>
      <p>বই, ভিডিও, ইভেন্ট ও ঘোষণা — এক জায়গায়, বাংলায়।</p>
      <form action="/search" className="sr" role="search"><input name="q" placeholder="বই, ভিডিও, নেতা, কমিটি বা ইভেন্ট খুঁজুন" aria-label="অনুসন্ধান" /><button className="btn">খুঁজুন</button></form></div>
      <img className="hl" src="/logo.png" alt="ZP Digital — চাঁদ, তারা ও গোলাপ" /></div></section>
    <section className="wrap"><h2>দ্রুত প্রবেশ</h2><div className="grid">
      {Object.entries(SECTIONS).filter(([, s]) => s.pub !== false).map(([k, s]) => <Link key={k} href={'/' + k} className="card q"><b>{s.label}</b></Link>)}</div></section>
    <section className="wrap"><h2>সাম্প্রতিক ঘোষণা</h2>
      {news?.length ? <div className="grid">{news.map(n => <div key={n.id} className="card an"><b>{n.title_bn}</b><p>{n.body_bn}</p></div>)}</div>
        : <p className="muted">এখনো কোনো ঘোষণা প্রকাশিত হয়নি।</p>}</section></>);
}
