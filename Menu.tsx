'use client';
import Link from 'next/link';
import { useState } from 'react';
export default function Menu({ items }: { items: [string, string][] }) {
  const [open, setOpen] = useState(false);
  return (<>
    <button className="mb" aria-expanded={open} aria-label="মেনু" onClick={() => setOpen(!open)}>☰</button>
    <nav className={open ? 'open' : ''} onClick={() => setOpen(false)}>
      {items.map(([h, l]) => <Link key={h} href={h}>{l}</Link>)}
    </nav></>);
}
