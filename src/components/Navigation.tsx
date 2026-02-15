'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Navigation.module.css';
import Image from 'next/image';

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    <div className={styles.logoWrapper}>
                        <Image
                            src="/images/logo.png"
                            alt="Amine Ben Faiza Logo"
                            fill
                            priority
                            className={styles.logoImage}
                        />
                    </div>
                </Link>

                <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
                    <Link href="/" className={styles.navLink}>Home</Link>
                    <Link href="/about" className={styles.navLink}>About</Link>
                    <Link href="/work" className={styles.navLink}>Work</Link>
                    <Link href="/#contact" className={styles.navLink}>Contact</Link>
                </div>

                <button
                    className={styles.mobileMenuBtn}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={styles.hamburger}></span>
                </button>
            </div>
        </nav>
    );
}
