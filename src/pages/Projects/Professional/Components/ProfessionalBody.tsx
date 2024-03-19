import { FC, ReactNode, useState } from 'react';
import { Body, ContentContainer, ContentGrid, Header } from '@components/Base';
import { Professional } from '@data/Projects';
import { ProjectsArticle } from '@components/Projects';

type ProfessionalBodyProps<
    P = {
        id?: HTMLDivElement['id'];
        className?: HTMLDivElement['className'];
        children?: ReactNode;
    },
> = P;

export const ProfessionalBody: FC<ProfessionalBodyProps> = (props) => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    return (
        <Body>
            <ContentContainer id={'content-projects-container'}>
                <ContentGrid id={'content-projects'}>
                    {Professional.map((project) => (
                        <ProjectsArticle
                            key={project.id}
                            project={project}
                            //setOpenModal={setOpenModal}
                        />
                    ))}
                </ContentGrid>
            </ContentContainer>
            {/*<ProjectModal*/}
            {/*    openModal={openModal}*/}
            {/*    setOpenModal={setOpenModal}*/}
            {/*    className={'project-modal'}*/}
            {/*/>*/}
        </Body>
    );
};

export default ProfessionalBody;
