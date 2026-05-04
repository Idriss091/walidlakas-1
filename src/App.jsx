import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Mail, ArrowRight, Droplets, FunctionSquare, Building2, Atom, PenTool, GraduationCap } from 'lucide-react';
import { useState, useEffect } from 'react';

// Page Components Placeholder
const PageTemplate = ({ title, icon: Icon }) => (
  <div className="page-header">
    <div className="container">
      <h1 className="gradient-text">{title}</h1>
      <p className="hero-subtitle" style={{marginBottom: 0}}>Research & Publications</p>
    </div>
    <div className="container page-content" style={{marginTop: '4rem'}}>
      <div className="glass-panel empty-state">
        <Icon size={64} />
        <h2>Content coming soon</h2>
        <p>This section is currently being updated with recent research and publications.</p>
      </div>
    </div>
  </div>
);

const Home = () => {
  return (
  <>
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <h1>Walid <span className="gradient-text">LAKAS</span></h1>
          <h2 className="hero-subtitle">Research Engineer in Fluid Mechanics & Energy</h2>
          <p className="hero-description">
            Exploring the dynamic interplay between fluid behavior and energetic systems. Deeply interested in the application of mechanics to medical fields, advancing healthcare through advanced simulation, mathematical modeling, and rigorous analytical mechanics.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="mailto:walid.lks@gmail.com" className="btn btn-primary">
              <Mail size={20} /> Get in touch
            </a>
            <Link to="/blog" className="btn btn-secondary">
              Read my blog
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="profile-image-container">
            <img 
              src="/profile.jpg" 
              alt="Walid LAKAS" 
              className="profile-img"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="section" style={{ background: 'rgba(14, 165, 233, 0.02)' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="gradient-text">Academic</span> Background
        </h2>
        <div className="timeline">
          <div className="timeline-item left">
            <div className="glass-card timeline-content">
              <div className="timeline-date">2024</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                <div style={{ width: '48px', height: '48px', backgroundColor: '#fff', borderRadius: '8px', padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <img src="/ensam.png" alt="Arts et Métiers" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                </div>
                <h3 style={{ margin: 0 }}>Research Master's in Fluid Mechanics</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Arts et Métiers, Paris</p>
              <a
                href="https://attestation.artsetmetiers.fr/check/4F3C5BD7C74CAE8647C404A13841D2D87CC8CBE44F4E9639AC4758F3BAEEFCF3ZnB3elVSMTJuTWtnYjNiUnBvK0JWOVZXR0F5cEwyRENFM3lWUXRWZzBDN3dDamFO"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  color: '#10b981',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: '20px',
                  padding: '0.3rem 0.8rem',
                  background: 'rgba(16, 185, 129, 0.08)',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(16, 185, 129, 0.18)'; e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.6)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(16, 185, 129, 0.08)'; e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.3)'; }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                Blockchain Verified Diploma
              </a>
            </div>
          </div>
          <div className="timeline-item right">
            <div className="glass-card timeline-content">
              <div className="timeline-date">2022</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                <div style={{ width: '48px', height: '48px', backgroundColor: '#fff', borderRadius: '8px', padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <img src="/evry.png" alt="Université d'Évry Paris-Saclay" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                </div>
                <h3 style={{ margin: 0 }}>Bachelor's in Applied Mathematics</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)' }}>Université d'Évry Paris-Saclay</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h2><span className="gradient-text">Research</span> Domains</h2>
        <div className="grid-cards">
          <div className="glass-card research-card">
            <div className="card-icon"><Droplets size={24} /></div>
            <h3>Biomechanics</h3>
            <p>Applying mechanical principles to medical applications. Focusing on advanced simulation and modeling of biological systems and human physiology to drive healthcare innovations.</p>
            <Link to="/biomechanics" className="read-more">Explore research <ArrowRight size={16}/></Link>
          </div>
          <div className="glass-card research-card">
            <div className="card-icon"><FunctionSquare size={24} /></div>
            <h3>Mathematics</h3>
            <p>Developing robust mathematical models and computational methods to solve complex non-linear problems in engineering.</p>
            <Link to="/mathematics" className="read-more">Explore research <ArrowRight size={16}/></Link>
          </div>
          <div className="glass-card research-card">
            <div className="card-icon"><Building2 size={24} /></div>
            <h3>Structural Theory</h3>
            <p>Analyzing the behavior of solid structures under various dynamic and thermal loads for safer and more efficient designs.</p>
            <Link to="/structural-theory" className="read-more">Explore research <ArrowRight size={16}/></Link>
          </div>
          <div className="glass-card research-card">
            <div className="card-icon"><Atom size={24} /></div>
            <h3>Analytical Mechanics</h3>
            <p>Applying fundamental principles of mechanics to understand complex systems, using Lagrangian and Hamiltonian formalisms.</p>
            <Link to="/analytical-mechanics" className="read-more">Explore research <ArrowRight size={16}/></Link>
          </div>
        </div>
      </div>
    </section>
  </>
  );
};

function App() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <Link to="/" className="nav-logo">
            <img src="/logo.png" alt="Wave logo" style={{ width: '72px', height: '72px', borderRadius: '14px', marginRight: '1rem', boxShadow: '0 4px 18px rgba(14,165,233,0.5)' }} />
            <span className="gradient-text">W.</span> LAKAS
          </Link>
          <ul className="nav-links">
            <li><Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link></li>
            <li><Link to="/biomechanics" className={`nav-link ${location.pathname === '/biomechanics' ? 'active' : ''}`}>Biomechanics</Link></li>
            <li><Link to="/mathematics" className={`nav-link ${location.pathname === '/mathematics' ? 'active' : ''}`}>Mathematics</Link></li>
            <li><Link to="/structural-theory" className={`nav-link ${location.pathname === '/structural-theory' ? 'active' : ''}`}>Structural Theory</Link></li>
            <li><Link to="/analytical-mechanics" className={`nav-link ${location.pathname === '/analytical-mechanics' ? 'active' : ''}`}>Analytical Mechanics</Link></li>
            <li><Link to="/blog" className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`}>Blog</Link></li>
          </ul>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/biomechanics" element={<PageTemplate title="Biomechanics" icon={Droplets} />} />
          <Route path="/mathematics" element={<PageTemplate title="Mathematics" icon={FunctionSquare} />} />
          <Route path="/structural-theory" element={<PageTemplate title="Structural Theory" icon={Building2} />} />
          <Route path="/analytical-mechanics" element={<PageTemplate title="Analytical Mechanics" icon={Atom} />} />
          <Route path="/blog" element={<PageTemplate title="Research Blog" icon={PenTool} />} />
        </Routes>
      </main>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Walid LAKAS</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Research Engineer in Fluid Mechanics & Energy</p>
            </div>
            <div className="contact-info">
              <a href="mailto:walid.lks@gmail.com" className="contact-item">
                <Mail size={18} /> walid.lks@gmail.com
              </a>
            </div>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textAlign: 'center', borderTop: '1px solid var(--surface-border)', paddingTop: '2rem' }}>
            &copy; {new Date().getFullYear()} Walid LAKAS. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
