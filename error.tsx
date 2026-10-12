'use client';
export default function Err({ reset }: { reset: () => void }) {
  return <div className="wrap"><h1>কিছু ভুল হয়েছে</h1><p>ইন্টারনেট সংযোগ দেখে আবার চেষ্টা করুন।</p><button className="btn" onClick={reset}>আবার চেষ্টা করুন</button></div>;
}
