'use server';
import { redirect } from 'next/navigation';
import { SECTIONS } from '@/lib/config';
import { requireStaff } from '@/lib/auth';
import { supabaseServer } from '@/lib/supabase/server';
const back = (slug: string, err?: string): never => redirect(`/admin/${slug}${err ? '?err=' + encodeURIComponent(err) : ''}`);

export async function save(fd: FormData) {
  const slug = String(fd.get('slug')); const s = SECTIONS[slug]; if (!s) redirect('/admin');
  const { supabase } = await requireStaff();
  const row: Record<string, any> = {};
  for (const f of s.fields) {
    const v = fd.get(f.n);
    row[f.n] = f.t === 'bool' ? v === 'on' : v === null || v === '' ? null
      : f.t === 'num' ? Number(v) : f.t === 'dt' ? `${v}:00+06:00` : String(v);
  }
  const id = fd.get('id');
  const { error } = id ? await supabase.from(s.table).update(row).eq('id', String(id)) : await supabase.from(s.table).insert(row);
  back(slug, error?.message);
}
export async function setStatus(fd: FormData) {
  const slug = String(fd.get('slug')); const s = SECTIONS[slug]; if (!s) redirect('/admin');
  const id = String(fd.get('id')), from = String(fd.get('from')), to = String(fd.get('to'));
  const { supabase } = await requireStaff();
  let error;
  if (to === 'pending_review') ({ error } = await supabase.rpc('request_review', { p_table: s.table, p_id: id }));
  else if (from === 'pending_review' && (to === 'published' || to === 'draft'))
    ({ error } = await supabase.rpc('review_content', { p_table: s.table, p_id: id, p_approve: to === 'published' }));
  else ({ error } = await supabase.from(s.table).update({ status: to }).eq('id', id));
  back(slug, error?.message);
}
export async function remove(fd: FormData) {
  const slug = String(fd.get('slug')); const s = SECTIONS[slug]; if (!s) redirect('/admin');
  const { supabase } = await requireStaff();
  const { error } = await supabase.from(s.table).delete().eq('id', String(fd.get('id')));
  back(slug, error?.message);
}
export async function signOut() { await supabaseServer().auth.signOut(); redirect('/admin/login'); }
