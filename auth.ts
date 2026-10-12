import { redirect } from 'next/navigation';
import { supabaseServer } from './supabase/server';
// Every admin page and action calls this. The database (RLS) enforces permissions again.
export async function requireStaff() {
  const supabase = supabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/admin/login');
  const { data: profile } = await supabase.from('admin_profiles').select('full_name,role,is_active').eq('id', user.id).maybeSingle();
  if (!profile || !profile.is_active) redirect('/admin/login');
  return { supabase, profile, user };
}
