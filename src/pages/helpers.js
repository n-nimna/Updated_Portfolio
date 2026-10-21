import { CATEGORIES } from '../data/siteData';
// where a project card should take the visitor
export const projectHref = (p) => {
  if (p.viewOnly) return null; // view-only projects are not clickable
  if (p.caseStudy) return { href: `#/case/${p.id}`, external: false };
  const l = p.links.find((x) => x.type === 'live') || p.links.find((x) => x.type === 'behance') || p.links[0];
  return l && l.url ? { href: l.url, external: true } : { href: `#/projects/${CATEGORIES.find((c) => c.name === p.category)?.slug || ''}`, external: false };
};
