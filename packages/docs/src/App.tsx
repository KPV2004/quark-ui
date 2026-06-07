import { useState } from 'react';
import styles from './App.module.css';
import { Overview } from './pages/Overview';
import { ButtonSection } from './pages/ButtonSection';
import { CardSection } from './pages/CardSection';
import { InputSection } from './pages/InputSection';
import { ToggleSection } from './pages/ToggleSection';
import { BadgeSection } from './pages/BadgeSection';
import { AlertSection } from './pages/AlertSection';
import { AvatarSection } from './pages/AvatarSection';
import { SpinnerSection } from './pages/SpinnerSection';
import {
  FiHome,
  FiMousePointer,
  FiLayers,
  FiEdit3,
  FiToggleRight,
  FiTag,
  FiBell,
  FiUser,
  FiLoader,
  FiSun,
  FiMoon
} from 'react-icons/fi';



type Page =
  | 'overview'
  | 'button'
  | 'card'
  | 'input'
  | 'toggle'
  | 'badge'
  | 'alert'
  | 'avatar'
  | 'spinner';

interface NavItem {
  id: Page;
  label: string;
  icon: React.ReactNode;
  section?: string;
}

const navItems: NavItem[] = [
  { id: 'overview', label: 'Overview', icon: <FiHome />, section: 'Getting Started' },
  { id: 'button', label: 'Button', icon: <FiMousePointer />, section: 'Components' },
  { id: 'card', label: 'Card', icon: <FiLayers /> },
  { id: 'input', label: 'Input', icon: <FiEdit3 /> },
  { id: 'toggle', label: 'Toggle', icon: <FiToggleRight /> },
  { id: 'badge', label: 'Badge', icon: <FiTag /> },
  { id: 'alert', label: 'Alert', icon: <FiBell />, section: 'Feedback' },
  { id: 'avatar', label: 'Avatar', icon: <FiUser /> },
  { id: 'spinner', label: 'Spinner', icon: <FiLoader className={styles.rotatingIcon} /> },
];



const pageComponents: Record<Page, React.FC> = {
  overview: Overview,
  button: ButtonSection,
  card: CardSection,
  input: InputSection,
  toggle: ToggleSection,
  badge: BadgeSection,
  alert: AlertSection,
  avatar: AvatarSection,
  spinner: SpinnerSection,
};

export function App() {
  const [activePage, setActivePage] = useState<Page>('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  const ActiveComponent = pageComponents[activePage];

  const handleNav = (page: Page) => {
    setActivePage(page);
    setSidebarOpen(false);
  };

  return (
    <div className={styles.layout}>
      {/* Mobile menu button */}
      <button
        className={styles.mobileMenuBtn}
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle menu"
      >
        {sidebarOpen ? '✕' : '☰'}
      </button>

      {/* Overlay */}
      <div
        className={`${styles.overlay} ${sidebarOpen ? styles.overlayVisible : ''}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}
      >
        <div className={styles.sidebarHeader}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className={styles.logoRow}>
              <div className={styles.logoIcon}>⚛</div>
              <div className={styles.logoText}>
                <div className={styles.logoTitle}>Quark UI</div>
                <div className={styles.logoSubtitle}>Component Library</div>
              </div>
            </div>
            <button
              onClick={toggleTheme}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--qk-text-2)',
                cursor: 'pointer',
                fontSize: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px',
                borderRadius: '50%',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--qk-bg-surface-3)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </button>
          </div>
          <div className={styles.versionBadge}>
            <span className={styles.versionDot} />
            v0.1.4
          </div>
        </div>


        <nav className={styles.nav}>
          {navItems.map((item) => (
            <div key={item.id}>
              {item.section && (
                <div className={styles.navSection}>{item.section}</div>
              )}
              <div
                className={
                  activePage === item.id ? styles.navItemActive : styles.navItem
                }
                onClick={() => handleNav(item.id)}
              >
                <span className={styles.navIcon}>{item.icon}</span>
                {item.label}
              </div>
            </div>
          ))}
        </nav>

        <div className={styles.sidebarFooter}>
          <a
            href="https://github.com/KPV2004/quark-ui"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            GitHub
          </a>
          <span className={styles.footerSep}>·</span>
          <span className={styles.footerLink}>NPM</span>
          <span className={styles.footerSep}>·</span>
          <a
            href="https://github.com/KPV2004/quark-ui/blob/main/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            License
          </a>
        </div>
      </aside>

      {/* Main content */}
      <main className={styles.content}>
        <div className={styles.contentInner}>
          <ActiveComponent />
        </div>
      </main>
    </div>
  );
}
