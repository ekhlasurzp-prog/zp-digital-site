export default function Home() {
  return (
    <div style={{ backgroundColor: "#032313", color: "#ffffff", minHeight: "100vh", fontFamily: "sans-serif", paddingBottom: "40px" }}>
      {/* Navbar */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", backgroundColor: "#032313", borderBottom: "1px solid #0b3c22" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "36px", height: "36px", borderRadius: "8px", backgroundColor: "#064e29", border: "1px solid #d4af37", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", color: "#d4af37", fontSize: "14px" }}>
            ZP
          </div>
          <span style={{ fontSize: "18px", fontWeight: "bold", color: "#ffffff" }}>ZP Digital</span>
        </div>
        <div style={{ padding: "6px 12px", border: "1px solid #0b3c22", borderRadius: "6px", color: "#cbd5e1", fontSize: "14px" }}>
          ☰
        </div>
      </nav>

      <div style={{ padding: "20px 16px", maxWidth: "450px", margin: "0 auto" }}>
        {/* Banner Section */}
        <section style={{ marginBottom: "30px" }}>
          <div style={{ width: "70px", height: "70px", borderRadius: "16px", backgroundColor: "#064e29", border: "2px solid #d4af37", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", color: "#d4af37", fontSize: "22px", marginBottom: "16px" }}>
            ZP
          </div>
          <h1 style={{ fontSize: "22px", fontWeight: "800", color: "#ffffff", marginBottom: "8px", lineHeight: "1.3" }}>
            সত্য তরিকার প্রচারে ZP Digital ।
          </h1>
          <p style={{ fontSize: "13px", color: "#cbd5e1", marginBottom: "16px" }}>
            বই, ভিডিও, ইভেন্ট ও দাওয়াত — এক জায়গায়, বাংলায়।
          </p>
          <div style={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
            <a href="#books" style={{ backgroundColor: "#e11d48", color: "#ffffff", padding: "10px 16px", borderRadius: "6px", textDecoration: "none", fontSize: "12px", fontWeight: "bold" }}>
              বই পড়ুন
            </a>
            <a href="#events" style={{ backgroundColor: "#064e29", color: "#ffffff", padding: "10px 16px", borderRadius: "6px", textDecoration: "none", fontSize: "12px", fontWeight: "bold", border: "1px solid #0d8247" }}>
              ইভেন্ট দেখুন
            </a>
          </div>
          
          {/* Search Box */}
          <div style={{ display: "flex", gap: "8px" }}>
            <input
              type="text"
              placeholder="বই, ভিডিও, নেতা, কমিটি বা ইভেন্ট"
              style={{ width: "100%", backgroundColor: "#031d10", border: "1px solid #14532d", padding: "10px", borderRadius: "6px", color: "#ffffff", fontSize: "12px" }}
            />
            <select style={{ backgroundColor: "#031d10", border: "1px solid #14532d", padding: "10px", borderRadius: "6px", color: "#cbd5e1", fontSize: "12px" }}>
              <option>সব</option>
            </select>
          </div>
        </section>

        {/* Organization Section */}
        <section style={{ marginBottom: "30px" }}>
          <div style={{ width: "30px", height: "4px", backgroundColor: "#e11d48", borderRadius: "2px", marginBottom: "8px" }}></div>
          <h2 style={{ fontSize: "16px", fontWeight: "bold", color: "#34d399", marginBottom: "6px" }}>সংগঠন পরিচিতি</h2>
          <p style={{ fontSize: "12px", color: "#cbd5e1", marginBottom: "8px" }}>
            এই অংশে সংগঠনের পরিচিতি, লক্ষ্য ও ইতিহাস থাকবে।
          </p>
          <span style={{ display: "inline-block", fontSize: "10px", backgroundColor: "rgba(212, 175, 55, 0.2)", color: "#fef08a", padding: "4px 10px", borderRadius: "20px", border: "1px solid rgba(212, 175, 55, 0.4)", marginBottom: "8px" }}>
            প্রতিষ্ঠাতাদের অবদানসমূহ
          </span>
          <p style={{ fontSize: "12px", color: "#94a3b8", lineHeight: "1.5" }}>
            প্রকাশক পর্যায় থেকে এই লেখা প্রকাশ ও প্রকাশনা দ্বারা প্রস্তুত।
          </p>
          <div style={{ width: "100%", height: "160px", backgroundColor: "#064e29", borderRadius: "12px", border: "2px solid #d4af37", marginTop: "12px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "#e11d48", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", fontSize: "20px" }}>🌹</div>
            <span style={{ color: "#d4af37", fontSize: "12px", marginTop: "6px" }}>ZP Digital Banner</span>
          </div>
        </section>

        {/* Quick Access Section */}
        <section style={{ marginBottom: "30px" }}>
          <div style={{ width: "30px", height: "4px", backgroundColor: "#e11d48", borderRadius: "2px", marginBottom: "8px" }}></div>
          <h2 style={{ fontSize: "16px", fontWeight="bold", color: "#34d399", marginBottom: "2px" }}>দ্রুত প্রবেশ</h2>
          <p style={{ fontSize: "11px", color: "#94a3b8", marginBottom: "12px" }}>প্রয়োজনীয় সব বিভাগ</p>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ backgroundColor: "#031d10", padding: "12px", borderRadius: "10px", border: "1px solid #0d522c" }}>
              <h3 style={{ fontSize: "13px", fontWeight: "bold", color: "#ffffff", margin: "0" }}>সংগঠন পরিচিতি</h3>
              <p style={{ fontSize: "10px", color: "#94a3b8", margin: "2px 0 0 0" }}>লক্ষ্য ও পরিচয়</p>
            </div>
            <div style={{ backgroundColor: "#031d10", padding: "12px", borderRadius: "10px", border: "1px solid rgba(212, 175, 55, 0.6)" }}>
              <h3 style={{ fontSize: "13px", fontWeight: "bold", color: "#ffffff", margin: "0" }}>নেতৃবৃন্দ</h3>
              <p style={{ fontSize: "10px", color: "#94a3b8", margin: "2px 0 0 0" }}>নেতাদের তালিকা</p>
            </div>
            <div style={{ backgroundColor: "#031d10", padding: "12px", borderRadius: "10px", border: "1px solid #e11d48" }}>
              <h3 style={{ fontSize: "13px", fontWeight: "bold", color: "#ffffff", margin: "0" }}>কমিটি</h3>
              <p style={{ fontSize: "10px", color: "#94a3b8", margin: "2px 0 0 0" }}>কমিটি ও সদস্য</p>
            </div>
            <div style={{ backgroundColor: "#031d10", padding: "12px", borderRadius: "10px", border: "1px solid #0d522c" }}>
              <h3 style={{ fontSize: "13px", fontWeight: "bold", color: "#ffffff", margin: "0" }}>ডিজিটাল লাইব্রেরি</h3>
              <p style={{ fontSize: "10px", color: "#94a3b8", margin: "2px 0 0 0" }}>বই ও পিডিএফ</p>
            </div>
            <div style={{ backgroundColor: "#031d10", padding: "12px", borderRadius: "10px", border: "1px solid rgba(212, 175, 55, 0.6)" }}>
              <h3 style={{ fontSize: "13px", fontWeight: "bold", color: "#ffffff", margin: "0" }}>ইভেন্ট ও সূচি</h3>
              <p style={{ fontSize: "10px", color: "#94a3b8", margin: "2px 0 0 0" }}>আগামী অনুষ্ঠান</p>
            </div>
            <div style={{ backgroundColor: "#031d10", padding: "12px", borderRadius: "10px", border: "1px solid #e11d48" }}>
              <h3 style={{ fontSize: "13px", fontWeight: "bold", color: "#ffffff", margin: "0" }}>ভিডিও</h3>
              <p style={{ fontSize: "10px", color: "#94a3b8", margin: "2px 0 0 0" }}>অনুষ্ঠান ও আলোচনা</p>
            </div>
          </div>
        </section>

        {/* Books Section */}
        <section>
          <div style={{ width: "30px", height: "4px", backgroundColor: "#e11d48", borderRadius: "2px", marginBottom: "8px" }}></div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
            <h2 style={{ fontSize: "16px", fontWeight: "bold", color: "#34d399", margin: "0" }}>বই ও ডিজিটাল লাইব্রেরি</h2>
            <span style={{ fontSize: "10px", backgroundColor: "#fef08a", color: "#000000", padding: "2px 6px", borderRadius: "4px", fontWeight: "bold" }}>নতুন</span>
          </div>
          <p style={{ fontSize: "12px", color: "#cbd5e1", marginBottom: "12px" }}>অনুমোদিত বই গ্রাহক যোগ করবেন।</p>

          <div style={{ backgroundColor: "#031d10", padding: "14px", borderRadius: "10px", border: "1px solid #e11d48" }}>
            <div style={{ width: "100%", height: "200px", backgroundColor: "#064e29", borderRadius: "8px", border: "1px solid #0d8247", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "10px" }}>
              <span style={{ fontSize: "36px", fontFamily: "serif", color: "#d4af37" }}>১</span>
            </div>
            <h3 style={{ fontSize: "13px", fontWeight: "bold", color: "#ffffff", margin: "0" }}>বইয়ের নাম (নমুনা)</h3>
            <p style={{ fontSize: "11px", color: "#94a3b8", margin: "4px 0 0 0" }}>লেখক - প্রকাশনী</p>
          </div>
        </section>
      </div>
    </div>
  );
                                      }export default function Home() {
  return (
    <div style={{ backgroundColor: "#032313", color: "#ffffff", minHeight: "100vh", fontFamily: "sans-serif", paddingBottom: "40px" }}>
      {/* Navbar */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", backgroundColor: "#032313", borderBottom: "1px solid #0b3c22" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "36px", height: "36px", borderRadius: "8px", backgroundColor: "#064e29", border: "1px solid #d4af37", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", color: "#d4af37", fontSize: "14px" }}>
            ZP
          </div>
          <span style={{ fontSize: "18px", fontWeight: "bold", color: "#ffffff" }}>ZP Digital</span>
        </div>
        <div style={{ padding: "6px 12px", border: "1px solid #0b3c22", borderRadius: "6px", color: "#cbd5e1", fontSize: "14px" }}>
          ☰
        </div>
      </nav>

      <div style={{ padding: "20px 16px", maxWidth: "450px", margin: "0 auto" }}>
        {/* Banner Section */}
        <section style={{ marginBottom: "30px" }}>
          <div style={{ width: "70px", height: "70px", borderRadius: "16px", backgroundColor: "#064e29", border: "2px solid #d4af37", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", color: "#d4af37", fontSize: "22px", marginBottom: "16px" }}>
            ZP
          </div>
          <h1 style={{ fontSize: "22px", fontWeight: "800", color: "#ffffff", marginBottom: "8px", lineHeight: "1.3" }}>
            সত্য তরিকার প্রচারে ZP Digital ।
          </h1>
          <p style={{ fontSize: "13px", color: "#cbd5e1", marginBottom: "16px" }}>
            বই, ভিডিও, ইভেন্ট ও দাওয়াত — এক জায়গায়, বাংলায়।
          </p>
          <div style={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
            <a href="#books" style={{ backgroundColor: "#e11d48", color: "#ffffff", padding: "10px 16px", borderRadius: "6px", textDecoration: "none", fontSize: "12px", fontWeight: "bold" }}>
              বই পড়ুন
            </a>
            <a href="#events" style={{ backgroundColor: "#064e29", color: "#ffffff", padding: "10px 16px", borderRadius: "6px", textDecoration: "none", fontSize: "12px", fontWeight: "bold", border: "1px solid #0d8247" }}>
              ইভেন্ট দেখুন
            </a>
          </div>
          
          {/* Search Box */}
          <div style={{ display: "flex", gap: "8px" }}>
            <input
              type="text"
              placeholder="বই, ভিডিও, নেতা, কমিটি বা ইভেন্ট"
              style={{ width: "100%", backgroundColor: "#031d10", border: "1px solid #14532d", padding: "10px", borderRadius: "6px", color: "#ffffff", fontSize: "12px" }}
            />
            <select style={{ backgroundColor: "#031d10", border: "1px solid #14532d", padding: "10px", borderRadius: "6px", color: "#cbd5e1", fontSize: "12px" }}>
              <option>সব</option>
            </select>
          </div>
        </section>

        {/* Organization Section */}
        <section style={{ marginBottom: "30px" }}>
          <div style={{ width: "30px", height: "4px", backgroundColor: "#e11d48", borderRadius: "2px", marginBottom: "8px" }}></div>
          <h2 style={{ fontSize: "16px", fontWeight: "bold", color: "#34d399", marginBottom: "6px" }}>সংগঠন পরিচিতি</h2>
          <p style={{ fontSize: "12px", color: "#cbd5e1", marginBottom: "8px" }}>
            এই অংশে সংগঠনের পরিচিতি, লক্ষ্য ও ইতিহাস থাকবে।
          </p>
          <span style={{ display: "inline-block", fontSize: "10px", backgroundColor: "rgba(212, 175, 55, 0.2)", color: "#fef08a", padding: "4px 10px", borderRadius: "20px", border: "1px solid rgba(212, 175, 55, 0.4)", marginBottom: "8px" }}>
            প্রতিষ্ঠাতাদের অবদানসমূহ
          </span>
          <p style={{ fontSize: "12px", color: "#94a3b8", lineHeight: "1.5" }}>
            প্রকাশক পর্যায় থেকে এই লেখা প্রকাশ ও প্রকাশনা দ্বারা প্রস্তুত।
          </p>
          <div style={{ width: "100%", height: "160px", backgroundColor: "#064e29", borderRadius: "12px", border: "2px solid #d4af37", marginTop: "12px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "#e11d48", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", fontSize: "20px" }}>🌹</div>
            <span style={{ color: "#d4af37", fontSize: "12px", marginTop: "6px" }}>ZP Digital Banner</span>
          </div>
        </section>

        {/* Quick Access Section */}
        <section style={{ marginBottom: "30px" }}>
          <div style={{ width: "30px", height: "4px", backgroundColor: "#e11d48", borderRadius: "2px", marginBottom: "8px" }}></div>
          <h2 style={{ fontSize: "16px", fontWeight="bold", color: "#34d399", marginBottom: "2px" }}>দ্রুত প্রবেশ</h2>
          <p style={{ fontSize: "11px", color: "#94a3b8", marginBottom: "12px" }}>প্রয়োজনীয় সব বিভাগ</p>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ backgroundColor: "#031d10", padding: "12px", borderRadius: "10px", border: "1px solid #0d522c" }}>
              <h3 style={{ fontSize: "13px", fontWeight: "bold", color: "#ffffff", margin: "0" }}>সংগঠন পরিচিতি</h3>
              <p style={{ fontSize: "10px", color: "#94a3b8", margin: "2px 0 0 0" }}>লক্ষ্য ও পরিচয়</p>
            </div>
            <div style={{ backgroundColor: "#031d10", padding: "12px", borderRadius: "10px", border: "1px solid rgba(212, 175, 55, 0.6)" }}>
              <h3 style={{ fontSize: "13px", fontWeight: "bold", color: "#ffffff", margin: "0" }}>নেতৃবৃন্দ</h3>
              <p style={{ fontSize: "10px", color: "#94a3b8", margin: "2px 0 0 0" }}>নেতাদের তালিকা</p>
            </div>
            <div style={{ backgroundColor: "#031d10", padding: "12px", borderRadius: "10px", border: "1px solid #e11d48" }}>
              <h3 style={{ fontSize: "13px", fontWeight: "bold", color: "#ffffff", margin: "0" }}>কমিটি</h3>
              <p style={{ fontSize: "10px", color: "#94a3b8", margin: "2px 0 0 0" }}>কমিটি ও সদস্য</p>
            </div>
            <div style={{ backgroundColor: "#031d10", padding: "12px", borderRadius: "10px", border: "1px solid #0d522c" }}>
              <h3 style={{ fontSize: "13px", fontWeight: "bold", color: "#ffffff", margin: "0" }}>ডিজিটাল লাইব্রেরি</h3>
              <p style={{ fontSize: "10px", color: "#94a3b8", margin: "2px 0 0 0" }}>বই ও পিডিএফ</p>
            </div>
            <div style={{ backgroundColor: "#031d10", padding: "12px", borderRadius: "10px", border: "1px solid rgba(212, 175, 55, 0.6)" }}>
              <h3 style={{ fontSize: "13px", fontWeight: "bold", color: "#ffffff", margin: "0" }}>ইভেন্ট ও সূচি</h3>
              <p style={{ fontSize: "10px", color: "#94a3b8", margin: "2px 0 0 0" }}>আগামী অনুষ্ঠান</p>
            </div>
            <div style={{ backgroundColor: "#031d10", padding: "12px", borderRadius: "10px", border: "1px solid #e11d48" }}>
              <h3 style={{ fontSize: "13px", fontWeight: "bold", color: "#ffffff", margin: "0" }}>ভিডিও</h3>
              <p style={{ fontSize: "10px", color: "#94a3b8", margin: "2px 0 0 0" }}>অনুষ্ঠান ও আলোচনা</p>
            </div>
          </div>
        </section>

        {/* Books Section */}
        <section>
          <div style={{ width: "30px", height: "4px", backgroundColor: "#e11d48", borderRadius: "2px", marginBottom: "8px" }}></div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
            <h2 style={{ fontSize: "16px", fontWeight: "bold", color: "#34d399", margin: "0" }}>বই ও ডিজিটাল লাইব্রেরি</h2>
            <span style={{ fontSize: "10px", backgroundColor: "#fef08a", color: "#000000", padding: "2px 6px", borderRadius: "4px", fontWeight: "bold" }}>নতুন</span>
          </div>
          <p style={{ fontSize: "12px", color: "#cbd5e1", marginBottom: "12px" }}>অনুমোদিত বই গ্রাহক যোগ করবেন।</p>

          <div style={{ backgroundColor: "#031d10", padding: "14px", borderRadius: "10px", border: "1px solid #e11d48" }}>
            <div style={{ width: "100%", height: "200px", backgroundColor: "#064e29", borderRadius: "8px", border: "1px solid #0d8247", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "10px" }}>
              <span style={{ fontSize: "36px", fontFamily: "serif", color: "#d4af37" }}>১</span>
            </div>
            <h3 style={{ fontSize: "13px", fontWeight: "bold", color: "#ffffff", margin: "0" }}>বইয়ের নাম (নমুনা)</h3>
            <p style={{ fontSize: "11px", color: "#94a3b8", margin: "4px 0 0 0" }}>লেখক - প্রকাশনী</p>
          </div>
        </section>
      </div>
    </div>
  );
                }export default function Home() {
  return (
    <div style={{ backgroundColor: "#032313", color: "#ffffff", minHeight: "100vh", fontFamily: "sans-serif", paddingBottom: "40px" }}>
      {/* Navbar */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", backgroundColor: "#032313", borderBottom: "1px solid #0b3c22" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "36px", height: "36px", borderRadius: "8px", backgroundColor: "#064e29", border: "1px solid #d4af37", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", color: "#d4af37", fontSize: "14px" }}>
            ZP
          </div>
          <span style={{ fontSize: "18px", fontWeight: "bold", color: "#ffffff" }}>ZP Digital</span>
        </div>
        <div style={{ padding: "6px 12px", border: "1px solid #0b3c22", borderRadius: "6px", color: "#cbd5e1", fontSize: "14px" }}>
          ☰
        </div>
      </nav>

      <div style={{ padding: "20px 16px", maxWidth: "450px", margin: "0 auto" }}>
        {/* Banner Section */}
        <section style={{ marginBottom: "30px" }}>
          <div style={{ width: "70px", height: "70px", borderRadius: "16px", backgroundColor: "#064e29", border: "2px solid #d4af37", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", color: "#d4af37", fontSize: "22px", marginBottom: "16px" }}>
            ZP
          </div>
          <h1 style={{ fontSize: "22px", fontWeight: "800", color: "#ffffff", marginBottom: "8px", lineHeight: "1.3" }}>
            সত্য তরিকার প্রচারে ZP Digital ।
          </h1>
          <p style={{ fontSize: "13px", color: "#cbd5e1", marginBottom: "16px" }}>
            বই, ভিডিও, ইভেন্ট ও দাওয়াত — এক জায়গায়, বাংলায়।
          </p>
          <div style={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
            <a href="#books" style={{ backgroundColor: "#e11d48", color: "#ffffff", padding: "10px 16px", borderRadius: "6px", textDecoration: "none", fontSize: "12px", fontWeight: "bold" }}>
              বই পড়ুন
            </a>
            <a href="#events" style={{ backgroundColor: "#064e29", color: "#ffffff", padding: "10px 16px", borderRadius: "6px", textDecoration: "none", fontSize: "12px", fontWeight: "bold", border: "1px solid #0d8247" }}>
              ইভেন্ট দেখুন
            </a>
          </div>
          
          {/* Search Box */}
          <div style={{ display: "flex", gap: "8px" }}>
            <input
              type="text"
              placeholder="বই, ভিডিও, নেতা, কমিটি বা ইভেন্ট"
              style={{ width: "100%", backgroundColor: "#031d10", border: "1px solid #14532d", padding: "10px", borderRadius: "6px", color: "#ffffff", fontSize: "12px" }}
            />
            <select style={{ backgroundColor: "#031d10", border: "1px solid #14532d", padding: "10px", borderRadius: "6px", color: "#cbd5e1", fontSize: "12px" }}>
              <option>সব</option>
            </select>
          </div>
        </section>

        {/* Organization Section */}
        <section style={{ marginBottom: "30px" }}>
          <div style={{ width: "30px", height: "4px", backgroundColor: "#e11d48", borderRadius: "2px", marginBottom: "8px" }}></div>
          <h2 style={{ fontSize: "16px", fontWeight: "bold", color: "#34d399", marginBottom: "6px" }}>সংগঠন পরিচিতি</h2>
          <p style={{ fontSize: "12px", color: "#cbd5e1", marginBottom: "8px" }}>
            এই অংশে সংগঠনের পরিচিতি, লক্ষ্য ও ইতিহাস থাকবে।
          </p>
          <span style={{ display: "inline-block", fontSize: "10px", backgroundColor: "rgba(212, 175, 55, 0.2)", color: "#fef08a", padding: "4px 10px", borderRadius: "20px", border: "1px solid rgba(212, 175, 55, 0.4)", marginBottom: "8px" }}>
            প্রতিষ্ঠাতাদের অবদানসমূহ
          </span>
          <p style={{ fontSize: "12px", color: "#94a3b8", lineHeight: "1.5" }}>
            প্রকাশক পর্যায় থেকে এই লেখা প্রকাশ ও প্রকাশনা দ্বারা প্রস্তুত।
          </p>
          <div style={{ width: "100%", height: "160px", backgroundColor: "#064e29", borderRadius: "12px", border: "2px solid #d4af37", marginTop: "12px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "#e11d48", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", fontSize: "20px" }}>🌹</div>
            <span style={{ color: "#d4af37", fontSize: "12px", marginTop: "6px" }}>ZP Digital Banner</span>
          </div>
        </section>

        {/* Quick Access Section */}
        <section style={{ marginBottom: "30px" }}>
          <div style={{ width: "30px", height: "4px", backgroundColor: "#e11d48", borderRadius: "2px", marginBottom: "8px" }}></div>
          <h2 style={{ fontSize: "16px", fontWeight="bold", color: "#34d399", marginBottom: "2px" }}>দ্রুত প্রবেশ</h2>
          <p style={{ fontSize: "11px", color: "#94a3b8", marginBottom: "12px" }}>প্রয়োজনীয় সব বিভাগ</p>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ backgroundColor: "#031d10", padding: "12px", borderRadius: "10px", border: "1px solid #0d522c" }}>
              <h3 style={{ fontSize: "13px", fontWeight: "bold", color: "#ffffff", margin: "0" }}>সংগঠন পরিচিতি</h3>
              <p style={{ fontSize: "10px", color: "#94a3b8", margin: "2px 0 0 0" }}>লক্ষ্য ও পরিচয়</p>
            </div>
            <div style={{ backgroundColor: "#031d10", padding: "12px", borderRadius: "10px", border: "1px solid rgba(212, 175, 55, 0.6)" }}>
              <h3 style={{ fontSize: "13px", fontWeight: "bold", color: "#ffffff", margin: "0" }}>নেতৃবৃন্দ</h3>
              <p style={{ fontSize: "10px", color: "#94a3b8", margin: "2px 0 0 0" }}>নেতাদের তালিকা</p>
            </div>
            <div style={{ backgroundColor: "#031d10", padding: "12px", borderRadius: "10px", border: "1px solid #e11d48" }}>
              <h3 style={{ fontSize: "13px", fontWeight: "bold", color: "#ffffff", margin: "0" }}>কমিটি</h3>
              <p style={{ fontSize: "10px", color: "#94a3b8", margin: "2px 0 0 0" }}>কমিটি ও সদস্য</p>
            </div>
            <div style={{ backgroundColor: "#031d10", padding: "12px", borderRadius: "10px", border: "1px solid #0d522c" }}>
              <h3 style={{ fontSize: "13px", fontWeight: "bold", color: "#ffffff", margin: "0" }}>ডিজিটাল লাইব্রেরি</h3>
              <p style={{ fontSize: "10px", color: "#94a3b8", margin: "2px 0 0 0" }}>বই ও পিডিএফ</p>
            </div>
            <div style={{ backgroundColor: "#031d10", padding: "12px", borderRadius: "10px", border: "1px solid rgba(212, 175, 55, 0.6)" }}>
              <h3 style={{ fontSize: "13px", fontWeight: "bold", color: "#ffffff", margin: "0" }}>ইভেন্ট ও সূচি</h3>
              <p style={{ fontSize: "10px", color: "#94a3b8", margin: "2px 0 0 0" }}>আগামী অনুষ্ঠান</p>
            </div>
            <div style={{ backgroundColor: "#031d10", padding: "12px", borderRadius: "10px", border: "1px solid #e11d48" }}>
              <h3 style={{ fontSize: "13px", fontWeight: "bold", color: "#ffffff", margin: "0" }}>ভিডিও</h3>
              <p style={{ fontSize: "10px", color: "#94a3b8", margin: "2px 0 0 0" }}>অনুষ্ঠান ও আলোচনা</p>
            </div>
          </div>
        </section>

        {/* Books Section */}
        <section>
          <div style={{ width: "30px", height: "4px", backgroundColor: "#e11d48", borderRadius: "2px", marginBottom: "8px" }}></div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
            <h2 style={{ fontSize: "16px", fontWeight: "bold", color: "#34d399", margin: "0" }}>বই ও ডিজিটাল লাইব্রেরি</h2>
            <span style={{ fontSize: "10px", backgroundColor: "#fef08a", color: "#000000", padding: "2px 6px", borderRadius: "4px", fontWeight: "bold" }}>নতুন</span>
          </div>
          <p style={{ fontSize: "12px", color: "#cbd5e1", marginBottom: "12px" }}>অনুমোদিত বই গ্রাহক যোগ করবেন।</p>

          <div style={{ backgroundColor: "#031d10", padding: "14px", borderRadius: "10px", border: "1px solid #e11d48" }}>
            <div style={{ width: "100%", height: "200px", backgroundColor: "#064e29", borderRadius: "8px", border: "1px solid #0d8247", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "10px" }}>
              <span style={{ fontSize: "36px", fontFamily: "serif", color: "#d4af37" }}>১</span>
            </div>
            <h3 style={{ fontSize: "13px", fontWeight: "bold", color: "#ffffff", margin: "0" }}>বইয়ের নাম (নমুনা)</h3>
            <p style={{ fontSize: "11px", color: "#94a3b8", margin: "4px 0 0 0" }}>লেখক - প্রকাশনী</p>
          </div>
        </section>
      </div>
    </div>
  );
      }export default function Home() {
  return (
    <div style={{ backgroundColor: "#032313", color: "#ffffff", minHeight: "100vh", fontFamily: "sans-serif", paddingBottom: "40px" }}>
      {/* Navbar */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", backgroundColor: "#032313", borderBottom: "1px solid #0b3c22" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "36px", height: "36px", borderRadius: "8px", backgroundColor: "#064e29", border: "1px solid #d4af37", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", color: "#d4af37", fontSize: "14px" }}>
            ZP
          </div>
          <span style={{ fontSize: "18px", fontWeight: "bold", color: "#ffffff" }}>ZP Digital</span>
        </div>
        <div style={{ padding: "6px 12px", border: "1px solid #0b3c22", borderRadius: "6px", color: "#cbd5e1", fontSize: "14px" }}>
          ☰
        </div>
      </nav>

      <div style={{ padding: "20px 16px", maxWidth: "450px", margin: "0 auto" }}>
        {/* Banner Section */}
        <section style={{ marginBottom: "30px" }}>
          <div style={{ width: "70px", height: "70px", borderRadius: "16px", backgroundColor: "#064e29", border: "2px solid #d4af37", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", color: "#d4af37", fontSize: "22px", marginBottom: "16px" }}>
            ZP
          </div>
          <h1 style={{ fontSize: "22px", fontWeight: "800", color: "#ffffff", marginBottom: "8px", lineHeight: "1.3" }}>
            সত্য তরিকার প্রচারে ZP Digital ।
          </h1>
          <p style={{ fontSize: "13px", color: "#cbd5e1", marginBottom: "16px" }}>
            বই, ভিডিও, ইভেন্ট ও দাওয়াত — এক জায়গায়, বাংলায়।
          </p>
          <div style={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
            <a href="#books" style={{ backgroundColor: "#e11d48", color: "#ffffff", padding: "10px 16px", borderRadius: "6px", textDecoration: "none", fontSize: "12px", fontWeight: "bold" }}>
              বই পড়ুন
            </a>
            <a href="#events" style={{ backgroundColor: "#064e29", color: "#ffffff", padding: "10px 16px", borderRadius: "6px", textDecoration: "none", fontSize: "12px", fontWeight: "bold", border: "1px solid #0d8247" }}>
              ইভেন্ট দেখুন
            </a>
          </div>
          
          {/* Search Box */}
          <div style={{ display: "flex", gap: "8px" }}>
            <input
              type="text"
              placeholder="বই, ভিডিও, নেতা, কমিটি বা ইভেন্ট"
              style={{ width: "100%", backgroundColor: "#031d10", border: "1px solid #14532d", padding: "10px", borderRadius: "6px", color: "#ffffff", fontSize: "12px" }}
            />
            <select style={{ backgroundColor: "#031d10", border: "1px solid #14532d", padding: "10px", borderRadius: "6px", color: "#cbd5e1", fontSize: "12px" }}>
              <option>সব</option>
            </select>
          </div>
        </section>

        {/* Organization Section */}
        <section style={{ marginBottom: "30px" }}>
          <div style={{ width: "30px", height: "4px", backgroundColor: "#e11d48", borderRadius: "2px", marginBottom: "8px" }}></div>
          <h2 style={{ fontSize: "16px", fontWeight: "bold", color: "#34d399", marginBottom: "6px" }}>সংগঠন পরিচিতি</h2>
          <p style={{ fontSize: "12px", color: "#cbd5e1", marginBottom: "8px" }}>
            এই অংশে সংগঠনের পরিচিতি, লক্ষ্য ও ইতিহাস থাকবে।
          </p>
          <span style={{ display: "inline-block", fontSize: "10px", backgroundColor: "rgba(212, 175, 55, 0.2)", color: "#fef08a", padding: "4px 10px", borderRadius: "20px", border: "1px solid rgba(212, 175, 55, 0.4)", marginBottom: "8px" }}>
            প্রতিষ্ঠাতাদের অবদানসমূহ
          </span>
          <p style={{ fontSize: "12px", color: "#94a3b8", lineHeight: "1.5" }}>
            প্রকাশক পর্যায় থেকে এই লেখা প্রকাশ ও প্রকাশনা দ্বারা প্রস্তুত।
          </p>
          <div style={{ width: "100%", height: "160px", backgroundColor: "#064e29", borderRadius: "12px", border: "2px solid #d4af37", marginTop: "12px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "#e11d48", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", fontSize: "20px" }}>🌹</div>
            <span style={{ color: "#d4af37", fontSize: "12px", marginTop: "6px" }}>ZP Digital Banner</span>
          </div>
        </section>

        {/* Quick Access Section */}
        <section style={{ marginBottom: "30px" }}>
          <div style={{ width: "30px", height: "4px", backgroundColor: "#e11d48", borderRadius: "2px", marginBottom: "8px" }}></div>
          <h2 style={{ fontSize: "16px", fontWeight="bold", color: "#34d399", marginBottom: "2px" }}>দ্রুত প্রবেশ</h2>
          <p style={{ fontSize: "11px", color: "#94a3b8", marginBottom: "12px" }}>প্রয়োজনীয় সব বিভাগ</p>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ backgroundColor: "#031d10", padding: "12px", borderRadius: "10px", border: "1px solid #0d522c" }}>
              <h3 style={{ fontSize: "13px", fontWeight: "bold", color: "#ffffff", margin: "0" }}>সংগঠন পরিচিতি</h3>
              <p style={{ fontSize: "10px", color: "#94a3b8", margin: "2px 0 0 0" }}>লক্ষ্য ও পরিচয়</p>
            </div>
            <div style={{ backgroundColor: "#031d10", padding: "12px", borderRadius: "10px", border: "1px solid rgba(212, 175, 55, 0.6)" }}>
              <h3 style={{ fontSize: "13px", fontWeight: "bold", color: "#ffffff", margin: "0" }}>নেতৃবৃন্দ</h3>
              <p style={{ fontSize: "10px", color: "#94a3b8", margin: "2px 0 0 0" }}>নেতাদের তালিকা</p>
            </div>
            <div style={{ backgroundColor: "#031d10", padding: "12px", borderRadius: "10px", border: "1px solid #e11d48" }}>
              <h3 style={{ fontSize: "13px", fontWeight: "bold", color: "#ffffff", margin: "0" }}>কমিটি</h3>
              <p style={{ fontSize: "10px", color: "#94a3b8", margin: "2px 0 0 0" }}>কমিটি ও সদস্য</p>
            </div>
            <div style={{ backgroundColor: "#031d10", padding: "12px", borderRadius: "10px", border: "1px solid #0d522c" }}>
              <h3 style={{ fontSize: "13px", fontWeight: "bold", color: "#ffffff", margin: "0" }}>ডিজিটাল লাইব্রেরি</h3>
              <p style={{ fontSize: "10px", color: "#94a3b8", margin: "2px 0 0 0" }}>বই ও পিডিএফ</p>
            </div>
            <div style={{ backgroundColor: "#031d10", padding: "12px", borderRadius: "10px", border: "1px solid rgba(212, 175, 55, 0.6)" }}>
              <h3 style={{ fontSize: "13px", fontWeight: "bold", color: "#ffffff", margin: "0" }}>ইভেন্ট ও সূচি</h3>
              <p style={{ fontSize: "10px", color: "#94a3b8", margin: "2px 0 0 0" }}>আগামী অনুষ্ঠান</p>
            </div>
            <div style={{ backgroundColor: "#031d10", padding: "12px", borderRadius: "10px", border: "1px solid #e11d48" }}>
              <h3 style={{ fontSize: "13px", fontWeight: "bold", color: "#ffffff", margin: "0" }}>ভিডিও</h3>
              <p style={{ fontSize: "10px", color: "#94a3b8", margin: "2px 0 0 0" }}>অনুষ্ঠান ও আলোচনা</p>
            </div>
          </div>
        </section>

        {/* Books Section */}
        <section>
          <div style={{ width: "30px", height: "4px", backgroundColor: "#e11d48", borderRadius: "2px", marginBottom: "8px" }}></div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
            <h2 style={{ fontSize: "16px", fontWeight: "bold", color: "#34d399", margin: "0" }}>বই ও ডিজিটাল লাইব্রেরি</h2>
            <span style={{ fontSize: "10px", backgroundColor: "#fef08a", color: "#000000", padding: "2px 6px", borderRadius: "4px", fontWeight: "bold" }}>নতুন</span>
          </div>
          <p style={{ fontSize: "12px", color: "#cbd5e1", marginBottom: "12px" }}>অনুমোদিত বই গ্রাহক যোগ করবেন।</p>

          <div style={{ backgroundColor: "#031d10", padding: "14px", borderRadius: "10px", border: "1px solid #e11d48" }}>
            <div style={{ width: "100%", height: "200px", backgroundColor: "#064e29", borderRadius: "8px", border: "1px solid #0d8247", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "10px" }}>
              <span style={{ fontSize: "36px", fontFamily: "serif", color: "#d4af37" }}>১</span>
            </div>
            <h3 style={{ fontSize: "13px", fontWeight: "bold", color: "#ffffff", margin: "0" }}>বইয়ের নাম (নমুনা)</h3>
            <p style={{ fontSize: "11px", color: "#94a3b8", margin: "4px 0 0 0" }}>লেখক - প্রকাশনী</p>
          </div>
        </section>
      </div>
    </div>
  );
                       }export default function Home() {
  return (
    <div style={{ backgroundColor: "#032313", color: "#ffffff", minHeight: "100vh", fontFamily: "sans-serif", paddingBottom: "40px" }}>
      {/* Navbar */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", backgroundColor: "#032313", borderBottom: "1px solid #0b3c22" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "36px", height: "36px", borderRadius: "8px", backgroundColor: "#064e29", border: "1px solid #d4af37", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", color: "#d4af37", fontSize: "14px" }}>
            ZP
          </div>
          <span style={{ fontSize: "18px", fontWeight: "bold", color: "#ffffff" }}>ZP Digital</span>
        </div>
        <div style={{ padding: "6px 12px", border: "1px solid #0b3c22", borderRadius: "6px", color: "#cbd5e1", fontSize: "14px" }}>
          ☰
        </div>
      </nav>

      <div style={{ padding: "20px 16px", maxWidth: "450px", margin: "0 auto" }}>
        {/* Banner Section */}
        <section style={{ marginBottom: "30px" }}>
          <div style={{ width: "70px", height: "70px", borderRadius: "16px", backgroundColor: "#064e29", border: "2px solid #d4af37", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", color: "#d4af37", fontSize: "22px", marginBottom: "16px" }}>
            ZP
          </div>
          <h1 style={{ fontSize: "22px", fontWeight: "800", color: "#ffffff", marginBottom: "8px", lineHeight: "1.3" }}>
            সত্য তরিকার প্রচারে ZP Digital ।
          </h1>
          <p style={{ fontSize: "13px", color: "#cbd5e1", marginBottom: "16px" }}>
            বই, ভিডিও, ইভেন্ট ও দাওয়াত — এক জায়গায়, বাংলায়।
          </p>
          <div style={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
            <a href="#books" style={{ backgroundColor: "#e11d48", color: "#ffffff", padding: "10px 16px", borderRadius: "6px", textDecoration: "none", fontSize: "12px", fontWeight: "bold" }}>
              বই পড়ুন
            </a>
            <a href="#events" style={{ backgroundColor: "#064e29", color: "#ffffff", padding: "10px 16px", borderRadius: "6px", textDecoration: "none", fontSize: "12px", fontWeight: "bold", border: "1px solid #0d8247" }}>
              ইভেন্ট দেখুন
            </a>
          </div>
          
          {/* Search Box */}
          <div style={{ display: "flex", gap: "8px" }}>
            <input
              type="text"
              placeholder="বই, ভিডিও, নেতা, কমিটি বা ইভেন্ট"
              style={{ width: "100%", backgroundColor: "#031d10", border: "1px solid #14532d", padding: "10px", borderRadius: "6px", color: "#ffffff", fontSize: "12px" }}
            />
            <select style={{ backgroundColor: "#031d10", border: "1px solid #14532d", padding: "10px", borderRadius: "6px", color: "#cbd5e1", fontSize: "12px" }}>
              <option>সব</option>
            </select>
          </div>
        </section>

        {/* Organization Section */}
        <section style={{ marginBottom: "30px" }}>
          <div style={{ width: "30px", height: "4px", backgroundColor: "#e11d48", borderRadius: "2px", marginBottom: "8px" }}></div>
          <h2 style={{ fontSize: "16px", fontWeight: "bold", color: "#34d399", marginBottom: "6px" }}>সংগঠন পরিচিতি</h2>
          <p style={{ fontSize: "12px", color: "#cbd5e1", marginBottom: "8px" }}>
            এই অংশে সংগঠনের পরিচিতি, লক্ষ্য ও ইতিহাস থাকবে।
          </p>
          <span style={{ display: "inline-block", fontSize: "10px", backgroundColor: "rgba(212, 175, 55, 0.2)", color: "#fef08a", padding: "4px 10px", borderRadius: "20px", border: "1px solid rgba(212, 175, 55, 0.4)", marginBottom: "8px" }}>
            প্রতিষ্ঠাতাদের অবদানসমূহ
          </span>
          <p style={{ fontSize: "12px", color: "#94a3b8", lineHeight: "1.5" }}>
            প্রকাশক পর্যায় থেকে এই লেখা প্রকাশ ও প্রকাশনা দ্বারা প্রস্তুত।
          </p>
          <div style={{ width: "100%", height: "160px", backgroundColor: "#064e29", borderRadius: "12px", border: "2px solid #d4af37", marginTop: "12px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "#e11d48", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", fontSize: "20px" }}>🌹</div>
            <span style={{ color: "#d4af37", fontSize: "12px", marginTop: "6px" }}>ZP Digital Banner</span>
          </div>
        </section>

        {/* Quick Access Section */}
        <section style={{ marginBottom: "30px" }}>
          <div style={{ width: "30px", height: "4px", backgroundColor: "#e11d48", borderRadius: "2px", marginBottom: "8px" }}></div>
          <h2 style={{ fontSize: "16px", fontWeight="bold", color: "#34d399", marginBottom: "2px" }}>দ্রুত প্রবেশ</h2>
          <p style={{ fontSize: "11px", color: "#94a3b8", marginBottom: "12px" }}>প্রয়োজনীয় সব বিভাগ</p>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ backgroundColor: "#031d10", padding: "12px", borderRadius: "10px", border: "1px solid #0d522c" }}>
              <h3 style={{ fontSize: "13px", fontWeight: "bold", color: "#ffffff", margin: "0" }}>সংগঠন পরিচিতি</h3>
              <p style={{ fontSize: "10px", color: "#94a3b8", margin: "2px 0 0 0" }}>লক্ষ্য ও পরিচয়</p>
            </div>
            <div style={{ backgroundColor: "#031d10", padding: "12px", borderRadius: "10px", border: "1px solid rgba(212, 175, 55, 0.6)" }}>
              <h3 style={{ fontSize: "13px", fontWeight: "bold", color: "#ffffff", margin: "0" }}>নেতৃবৃন্দ</h3>
              <p style={{ fontSize: "10px", color: "#94a3b8", margin: "2px 0 0 0" }}>নেতাদের তালিকা</p>
            </div>
            <div style={{ backgroundColor: "#031d10", padding: "12px", borderRadius: "10px", border: "1px solid #e11d48" }}>
              <h3 style={{ fontSize: "13px", fontWeight: "bold", color: "#ffffff", margin: "0" }}>কমিটি</h3>
              <p style={{ fontSize: "10px", color: "#94a3b8", margin: "2px 0 0 0" }}>কমিটি ও সদস্য</p>
            </div>
            <div style={{ backgroundColor: "#031d10", padding: "12px", borderRadius: "10px", border: "1px solid #0d522c" }}>
              <h3 style={{ fontSize: "13px", fontWeight: "bold", color: "#ffffff", margin: "0" }}>ডিজিটাল লাইব্রেরি</h3>
              <p style={{ fontSize: "10px", color: "#94a3b8", margin: "2px 0 0 0" }}>বই ও পিডিএফ</p>
            </div>
            <div style={{ backgroundColor: "#031d10", padding: "12px", borderRadius: "10px", border: "1px solid rgba(212, 175, 55, 0.6)" }}>
              <h3 style={{ fontSize: "13px", fontWeight: "bold", color: "#ffffff", margin: "0" }}>ইভেন্ট ও সূচি</h3>
              <p style={{ fontSize: "10px", color: "#94a3b8", margin: "2px 0 0 0" }}>আগামী অনুষ্ঠান</p>
            </div>
            <div style={{ backgroundColor: "#031d10", padding: "12px", borderRadius: "10px", border: "1px solid #e11d48" }}>
              <h3 style={{ fontSize: "13px", fontWeight: "bold", color: "#ffffff", margin: "0" }}>ভিডিও</h3>
              <p style={{ fontSize: "10px", color: "#94a3b8", margin: "2px 0 0 0" }}>অনুষ্ঠান ও আলোচনা</p>
            </div>
          </div>
        </section>

        {/* Books Section */}
        <section>
          <div style={{ width: "30px", height: "4px", backgroundColor: "#e11d48", borderRadius: "2px", marginBottom: "8px" }}></div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
            <h2 style={{ fontSize: "16px", fontWeight: "bold", color: "#34d399", margin: "0" }}>বই ও ডিজিটাল লাইব্রেরি</h2>
            <span style={{ fontSize: "10px", backgroundColor: "#fef08a", color: "#000000", padding: "2px 6px", borderRadius: "4px", fontWeight: "bold" }}>নতুন</span>
          </div>
          <p style={{ fontSize: "12px", color: "#cbd5e1", marginBottom: "12px" }}>অনুমোদিত বই গ্রাহক যোগ করবেন।</p>

          <div style={{ backgroundColor: "#031d10", padding: "14px", borderRadius: "10px", border: "1px solid #e11d48" }}>
            <div style={{ width: "100%", height: "200px", backgroundColor: "#064e29", borderRadius: "8px", border: "1px solid #0d8247", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "10px" }}>
              <span style={{ fontSize: "36px", fontFamily: "serif", color: "#d4af37" }}>১</span>
            </div>
            <h3 style={{ fontSize: "13px", fontWeight: "bold", color: "#ffffff", margin: "0" }}>বইয়ের নাম (নমুনা)</h3>
            <p style={{ fontSize: "11px", color: "#94a3b8", margin: "4px 0 0 0" }}>লেখক - প্রকাশনী</p>
          </div>
        </section>
      </div>
    </div>
  );
            }
