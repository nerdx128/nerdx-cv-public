import { FC, ReactNode, useEffect, useState } from 'react';
import { Professional } from '@data/Projects';
import styled from 'styled-components';
import tw from 'twin.macro';
import { useNavigate } from 'react-router';
import { Button, Tooltip } from 'flowbite-react';
import { DetailDescription, DetailTerm } from '@styles/Base';
import { OverridableProps } from '@components/Overridable';
import { Project } from '@definitions/johnny';
import { ProjectButton } from '@pages/CV/Common';

type ProjectListProps<
    P = OverridableProps & {
        projects: Array<Project>;
    },
> = P;
export const Projects: FC<ProjectListProps> = (props) => {
    const { id, className, children, style, projects, ...rest } = props;
    const navigate = useNavigate();
    const [logo, setLogo] = useState<ReactNode>(null);

    const handleNavigate = (location: string | undefined) => {
        if (location) {
            navigate(`/projects/professional/${location}`);
        }
    };

    const getProjectLogo = (logo: string) => {};

    return (
        <ProjectListContainer id={props.id} className={props.className}>
            <DetailTerm className={'projects'}>Projects</DetailTerm>
            <DetailDescription className={'projects'}>
                {props.projects.map((project, i) => {
                    // const proj = Professional.find((p) => p.id === project);
                    return (
                        <div key={i}>
                            <ProjectButton project={project} />
                        </div>
                    );
                })}
            </DetailDescription>
        </ProjectListContainer>
    );
};

const ProjectListContainer = styled.div`
    ${tw`flex flex-col justify-between py-2 gap-y-2`}
`;

// const ProjectButton = styled(Button)`
//     ${tw`bg-transparent border-none p-0 m-0 cursor-pointer`}
//     & > span {
//         ${tw`p-0`}
//     }
// `;
//
// const ProjectImage = styled.img`
//     ${tw`h-20 w-20 flex-none bg-white object-cover p-1 border-2 border-white ring-2 ring-[#111827]/10`}
// `;
//
// const TooltipStyled = styled(Tooltip)`
//     ${tw`absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg
// shadow-sm opacity-0 dark:bg-gray-700`} `;
