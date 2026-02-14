import { Metadata } from 'next';
import Link from 'next/link';
import styles from './about.module.css';

export const metadata: Metadata = {
    title: 'About — Amine Ben Faiza | Visual Identity Designer',
    description: 'Learn more about Amine Ben Faiza, a brand and visual identity designer with 5 years of experience working with startups, tech companies, and sustainable brands.',
};

export default function AboutPage() {
    return (
        <>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <h1 className="fade-in">Building brands that feel ready to grow</h1>
                    <p className={`${styles.intro} fade-in`}>
                        I'm Amine Ben Faiza, a Visual identity and social media designer. I help startups and small businesses
                        build a clear, professional visual identity—from logo and brand assets to social media and everyday business materials.
                        Everything I design is made to look consistent, modern, and credible, so your brand feels ready to grow from day one.
                    </p>
                </div>
            </section>

            {/* About Section */}
            <section className="section">
                <div className="container-narrow">
                    <h2>Who I Am</h2>
                    <p>
                        I specialize in <strong>brand identity, visual systems, and social media design</strong> for
                        startups, tech companies, eco-friendly brands, and small businesses. Over the past five years,
                        I've had the opportunity to work with clients like <strong>Biodex</strong>, <strong>UCO.tn</strong>,
                        <strong>Sustainable Oil Collect</strong>, and <strong>Dar Elbidha</strong>, helping them translate
                        their mission into cohesive visual experiences.
                    </p>
                    <p>
                        My background spans digital and print design, with a focus on creating systems that don't just
                        look good in a presentation deck but actually function across websites, social media, packaging,
                        signage, and beyond.
                    </p>
                    <p>I'm based in Tunisia and work with clients globally.</p>
                </div>
            </section>

            {/* Design Approach */}
            <section className={`section ${styles.approachSection}`}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>How I Work</h2>
                    <div className={styles.approachGrid}>
                        <div className={`${styles.approachCard} card`}>
                            <div className={styles.approachIcon}>🎯</div>
                            <h3>Clarity</h3>
                            <p>
                                Every design decision should reduce complexity, not add to it. I focus on creating
                                visual systems that communicate your message clearly and make it easy for your
                                audience to understand who you are and what you offer.
                            </p>
                        </div>

                        <div className={`${styles.approachCard} card`}>
                            <div className={styles.approachIcon}>🔄</div>
                            <h3>Consistency</h3>
                            <p>
                                A brand isn't just a logo—it's how you show up across every touchpoint. I develop
                                comprehensive systems with guidelines, rules, and assets that ensure your identity
                                stays cohesive whether it's on Instagram, a billboard, or a business card.
                            </p>
                        </div>

                        <div className={`${styles.approachCard} card`}>
                            <div className={styles.approachIcon}>⚡</div>
                            <h3>Real-World Usability</h3>
                            <p>
                                Beautiful concepts don't matter if they don't translate to real applications. I
                                design with the end user and context in mind, making sure every element works
                                seamlessly across digital, social, and print media.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="section">
                <div className="container">
                    <h2 className={styles.sectionTitle}>What I Do Best</h2>
                    <div className={styles.skillsGrid}>
                        <div>
                            <h3 className={styles.skillTitle}>Brand Identity Design</h3>
                            <ul className={styles.skillList}>
                                <li>Logo design & visual marks</li>
                                <li>Color systems & typography</li>
                                <li>Brand guidelines & usage rules</li>
                                <li>Visual language development</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className={styles.skillTitle}>Visual Identity Systems</h3>
                            <ul className={styles.skillList}>
                                <li>Design system creation</li>
                                <li>Icon & graphic element libraries</li>
                                <li>Multi-platform visual consistency</li>
                                <li>Brand application design (digital, print, environmental)</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className={styles.skillTitle}>Social Media Design</h3>
                            <ul className={styles.skillList}>
                                <li>Content design & visual storytelling</li>
                                <li>Platform-specific templates</li>
                                <li>Campaign visuals</li>
                                <li>Cohesive feed aesthetics</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className={`section ${styles.experienceSection}`}>
                <div className="container-narrow">
                    <h2>Experience & Notable Work</h2>
                    <p>
                        Over the past 5 years, I've designed for:
                    </p>
                    <ul className={styles.experienceList}>
                        <li><strong>Tech & SaaS platforms</strong> — Creating modern, scalable brand identities for digital products</li>
                        <li><strong>Sustainable & eco-friendly brands</strong> — Communicating environmental missions through clear, trustworthy visual systems</li>
                        <li><strong>Biotech & health companies</strong> — Balancing scientific credibility with contemporary design</li>
                        <li><strong>Hospitality & tourism</strong> — Crafting visual narratives that capture brand atmosphere and experience</li>
                    </ul>

                    <div className={styles.clientsSection}>
                        <h3 className={styles.clientsTitle}>Notable Clients</h3>
                        <div className={styles.clientsList}>
                            <span className={styles.client}>Biodex</span>
                            <span className={styles.client}>UCO.tn</span>
                            <span className={styles.client}>Sustainable Oil Collect</span>
                            <span className={styles.client}>Dar Elbidha</span>
                            <span className={styles.client}>Lincco</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section">
                <div className="container">
                    <div className={styles.ctaCard}>
                        <h2>Let's work together</h2>
                        <p>
                            Whether you're launching a new brand or refreshing an existing one, I can help you
                            build a visual identity that connects with your audience and supports your business goals.
                        </p>
                        <div className={styles.ctaButtons}>
                            <a href="mailto:medaminebenfaiza@gmail.com" className="btn btn-primary">
                                Start a Project
                            </a>
                            <Link href="/work" className="btn btn-secondary">
                                View My Work
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
