import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { PROJECTS } from '../data/siteData';

export default function CaseStudies() {
  const list = PROJECTS.filter((p) => p.category === 'UI/UX Design' && p.caseStudy);
  return (
    <section className="section">
      <h1 className="display h-xxl center">Case Studies</h1>
      <p className="sub center">Deep dives into my UI/UX design process, from research and structure to the final interface.</p>
      <div className="csn-grid">
        {list.map((p) => (
          <a key={p.id} className="csn" href={`#/case/${p.id}`} data-cursor="Read the case study">
            <div className="csn-img">
              <img src={p.image} alt={p.title} loading="lazy" style={p.cardFocus ? { objectPosition: p.cardFocus } : undefined} />
              <span className="csn-badge">Case Study</span>
              <span className="csn-touch">Read the case study <FaArrowRight /></span>
            </div>
            <div className="csn-body">
              <h3>{p.title}</h3>
              <div className="csn-tags"><span>{p.caseStudy.cardTag || p.caseStudy.label}</span></div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
