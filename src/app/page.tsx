import Link from 'next/link';
import { getBehanceProjects } from '@/lib/behance';
import ProjectCard from '@/components/ProjectCard';
import styles from './page.module.css';
import Marquee from '@/components/Marquee/Marquee';

export default async function Home() {
    const featuredProjects = await getBehanceProjects(process.env.BEHANCE_USERNAME || 'aminebenfa');

    return (
        <>
            <div className={styles.topPageWrapper}>
                {/* Background blobs */}
                <div className={styles.heroBackground}>
                    <div className={styles.gradientBlob1}></div>
                    <div className={styles.gradientBlob2}></div>
                </div>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.marqueeWrapperTop}>
                        <Marquee
                            text="AMINE BEN FAIZA AMINE BEN FAIZA AMINE BEN FAIZA "
                            speed="80s"
                            direction="left-to-right"
                        />
                    </div>
                    <div className="container">
                        <div className={styles.heroContent}>
                            <h1 className={`${styles.heroTitle} fade-in`}>
                                Helping startups <br />& small businesses<br />
                                look ready to <span className="gradient-text">grow</span>
                            </h1>
                            <p className={`${styles.heroSubtitle} fade-in`}>
                                I'm Amine Ben Faiza, a Visual identity and social media designer. I help you build a clear,
                                professional visual identity—from logo and brand assets to social media and everyday business materials.
                            </p>
                            <div className={`${styles.heroButtons} fade-in`}>
                                <Link href="/work" className="btn btn-primary">
                                    View My Work
                                </Link>
                                <Link href="/#contact" className="btn btn-secondary">
                                    Get in Touch
                                </Link>
                            </div>
                        </div>

                        {/* Animated Background Elements */}
                        <div className={styles.heroBackground}>
                            <div className={styles.gradientBlob1}></div>
                            <div className={styles.gradientBlob2}></div>
                        </div>
                    </div>
                    <div className={styles.marqueeWrapperBottom}>
                        <Marquee 
                            text="VISUAL IDENTITY DESIGN • BRAND DESIGN • SOCIAL MEDIA DESIGN • " 
                            speed="80s" 
                            direction="right-to-left"
                        />
                    </div>
                </section>

                {/* Featured Work Section */}
                <section className={styles.featuredSection}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2>Selected Projects</h2>
                            <Link href="/work" className={styles.viewAll}>
                                View All Projects →
                            </Link>
                        </div>

                        <div className={styles.projectGrid}>
                            {featuredProjects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            {/* About Snippet Section */}
            <section className={`section ${styles.aboutSection}`}>
                <div className="container">
                    <div className={styles.aboutGrid}>
                        <div className={styles.aboutContent}>
                            <h2>Helping You Grow with Confidence</h2>
                            <p>
                                I specialize in <strong>brand identity, visual systems, and social media design</strong> for
                                startups and small businesses. My approach focuses on <strong>clarity, consistency,
                                    and credibility</strong>—creating designs that look professional and ready for growth.
                            </p>
                            <p>
                                Whether you need a logo, a full brand guideline, or social media templates, I ensure
                                everything I design works seamlessly across all your business channels.
                            </p>
                            <Link href="/about" className="btn btn-primary">
                                More About Me
                            </Link>
                        </div>

                        <div className={styles.aboutStats}>
                            <div className={`${styles.statCard} card`}>
                                <h3 className="gradient-text">5+</h3>
                                <p>Years Experience</p>
                            </div>
                            <div className={`${styles.statCard} card`}>
                                <h3 className="gradient-text">20+</h3>
                                <p>Projects Completed</p>
                            </div>
                            <div className={`${styles.statCard} card`}>
                                <h3 className="gradient-text">100%</h3>
                                <p>Client Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section">
                <div className="container">
                    <h2 className={styles.sectionTitle}>What I Do</h2>
                    <div className={styles.servicesGrid}>
                        <div className={`${styles.serviceCard} card`}>
                            <div className={styles.serviceIcon}>🎨</div>
                            <h3>Brand Identity Design</h3>
                            <p>
                                Creating complete visual systems—logos, color palettes, typography, and
                                guidelines—that define how your brand shows up in the world.
                            </p>
                        </div>

                        <div className={`${styles.serviceCard} card`}>
                            <div className={styles.serviceIcon}>✨</div>
                            <h3>Visual Identity Systems</h3>
                            <p>
                                Developing cohesive design languages that work seamlessly across digital,
                                social, and print applications.
                            </p>
                        </div>

                        <div className={`${styles.serviceCard} card`}>
                            <div className={styles.serviceIcon}>📱</div>
                            <h3>Social Media Design</h3>
                            <p>
                                Crafting on-brand visual content that tells your story and engages your
                                audience consistently across platforms.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={`section ${styles.ctaSection}`} id="contact">
                <div className="container">
                    <div className={styles.ctaCard}>
                        <h2>Let's build something together</h2>
                        <p>
                            Whether you're launching a startup or refreshing an existing brand, I can
                            help you create a visual identity that connects with your audience and
                            scales with your business.
                        </p>
                        <div className={styles.ctaButtons}>
                            <a href="mailto:medaminebenfaiza@gmail.com" className="btn btn-primary">
                                Start a Project
                            </a>
                            <a href="https://www.behance.net/aminebf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                View Behance
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
