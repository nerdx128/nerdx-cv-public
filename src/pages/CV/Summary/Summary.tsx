import { FC } from 'react';
import { MePage } from '@pages/Common';
import { Header, Title } from '@components/Base';
import { OverridableProps } from '@components/Overridable';
import { Images } from '@assets/Images';
import LoneTree from '@assets/Images/LoneTree.jpg';
import { SummaryBody } from '@pages/CV';

type SummaryProps<P = OverridableProps> = P;
export const Summary: FC<SummaryProps> = (props) => {
    const {} = props;

    return (
        <MePage id={'page-summary'}>
            <Header id={'header-summary'}>
                <Title>My Dreams & Goals</Title>
                <p className={'quote'}>
                    "The future belongs to those who believe in the beauty of
                    their dreams." —Eleanor Roosevelt
                </p>
                <img
                    src={Images.LoneTree}
                    alt={'A lone tree in the middle of a field.'}
                    className={'lone-tree w-full md:w-1/2 max-w-5xl h-full'}
                />
            </Header>
            <SummaryBody />
        </MePage>
    );
};

export default Summary;
