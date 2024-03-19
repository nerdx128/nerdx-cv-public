import { FC } from 'react';
import { MePage } from '@pages/Common';
import { Header, Title } from '@components/Base';
import { PersonalBody } from '@pages/Projects';

type PersonalProps<P = {}> = P;
export const Personal: FC<PersonalProps> = (props) => {
    const {} = props;

    return (
        <MePage id={'page-personal'}>
            <Header id={'header-personal'}>
                <Title>Personal Projects</Title>
                <p>
                    These are my personal projects that I have created for my
                    own personal use or for fun.
                </p>
            </Header>
            <PersonalBody />
        </MePage>
    );
};

export default Personal;
