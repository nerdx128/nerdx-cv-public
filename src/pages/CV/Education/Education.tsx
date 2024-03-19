import { FC } from 'react';
import { MePage } from '@pages/Common';
import { Header, Title } from '@components/Base';
import { EducationBody } from '@pages/CV';

type EducationProps<P = {}> = P;
export const Education: FC<EducationProps> = (props) => {
    const {} = props;

    return (
        <MePage id={'page-education'}>
            <Header title={'Education'}>
                <Title>Education</Title>
                <p className={'quote'}>
                    "The more that you read, the more things you will know, the
                    more that you learn, the more places you’ll go." —Dr. Seuss
                </p>
                <p>
                    I've had some formal education, which I believe has helped
                    me become a more organized and structured thinker. They've
                    helped with my fundamentals and gave me a good base to build
                    upon.
                </p>
            </Header>
            <EducationBody />
        </MePage>
    );
};

export default Education;
