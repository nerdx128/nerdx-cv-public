import { IconType } from 'react-icons';
import React, { HTMLProps } from 'react';

export interface Skill {
    type: 'fullstack' | 'blockchain' | 'platform';
    name: string;
    logo: string | IconType | React.ReactNode;
    rating: number;
    years: number;
    className?: HTMLProps<any>['className'];
}
