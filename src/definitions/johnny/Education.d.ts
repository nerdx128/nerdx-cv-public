import { IconType } from 'react-icons';
import React, { HTMLProps } from 'react';

export interface School {
    id: number;
    name: string;
    location: string;
    tenure: string;
    degree: Degree;
    imageUrl: string;
    info: EducationInfo;
    courses: Array<Course>;
    projectIds: Array<number>;
}

export interface Degree {
    type: string;
    Major: string;
    Focus?: string;
    Minor?: string;
}

export interface EducationInfo {
    description: Array<string>;
    website: string;
    project?: string;
}

export interface Course {
    number: string;
    name: string;
    section: string;
    description: Array<string>;
}
