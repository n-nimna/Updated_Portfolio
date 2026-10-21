import React from 'react';
import { FaArrowRight, FaQuoteRight } from 'react-icons/fa';
import { PROFILE, PROJECTS, TESTIMONIALS, FEATURED_CLICKABLE } from '../data/siteData';
import heroPhoto from '../assets/profile-hero.png';
import { Socials } from '../components/Layout';
import { projectHref } from './helpers';

// photo can be an imported image, a full URL, or just a file name placed in /public/testimonials
const photoSrc = (ph) => (ph.includes('/') ? ph : `${import.meta.env.BASE_URL}testimonials/${ph}`);

export default function Home() {
  const featured = PROJECTS.filter((p) => p.featured).sort((a, b) => (a.featuredRank || 999) - (b.featuredRank || 999));

  return (
    <>
      <section className="hero2">
        <div className="hero2-glow" aria-hidden="true" />
        <h1 className="hero2-name display"><span>{PROFILE.firstName}</span><span>{PROFILE.lastName}</span></h1>
        <img className="hero2-photo" src={heroPhoto} alt={`${PROFILE.firstName} ${PROFILE.lastName}`} />
        <div className="hero2-left">
          <p>{PROFILE.tagline}</p>
          <Socials />
        </div>
      </section>

      <section className="section">
        <h2 className="display h-xl home-title center">Featured Work</h2>
        <p className="sub center">A selection of creative collaborations and design projects</p>
        <div className="marquee" style={{ '--dur': `${Math.max(featured.length, 4) * 5}s` }}>
          <div className="marquee-track">
            {[0, 1].map((k) => (
              <div className="marquee-set" key={k} aria-hidden={k === 1 ? 'true' : undefined}>
                {featured.map((p) => {
                  const t = FEATURED_CLICKABLE ? projectHref(p) : null;
                  const inner = (
                    <>
                      <img src={p.image} alt={k === 0 ? p.title : ''} loading="lazy" />
                      {t && <span className="feat-go"><FaArrowRight /></span>}
                      <div className="feat-ov"><div className="feat-glass"><span className="feat-chip">{p.category}</span><h3 className="display">{p.title}</h3></div></div>
                    </>
                  );
                  const cls = `feat-card${p.fit === 'contain' ? ' fit-contain' : ''}`;
                  return t ? (
                    <a key={p.id} className={cls} href={t.href} tabIndex={k === 1 ? -1 : undefined} {...(t.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{inner}</a>
                  ) : (
                    <div key={p.id} className={`${cls} no-click`} style={p.bg ? { background: p.bg } : undefined}>{inner}</div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
        <div className="center"><a className="btn-outline" href="#/projects">VIEW ALL PROJECTS <FaArrowRight /></a></div>
      </section>

      {TESTIMONIALS.length > 0 && (
        <section className="section">
          <h2 className="display h-xl home-title center">Testimonials</h2>
          <div className="testi-grid">
            {TESTIMONIALS.map((t) => (
              <div className="testi" key={t.quote.slice(0, 24) + t.name}>
                <FaQuoteRight className="q" /><p>“{t.quote}”</p>
                <div className="who">
                  {t.photo ? <img src={photoSrc(t.photo)} alt={t.name} className="av has-photo" loading="lazy" /> : <span className="av">{t.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}</span>}
                  <div><b>{t.name}</b>{(Array.isArray(t.role) ? t.role : [t.role]).map((r) => <small key={r}>{r}</small>)}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

    </>
  );
}
