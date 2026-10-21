import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { CATEGORIES, PROJECTS } from '../data/siteData';
import { CATEGORY_ICONS } from '../components/Icons';

const canHover = () => typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches;

export default function Projects() {
  const [active, setActive] = useState(0);
  return (
    <section className="section narrow">
      <h1 className="display h-xxl">Projects</h1>
      <p className="sub">Explore my work across different categories. Hover or tap a row to preview it, then open it to see the projects.</p>
      <div className="svc-list">
        {CATEGORIES.map((c, i) => {
          const items = PROJECTS.filter((p) => p.category === c.name && !p.featuredOnly);
          const preview = items[0];
          const href = c.goesTo || `#/projects/${c.slug}`;
          const on = i === active;
          return (
            <div key={c.slug} className={`svc ${on ? 'on' : ''}`} onMouseEnter={() => canHover() && setActive(i)}>
              <a className="svc-head" href={href} onClick={(e) => { if (!on) { e.preventDefault(); setActive(i); } }}>
                <span className="svc-title display">{c.name}</span>
                <span className="svc-arrow"><FaArrowRight /></span>
              </a>
              <div className="svc-panel" aria-hidden={!on}>
                <div className="svc-info">
                  <p>{c.text}</p>
                  <span className="svc-count">{items.length === 0 ? 'Coming soon' : `${items.length} ${items.length === 1 ? 'project' : 'projects'}`}</span>
                  <a className="svc-go" href={href}>View projects <FaArrowRight /></a>
                </div>
                <div className="svc-pic">
                  {preview ? <img src={preview.image} alt={preview.title} /> : <div className="svc-ph">{CATEGORY_ICONS[c.icon]}<small>Coming soon</small></div>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
