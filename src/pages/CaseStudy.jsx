import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { PROJECTS, CATEGORIES } from '../data/siteData';

const slug = (i, j) => (j === undefined ? `sec-${i}` : `sec-${i}-${j}`);
const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

const dark = (hex) => { const n = parseInt(hex.slice(1), 16); return 0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255) < 150; };
const figmaSrc = (u) => (u.includes('figma.com') && !u.includes('/embed') ? `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(u)}` : u);
const lum = (hex) => { const n = parseInt(hex.slice(1), 16); return 0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255); };
const Point = ({ p }) => (typeof p === 'string' ? <li>{p}</li> : <li><b>{p.b}</b>{p.t}</li>);

export default function CaseStudy({ id }) {
  const p = PROJECTS.find((x) => x.id === id && x.caseStudy);
  const list = p ? PROJECTS.filter((x) => x.caseStudy && x.category === p.category) : [];
  const i = list.findIndex((x) => x.id === id);
  const isUx = !p || p.category === 'UI/UX Design';
  const backHref = isUx ? '#/case-studies' : `#/projects/${CATEGORIES.find((k) => k.name === p.category)?.slug || ''}`;
  const backText = isUx ? 'Back to Case Studies' : 'Back to Projects';
  const [active, setActive] = useState(slug(0));
  const [zoom, setZoom] = useState(null);

  const sections = p?.caseStudy.sections || [];
  const ids = sections.flatMap((s, a) => [slug(a), ...(s.tocSub ? (s.screens || []).map((_, b) => slug(a, b)) : [])]);

  useEffect(() => {
    const onScroll = () => {
      let cur = ids[0];
      ids.forEach((x) => { const el = document.getElementById(x); if (el && el.getBoundingClientRect().top < 230) cur = x; });
      setActive(cur);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [id]); // eslint-disable-line

  if (!p) return <section className="section narrow"><a className="back" href="#/case-studies"><FaArrowLeft /> Back to Case Studies</a><h1 className="display h-xl">Project not found</h1></section>;
  const c = p.caseStudy;
  const others = list.filter((x) => x.id !== p.id);
  const nextTwo = [...others.slice(i), ...others.slice(0, i)].slice(0, 2);

  return (
    <section className="section csd">
      <a className="back" href={backHref}><FaArrowLeft /> {backText}</a>
      <span className="pill solid">{c.label}</span>
      <h1 className="display csd-title">{p.title}</h1>
      <p className="csd-sub">{c.subtitle || p.desc}</p>

      <div className="csd-layout">
        <aside className="csd-toc">
          <small>Contents</small>
          {sections.map((s, a) => (
            <div key={a}>
              <button className={active === slug(a) ? 'on' : ''} onClick={() => go(slug(a))}>{s.title}</button>
              {s.tocSub && (s.screens || []).map((x, b) => (<button key={b} className={`sub ${active === slug(a, b) ? 'on' : ''}`} onClick={() => go(slug(a, b))}>- {x.title}</button>))}
            </div>
          ))}
        </aside>

        <article className="csd-main">
          <div className="csd-meta">
            {c.projectType && <div><span>Project Type</span>{c.projectType}</div>}
            {c.duration && <div><span>Duration</span>{c.duration}</div>}
          </div>

          {sections.map((s, a) => (
            <div className="csd-sec" key={a}>
              <h2 className="display" id={slug(a)}>{s.title}</h2>
              {(s.text || []).map((t, k) => <p key={k}>{t}</p>)}
              {s.points && (
                <>
                  {s.pointsTitle && <h4 className="csd-pt">{s.pointsTitle}</h4>}
                  <ul className="csd-list">{s.points.map((x, k) => <Point key={k} p={x} />)}</ul>
                </>
              )}
              
              {s.points2 && (
                <>
                  {s.points2Title && <h4 className="csd-pt">{s.points2Title}</h4>}
                  <ul className="csd-list">{s.points2.map((x, k) => <Point key={k} p={x} />)}</ul>
                </>
              )}
              {(s.text2 || []).map((t, k) => <p key={'t2' + k}>{t}</p>)}
              {s.swatchGroups && <h4 className="csd-pt">{s.swatchTitle || 'Colors'}</h4>}
              {s.swatchGroups && s.swatchGroups.map((g) => (
                <div className="csd-swg" key={g.title}>
                  <div className="csd-gt">{g.title}</div>
                  <div className="csd-swg-row">
                    {g.items.map((w, i) => (<div className="sw2" key={g.title + i} style={{ background: w.hex, color: dark(w.hex) ? '#fff' : '#111', borderColor: lum(w.hex) > 235 ? '#e3e3ea' : 'transparent' }}><span>{w.hex}</span></div>))}
                  </div>
                </div>
              ))}
              {s.typeScale && <h4 className="csd-pt">{s.typeScale.title || 'Typography'}</h4>}
              {s.typeScale && (
                <div className="csd-ts">
                  <div className="ts-head" style={s.typeScale.noLineHeight ? { gridTemplateColumns: '1.2fr .8fr 1fr 1fr' } : undefined}><span>Name</span><span>Size</span>{!s.typeScale.noLineHeight && <span>Line height</span>}<span>Weight</span><span>Typeface</span></div>
                  {s.typeScale.rows.map(([n, size, w, label, st], i) => (
                    <div className="ts-row" key={i} style={s.typeScale.noLineHeight ? { gridTemplateColumns: '1.2fr .8fr 1fr 1fr' } : undefined}>
                      <span className="ts-name" style={{ fontSize: `min(${size}, 2.6rem)`, fontWeight: w, fontStyle: st === 'italic' ? 'italic' : 'normal', fontFamily: `'${s.typeScale.family}', sans-serif` }}>{n}</span><span>{size}</span>{!s.typeScale.noLineHeight && <span>Auto</span>}<span>{label}</span><span>{s.typeScale.family}</span>
                    </div>
                  ))}
                </div>
              )}
              {s.swatches && (
                <div className="csd-swatches">
                  {s.swatches.map((w) => (
                    <div className="sw" key={w.hex} style={{ background: w.hex, color: dark(w.hex) ? '#fff' : '#111' }}><b>{w.name}</b><span>{w.hex}</span>{w.use && <em>{w.use}</em>}</div>
                  ))}
                </div>
              )}
              {s.typeface && (
                <div className="csd-type">
                  <div className="tf-name">{s.typeface.fonts ? s.typeface.fonts.map((f, i) => (<React.Fragment key={f.name}>{i > 0 && <span className="tf-sep"> , </span>}<span style={{ fontFamily: f.family, fontWeight: f.weight }}>{f.name}</span></React.Fragment>)) : <span style={{ fontFamily: `'${s.typeface.name}', sans-serif` }}>{s.typeface.name}</span>}</div>
                  <div className="tf-sizes">{s.typeface.sizes.map((z) => <span key={z}>{z}</span>)}</div>
                  <div className="tf-weights">{s.typeface.weights.map((n) => <span key={n}>{n}</span>)}</div>
                </div>
              )}
              <div className={s.imageColumns ? 'csd-imgcols' : undefined} style={s.imageColumns ? { gridTemplateColumns: `repeat(${s.imageColumns}, 1fr)` } : undefined}>
                {(s.images || []).map((im, k) => (
                  <figure key={k} className={im.width && !s.imageColumns ? 'sm' : undefined} style={im.width && !s.imageColumns ? { width: im.width } : undefined}><img className="zoomable" src={im.src} alt={im.caption || s.title} loading="lazy" onClick={() => setZoom(im.src)} />{im.caption && <figcaption>{im.caption}</figcaption>}</figure>
                ))}
              </div>
              {(s.screens || []).map((x, b) => (
                <div className="csd-screen" key={b}>
                  <h3 className="display" id={slug(a, b)}>{x.title}</h3>
                  {x.text && <p>{x.text}</p>}
                  {x.points && <ul className="csd-list">{x.points.map((q, k) => <Point key={k} p={q} />)}</ul>}
                  {x.note && <p className="csd-note"><b>Deliverables: </b>{x.note}</p>}
                  {x.image && <figure className={x.imageWidth || x.imageHeight ? 'sm' : undefined} style={x.imageWidth ? { width: x.imageWidth } : x.imageHeight ? { width: 'auto' } : undefined}><img className="zoomable" src={x.image} alt={x.title} loading="lazy" style={x.imageHeight ? { height: x.imageHeight, width: 'auto', maxWidth: '100%' } : undefined} onClick={() => setZoom(x.image)} />{x.imageHeight && <figcaption>Click the diagram to enlarge</figcaption>}</figure>}
                </div>
              ))}
              {s.embed && (<><div className="csd-embed"><iframe src={figmaSrc(s.embed)} title={s.title} allowFullScreen /></div><p className="csd-open"><a href={s.embed} target="_blank" rel="noopener noreferrer">Having trouble viewing? Open the prototype in a new tab ↗</a></p></>)}
              {!s.embed && s.embedPlaceholder && <div className="csd-embed-ph">{s.embedPlaceholder}</div>}
            </div>
          ))}

          <div className="csd-cover"><img src={c.endImage || p.image} alt={`${p.title} cover`} loading="lazy" /></div>

          {nextTwo.length > 0 && (
            <div className="csd-more">
              <h2 className="display">{isUx ? 'Read Another Case Study' : 'Read Another Project'}</h2>
              {nextTwo.map((x) => (
                <a key={x.id} href={`#/case/${x.id}`}>{x.title} — <em>{x.caseStudy.label}</em> <FaArrowRight /></a>
              ))}
            </div>
          )}
        </article>
      </div>
      {zoom && (
        <div className="zoom-ov" onClick={() => setZoom(null)} role="dialog" aria-label="Enlarged image">
          <button className="zoom-x" aria-label="Close" onClick={() => setZoom(null)}>×</button>
          <img src={zoom} alt="Enlarged view" />
        </div>
      )}
    </section>
  );
}
