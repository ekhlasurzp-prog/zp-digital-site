// One definition drives the public pages AND the admin forms.
export type F = { n: string; l: string; t?: 'text' | 'area' | 'date' | 'dt' | 'num' | 'bool'; req?: boolean };
export type S = { table: string; label: string; title: string; sub?: string; body?: string; img?: string;
  order: string; asc?: boolean; pub?: boolean; fields: F[] };
const o: F = { n: 'display_order', l: 'ক্রম (সংখ্যা)', t: 'num' };
export const SECTIONS: Record<string, S> = {
  about: { table: 'organization_info', label: 'সংগঠন পরিচিতি', title: 'title_bn', body: 'body_bn', order: 'display_order', asc: true,
    fields: [{ n: 'section_key', l: 'কী (যেমন about, mission)', req: true }, { n: 'title_bn', l: 'শিরোনাম', req: true }, { n: 'title_en', l: 'English title' }, { n: 'body_bn', l: 'বিবরণ', t: 'area' }, o] },
  leaders: { table: 'leaders', label: 'নেতৃবৃন্দ', title: 'name_bn', sub: 'position_bn', body: 'bio_bn', img: 'photo_path', order: 'display_order', asc: true,
    fields: [{ n: 'name_bn', l: 'নাম', req: true }, { n: 'name_en', l: 'English name' }, { n: 'position_bn', l: 'পদবি' }, { n: 'bio_bn', l: 'পরিচিতি', t: 'area' }, { n: 'photo_path', l: 'ছবির পাথ (public-media)' }, o] },
  committees: { table: 'committees', label: 'কমিটি', title: 'name_bn', sub: 'level_bn', body: 'description_bn', order: 'display_order', asc: true,
    fields: [{ n: 'name_bn', l: 'কমিটির নাম', req: true }, { n: 'name_en', l: 'English name' }, { n: 'level_bn', l: 'স্তর' }, { n: 'description_bn', l: 'বিবরণ', t: 'area' }, o] },
  members: { table: 'committee_members', label: 'কমিটির সদস্য', title: 'member_name_bn', sub: 'role_bn', order: 'display_order', asc: true, pub: false,
    fields: [{ n: 'committee_id', l: 'কমিটির আইডি (UUID)', req: true }, { n: 'member_name_bn', l: 'সদস্যের নাম', req: true }, { n: 'role_bn', l: 'পদ' }, o] },
  books: { table: 'books', label: 'ডিজিটাল লাইব্রেরি', title: 'title_bn', sub: 'author_bn', body: 'description_bn', img: 'cover_path', order: 'published_at',
    fields: [{ n: 'title_bn', l: 'বইয়ের নাম', req: true }, { n: 'title_en', l: 'English title' }, { n: 'author_bn', l: 'লেখক' }, { n: 'category', l: 'বিভাগ' }, { n: 'description_bn', l: 'বিবরণ', t: 'area' }, { n: 'cover_path', l: 'প্রচ্ছদের পাথ (public-media)' }, { n: 'pdf_path', l: 'পিডিএফ পাথ (book-pdfs)' }, { n: 'allow_download', l: 'পিডিএফ খোলার অনুমতি', t: 'bool' }] },
  events: { table: 'events', label: 'ইভেন্ট ও সূচি', title: 'title_bn', sub: 'location_bn', body: 'description_bn', order: 'starts_at', asc: true,
    fields: [{ n: 'title_bn', l: 'ইভেন্টের নাম', req: true }, { n: 'location_bn', l: 'স্থান' }, { n: 'starts_at', l: 'শুরু (ঢাকার সময়)', t: 'dt' }, { n: 'ends_at', l: 'শেষ (ঢাকার সময়)', t: 'dt' }, { n: 'description_bn', l: 'বিবরণ', t: 'area' }] },
  videos: { table: 'videos', label: 'ভিডিও', title: 'title_bn', sub: 'category', body: 'description_bn', img: 'thumbnail_path', order: 'video_date',
    fields: [{ n: 'title_bn', l: 'শিরোনাম', req: true }, { n: 'youtube_url', l: 'YouTube লিংক' }, { n: 'video_date', l: 'তারিখ', t: 'date' }, { n: 'category', l: 'বিভাগ' }, { n: 'description_bn', l: 'বিবরণ', t: 'area' }, { n: 'thumbnail_path', l: 'থাম্বনেইল পাথ (public-media)' }] },
  announcements: { table: 'announcements', label: 'ঘোষণা', title: 'title_bn', body: 'body_bn', order: 'published_at',
    fields: [{ n: 'title_bn', l: 'শিরোনাম', req: true }, { n: 'body_bn', l: 'বিস্তারিত', t: 'area' }, { n: 'is_pinned', l: 'উপরে রাখুন', t: 'bool' }] },
};
export const STATUS_BN: Record<string, string> = { draft: 'খসড়া', pending_review: 'পর্যালোচনাধীন', published: 'প্রকাশিত', archived: 'আর্কাইভ' };
export const media = (p?: string | null) => (p ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/public-media/${p}` : null);
