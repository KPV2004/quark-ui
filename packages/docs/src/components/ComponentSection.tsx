import { useState, type ReactNode } from 'react';
import styles from './shared.module.css';
import { CodeHighlight } from './CodeHighlight';

/* ── ComponentSection ────────────────────────────────────────────── */

interface ComponentSectionProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function ComponentSection({
  title,
  description,
  children,
}: ComponentSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <div className={styles.sectionTitleUnderline} />
        <p className={styles.sectionDescription}>{description}</p>
      </div>
      {children}
    </section>
  );
}

/* ── DemoBlock ───────────────────────────────────────────────────── */

interface DemoBlockProps {
  label: string;
  children: ReactNode;
  layout?: 'row' | 'grid' | 'stack';
  code?: string;
}

export function DemoBlock({ label, children, layout = 'row', code }: DemoBlockProps) {
  const [showCode, setShowCode] = useState(false);

  const layoutClass =
    layout === 'grid'
      ? styles.demoGrid
      : layout === 'stack'
        ? styles.demoStack
        : styles.demoRow;

  return (
    <div className={styles.demoBlock}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <div className={styles.demoLabel} style={{ marginBottom: 0 }}>{label}</div>
        {code && (
          <button
            onClick={() => setShowCode(!showCode)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--qk-theme-primary)',
              fontSize: '12px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '4px 8px',
              borderRadius: '6px',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--qk-btn-outline-hover-bg)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
          >
            {showCode ? 'Hide Code ▴' : 'Show Code ▾'}
          </button>
        )}
      </div>
      <div className={styles.demoContainer}>
        <div className={layoutClass}>{children}</div>
      </div>
      {showCode && code && <CodeHighlight code={code} />}
    </div>
  );
}

