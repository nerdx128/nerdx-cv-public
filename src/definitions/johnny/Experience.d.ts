import { Project } from '@definitions/johnny/Projects';

export interface Employer {
    id: number;
    name: string;
    location: string;
    tenure: string;
    roles: Role[];
    logo: string;
    description: string;
    url: string;
    responsibilities: Array<Responsibility>;
    projects: Array<Project>;
    collaborations: Array<Collaboration>;
}

export interface Role {
    title: string;
    tenure: string;
}

export interface Responsibility {
    descriptions: Array<string>;
    employer_id: string;
}

export interface Collaboration {
    name: string;
    logo: string;
    url: string;
}
