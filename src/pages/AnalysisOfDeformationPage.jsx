import React from 'react';
import { Layers } from 'lucide-react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const AnalysisOfDeformationPage = () => {
  return (
    <div className="page-header">
      <div className="container">
        <h1 className="gradient-text">Basics of Continuum Mechanics</h1>
        <p className="hero-subtitle" style={{marginBottom: 0}}>Fundamentals & Kinematics</p>
      </div>
      <div className="container page-content" style={{marginTop: '4rem'}}>
        
        {/* Introduction Section */}
        <div className="glass-panel" style={{ padding: '3rem', textAlign: 'left', marginBottom: '2rem' }}>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Layers size={28} style={{ color: 'var(--primary-color)' }} /> Introduction to Continuum Mechanics
          </h2>
          <p style={{ marginBottom: '1rem', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            Continuum mechanics is a branch of mechanics that deals with the analysis of the mechanical behavior of materials modeled as a continuous mass rather than as discrete particles. The continuous formulation allows us to use differential equations to describe the material's behavior in space and time.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            This section focuses on the <strong>Analysis of Deformation</strong>, a fundamental pillar of kinematics. By studying how a body transitions from a reference configuration to a deformed configuration, we define essential metrics such as the deformation gradient, displacement fields, stretch ratios, and volumetric changes. The following exercises illustrate these core concepts in a structured, step-by-step mathematical approach.
          </p>
        </div>

        {/* Exercise Section */}
        <div className="glass-panel" style={{ padding: '3rem', textAlign: 'left' }}>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
            PART 1: Analysis of Deformation
          </h2>
          <p style={{ marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            In this exercise sheet, you will find guided problems on an essential concept in continuum mechanics: the analysis of deformation.
          </p>

          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Exercise 1</h3>
            <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
              Consider the transformation defined by:
            </p>
            <BlockMath math="f(P) = \alpha X_1 \vec{e_1} + \beta X_2 \vec{e_2} + X_3 \vec{e_3} \quad (E)" />
            <p style={{ marginTop: '1rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
              where <InlineMath math="\alpha" /> and <InlineMath math="\beta" /> are constants.
            </p>

            <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>a) Write the deformation gradient <InlineMath math="F" />.</h4>
            <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
              <em>Explanation: The deformation gradient <InlineMath math="F" /> is a second-order tensor that maps line elements in the reference configuration to the current configuration.</em>
            </p>
            <div style={{ marginBottom: '1rem' }}>
              <strong style={{ color: 'var(--text-primary)' }}>Answer:</strong>
            </div>
            <BlockMath math="F = \nabla f = \begin{bmatrix} \frac{\partial x_1}{\partial X_1} & \frac{\partial x_1}{\partial X_2} & \frac{\partial x_1}{\partial X_3} \\ \frac{\partial x_2}{\partial X_1} & \frac{\partial x_2}{\partial X_2} & \frac{\partial x_2}{\partial X_3} \\ \frac{\partial x_3}{\partial X_1} & \frac{\partial x_3}{\partial X_2} & \frac{\partial x_3}{\partial X_3} \end{bmatrix}" />
            <p style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
              From equation <InlineMath math="(E)" />, we deduce that:
            </p>
            <BlockMath math="\begin{cases} x_1 = \alpha X_1 \\ x_2 = \beta X_2 \\ x_3 = X_3 \end{cases} \implies F = \begin{bmatrix} \alpha & 0 & 0 \\ 0 & \beta & 0 \\ 0 & 0 & 1 \end{bmatrix}" />

            <div style={{ marginTop: '3rem' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>b) Verify that the given transformation is indeed a valid deformation.</h4>
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                <em>Explanation: A physically possible deformation must be bijective (no material overlapping or tearing) and preserve orientation, which requires a strictly positive Jacobian (<InlineMath math="\det F > 0" />).</em>
              </p>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Answer:</strong>
              </div>
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                To answer this, we must check that the transformation is bijective and that <InlineMath math="\det F > 0" />.
              </p>
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                The transformation is trivially bijective because it is linear:
              </p>
              <BlockMath math="\begin{cases} x_1 = \alpha X_1 \\ x_2 = \beta X_2 \\ x_3 = X_3 \end{cases}" />
              <p style={{ marginTop: '1rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                For every unique macroscopic coordinate <InlineMath math="X_i" />, there is a uniquely associated microscopic coordinate <InlineMath math="x_i" />, and vice-versa.
              </p>
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                Let's verify that <InlineMath math="\det F > 0" />:
              </p>
              <BlockMath math="\det F = \alpha \beta > 0 \iff (\alpha > 0 \text{ and } \beta > 0) \text{ or } (\alpha < 0 \text{ and } \beta < 0)" />
              <p style={{ marginTop: '1rem', marginBottom: '3rem', color: 'var(--text-secondary)' }}>
                Thus, <InlineMath math="f" /> is a valid deformation if <InlineMath math="\alpha" /> and <InlineMath math="\beta" /> share the same sign.
              </p>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>c) Find the displacement vector <InlineMath math="\vec{u}" />.</h4>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Answer:</strong>
              </div>
              <BlockMath math="\vec{u} = p - P = f(P) - P = \begin{pmatrix} \alpha X_1 \\ \beta X_2 \\ X_3 \end{pmatrix} - \begin{pmatrix} X_1 \\ X_2 \\ X_3 \end{pmatrix} =" />
              <BlockMath math="= X_1(\alpha - 1)\vec{e_1} + X_2(\beta - 1)\vec{e_2} \qquad (u_3 = 0 \ \forall P \in \Omega)" />
            </div>

            <div style={{ marginTop: '3rem' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>d) Write the displacement gradient <InlineMath math="\nabla u" />.</h4>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Answer:</strong>
              </div>
              <BlockMath math="\nabla u = u_{i,j} e_i \otimes e_j = F - I = \begin{bmatrix} \alpha - 1 & 0 & 0 \\ 0 & \beta - 1 & 0 \\ 0 & 0 & 0 \end{bmatrix}" />
            </div>

            <div style={{ marginTop: '3rem' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>e) Find the transformed equation of the cylinder initially given by <InlineMath math="X_1^2 + X_2^2 = 1" />.</h4>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Answer:</strong>
              </div>
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                How is the cylinder altered by the deformation? (Note: The height is not specified).
              </p>
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>We have:</p>
              <BlockMath math="\begin{cases} X_1 = \frac{x_1}{\alpha} \\ X_2 = \frac{x_2}{\beta} \\ X_3 = x_3 \end{cases}" />
              <p style={{ marginTop: '1rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                By injecting this into the equation <InlineMath math="X_1^2 + X_2^2 = 1" />, we obtain:
              </p>
              <BlockMath math="\frac{x_1^2}{\alpha^2} + \frac{x_2^2}{\beta^2} = 1" />
              <p style={{ marginTop: '1rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                <strong>Conclusion:</strong> This is the equation of an elliptical cylinder. The deformation transforms an initially circular cylinder into an elliptical cylinder.
              </p>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>f) Calculate the local rate of change of length <InlineMath math="\delta l(\vec{e})" /></h4>
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                where <InlineMath math="\vec{e} \in S^2" /> is an arbitrary direction.
              </p>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Answer:</strong>
              </div>
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                Let's take a vector <InlineMath math="\vec{e} = \begin{pmatrix} a \\ b \\ c \end{pmatrix}" />. Applying the formula:
              </p>
              <BlockMath math="\delta l(\vec{e}) = \frac{|\alpha F \vec{e}| - |\alpha \vec{e}|}{|\alpha \vec{e}|} \qquad (\text{with } \alpha \vec{e} = dX, \ \alpha \to 0^+)" />
              <BlockMath math="= \frac{\alpha |F \vec{e}| - \alpha |\vec{e}|}{\alpha |\vec{e}|} = |F \vec{e}| - 1" />
              <p style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                Evaluating <InlineMath math="F \vec{e}" />:
              </p>
              <BlockMath math="F \vec{e} = \begin{bmatrix} \alpha & 0 & 0 \\ 0 & \beta & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{pmatrix} a \\ b \\ c \end{pmatrix} = \begin{pmatrix} \alpha a \\ \beta b \\ c \end{pmatrix}" />
              <p style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                Consequently:
              </p>
              <BlockMath math="\delta l (\vec{e}) = \sqrt{\alpha^2 a^2 + \beta^2 b^2 + c^2} - 1" />
            </div>

            <div style={{ marginTop: '3rem' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>g) Calculate the stretch ratio <InlineMath math="\lambda(\vec{e})" />.</h4>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Answer:</strong>
              </div>
              <BlockMath math="\lambda(\vec{e}) = \delta l (\vec{e}) + 1 = \sqrt{\alpha^2 a^2 + \beta^2 b^2 + c^2}" />
            </div>

            <div style={{ marginTop: '3rem' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>h) Calculate the local rate of change of area <InlineMath math="\delta_a(\vec{N})" />.</h4>
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                where <InlineMath math="\vec{N} \in S^2" /> is the normal to the original surface element in <InlineMath math="\Omega" />.
              </p>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Answer:</strong>
              </div>
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                <em>Explanation: We use Nanson's formula, defined via the cofactor tensor <InlineMath math="F^*" />.</em>
              </p>
              <BlockMath math="\delta_a(\vec{N}) = |F^* \vec{N}| - 1" />
              <BlockMath math="F^* = \det F \cdot F^{-T}" />
              <p style={{ marginTop: '1rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                In our case: <InlineMath math="F^T = F" /> and <InlineMath math="F^{-1} = F^{-T} = \begin{bmatrix} 1/\alpha & 0 & 0 \\ 0 & 1/\beta & 0 \\ 0 & 0 & 1 \end{bmatrix}" />
              </p>
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                Since <InlineMath math="\det F = \alpha \beta" /> :
              </p>
              <BlockMath math="\implies F^* = \begin{bmatrix} \beta & 0 & 0 \\ 0 & \alpha & 0 \\ 0 & 0 & \alpha \beta \end{bmatrix} \quad \text{for } \vec{N} = \begin{pmatrix} N_1 \\ N_2 \\ N_3 \end{pmatrix}" />
              <BlockMath math="F^* \vec{N} = \begin{bmatrix} \beta & 0 & 0 \\ 0 & \alpha & 0 \\ 0 & 0 & \alpha \beta \end{bmatrix} \begin{pmatrix} N_1 \\ N_2 \\ N_3 \end{pmatrix} = \begin{pmatrix} \beta N_1 \\ \alpha N_2 \\ \alpha \beta N_3 \end{pmatrix}" />
              <p style={{ marginTop: '1rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                Therefore: <InlineMath math="\delta_a(\vec{N}) = \sqrt{\beta^2 N_1^2 + \alpha^2 N_2^2 + \alpha^2 \beta^2 N_3^2} - 1" />
              </p>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>i) Find the orthogonal vector <InlineMath math="\vec{n} \in S^2" />, post-transformation, to the surface element originally given by <InlineMath math="\vec{N}" />.</h4>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Answer:</strong>
              </div>
              <BlockMath math="\vec{n} = \frac{F^* \vec{N}}{|F^* \vec{N}|} = \frac{1}{\sqrt{\beta^2 N_1^2 + \alpha^2 N_2^2 + \alpha^2 \beta^2 N_3^2}} \begin{pmatrix} \beta N_1 \\ \alpha N_2 \\ \alpha \beta N_3 \end{pmatrix}" />
            </div>

            <div style={{ marginTop: '3rem' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>j) Calculate the rate of volumetric change <InlineMath math="\delta v" />.</h4>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Answer:</strong>
              </div>
              <BlockMath math="\delta v = \det F - 1 = \alpha \beta - 1" />
            </div>

            <div style={{ marginTop: '3rem' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>k) Calculate the total volume variation of the cylinder from question (e).</h4>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Answer:</strong>
              </div>
              <BlockMath math="vol = \int_{\Omega} dv = \int_{\Omega} \det F \, dV \qquad (F \text{ is constant } \to \text{homogeneous deformation})" />
              <BlockMath math="Vol = \int_{\Omega} dV" />
              <BlockMath math="\delta v_{\text{cyl}} = \frac{vol - Vol}{Vol} = \frac{\det F \int_{\Omega} dV - \int_{\Omega} dV}{\int_{\Omega} dV} = \frac{\det F \cdot Vol - Vol}{Vol} = \det F - 1" />
              <BlockMath math="vol = \det F \int_{\Omega} dV = \det F \cdot Vol = \alpha \beta \pi l" />
            </div>

            <div style={{ marginTop: '3rem' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>l) Calculate the angle variation between the basis vectors <InlineMath math="\{\vec{e_1}, \vec{e_2}, \vec{e_3}\}" />.</h4>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Answer:</strong>
              </div>
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                <em>Explanation: We are looking for shear deformation by analyzing how originally orthogonal unit vectors behave after transformation.</em>
              </p>
              <BlockMath math="\delta \theta(\vec{e_i}, \vec{e_j}) = \underbrace{\arccos(\vec{e_i} \cdot \vec{e_j})}_{= \pi / 2} - \arccos\left( \frac{F\vec{e_i} \cdot F\vec{e_j}}{\lambda(\vec{e_i})\lambda(\vec{e_j})} \right)" />
              <p style={{ marginTop: '1rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                This is because the chosen vectors are orthogonal basis vectors.
              </p>

              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                Let's compute the dot product <InlineMath math="F\vec{e_i} \cdot F\vec{e_j}" /> :
              </p>
              <BlockMath math="F\vec{e_i} \cdot F\vec{e_j} = \vec{e_i} \cdot F^T F \vec{e_j} = \vec{e_i} \cdot F^2 \vec{e_j}" />
              <p style={{ marginTop: '1rem', marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                <em>Note: We use standard tensor algebra properties. In our specific case, <InlineMath math="F^T F = F^2" /> is true because <InlineMath math="F" /> is symmetric.</em>
              </p>
              
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>We know that:</p>
              <BlockMath math="F^2 = \begin{bmatrix} \alpha^2 & 0 & 0 \\ 0 & \beta^2 & 0 \\ 0 & 0 & 1 \end{bmatrix}" />
              
              <p style={{ marginTop: '1rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                Applying this to all basis vectors:
              </p>
              <BlockMath math="\vec{e_1} \cdot F^2 \vec{e_2} = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} \cdot \begin{bmatrix} \alpha^2 & 0 & 0 \\ 0 & \beta^2 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} \cdot \begin{pmatrix} 0 \\ \beta^2 \\ 0 \end{pmatrix} = 0" />
              <BlockMath math="\vec{e_1} \cdot F^2 \vec{e_3} = 0" />
              <BlockMath math="\vec{e_2} \cdot F^2 \vec{e_3} = 0" />
              
              <p style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                Therefore: <InlineMath math="\delta \theta(\vec{e_i}, \vec{e_j}) = 0 \implies" /> <strong>There is no angle variation (no shear).</strong>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisOfDeformationPage;
