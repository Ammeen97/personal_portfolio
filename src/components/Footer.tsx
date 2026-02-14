import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerGrid}>
                    <div className={styles.footerSection}>
                        <h3 className={styles.footerTitle}>Amine Ben Faiza</h3>
                        <p className={styles.footerText}>
                            Visual identity and social media designer helping startups and small businesses build clear, modern brands.
                        </p>
                    </div>

                    <div className={styles.footerSection}>
                        <h4 className={styles.footerHeading}>Quick Links</h4>
                        <ul className={styles.footerLinks}>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/work">Work</Link></li>
                            <li><Link href="/#contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className={styles.footerSection}>
                        <h4 className={styles.footerHeading}>Connect</h4>
                        <ul className={styles.footerLinks}>
                            <li><a href="https://www.behance.net/aminebf" target="_blank" rel="noopener noreferrer">Behance</a></li>
                            <li><a href="https://www.linkedin.com/in/medaminebfz" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><a href="https://www.instagram.com/aminedesigns97/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        </ul>
                    </div>

                    <div className={styles.footerSection}>
                        <h4 className={styles.footerHeading}>Get in Touch</h4>
                        <p className={styles.footerText}>
                            Based in Tunisia<br />
                            <a href="tel:+21621582329" className={styles.phoneLink}>+216 21 582 329</a><br />
                            Working globally
                        </p>
                        <a href="mailto:medaminebenfaiza@gmail.com" className={styles.emailLink}>
                            medaminebenfaiza@gmail.com
                        </a>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p>© {currentYear} Amine Ben Faiza. All rights reserved.</p>
                    <p className={styles.footerCredit}>Built with Next.js</p>
                </div>
            </div>
        </footer>
    );
}
