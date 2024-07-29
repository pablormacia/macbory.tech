'use client'
import styles from './navbar.module.css'
import { useState } from 'react';
import MobileMenu from '../mobile-menu/MobileMenu'
import Link from 'next/link';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <>
            <div className={`${styles.navbar}`}>
                <svg className={styles.onlyMobile} onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#FFFFFF"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
                {/* <div className={styles.searchInputContainer}>
                    <input id="search" className={styles.searchInput} type="text" />
                    <svg className={styles.searchIcon} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#202020"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
                </div> */}
                <Link href="/"><svg width="32" height="32" viewBox="0 0 231 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.108 115.512L0.82 97.872L64.716 52.988V62.788L0.82 17.708L16.108 0.0679915L81.572 47.5V68.276L16.108 115.512ZM101.163 121V100.812H230.327V121H101.163Z" fill="url(#paint0_linear_161_68)" />
                    <defs>
                        <linearGradient id="paint0_linear_161_68" x1="116.5" y1="-59" x2="116.5" y2="170" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#9611A2" />
                            <stop offset="1" stop-color="#169DE9" />
                        </linearGradient>
                    </defs>
                </svg></Link>
                <div className={styles.onlyDesktop}>
                    <ul className={styles.menuDesktop}>
                        <li><Link rel="stylesheet" href="/" >Home</Link></li>
                        <li><Link rel="stylesheet" href="/servicio-tecnico-particulares" >Servicio técnico</Link></li>
                        <li><Link rel="stylesheet" href="/desarrollo-web" >Desarrollo web</Link></li>
                        <li><Link rel="stylesheet" href="/clases-particulares" >Clases particulares</Link></li>
                    </ul>
                </div>
            </div>
            <MobileMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
        </>
    )
}

export default Navbar