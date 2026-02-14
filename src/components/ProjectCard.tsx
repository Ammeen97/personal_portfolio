import Link from 'next/link';
import { BehanceProject, getCategoryFromProject, getIndustryFromProject } from '@/lib/behance';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
    project: BehanceProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const category = getCategoryFromProject(project);
    const industry = getIndustryFromProject(project);
    const imageUrl = project.covers?.['404'] || project.covers?.original || '/images/placeholder.jpg';

    return (
        <Link href={project.url} target="_blank" rel="noopener noreferrer" className={`${styles.card} card`}>
            <div className={styles.imageWrapper}>
                <div
                    className={styles.image}
                    style={{ backgroundImage: `url(${imageUrl})` }}
                >
                    <div className={styles.overlay}>
                        <span className={styles.viewProject}>View Project →</span>
                    </div>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.tags}>
                    <span className={styles.tag}>{category}</span>
                    <span className={styles.tag}>{industry}</span>
                </div>
                <h3 className={styles.title}>{project.name}</h3>
                {project.description && (
                    <p className={styles.description}>{project.description}</p>
                )}
                {project.stats && (
                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <span className={styles.statIcon}>👁</span>
                            <span>{project.stats.views.toLocaleString()}</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statIcon}>❤️</span>
                            <span>{project.stats.appreciations.toLocaleString()}</span>
                        </div>
                    </div>
                )}
            </div>
        </Link>
    );
}
