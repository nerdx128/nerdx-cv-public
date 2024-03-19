import { Base } from '@definitions/base';

export interface Plant extends Base {
    quantity: number;
    common_name: string;
    kingdom: string;
    phylum: string;
    class: string;
    subclass: string;
    order: string;
    family: string;
    genus: string;
    species: string;
    cultivar: string;
    image_url: Array<string>;
}

export enum Category {
    Kingdom = 'kingdom',
    Phylum = 'phylum',
    Class = 'class',
    Subclass = 'subclass',
    Order = 'order',
    Family = 'family',
    Genus = 'genus',
    Species = 'species',
}
