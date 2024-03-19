import { Logos } from '@assets/Logos/Logos';
import { School } from '@definitions/johnny';

export const Education: Array<School> = [
    {
        id: 1,
        name: 'Sam Houston State University',
        location: 'Huntsville, TX',
        tenure: 'Aug 2009 - May 2013',
        degree: {
            type: 'Bachelor of Science',
            Major: 'Computer Science',
            Focus: 'Information Assurance',
            Minor: 'Mathematics',
        },
        imageUrl: Logos.SHSU,
        info: {
            description: [
                `Sam Houston State University is a public university in Huntsville`,
            ],
            website: 'https://www.shsu.edu/',
        },
        courses: [
            {
                number: 'CS 3377',
                name: 'Software Engineering',
                section: 'Software Engineering',
                description: [
                    `This course is a study of the software development process, including requirements analysis, design, coding, testing, and maintenance. The course will also cover software development methodologies and tools.`,
                ],
            },
        ],
        projectIds: [],
    },
    {
        id: 1,
        name: 'Sam Houston State University',
        location: 'Huntsville, TX',
        tenure: 'Aug 2013 - Dec 2014',
        degree: {
            type: 'Master of Science',
            Major: 'Computing and Information Science',
        },
        imageUrl: Logos.SHSU,
        info: {
            description: [
                `Sam Houston State University is a public university in Huntsville`,
            ],
            website: 'https://www.shsu.edu/',
        },
        courses: [
            {
                number: 'CS 3377',
                name: 'Software Engineering',
                section: 'Software Engineering',
                description: [
                    `This course is a study of the software development process, including requirements analysis, design, coding, testing, and maintenance. The course will also cover software development methodologies and tools.`,
                ],
            },
        ],
        projectIds: [],
    },
    {
        id: 3,
        name: 'Signal Corps - Mission Support School (US Army)',
        location: 'Camp Joseph T. Robinson, AR',
        tenure: 'Jan 2011 - Mar 2011',
        degree: {
            type: '',
            Major: '25B - Information Technology Specialist',
        },
        imageUrl: Logos.SignalCorp,
        info: {
            description: [
                `The Signal Corps is a branch of the United States Army that creates and manages communications and information systems for the command and control of combined arms forces.`,
            ],
            website: 'https://www.army.mil/',
        },
        courses: [],
        projectIds: [],
    },
    {
        id: 4,
        name: 'Signal Corps - Advanced Individual Training (US Army)',
        location: 'Fort Gordon, GA',
        tenure: 'Apr 2009 - Aug 2009',
        degree: {
            type: '',
            Major: '25U - Signal Support Systems Specialist',
        },
        imageUrl: Logos.SignalCorp,
        info: {
            description: [
                `The Signal Corps is a branch of the United States Army that creates and manages communications and information systems for the command and control of combined arms forces.`,
            ],
            website: 'https://www.army.mil/',
        },
        courses: [],
        projectIds: [],
    },
];
