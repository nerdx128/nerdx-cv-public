import { FC } from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { Me as MeType } from '@definitions/johnny/Me';
import { Images } from '@assets/Images';
import { Footer } from '@components/Base';
import { OverridableProps } from '@components/Overridable';
import { useNavigate } from 'react-router';

type MeFooterProps<P = OverridableProps> = P;

export const MeFooter: FC<MeFooterProps> = (props) => {
    const { id, className, children } = props;
    const navigation = useNavigate();

    const handleProfileImageClick = () => {
        navigation('/');
    };

    const me: MeType = {
        archived: false,
        id: '',
        firstName: 'Johnny',
        lastName: 'Nguyen',
        email: '',
        position: 'Senior Software Developer',
    };

    return (
        <Footer id={'me-footer'}>
            <MeFooterContent id={'me-footer-content'}>
                <MeFooterInfoContainer id={'me-footer-info-container'}>
                    <MeFooterProfileImageWrapper>
                        <MeFooterProfileImage
                            onClick={handleProfileImageClick}
                            id={'profile-image'}
                        >
                            <img src={Images.Me} alt={'Johnny Nguyen'} />
                        </MeFooterProfileImage>
                        <MeFooterTitle>
                            {me.firstName} {me.lastName}
                        </MeFooterTitle>
                        <MeFooterSubtitle>
                            <h2>By Nerdx128 Designs</h2>
                        </MeFooterSubtitle>
                    </MeFooterProfileImageWrapper>
                </MeFooterInfoContainer>
            </MeFooterContent>
            <MeFooterBackground>
                <MeFooterBackgroundSVG
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient id={'gradientFooter3'}>
                            <stop offset="0%" stopColor="#4b7691" />
                            <stop offset="80%" stopColor="#90989b" />
                        </linearGradient>
                    </defs>
                    <polygon
                        points="0,0 100,0 100,100 0,100"
                        fill={'url(#gradientFooter3)'}
                    />
                </MeFooterBackgroundSVG>
            </MeFooterBackground>
        </Footer>
    );
};

const MeFooterContent = styled.div`
    ${tw`flex flex-row justify-center items-center relative z-10 w-full h-full`}
`;

const MeFooterProfileImageContainer = styled.div`
    ${tw`aspect-w-7 aspect-h-7 w-4/10 flex justify-center absolute md:relative z-10 p-6 md:p-8`}
`;

const MeFooterProfileImageWrapper = styled.div`
    ${tw`flex justify-center relative h-full w-full`}
`;

const MeFooterProfileImage = styled.div`
    ${tw`hidden md:flex absolute inset-0 h-3/4 rounded-full z-10 cursor-pointer top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
    > img {
        ${tw`rounded-full aspect-1 border-4 border-white h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
    }
`;

const MeFooterProfileBackground = styled.div`
    ${tw`h-full w-full rounded-full absolute top-0 right-0 hidden xl:block`}
`;

const MeFooterInfoContainer = styled.div`
    ${tw`absolute md:relative flex flex-col justify-end md:justify-center items-center w-full h-full p-0`}
`;

const MeFooterBackground = styled.div`
    ${tw`absolute top-0 left-0 w-full h-full z-1`}
`;

const MeFooterBackgroundSVG = styled.svg`
    ${tw`w-full h-full w-1/2 absolute top-0 right-0`}
`;

const MeFooterTitle = styled.div`
    ${tw`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-300/75 text-5xl z-10 bg-transparent font-abuget -rotate-6`}
    text-shadow: 6px 6px 12px black;
`;

const MeFooterSubtitle = styled.div`
    ${tw`absolute bottom-0 flex flex-row justify-center items-center w-full text-gray-300/75 z-10 bg-transparent text-xs md:text-sm uppercase tracking-widest pt-3 md:pt-5 xl:pt-8`}
    text-shadow: 4px 4px 8px black;
`;
