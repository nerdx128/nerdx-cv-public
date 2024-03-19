import { FC, ReactNode } from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { Images } from '@assets/Images';
import { Body, Header } from '@components/Base';

type MeBodyProps<
    P = {
        id?: HTMLDivElement['id'];
        className?: HTMLDivElement['className'];
        children?: ReactNode;
    },
> = P;
export const MeBody: FC<MeBodyProps> = (props) => {
    const {} = props;

    return (
        <Body className={'z-1'}>
            {/*<Header id={'header-me'}>*/}
            {/*    <Title>Welcome To My World</Title>*/}
            {/*    <p className={'quote'}>*/}
            {/*        "Life should be lived to one own's happiness."*/}
            {/*    </p>{' '}*/}
            {/*</Header>*/}
            {/*<MeSummaryWrapper>*/}
            {/*    <MeImage src={Plants.Taiwan1} />*/}
            {/*</MeSummaryWrapper>*/}
            <p>
                Throughout my life, I've experienced so many beautiful and
                life-changing moments. I have built a life surrounded by my
                travels and the people I have met. I have worked in many
                different fields that has transformed me into the person I am
                today. I believe the events in my life happened for a reason,
                and the lessons I have learned have made me a better person. I
                am grateful for the life I have lived and the people I have met.
                I am excited to see what the future holds for me.
            </p>
            <p>
                Welcome to my world. Here, you will find a collection of my
                experiences, my work, and my thoughts. My story is a journey of
                self-discovery and growth. I hope you find inspiration in my
                story and that you are able to take something away from it. The
                world is a beautiful place, and it was meant to be shared and
                cherished.
            </p>
        </Body>
    );
};

const Title = styled.h2`
    ${tw`text-xl md:text-3xl font-bold flex justify-center items-center mb-4`}
`;

const MeSummaryWrapper = styled.div`
    ${tw`flex flex-col justify-center items-center gap-4 mb-8`}
`;

const MeSummary = styled.p`
    ${tw`italic text-center text-lg font-light`}
`;

const MeImage = styled.img`
    ${tw`w-full`}
`;
