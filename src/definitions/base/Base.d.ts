export interface Base {
    id: string;
    created_at?: Date;
    updated_at?: Date;
    archived: boolean;
}

export interface APIConfigProps {
    host?: string;
    version?: string;
    key?: string;
    secret?: string;
    api: string;
    url: string;
}

export interface Filter {
    id: string;
    name: string;
    options: Array<Option>;
}

export interface Option {
    value: string;
    label: string;
}
