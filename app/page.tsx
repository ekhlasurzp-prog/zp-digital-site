import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#032313] text-white font-sans">
      {/* Top Bar / Navigation */}
      <nav className="flex items-center justify-between px-4 py-3 bg-[#032313] border-b border-[#0b3c22]">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-[#d4af37]">
            <Image src="/logo.png" alt="ZP Digital Logo" fill className="object-cover" />
          </div>
          <span className="text-xl font-bold text-white tracking-wide">ZP Digital</span>
        </div>
        <button className="p-2 rounded-md border border-[#0b3c22] text-slate-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      <div className="px-4 py-6 space-y-8 max-w-md mx-auto">
        {/* Banner Section */}
        <section className="text-left space-y-4">
          <div className="flex justify-start">
            <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-[#d4af37] shadow-lg">
              <Image src="/logo.png" alt="ZP Digital Logo" fill className="object-cover" />
            </div>
          </div>
          <h1 className="text-2xl font-extrabold leading-tight text-white">
            সত্য তরিকার প্রচারে ZP Digital ।
          </h1>
          <p className="text-xs text-slate-300">
            বই, ভিডিও, ইভেন্ট ও দাওয়াত — এক জায়গায়, বাংলায়।
          </p>
          <div className="flex gap-3 pt-1">
            <a href="#books" className="bg-[#e11d48] hover:bg-red-700 text-white text-xs font-bold px-5 py-2.5 rounded-md transition">
              বই পড়ুন
            </a>
            <a href="#events" className="bg-[#064e29] hover:bg-[#0a6c3a] text-white text-xs font-bold px-5 py-2.5 rounded-md border border-[#0d8247] transition">
              ইভেন্ট দেখুন
            </a>
          </div>
          
          {/* Search Box */}
          <div className="flex gap-2 pt-2">
            <input
              type="text"
              placeholder="বই, ভিডিও, নেতা, কমিটি বা ইভেন্ট"
              className="w-full bg-[#031d10] border border-[#14532d] text-xs px-3 py-2.5 rounded-md text-white placeholder-slate-400 focus:outline-none"
            />
            <select className="bg-[#031d10] border border-[#14532d] text-xs px-2 py-2.5 rounded-md text-slate-300">
              <option>সব</option>
            </select>
          </div>
        </section>

        {/* Organization Info Section */}
        <section className="space-y-3 pt-2">
          <div className="w-8 h-1 bg-[#e11d48] rounded-full"></div>
          <h2 className="text-lg font-bold text-emerald-400">সংগঠন পরিচিতি</h2>
          <p className="text-xs text-slate-300">
            এই অংশে সংগঠনের পরিচিতি, লক্ষ্য ও ইতিহাস থাকবে।
          </p>
          <span className="inline-block text-[10px] bg-[#d4af37]/20 text-[#fef08a] px-2.5 py-1 rounded-full border border-[#d4af37]/40">
            প্রতিষ্ঠাতাদের অবদানসমূহ
          </span>
          <p className="text-xs text-slate-400 leading-relaxed">
            প্রকাশক পর্যায় থেকে এই লেখা প্রকাশ ও প্রকাশনা দ্বারা প্রস্তুত।
          </p>
          <div className="relative w-full h-44 rounded-xl overflow-hidden border-2 border-[#d4af37] mt-3">
            <Image src="/flag.jpg" alt="ZP Digital Flag" fill className="object-cover" />
          </div>
        </section>

        {/* Quick Access Section */}
        <section className="space-y-3">
          <div className="w-8 h-1 bg-[#e11d48] rounded-full"></div>
          <h2 className="text-lg font-bold text-emerald-400">দ্রুত প্রবেশ</h2>
          <p className="text-[11px] text-slate-400">প্রয়োজনীয় সব বিভাগ</p>
          
          <div className="grid grid-cols-1 gap-2.5 pt-1">
            <div className="bg-[#031d10] p-3.5 rounded-xl border border-[#0d522c]">
              <h3 className="text-sm font-bold text-white">সংগঠন পরিচিতি</h3>
              <p className="text-[10px] text-slate-400">লক্ষ্য ও পরিচয়</p>
            </div>
            <div className="bg-[#031d10] p-3.5 rounded-xl border border-[#d4af37]/60">
              <h3 className="text-sm font-bold text-white">নেতৃবৃন্দ</h3>
              <p className="text-[10px] text-slate-400">নেতাদের তালিকা</p>
            </div>
            <div className="bg-[#031d10] p-3.5 rounded-xl border border-[#e11d48]">
              <h3 className="text-sm font-bold text-white">কমিটি</h3>
              <p className="text-[10px] text-slate-400">কমিটি ও সদস্য</p>
            </div>
            <div className="bg-[#031d10] p-3.5 rounded-xl border border-[#0d522c]">
              <h3 className="text-sm font-bold text-white">ডিজিটাল লাইব্রেরি</h3>
              <p className="text-[10px] text-slate-400">বই ও পিডিএফ</p>
            </div>
            <div className="bg-[#031d10] p-3.5 rounded-xl border border-[#d4af37]/60">
              <h3 className="text-sm font-bold text-white">ইভেন্ট ও সূচি</h3>
              <p className="text-[10px] text-slate-400">আগামী অনুষ্ঠান</p>
            </div>
            <div className="bg-[#031d10] p-3.5 rounded-xl border border-[#e11d48]">
              <h3 className="text-sm font-bold text-white">ভিডিও</h3>
              <p className="text-[10px] text-slate-400">অনুষ্ঠান ও আলোচনা</p>
            </div>
          </div>
        </section>

        {/* Books & Digital Library Section */}
        <section className="space-y-3 pt-2">
          <div className="w-8 h-1 bg-[#e11d48] rounded-full"></div>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-emerald-400">বই ও ডিজিটাল লাইব্রেরি</h2>
            <span className="text-[10px] bg-[#fef08a] text-slate-900 px-2 py-0.5 rounded font-bold">নতুন</span>
          </div>
          <p className="text-xs text-slate-300">অনুমোদিত বই গ্রাহক যোগ করবেন।</p>

          <div className="bg-[#031d10] p-4 rounded-xl border border-[#e11d48] space-y-3">
            <div className="relative w-full h-64 bg-[#064e29] rounded-lg border border-[#0d8247] flex items-center justify-center">
              <span className="text-3xl font-serif text-[#d4af37]">১</span>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">বইয়ের নাম (নমুনা)</h3>
              <p className="text-xs text-slate-400">লেখক - প্রকাশনী</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
