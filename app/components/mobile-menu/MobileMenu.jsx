
import Link from 'next/link';
import styles from './mobileMenu.module.css';

const MobileMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
      <div className={styles.menuContent}>
        <button className={styles.closeButton} onClick={toggleMenu}>×</button>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/servicio-tecnico-particulares">Servicio técnico</Link>
            </li>
            <li>
              <Link href="/desarrollo-web">Desarrollo web</Link>
            </li>
            <li>
              <Link href="/clases-particulares">Clases particulares</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;