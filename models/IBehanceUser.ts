export interface IBehanceUser {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    display_name?: string; // Optional as it's often a concatenation
    url: string;
    city?: string;         // Added for your portfolio 'About' section
    country?: string;      // Added for your portfolio 'About' section
    images: {
        '50'?: string;
        '100'?: string;
        '115'?: string;
        '138'?: string;
        '230'?: string;
        '276'?: string;
    };
    fields: string[];
    stats: {
        followers: number;
        following: number;
        appreciations: number;
        views: number;
        projects: number;
        comments?: number; // Sometimes available in the state
    };
    links?: Array<{    // Useful for dynamically showing your social icons
        title: string;
        url: string;
    }>;
}