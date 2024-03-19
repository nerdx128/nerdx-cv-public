import { FC, ReactNode } from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { Body, ContentContainer } from '@components/Base';

type SummaryBodyProps<
    P = {
        id?: HTMLDivElement['id'];
        className?: HTMLDivElement['className'];
        children?: ReactNode;
    },
> = P;
export const SummaryBody: FC<SummaryBodyProps> = (props) => {
    const {} = props;

    return (
        <Body id={'body-summary'}>
            <ContentContainer id={'content-summary'}>
                <p>
                    My dream is to live an easy and adventurous life. I want to
                    explore the world, learn new things, and take technology to
                    new heights. In order to achieve this, I must dedicate
                    myself to my craft, and constantly improve my skills. I want
                    to work with a team that is passionate about their work and
                    has their goals aligned with mine.
                </p>
                <p>
                    Software should be easy to use and be intuitive. It should
                    be integrated without disrupting our daily lives or relieve
                    us of our arduous tasks. Data should be secure and
                    information should maintain its integrity, be fast and be
                    readily accessible. With these principles in mind, I strive
                    to utilize new technologies and methodologies to achieve
                    these goals.
                </p>
                <p>
                    The purpose of this website is to showcase my work and to
                    provide a platform for me to share my thoughts and ideas. I
                    hope to inspire others to pursue their dreams and to never
                    give up. Be who you are and never let anyone tell you that
                    you can't do something. The only person that can stop you is
                    yourself.
                </p>
            </ContentContainer>
        </Body>
    );
};

const SummaryWrapper = styled.div`
    ${tw`flex flex-col-reverse md:flex-row justify-center items-center gap-1 md:gap-8`}
`;

const Summary = styled.p`
    ${tw`italic text-center text-xl font-light p-4`}
`;

const Image = styled.img`
    ${tw`w-full md:w-1/2 mb-8 rounded-md`}
`;
