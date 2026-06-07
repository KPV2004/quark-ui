import styles from './Overview.module.css';
import { FiShield, FiLayout, FiEye, FiMoon, FiCpu } from 'react-icons/fi';

const features = [
  {
    icon: <FiShield />,
    title: 'Type-Safe',
    desc: 'Built with TypeScript from the ground up. Full IntelliSense, autocompletion, and compile-time safety.',
  },
  {
    icon: <FiLayout />,
    title: 'CSS Modules',
    desc: 'Scoped styles with zero runtime overhead. No CSS-in-JS library needed — just clean, fast CSS.',
  },
  {
    icon: <FiEye />,
    title: 'Accessible',
    desc: 'WAI-ARIA compliant components with keyboard navigation and screen reader support baked in.',
  },
  {
    icon: <FiMoon />,
    title: 'Dark Mode',
    desc: 'Beautiful dark theme with design tokens. Easily customizable through CSS custom properties.',
  },
];

export function Overview() {
  return (
    <div>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <div className={styles.hero}>
        <div className={styles.heroIcon}>
          <FiCpu />
        </div>

        <h1 className={styles.heroTitle}>
          Quark <span className={styles.heroAccent}>UI</span>
        </h1>
        <p className={styles.heroSubtitle}>
          A modern React component library built with TypeScript and CSS Modules.
          Beautiful, accessible, and lightning fast.
        </p>
      </div>

      {/* ── Features ──────────────────────────────────────────── */}
      <div className={styles.featuresGrid}>
        {features.map((f) => (
          <div key={f.title} className={styles.featureCard}>
            <div className={styles.featureIcon}>{f.icon}</div>
            <div className={styles.featureTitle}>{f.title}</div>
            <div className={styles.featureDesc}>{f.desc}</div>
          </div>
        ))}
      </div>


      {/* ── Quick start ───────────────────────────────────────── */}
      <div className={styles.codeSection}>
        <div className={styles.codeSectionTitle}>Quick Start</div>
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <span className={styles.codeDotRed} />
            <span className={styles.codeDotYellow} />
            <span className={styles.codeDotGreen} />
          </div>
          <pre className={styles.codeContent}>
            <div className={styles.codeLine}>
              <span className={styles.codeComment}>{'// Install the package'}</span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.codeKeyword}>npm</span>
              {' install '}
              <span className={styles.codeString}>@kpv2004/quark-ui</span>
            </div>
            <div className={styles.codeLine}>{''}</div>
            <div className={styles.codeLine}>
              <span className={styles.codeComment}>{'// Import components'}</span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.codeKeyword}>import</span>
              {' { '}
              <span className={styles.codeComponent}>Button</span>
              {', '}
              <span className={styles.codeComponent}>Card</span>
              {', '}
              <span className={styles.codeComponent}>Input</span>
              {' } '}
              <span className={styles.codeKeyword}>from</span>
              {' '}
              <span className={styles.codeString}>'@kpv2004/quark-ui'</span>
              <span className={styles.codePunctuation}>;</span>
            </div>
            <div className={styles.codeLine}>{''}</div>
            <div className={styles.codeLine}>
              <span className={styles.codeComment}>{'// Import design tokens'}</span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.codeKeyword}>import</span>
              {' '}
              <span className={styles.codeString}>'@kpv2004/quark-ui/styles'</span>
              <span className={styles.codePunctuation}>;</span>
            </div>
            <div className={styles.codeLine}>{''}</div>
            <div className={styles.codeLine}>
              <span className={styles.codeComment}>{'// Use in your app'}</span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.codeKeyword}>{'function'}</span>
              {' '}
              <span className={styles.codeComponent}>App</span>
              <span className={styles.codePunctuation}>{'() {'}</span>
            </div>
            <div className={styles.codeLine}>
              {'  '}
              <span className={styles.codeKeyword}>return</span>
              {' ('}
            </div>
            <div className={styles.codeLine}>
              {'    '}
              <span className={styles.codePunctuation}>{'<'}</span>
              <span className={styles.codeComponent}>Card</span>
              {' '}
              <span className={styles.codeAttr}>variant</span>
              <span className={styles.codePunctuation}>{'='}</span>
              <span className={styles.codeString}>"glass"</span>
              <span className={styles.codePunctuation}>{'>'}</span>
            </div>
            <div className={styles.codeLine}>
              {'      '}
              <span className={styles.codePunctuation}>{'<'}</span>
              <span className={styles.codeComponent}>Button</span>
              {' '}
              <span className={styles.codeAttr}>variant</span>
              <span className={styles.codePunctuation}>{'='}</span>
              <span className={styles.codeString}>"primary"</span>
              <span className={styles.codePunctuation}>{'>'}</span>
              {'Get Started'}
              <span className={styles.codePunctuation}>{'</'}</span>
              <span className={styles.codeComponent}>Button</span>
              <span className={styles.codePunctuation}>{'>'}</span>
            </div>
            <div className={styles.codeLine}>
              {'    '}
              <span className={styles.codePunctuation}>{'</'}</span>
              <span className={styles.codeComponent}>Card</span>
              <span className={styles.codePunctuation}>{'>'}</span>
            </div>
            <div className={styles.codeLine}>
              {'  '}
              {');'}
            </div>
            <div className={styles.codeLine}>
              <span className={styles.codePunctuation}>{'}'}</span>
            </div>
          </pre>
        </div>
      </div>

      {/* ── Stats ─────────────────────────────────────────────── */}
      <div className={styles.stats}>
        <div className={styles.stat}>
          <div className={styles.statValue}>8</div>
          <div className={styles.statLabel}>Components</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statValue}>100%</div>
          <div className={styles.statLabel}>TypeScript</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statValue}>0</div>
          <div className={styles.statLabel}>Runtime deps</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statValue}>A11y</div>
          <div className={styles.statLabel}>Accessible</div>
        </div>
      </div>
    </div>
  );
}
