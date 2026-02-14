export interface IBehanceProject {
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