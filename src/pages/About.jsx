import React from 'react';
import { FaEnvelope, FaDownload, FaMapMarkerAlt, FaTools } from 'react-icons/fa';
import { PROFILE, EDUCATION, EXPERIENCE, EXPERIENCE_SUMMARY, SKILLS, CERTIFICATIONS } from '../data/siteData';
import { Socials } from '../components/Layout';
import { SKILL_ICONS } from '../components/Icons';

const DarkList = ({ title, meta, rows }) => (
  <div className="dk-block" data-title={title}>
    <div className="dk-head"><h2 className="display">{title}</h2>{meta && <span>{meta}</span>}</div>
    <ul className="dk-list">
      {rows.map((r, i) => (
        <li className="dk-row" key={r.a + i}>
          <div className="dk-main"><b>{r.a}</b>{r.b && <span>{r.b}</span>}{r.t && <p>{r.t}</p>}</div>
          {r.r && <em>{r.r}</em>}
        </li>
      ))}
    </ul>
  </div>
);

export default function About() {
  return (
    <section className="section narrow">
      <div className="about-top">
        <div className="about-photo">
          <img src={PROFILE.photo} alt={PROFILE.firstName} />
          <span className="loc"><FaMapMarkerAlt /> {PROFILE.location}</span>
        </div>
        <div>
          <h1 className="display h-xl">{PROFILE.aboutTitle}</h1>
          {PROFILE.about.map((t, i) => <p className="about-p" key={i}>{t}</p>)}
          <div className="btn-row">
            <a className="btn-outline sm" href={`mailto:${PROFILE.email}`}><FaEnvelope /> Get In Touch</a>
            <a className="btn-outline sm" href={import.meta.env.BASE_URL + PROFILE.cv} download="Nimeshi_Dilshara_CV.pdf" target="_blank" rel="noopener noreferrer"><FaDownload /> Download CV</a>
          </div>
          <Socials />
        </div>
      </div>

      <h2 className="display h-md center"><FaTools /> Skills & Tools</h2>
      <div className="skills">
        {Object.entries(SKILLS).map(([group, items]) => (
          <div className="skill-box" key={group}>
            <h4 className="display">{group}</h4>
            <div className="chips">
              {items.map((s) => <span className="chip" key={s}>{SKILL_ICONS[s]}{s}</span>)}
            </div>
          </div>
        ))}
      </div>

      <div className="dk">
        {EXPERIENCE.length > 0 && <DarkList title="Experience" meta={EXPERIENCE_SUMMARY} rows={EXPERIENCE.map((e) => ({ a: e.place, b: e.title, r: e.period, t: e.text }))} />}
        {EDUCATION.length > 0 && <DarkList title="Education" meta={`${EDUCATION.length} qualifications`} rows={EDUCATION.map((e) => ({ a: e.place, b: e.title, r: e.period }))} />}
        {CERTIFICATIONS.length > 0 && <DarkList title="Certificates" meta={`${CERTIFICATIONS.length} certificates`} rows={CERTIFICATIONS.map((c) => ({ a: c.startsWith('Google ') ? c.slice(7) : c, b: c.startsWith('Google ') ? 'Google' : 'Certificate', r: 'Certificate' }))} />}
      </div>
    </section>
  );
}
