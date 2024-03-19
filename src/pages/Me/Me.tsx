import { FC } from 'react';
import { MeBody, MeFooter } from '@pages/Me';
import { MePage } from '@pages/Common/Components/MePage';
import { OverridableProps } from '@components/Overridable';
import { Header } from '@components/Base';
import { Images } from '@assets/Images';
import styled from 'styled-components';
import tw from 'twin.macro';

type MeProps<P = OverridableProps> = P;
export const Me: FC<MeProps> = (props) => {
    const {} = props;

    return (
        <MePage id={'page-me'} className={''}>
            <Header id={'header-me'}>
                <Title>Welcome To My World</Title>
                <p className={'quote'}>
                    "Life should be lived to one own's happiness."
                </p>
            </Header>
            <MeSummaryWrapper>
                <MeImage src={Images.Taiwan1} />
            </MeSummaryWrapper>
            <MeBody />
        </MePage>
    );
};

const Title = styled.h2`
    ${tw`text-xl md:text-3xl font-bold flex justify-center items-center mb-4 max-w-5xl`}
`;

const MeSummaryWrapper = styled.div`
    ${tw`flex flex-col justify-center items-center gap-4 mb-8 w-full md:w-1/2 max-w-5xl`}
`;

const MeSummary = styled.p`
    ${tw`italic text-center text-lg font-light`}
`;

const MeImage = styled.img`
    ${tw`w-full`}
`;

export default Me;
