import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Hind_Siliguri } from 'next/font/google';
import Menu from '@/components/Menu';
import { SECTIONS } from '@/lib/config';
const font = Hind_Siliguri({ subsets: ['bengali', 'latin'], weight: ['400', '600', '700'] });
export const metadata: Metadata = {
  title: { default: 'ZP Digital — সত্য তরিকার প্রচারে', template: '%s | ZP Digital' },
  description: 'ZP Digital: বই, ভিডিও, ইভেন্ট ও ঘোষণার ডিজিটাল কেন্দ্র।',
};
export default function Root({ children }: { children: React.ReactNode }) {
  const items: [string, string][] = Object.entries(SECTIONS).filter(([, s]) => s.pub !== false).map(([k, s]) => ['/' + k, s.label]);
  items.push(['/search', 'অনুসন্ধান']);
  return (<html lang="bn"><body className={font.className}>
    <header><div className="wrap hd">
      <Link href="/" className="brand"><img src="/logo.png" alt="ZP Digital লোগো" className="logo" />ZP Digital</Link>
      <Menu items={items} /></div></header>
    <main>{children}</main>
    <footer><div className="wrap ft"><div><b>ZP Digital</b><br />সত্য তরিকার প্রচারে ZP Digital।<br />
      <small>যোগাযোগ: ঠিকানা, ফোন ও ইমেইল পরে যোগ হবে (অ্যাডমিন প্যানেল → সংগঠন পরিচিতি)।</small></div>
      <img src="/rose.jpg" alt="জাকের পার্টির গোলাপ প্রতীক" className="rose" /></div></footer>
  </body></html>);
}
