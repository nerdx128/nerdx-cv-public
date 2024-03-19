import { Button, Tooltip } from 'flowbite-react';
import { FC, ReactNode, useEffect, useState } from 'react';
import { OverridableProps } from '@components/Overridable';
import { Project } from '@definitions/johnny';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Logos } from '@assets/Logos';

type ProjectButtonProps<
    P = OverridableProps & {
        project: Project;
    },
> = P;
export const ProjectButton: FC<ProjectButtonProps> = (props) => {
    const { id, className, children, style, project, ...rest } = props;
    const navigate = useNavigate();
    const [logo, setLogo] = useState<ReactNode>(null);

    const handleNavigate = (location: string | undefined) => {
        if (location) {
            navigate(`/projects/professional/${location}`);
        }
    };

    useEffect(() => {
        if (!project.image_url) return;
        let logo = project.image_url;
        if (logo.search(/^http/g) > -1) {
            setLogo(() => <ProjectImage src={logo} alt={project.title} />);
        } else {
            let key = logo as keyof typeof Logos;
            setLogo(() => {
                return (
                    <ProjectImage
                        src={Logos[key] as string}
                        alt={project.title}
                    />
                );
            });
        }
    }, [project]);

    return (
        <Tooltip
            content={project?.title}
            placement={'top'}
            id={`tooltip-top-${project?.id}`}
            role={'tooltip'}
        >
            <ProjectButtonWrapper
                onClick={() => handleNavigate(project?.location)}
            >
                {logo}
                {/*<ProjectImage*/}
                {/*    src={project?.imageUrl}*/}
                {/*    alt={project?.title}*/}
                {/*/>*/}
            </ProjectButtonWrapper>
        </Tooltip>
    );
};

const ProjectButtonWrapper = styled(Button)`
    ${tw`bg-transparent border-none p-0 m-0 cursor-pointer`}
    & > span {
        ${tw`p-0`}
    }
`;

const ProjectImage = styled.img`
    ${tw`h-20 w-20 flex-none bg-white object-cover p-1 border-2 border-white ring-2 ring-[#111827]/10`}
`;
