import React, { useEffect, useState } from 'react';
import { Navbar, Footer, Sparkles, Connect, CursorLabel } from './components/Layout';
import { PROJECTS } from './data/siteData';
import Home from './pages/Home';
import About from './pages/About';
import CaseStudies from './pages/CaseStudies';
import CaseStudy from './pages/CaseStudy';
import Projects from './pages/Projects';
import ProjectCategory from './pages/ProjectCategory';

// Routes use the URL hash:  #/  #/about  #/case-studies  #/case/<id>  #/projects  #/projects/<slug>
const parse = () => {
  const [, a, b] = (window.location.hash || '#/').replace('#', '').split('/');
  if (a === 'about') return { page: 'about' };
  if (a === 'case-studies') return { page: 'case' };
  if (a === 'case') return { page: 'case', id: b };
  if (a === 'projects') return { page: 'projects', slug: b };
  return { page: 'home' };
};

export default function App() {
  const [route, setRoute] = useState(parse());
  const [dark, setDark] = useState(() => { try { return localStorage.getItem('theme') === 'dark'; } catch { return false; } });

  useEffect(() => {
    const on = () => { setRoute(parse()); window.scrollTo(0, 0); };
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch { /* ignore */ }
  }, [dark]);

  let view = <Home />;
  if (route.page === 'about') view = <About />;
  else if (route.page === 'case') view = route.id ? <CaseStudy id={route.id} /> : <CaseStudies />;
  else if (route.page === 'projects') view = route.slug ? <ProjectCategory slug={route.slug} /> : <Projects />;

  const proj = route.id ? PROJECTS.find((x) => x.id === route.id) : null;
  const navPage = route.page === 'case' && proj && proj.category !== 'UI/UX Design' ? 'projects' : route.page;

  return (
    <div className="app">
      <Sparkles />
      <CursorLabel />
      <Navbar page={navPage} dark={dark} toggle={() => setDark(!dark)} />
      <main key={window.location.hash}>{view}</main>
      {(route.page === 'home' || route.page === 'about') && <Connect />}
      <Footer />
    </div>
  );
}
