import React from 'react';
import { FaArrowLeft, FaMagic } from 'react-icons/fa';
import { CATEGORIES, PROJECTS } from '../data/siteData';
import { SOCIAL_ICONS } from '../components/Icons';
import { projectHref } from './helpers';

export default function ProjectCategory({ slug }) {
  const cat = CATEGORIES.find((c) => c.slug === slug);
  const list = cat ? PROJECTS.filter((p) => p.category === cat.name && !p.featuredOnly) : [];
  return (
    <section className="section narrow">
      <a className="back" href="#/projects"><FaArrowLeft /> All categories</a>
      <h1 className="display h-xxl">{cat ? cat.name : 'Not found'}</h1>
      {cat && <p className="sub">{cat.text}</p>}
      {list.length === 0 ? (
        <div className="more-box"><h3 className="display">Coming soon</h3><p>Projects for this category will be added here soon.</p></div>
      ) : cat && cat.layout === 'gallery' ? (
        <div className="ai-grid">
          {list.map((p) => (
            <article className="ai-card" key={p.id} tabIndex={0}>
              <img src={p.image} alt={p.title} loading="lazy" />
              <span className="ai-badge"><FaMagic /> AI Generated</span>
              <div className="ai-cap"><h3 className="display">{p.title}</h3><p>{p.desc}</p></div>
            </article>
          ))}
        </div>
      ) : (
        <div className="pj-grid">
          {list.map((p) => {
            const t = projectHref(p);
            return (
              <article className="pj-card" key={p.id}>
                {t ? (
                  <a className={`pj-img${p.fit === 'contain' ? ' fit-contain' : ''}`} style={p.bg ? { background: p.bg } : undefined} href={t.href} {...(t.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}><img src={p.image} alt={p.title} loading="lazy" /><span className="pj-chip">{p.category}</span></a>
                ) : (
                  <div className={`pj-img no-click${p.fit === 'contain' ? ' fit-contain' : ''}`} style={p.bg ? { background: p.bg } : undefined}><img src={p.image} alt={p.title} loading="lazy" /><span className="pj-chip">{p.category}</span></div>
                )}
                <div className="pj-body">
                  <h3 className="display">{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="chips">{p.tags.map((x) => <span className="chip sm" key={x}>{x}</span>)}</div>
                  <div className="pj-links">{p.links.filter((l) => l.url).map((l) => <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer" title={l.label}>{SOCIAL_ICONS[l.type]}</a>)}</div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
