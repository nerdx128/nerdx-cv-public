import { FC } from 'react';
import { ProjectsBody } from '@pages/Projects';
import { MePage } from '@pages/Common';

type ProjectsProps<P = {}> = P;
export const Projects: FC<ProjectsProps> = (props) => {
    const {} = props;

    return (
        <MePage id={'page-projects'}>
            <ProjectsBody />
        </MePage>
    );
};

export default Projects;
