import { Employer } from '@definitions/johnny/Experience';
import { Logos } from '@assets/Logos/Logos';

export const Experiences: Array<Employer> = [
    {
        id: 1,
        name: 'Project Venkman',
        location: 'Austin, TX',
        tenure: 'Jan 2022 - Nov 2023',
        roles: [
            {
                title: 'Head of Engineering',
                tenure: 'Jan 2022 - Oct 2022',
            },
            {
                title: 'Senior Full Stack Developer',
                tenure: 'Oct 2022 - Nov 2023',
            },
        ],
        logo: Logos.PV,
        description:
            'Project Venkman is a startup focusing on exclusive digital memberships for celebrities, starting with Bill Murray, for their biggest fans. The experience includes creating communities, events, meetups, merchandise, etc. The goal was to create an intimate experience for their fans. Their digital memberships are built upon the blockchain to ensure an exclusive membership. Through blockchain, memberships can be owned, traded or sold through a marketplace like OpenSea.',

        url: 'https://www.projectvenkman.com',
        responsibilities: [
            {
                descriptions: [
                    `As the Head of Engineering, I was responsible for leading the 
                engineering team, setting the technical direction, and ensuring 
                the successful delivery of the product. I was integral in working
                with partnerships and collaborations.`,
                    `As a Senior Full Stack Developer, I was responsible for building 
                and maintaining a reusable member portal for the digital membership,
                which included a trading platform, a merchandise claim system, a
                view for exclusive content.`,
                    `The platform was built using React, TypeScript, Node.js, 
                Tailwind CSS and countless headless UIs on the frontend. The 
                backend was built on Node.js, Express, TypeORM, and PostgreSQL. 
                Both ends were built with onto a Docker container and deployed 
                on Google Cloud Run triggering a CI/CD pipeline on GitHub.`,
                ],
                employer_id: '1',
            },
        ],
        projects: [],
        collaborations: [
            {
                name: 'MoonPay',
                logo: Logos.MoonPay,
                url: 'https://www.moonpay.com/',
            },
            {
                name: 'Stripe',
                logo: Logos.Stripe,
                url: 'https://stripe.com/',
            },
            {
                name: 'Magic',
                logo: Logos.Magic,
                url: 'https://magic.link/',
            },
            {
                name: 'Coinbase',
                logo: Logos.Coinbase,
                url: 'https://www.coinbase.com/',
            },
            {
                name: 'OpenSea',
                logo: Logos.OpenSea,
                url: 'https://opensea.io/',
            },
            {
                name: 'Alchemy',
                logo: Logos.Alchemy,
                url: 'https://alchemyapi.io/',
            },
            {
                name: 'Google Cloud',
                logo: Logos.GoogleCloud,
                url: 'https://cloud.google.com/',
            },
            {
                name: 'TheForever',
                logo: Logos.Forever,
                url: 'https://theforever.com/',
            },
            {
                name: 'Aspen',
                logo: Logos.Aspen,
                url: 'https://aspenft.io/',
            },
        ],
    },
    {
        id: 2,
        name: 'SCCI',
        location: 'Austin, TX',
        tenure: 'Aug 2018 - Dec 2021',
        roles: [
            {
                title: 'Senior Technical Solutions Architect',
                tenure: 'Aug 2018 - Dec 2021',
            },
        ],
        logo: Logos.SCCI,
        description:
            'SCCI provides interactive courseware and instructional material to meet your learning objectives and needs. Our team of professionals work together to create instruction that includes interactive drills, quizzes, problem solving exercises, and emulations to help reinforce learning. We provide Sharable Content Object Reference Model (SCORM) compliant material that can be web based or hosted locally.',

        url: 'https://www.teamscci.com/',
        responsibilities: [
            {
                descriptions: [
                    `As a Senior Technical Solutions Architect, I was responsible 
                for ensuring data integrity, security, and performance of the 
                platform. I was also an integral part of the proof of concept 
                from proposals by creating working prototypes and demonstrations.`,
                ],
                employer_id: '2',
            },
        ],
        projects: [],
        collaborations: [
            {
                name: 'US Navy',
                logo: Logos.USNavy,
                url: 'https://www.navy.mil/',
            },
            {
                name: 'US Army',
                logo: Logos.USArmy,
                url: 'https://www.army.mil/',
            },
        ],
    },
    {
        id: 3,
        name: 'COSMSolutions',
        location: 'Houston, TX',
        tenure: 'Jan 2015 - Jul 2018',
        roles: [
            {
                title: 'Senior Software Developer',
                tenure: 'Jan 2016 - Jul 2018',
            },
            {
                title: 'Software Developer',
                tenure: 'Jan 2015 - Dec 2015',
            },
        ],
        logo: Logos.COSM,
        description: `COSMSolutions was a startup focusing on providing a platform for
                data analytics and visualization. The design was to intake data 
                from various sources, process the data, and provide a platform
                for users to visualize the data.`,

        url: '',
        responsibilities: [
            {
                descriptions: [
                    `As a Senior Software Developer, I was responsible for designing
                and implementing the platform and ensuring the successful delivery.
                I designed software that imported data from PDFs, Excel, CSV, and 
                Quickbooks. The application also utilized OCR to extract data from
                PDFs and images, then normalized the data and detect anomalies.
                The platform was built using Node.js, JavaScript, HTML and CSS.`,
                ],
                employer_id: '3',
            },
        ],
        projects: [],
        collaborations: [
            {
                name: 'EEPBInnovaTax',
                logo: Logos.EEPB,
                url: 'https://eepbinnovatax.com/',
            },
        ],
    },
    {
        id: 4,
        name: 'Hewlett Packard',
        location: 'Houston, TX',
        tenure: 'Jan 2014 - Dec 2014',
        roles: [
            {
                title: 'Unix Systems Administrator',
                tenure: 'Jan 2014 - Dec 2014',
            },
        ],
        logo: Logos.HP,
        description:
            'Hewlett Packard is a leading provider of technology solutions.',

        url: 'https://www.hp.com/',
        responsibilities: [
            {
                descriptions: [
                    `I joined as a Unix Systems Administrator during the HP split
                to Hewlett Packard Enterprise and HP Inc. I was responsible for 
                cloning their Unix systems and ensuring the successful migration.`,
                ],
                employer_id: '4',
            },
        ],
        projects: [],
        collaborations: [
            {
                name: 'Hewlett Packard Enterprise',
                logo: Logos.HPE,
                url: 'https://www.hpe.com/',
            },
        ],
    },
    {
        id: 5,
        name: '350th HRC (US Army)',
        location: 'Grand Prairie, TX / Kandahar, Afghanistan',
        tenure: 'May 2011 - Nov 2016',
        roles: [
            {
                title: 'SGT (E5) S6 NCOIC',
                tenure: 'May 2012 - Nov 2016',
            },
            {
                title: 'SGT (E5) S6 NCOIC - Deployed',
                tenure: 'May 2011 - May 2012',
            },
        ],
        logo: Logos.Army300,
        description: `The 350th Human Resources Company is a United States Army Reserve
                unit that provides human resources support to soldiers and their
                families. The unit is based in Grand Prairie, Texas.`,

        url: 'https://www.army.mil/',
        responsibilities: [
            {
                descriptions: [
                    `As the S6 Non-Commissioned Officer in Charge, I was responsible
                for the unit's communication and information systems. I was also
                responsible for the unit's information security and data integrity.`,
                ],
                employer_id: '5',
            },
        ],
        projects: [],
        collaborations: [
            {
                name: '7th Sustainment Brigade (US Army)',
                logo: Logos.SBDE7,
                url: 'https://www.army.mil/',
            },
        ],
    },
    {
        id: 6,
        name: '300th STB (US Army)',
        location: 'Grand Prairie, TX',
        tenure: 'Nov 2008 - May 2011',
        roles: [
            {
                title: 'SGT (E5) S6 Signal Support Systems Specialist',
                tenure: 'Nov 2008 - May 2011',
            },
        ],
        logo: Logos.Army300,
        description: `The 300th Support Battalion is a United States Army Reserve unit
                that provides logistical support to soldiers and their families.`,

        url: 'https://www.army.mil/',
        responsibilities: [
            {
                descriptions: [
                    `As the Signal Support Systems Specialist, I was responsible for
                the unit's communication and information systems.`,
                ],
                employer_id: '6',
            },
        ],
        projects: [],
        collaborations: [],
    },
];
