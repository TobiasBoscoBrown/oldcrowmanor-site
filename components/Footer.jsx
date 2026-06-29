'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function Footer({ site }) {
  const path = usePathname();
  if (path && path.startsWith('/admin')) return null;
  const _w = String(site.brand).trim().split(' ');
  const _last = _w.length > 1 ? _w.pop() : '';
  const b1 = _w.join(' ');
  const b2 = _last;
  return (
    <footer>
      <div className="wrap">
        <div className="foot-inner">
          <Link href="/" className="brand">{b1}{b2 ? <> <span className="accent">{b2}</span></> : null}</Link>
          <div>&copy; {new Date().getFullYear()} {site.brand}. All rights reserved.</div>
        </div>
        <div className="foot-cta">
          <a href="https://buildmytribe.io" target="_blank" rel="noopener">site by buildmytribe</a>
        </div>
      </div>
    </footer>
  );
}
