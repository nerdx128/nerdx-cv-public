import { FC, ReactNode, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Body } from '@components/Base';
import { ProjectModal, ProjectsArticle } from '@components/Projects';
import { Personal } from '@data/Projects';

type PersonalBodyProps<
    P = {
        id?: HTMLDivElement['id'];
        className?: HTMLDivElement['className'];
        children?: ReactNode;
    },
> = P;

export const PersonalBody: FC<PersonalBodyProps> = (props) => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    return (
        <Body>
            <Content id={'content-personal'}>
                {Personal.map((project) => (
                    <ProjectsArticle
                        key={project.id}
                        project={project}
                        //setOpenModal={setOpenModal}
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
    ${tw`mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3`}
`;

export default PersonalBody;
