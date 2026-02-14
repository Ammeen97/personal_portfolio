// Behance API integration
const BEHANCE_API_URL = 'https://api.behance.net/v2';
const API_KEY = process.env.NEXT_PUBLIC_BEHANCE_API_KEY || '';

export interface BehanceProject {
    id: number;
    name: string;
    published_on: number;
    created_on: number;
    modified_on: number;
    url: string;
    covers: {
        '404'?: string;
        '230'?: string;
        '202'?: string;
        original?: string;
    };
    fields: string[];
    stats: {
        views: number;
        appreciations: number;
        comments: number;
    };
    description?: string;
    tags?: string[];
}

export interface BehanceUser {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    display_name: string;
    url: string;
    images: {
        '138'?: string;
        '276'?: string;
    };
    fields: string[];
    stats: {
        followers: number;
        following: number;
        appreciations: number;
        views: number;
        projects: number;
    };
}

/**
 * Fetch user's projects from Behance
 * Note: Behance API can be used without an API key for public data,
 * but rate limits are lower
 */
export async function getBehanceProjects(username: string): Promise<BehanceProject[]> {
    try {
        const params = new URLSearchParams({
            ...(API_KEY && { client_id: API_KEY }),
        });

        const response = await fetch(
            `${BEHANCE_API_URL}/users/${username}/projects?${params}`,
            {
                next: { revalidate: 3600 }, // Cache for 1 hour
            }
        );

        if (!response.ok) {
            console.error('Behance API error:', response.status, response.statusText);
            return getFallbackProjects();
        }

        const data = await response.json();
        return data.projects || [];
    } catch (error) {
        console.error('Error fetching Behance projects:', error);
        return getFallbackProjects();
    }
}

/**
 * Fetch user profile from Behance
 */
export async function getBehanceUser(username: string): Promise<BehanceUser | null> {
    try {
        const params = new URLSearchParams({
            ...(API_KEY && { client_id: API_KEY }),
        });

        const response = await fetch(
            `${BEHANCE_API_URL}/users/${username}?${params}`,
            {
                next: { revalidate: 86400 }, // Cache for 24 hours
            }
        );

        if (!response.ok) {
            return null;
        }

        const data = await response.json();
        return data.user || null;
    } catch (error) {
        console.error('Error fetching Behance user:', error);
        return null;
    }
}

/**
 * Fallback projects data when API is unavailable
 * These match your actual projects
 */
function getFallbackProjects(): BehanceProject[] {
    return [
        {
            id: 211138111,
            name: 'LINCCO — Visual Identity',
            published_on: Date.now() / 1000,
            created_on: Date.now() / 1000,
            modified_on: Date.now() / 1000,
            url: 'https://www.behance.net/gallery/211138111/lincco-visual-identity',
            covers: {
                '404': '/images/projects/lincco-thumb.svg',
                original: '/images/projects/lincco-thumb.svg',
            },
            fields: ['Branding', 'Graphic Design'],
            stats: {
                views: 0,
                appreciations: 0,
                comments: 0,
            },
            description: 'A modern, minimal brand identity for a link-in-bio platform built for creators and startups.',
            tags: ['brand identity', 'tech', 'saas', 'visual identity'],
        },
        {
            id: 242914705,
            name: 'BIODEX — Brand Refresh & Visual Identity System',
            published_on: Date.now() / 1000,
            created_on: Date.now() / 1000,
            modified_on: Date.now() / 1000,
            url: 'https://www.behance.net/gallery/242914705/biodex-brand-refresh-visual-identity-system',
            covers: {
                '404': '/images/projects/biodex-thumb.svg',
                original: '/images/projects/biodex-thumb.svg',
            },
            fields: ['Branding', 'Graphic Design'],
            stats: {
                views: 0,
                appreciations: 0,
                comments: 0,
            },
            description: 'A contemporary brand refresh for a biotech company, balancing modernity with scientific credibility.',
            tags: ['brand refresh', 'biotech', 'sustainability', 'eco-friendly'],
        },
        {
            id: 300000001,
            name: 'UCO.tn — Sustainable Brand Identity System',
            published_on: Date.now() / 1000,
            created_on: Date.now() / 1000,
            modified_on: Date.now() / 1000,
            url: 'https://www.behance.net/gallery/242916079/UCOtn-Brand-Identity-Visual-Guidelines',
            covers: {
                '404': '/images/projects/uco-thumb.svg',
                original: '/images/projects/uco-thumb.svg',
            },
            fields: ['Branding', 'Graphic Design'],
            stats: {
                views: 0,
                appreciations: 0,
                comments: 0,
            },
            description: 'A complete brand identity for a sustainable oil collection platform, communicating trust and environmental impact.',
            tags: ['sustainability', 'brand identity', 'environmental'],
        },
        {
            id: 300000002,
            name: 'Dar Elbidha — Visual Storytelling for Social Media',
            published_on: Date.now() / 1000,
            created_on: Date.now() / 1000,
            modified_on: Date.now() / 1000,
            url: 'https://www.behance.net/gallery/242921073/Dar-Elbdidha-Social-Media-Design',
            covers: {
                '404': '/images/projects/dar-elbidha-thumb.svg',
                original: '/images/projects/dar-elbidha-thumb.svg',
            },
            fields: ['Social Media', 'Graphic Design'],
            stats: {
                views: 0,
                appreciations: 0,
                comments: 0,
            },
            description: 'Cohesive social media visuals that capture the serene, authentic coastal lifestyle of a Djerba guesthouse.',
            tags: ['social media', 'hospitality', 'visual storytelling'],
        },
        {
            id: 220774675,
            name: 'Sustainable Oil Collect — Visual Identity Design',
            published_on: Date.now() / 1000,
            created_on: Date.now() / 1000,
            modified_on: Date.now() / 1000,
            url: 'https://www.behance.net/gallery/220774675/Sustainable-Oil-Collect-Visual-Identity-Design',
            covers: {
                '404': '/images/projects/soc-thumb.svg',
                original: '/images/projects/soc-thumb.svg',
            },
            fields: ['Branding', 'Graphic Design'],
            stats: {
                views: 0,
                appreciations: 0,
                comments: 0,
            },
            description: 'Visual identity design for Sustainable Oil Collect, focusing on environmental impact and professional trust.',
            tags: ['branding', 'visual identity', 'sustainability', 'ecology'],
        },
    ];
}

/**
 * Get category from project fields/tags
 */
export function getCategoryFromProject(project: BehanceProject): string {
    const fields = project.fields?.map(f => f.toLowerCase()) || [];
    const tags = project.tags?.map(t => t.toLowerCase()) || [];
    const combined = [...fields, ...tags];

    if (combined.some(t => t.includes('social media') || t.includes('social'))) {
        return 'Social Media Design';
    }
    if (combined.some(t => t.includes('brand refresh') || t.includes('refresh'))) {
        return 'Brand Refresh';
    }
    if (combined.some(t => t.includes('brand') || t.includes('identity'))) {
        return 'Brand Identity';
    }
    if (combined.some(t => t.includes('print'))) {
        return 'Print Design';
    }

    return 'Graphic Design';
}

/**
 * Get industry from project tags/description
 */
export function getIndustryFromProject(project: BehanceProject): string {
    const tags = project.tags?.map(t => t.toLowerCase()) || [];
    const name = project.name.toLowerCase();

    if (tags.some(t => t.includes('tech') || t.includes('saas')) || name.includes('tech') || name.includes('saas')) {
        return 'Tech/SaaS';
    }
    if (tags.some(t => t.includes('bio') || t.includes('health')) || name.includes('bio')) {
        return 'Biotech';
    }
    if (tags.some(t => t.includes('sustain') || t.includes('environment') || t.includes('eco')) ||
        name.includes('sustain') || name.includes('uco')) {
        return 'Sustainability';
    }
    if (tags.some(t => t.includes('hospital') || t.includes('tourism')) || name.includes('dar')) {
        return 'Hospitality';
    }

    return 'Creative';
}
