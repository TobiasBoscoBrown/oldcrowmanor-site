'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const TABS = [
  { href: '/modeling', key: 'modeling' },
  { href: '/acting', key: 'acting' },
  { href: '/content-creation', key: 'content-creation' },
  { href: '/about', key: 'about' },
  { href: '/contact', key: 'contact' },
];

export default function Nav({ brand, email, pages }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => { setOpen(false); }, [path]);
  if (path && path.startsWith('/admin')) return null;
  const _w = String(brand).trim().split(' ');
  const _last = _w.length > 1 ? _w.pop() : '';
  const b1 = _w.join(' ');
  const b2 = _last;
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link href="/" className="brand">{b1}{b2 ? <> <span>{b2}</span></> : null}</Link>
        <button className="menu-btn" aria-label="Menu" onClick={() => setOpen(o => !o)}>
          <i></i><i></i><i></i>
        </button>
        <nav className={`nav-links${open ? ' open' : ''}`}>
          {TABS.map(t => (
            <Link key={t.key} href={t.href} className={path === t.href ? 'active' : ''}>
              {pages[t.key]?.nav || t.key}
            </Link>
          ))}
          <Link href="/contact" className="nav-cta">Plan a Visit</Link>
        </nav>
      </div>
    </header>
  );
}
