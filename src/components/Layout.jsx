import React, { useState, useEffect, useRef } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { PROFILE, SOCIALS } from '../data/siteData';
import { SOCIAL_ICONS } from './Icons';

const LINKS = [['Home', '#/', 'home'], ['About', '#/about', 'about'], ['Case Studies', '#/case-studies', 'case'], ['Projects', '#/projects', 'projects']];

export const Navbar = ({ page, dark, toggle }) => {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <a className="nav-logo" href="#/">{PROFILE.logo}</a>
      <nav className={`nav-links ${open ? 'open' : ''}`}>
        {LINKS.map(([t, h, k]) => (
          <a key={k} href={h} className={page === k ? 'active' : ''} onClick={() => setOpen(false)}>{t}</a>
        ))}
      </nav>
      <div className="nav-right">
        <button className="icon-btn" onClick={toggle} aria-label="Toggle dark mode">{dark ? <FaSun /> : <FaMoon />}</button>
        <button className="icon-btn menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <FaTimes /> : <FaBars />}</button>
      </div>
    </header>
  );
};

export const Socials = ({ small }) => (
  <div className={`socials ${small ? 'small' : ''}`}>
    {SOCIALS.map((s) => (<a key={s.type} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.type}>{SOCIAL_ICONS[s.type]}</a>))}
  </div>
);

export const Footer = () => (
  <footer className="footer">
    <b className="display">{PROFILE.firstName} {PROFILE.lastName}</b>
    <span>© {new Date().getFullYear()} {PROFILE.firstName[0]}{PROFILE.firstName.slice(1).toLowerCase()} {PROFILE.lastName[0]}{PROFILE.lastName.slice(1).toLowerCase()}. All rights reserved.</span>
    <Socials small />
  </footer>
);

const DOTS = Array.from({ length: 22 }, (_, i) => ({ l: (i * 37) % 100, t: (i * 53) % 100, d: (i % 7) * 0.6 }));
export const Sparkles = () => (
  <div className="sparkles" aria-hidden="true">
    {DOTS.map((d, i) => <i key={i} style={{ left: d.l + '%', top: d.t + '%', animationDelay: d.d + 's' }} />)}
  </div>
);

export const Connect = () => (
  <section className="connect">
    <div className="connect-inner">
      <h2 className="display h-lg home-title sm">Let's Connect</h2>
      <p>Let's build something people love to use. Send me a message and tell me about your project, and I'll get back to you soon!</p>
      <ul>
        <li><FaEnvelope /><a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></li>
        {PROFILE.phone && <li><FaPhoneAlt /><a href={`tel:${PROFILE.phone.replace(/\s/g, '')}`}>{PROFILE.phone}</a></li>}
        {(PROFILE.address || PROFILE.location) && <li><FaMapMarkerAlt /><span>{PROFILE.address || PROFILE.location}</span></li>}
      </ul>
    </div>
  </section>
);

// Floating "Read the case study" button that follows the mouse over any element with data-cursor="..."
export const CursorLabel = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined;
    let raf = 0; let x = 0; let y = 0;
    const move = (e) => {
      x = e.clientX; y = e.clientY;
      const t = e.target.closest ? e.target.closest('[data-cursor]') : null;
      if (t) { el.dataset.on = '1'; el.dataset.side = x < 260 ? 'r' : 'l'; el.querySelector('b').textContent = t.dataset.cursor; } else el.dataset.on = '0';
      if (!raf) raf = requestAnimationFrame(() => { el.style.transform = `translate(${x}px, ${y}px)`; raf = 0; });
    };
    const leave = () => { el.dataset.on = '0'; };
    document.addEventListener('mousemove', move); document.documentElement.addEventListener('mouseleave', leave); window.addEventListener('hashchange', leave); window.addEventListener('scroll', leave, { passive: true });
    return () => { document.removeEventListener('mousemove', move); document.documentElement.removeEventListener('mouseleave', leave); window.removeEventListener('hashchange', leave); window.removeEventListener('scroll', leave); };
  }, []);
  return <div className="cur" ref={ref} data-on="0" data-side="l" aria-hidden="true"><i className="cur-dot" /><b /></div>;
};
