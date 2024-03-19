import { FC } from 'react';
import { MePage } from '@pages/Common';
import { Header, Title } from '@components/Base';
import { ProfessionalBody } from '@pages/Projects';

type ProfessionalProps<P = {}> = P;
export const Professional: FC<ProfessionalProps> = (props) => {
    const {} = props;

    return (
        <MePage id={'page-professional'}>
            <Header id={'header-projects'}>
                <Title>Professional Projects</Title>
                <p className={'description'}>
                    These are the projects I have worked on professionally.
                    Unfortunately, I do not have access to the actual projects,
                    but I have re-created the projects to look similar, but not
                    exact.
                </p>
                <p className={'quote'}>
                    "Life is full of puzzles. I want to do my part and solve all
                    that I can."
                </p>
            </Header>{' '}
            <ProfessionalBody />
        </MePage>
    );
};

export default Professional;
