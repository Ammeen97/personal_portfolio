import { IBehanceProject } from "../../models/IBehanceProject";
import { IBehanceUser } from "../../models/IBehanceUser";

/**
 * Fetch user's projects
 * Since API/Scraping is disabled, this returns hardcoded data immediately.
 */
export async function getBehanceProjects(username: string): Promise<IBehanceProject[]> {
    return getFallbackProjects();
}

/**
 * Fetch user profile
 * Returns a static profile object to prevent errors in components.
 */
export async function getBehanceUser(username: string): Promise<IBehanceUser | null> {
    return {
        id: 0,
        first_name: "Amine",
        last_name: "Ben Faiza",
        username: username,
        url: `https://www.behance.net/${username}`,
        city: "Tunis",
        country: "Tunisia",
        images: {
            '276': '/images/profile.jpg' // Ensure this exists or use a placeholder
        },
        fields: ['Visual Identity', 'Social Media Design'],
        stats: {
            followers: 0,
            following: 0,
            appreciations: 0,
            views: 0,
            projects: 5,
        }
    };
}

/**
 * Local project data
 */
function getFallbackProjects(): IBehanceProject[] {
    return [
        {
            id: 1,
            name: 'LINCCO — Visual Identity',
            published_on: Date.now() / 1000,
            created_on: Date.now() / 1000,
            modified_on: Date.now() / 1000,
            url: 'https://www.behance.net/gallery/211138111/lincco-visual-identity',
            covers: {
                '404': 'images/projects/lincco-thumb.jpeg',
                original: '/images/projects/lincco-thumb.jpeg',
            },
            fields: ['Branding', 'Graphic Design'],
            stats: { views: 0, appreciations: 0, comments: 0 },
            description: 'A modern, minimal brand identity for a link-in-bio platform built for creators and startups.',
            tags: ['brand identity', 'tech', 'saas', 'visual identity'],
        },
        {
            id: 2,
            name: 'BIODEX — Brand Refresh & Visual Identity System',
            published_on: Date.now() / 1000,
            created_on: Date.now() / 1000,
            modified_on: Date.now() / 1000,
            url: 'https://www.behance.net/gallery/242914705/biodex-brand-refresh-visual-identity-system',
            covers: {
                '404': '/images/projects/biodex-thumb.jpeg',
                original: '/images/projects/biodex-thumb.jpeg',
            },
            fields: ['Branding', 'Graphic Design'],
            stats: { views: 0, appreciations: 0, comments: 0 },
            description: 'A contemporary brand refresh for a biotech company, balancing modernity with scientific credibility.',
            tags: ['brand refresh', 'bio', 'sustainability', 'eco-friendly'],
        },
        {
            id: 3,
            name: 'UCO.tn — Sustainable Brand Identity System',
            published_on: Date.now() / 1000,
            created_on: Date.now() / 1000,
            modified_on: Date.now() / 1000,
            url: 'https://www.behance.net/gallery/242916079/UCOtn-Brand-Identity-Visual-Guidelines',
            covers: {
                '404': '/images/projects/uco-thumb.png',
                original: '/images/projects/uco-thumb.png',
            },
            fields: ['Branding', 'Graphic Design'],
            stats: { views: 0, appreciations: 0, comments: 0 },
            description: 'A complete brand identity for a sustainable oil collection platform, communicating trust and environmental impact.',
            tags: ['sustainability', 'brand identity', 'environmental'],
        },
        {
            id: 4,
            name: 'Dar Elbidha — Visual Storytelling for Social Media',
            published_on: Date.now() / 1000,
            created_on: Date.now() / 1000,
            modified_on: Date.now() / 1000,
            url: 'https://www.behance.net/gallery/242921073/Dar-Elbdidha-Social-Media-Design',
            covers: {
                '404': '/images/projects/darelbidha-thumb.png',
                original: '/images/projects/darelbidha-thumb.png',
            },
            fields: ['Social Media', 'Graphic Design'],
            stats: { views: 0, appreciations: 0, comments: 0 },
            description: 'Cohesive social media visuals that capture the serene, authentic coastal lifestyle of a Djerba guesthouse.',
            tags: ['social media', 'hospitality', 'visual storytelling'],
        },
        {
            id: 5,
            name: 'Sustainable Oil Collect — Visual Identity Design',
            published_on: Date.now() / 1000,
            created_on: Date.now() / 1000,
            modified_on: Date.now() / 1000,
            url: 'https://www.behance.net/gallery/220774675/Sustainable-Oil-Collect-Visual-Identity-Design',
            covers: {
                '404': '/images/projects/soc-thumb.png',
                original: '/images/projects/soc-thumb.png',
            },
            fields: ['Branding', 'Graphic Design'],
            stats: { views: 0, appreciations: 0, comments: 0 },
            description: 'Visual identity design for Sustainable Oil Collect, focusing on environmental impact and professional trust.',
            tags: ['branding', 'visual identity', 'sustainability', 'ecology'],
        },
    ];
}

export function getCategoryFromProject(project: IBehanceProject): string {
    const combined = [...(project.fields || []), ...(project.tags || [])].map(t => t.toLowerCase());
    if (combined.some(t => t.includes('social'))) return 'Social Media Design';
    if (combined.some(t => t.includes('refresh'))) return 'Brand Refresh';
    if (combined.some(t => t.includes('brand') || t.includes('identity'))) return 'Brand Identity';
    if (combined.some(t => t.includes('print'))) return 'Print Design';
    return 'Graphic Design';
}

export function getIndustryFromProject(project: IBehanceProject): string {
    const tags = project.tags?.map(t => t.toLowerCase()) || [];
    const name = project.name.toLowerCase();
    if (tags.some(t => t.includes('tech') || t.includes('saas')) || name.includes('tech')) return 'Tech/SaaS';
    if (tags.some(t => t.includes('bio')) || name.includes('bio')) return 'Biotech';
    if (tags.some(t => t.includes('sustain') || t.includes('uco')) || name.includes('sustain')) return 'Sustainability';
    if (tags.some(t => t.includes('hospital') || t.includes('dar'))) return 'Hospitality';
    return 'Creative';
}