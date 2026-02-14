import { Metadata } from 'next';
import { getBehanceProjects } from '@/lib/behance';
import ProjectCard from '@/components/ProjectCard';
import styles from './work.module.css';

export const metadata: Metadata = {
    title: 'Projects — Amine Ben Faiza | Visual Identity Designer',
    description: 'Browse brand identity, visual system, and social media design projects by Amine Ben Faiza. Work for startups, tech companies, and sustainable brands.',
};

export default async function WorkPage() {
    const projects = await getBehanceProjects(process.env.NEXT_PUBLIC_BEHANCE_USERNAME || 'aminebenfa');

    return (
        <>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <h1 className="fade-in">Selected Work</h1>
                    <p className={`${styles.intro} fade-in`}>
                        A collection of brand identity, visual system, and social media design projects for
                        startups, tech platforms, and eco-conscious businesses. Each project is built on
                        clarity, consistency, and real-world usability.
                    </p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className={`section ${styles.projectsSection}`}>
                <div className="container">
                    {projects.length > 0 ? (
                        <>
                            <div className={styles.projectCount}>
                                <p>{projects.length} {projects.length === 1 ? 'Project' : 'Projects'}</p>
                            </div>
                            <div className={styles.projectGrid}>
                                {projects.map((project) => (
                                    <ProjectCard key={project.id} project={project} />
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className={styles.emptyState}>
                            <h3>No projects found</h3>
                            <p>Please check back later or visit my Behance profile.</p>
                            <a
                                href="https://www.behance.net/aminebf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                View Behance Profile
                            </a>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="section">
                <div className="container">
                    <div className={styles.ctaCard}>
                        <h2>Interested in working together?</h2>
                        <p>
                            I'm currently available for brand identity, visual system design, and social media
                            projects. Let's discuss how I can help bring your vision to life.
                        </p>
                        <a href="mailto:medaminebenfaiza@gmail.com" className="btn btn-primary">
                            Get in Touch
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
