import { FC } from 'react';
import { MePage } from '@pages/Common';
import { Header, Title } from '@components/Base';
import { OverridableProps } from '@components/Overridable';
import { ExperienceBody } from '@pages/CV';

type ExperienceProps<P = OverridableProps> = P;
export const Experience: FC<ExperienceProps> = (props) => {
    const { id, className, style, children, ...rest } = props;

    return (
        <MePage id={'page-experience'}>
            <Header id={'header-experience'}>
                <Title>Experience</Title>
                <p className={'quote'}>
                    "Innovation distinguishes between a leader and a follower."
                    —Steve Jobs
                </p>
                <p className={'description'}>
                    If it weren't for the experiences, people I've met, the
                    places I've been, I wouldn't be the person I am today. Here
                    are some of the experiences that have shaped me. I'm
                    grateful for every single one of them.
                </p>
            </Header>
            <ExperienceBody />
        </MePage>
    );
};

export default Experience;
