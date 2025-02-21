
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
              <Link href="/servicio-tecnico-particulares">Computadoras</Link>
            </li>
            <li>
              <Link href="/servicio-tecnico-celulares">Celulares</Link>
            </li>
            <li>
              <Link href="/lista-de-precios">Lista de precios</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;