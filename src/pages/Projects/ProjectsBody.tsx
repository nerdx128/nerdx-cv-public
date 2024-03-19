import { FC, ReactNode, useState } from 'react';
import ProjectsArticle from '@components/Projects/ProjectsArticle';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Project } from '@definitions/johnny/Projects';
import { ProjectModal } from '@components/Projects';
import { Body, Title } from '@components/Base';

type ProjectsBodyProps<
    P = {
        id?: HTMLDivElement['id'];
        className?: HTMLDivElement['className'];
        children?: ReactNode;
    },
> = P;

const projects: Array<Project> = [
    {
        id: 1,
        title: 'Bill Murray 1000: Open Edition',
        href: 'https://opensea.io/collection/bill-murray-1000-open-edition',
        location: 'oe',
        description: [
            'I created a collection of 1000 Bill Murray NFTs. Each NFT is unique and has a different Bill Murray image. The NFTs are available on OpenSea.',
        ],
        image_url:
            'https://raw.seadn.io/files/05e6f1375f8bb8d416840acd020f7623.jpg',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Project Venkman', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 2,
        title: 'Boost your conversion rate',
        href: '#',
        location: '',
        description: [
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        ],
        image_url:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 3,
        title: 'Boost your conversion rate',
        href: '#',
        location: '',
        description: [
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        ],
        image_url:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 4,
        title: 'Boost your conversion rate',
        href: '#',
        location: '',
        description: [
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        ],
        image_url:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    // More posts...
];
export const ProjectsBody: FC<ProjectsBodyProps> = (props) => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    return (
        <Body>
            <Header id={'header-projects'}>
                <Title>Projects</Title>
                <p>
                    These are the projects I have worked on and my personal
                    projects. Unfortunately, I do not have access to the actual
                    projects, but I have re-created the projects to look
                    similar, but not exact.
                </p>
            </Header>
            <Content id={'content-projects'}>
                {projects.map((project) => (
                    <ProjectsArticle
                        key={project.id}
                        project={project}
                        // setOpenModal={setOpenModal}
                    />
                ))}
            </Content>
            <ProjectModal openModal={openModal} setOpenModal={setOpenModal} />
        </Body>
    );
};

const Header = styled.div`
    ${tw`mx-auto max-w-full text-center`}
    > h2 {
        ${tw`text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl`}
    }

    > p {
        ${tw`mt-2 text-lg leading-8 text-gray-400`}
    }
`;

const Content = styled.div`
    ${tw`mx-auto grid max-w-2xl pt-0 grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2`}
`;

export default ProjectsBody;
