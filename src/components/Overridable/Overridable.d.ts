import { CSSProperties, ReactNode } from 'react';

export declare type OverridableProps<
    P = {
        id?: HTMLElement['id'];
        className?: HTMLElement['className'];
        children?: ReactNode;
        style?: CSSProperties;
    },
> = P;
