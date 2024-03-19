export interface Project {
    id: number;
    title: string;
    href: string;
    location: string;
    description: Array<string>;
    image_url: string;
    date: string;
    datetime: string;
    category: { title: string; href: string };
    author: {
        name: string;
        role: string;
        href: string;
        imageUrl: string;
    };
}
