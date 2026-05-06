import React from 'react';
import { Layers } from 'lucide-react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const BasicsMMCPage = () => {
  return (
    <div className="page-header">
      <div className="container">
        <h1 className="gradient-text">Basics of Continuum Mechanics</h1>
        <p className="hero-subtitle" style={{marginBottom: 0}}>Bases de la MMC</p>
      </div>
      <div className="container page-content" style={{marginTop: '4rem'}}>
        <div className="glass-panel" style={{ padding: '3rem', textAlign: 'left' }}>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
            PARTIE 1 : Analyse de la déformation
          </h2>
          <p style={{ marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            Dans cette fiche d'exercices, vous trouverez des exercices corrigés sur une notion importante en mécanique des milieux continus qui n'est autre que l'analyse de la déformation.
          </p>

          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Exercice 1</h3>
            <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
              On considère la transformation définie par :
            </p>
            <BlockMath math="f(P) = \alpha X_1 \vec{e_1} + \beta X_2 \vec{e_2} + X_3 \vec{e_3} \quad (E)" />
            <p style={{ marginTop: '1rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
              <InlineMath math="\alpha" /> et <InlineMath math="\beta" /> étant des constantes.
            </p>

            <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>a) Écrire le gradient de la déformation <InlineMath math="F" />.</h4>
            
            <div style={{ marginBottom: '1rem' }}>
              <strong style={{ color: 'var(--text-primary)' }}>Réponse :</strong>
            </div>
            
            <BlockMath math="F = \nabla f = \begin{bmatrix} \frac{\partial x_1}{\partial X_1} & \frac{\partial x_1}{\partial X_2} & \frac{\partial x_1}{\partial X_3} \\ \frac{\partial x_2}{\partial X_1} & \frac{\partial x_2}{\partial X_2} & \frac{\partial x_2}{\partial X_3} \\ \frac{\partial x_3}{\partial X_1} & \frac{\partial x_3}{\partial X_2} & \frac{\partial x_3}{\partial X_3} \end{bmatrix}" />
            
            <p style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
              À partir de la relation <InlineMath math="(E)" />, nous en déduisons que :
            </p>

            <BlockMath math="\begin{cases} x_1 = \alpha X_1 \\ x_2 = \beta X_2 \\ x_3 = X_3 \end{cases} \implies F = \begin{bmatrix} \alpha & 0 & 0 \\ 0 & \beta & 0 \\ 0 & 0 & 1 \end{bmatrix}" />

          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicsMMCPage;
