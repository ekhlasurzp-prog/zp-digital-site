import Link from 'next/link';
import { supabaseServer } from '@/lib/supabase/server';
export const metadata = { title: 'অনুসন্ধান' };
const K: Record<string, [string, string]> = { book: ['বই', 'books'], video: ['ভিডিও', 'videos'], event: ['ইভেন্ট', 'events'], leader: ['নেতা', 'leaders'], committee: ['কমিটি', 'committees'], announcement: ['ঘোষণা', 'announcements'] };
export default async function Search({ searchParams }: { searchParams: { q?: string } }) {
  const q = (searchParams.q || '').trim();
  const { data } = q ? await supabaseServer().rpc('search_content', { q }) : { data: [] };
  return (<div className="wrap"><h1>অনুসন্ধান</h1>
    <form className="sr" role="search"><input name="q" defaultValue={q} aria-label="অনুসন্ধান" /><button className="btn">খুঁজুন</button></form>
    {q && !data?.length && <p className="muted">“{q}” দিয়ে কিছু পাওয়া যায়নি। অন্য শব্দ দিয়ে চেষ্টা করুন।</p>}
    {data?.map((r: any) => <Link key={r.kind + r.id} href={'/' + K[r.kind][1]} className="card" style={{ display: 'block', margin: '10px 0' }}>
      <span className="ph">{K[r.kind][0]}</span> <b>{r.title}</b>{r.snippet && <div className="muted">{r.snippet}</div>}</Link>)}</div>);
}
