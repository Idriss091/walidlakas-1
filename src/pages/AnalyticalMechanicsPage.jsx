
import { Link } from 'react-router-dom';
import { Atom, ArrowRight, Activity } from 'lucide-react';

const AnalyticalMechanicsPage = () => {
  return (
    <div className="page-header">
      <div className="container">
        <h1 className="gradient-text">Analytical Mechanics</h1>
        <p className="hero-subtitle" style={{marginBottom: 0}}>Lagrangian & Hamiltonian Formalisms</p>
      </div>
      <div className="container page-content" style={{marginTop: '4rem'}}>
        
        {/* Category Introduction */}
        <div className="glass-panel" style={{ padding: '3rem', textAlign: 'left', marginBottom: '3rem' }}>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Atom size={28} style={{ color: 'var(--primary-color)' }} /> About this Section
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            This section covers the principles of analytical mechanics, focusing on formulating the equations of motion for complex mechanical systems using Lagrangian and Hamiltonian approaches. You will find theoretical notes and guided exercises to master these powerful formalisms.
          </p>
        </div>

        {/* Sub-pages Grid */}
        <h2 style={{ marginBottom: '2rem' }}><span className="gradient-text">Available</span> Topics</h2>
        <div className="grid-cards">
          
          <div className="glass-card research-card">
            <div className="card-icon"><Activity size={24} /></div>
            <h3>Principle of Virtual Work</h3>
            <p>Application exercise on the principle of virtual work: determining the equation of motion for a pendulum with a torsional spring.</p>
            <Link to="/mechanics/analytical-mechanics/virtual-work-application" className="read-more">
              View Application <ArrowRight size={16}/>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AnalyticalMechanicsPage;
