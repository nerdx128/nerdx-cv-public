import { FC, ReactNode } from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { Me as MeType } from '@definitions/johnny/Me';
import { Images } from '@assets/Images';
import { Banner } from '@components/Base';
import { OverridableProps } from '@components/Overridable';
import { useNavigate } from 'react-router';

type MeHeaderProps<P = OverridableProps> = P;

export const MeBanner: FC<MeHeaderProps> = (props) => {
    const { id, className, children } = props;
    const navigation = useNavigate();
    const isResume = window.location.href.indexOf('cv') > -1;
    const isHobbies = window.location.href.indexOf('hobbies') > -1;
    const isProjects = window.location.href.indexOf('projects') > -1;

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
        <Banner id={'me-banner'} className={'meBanner'}>
            <MeHeaderContent id={'me-header-content'}>
                <MeHeaderProfileImageContainer
                    id={'me-header-profile-image-container'}
                >
                    <MeHeaderProfileImage
                        onClick={handleProfileImageClick}
                        id={'profile-image'}
                    >
                        <img
                            src={Images.Me}
                            alt={'Johnny Nguyen'}
                            className={
                                'rounded-full aspect-1 border-4 border-white relative h-full md:absolute md:left-1/2 md:-translate-x-3/4'
                            }
                        />
                    </MeHeaderProfileImage>
                    <MeHeaderProfileBackground>
                        <MeHeaderBackgroundSVG
                            viewBox="0 0 45 100"
                            preserveAspectRatio="none"
                        >
                            <defs>
                                <linearGradient id={'gradient2'}>
                                    <stop offset="0%" stopColor="#233138" />
                                    <stop offset="100%" stopColor="#233138" />
                                </linearGradient>
                            </defs>
                            <polygon
                                points="0,0 45,0 33,100 0,100"
                                fill={'url(#gradient2)'}
                            />
                        </MeHeaderBackgroundSVG>
                        <MeHeaderBackgroundSVG
                            viewBox="0 0 45 100"
                            preserveAspectRatio="none"
                            className={''}
                        >
                            <defs>
                                <linearGradient id={'gradient1'}>
                                    <stop offset="0%" stopColor="#48637c" />
                                    <stop offset="100%" stopColor="#4e91ad" />
                                </linearGradient>
                            </defs>
                            <polygon
                                points="0,0 40,0 30,100 0,100"
                                fill={'url(#gradient1)'}
                            />
                        </MeHeaderBackgroundSVG>
                    </MeHeaderProfileBackground>
                </MeHeaderProfileImageContainer>
                <MeHeaderInfoContainer id={'me-header-info-container'}>
                    <MeHeaderTitle>{`${me.firstName} ${me.lastName}`}</MeHeaderTitle>
                    {isResume && (
                        <MeHeaderSubtitle>{me.position}</MeHeaderSubtitle>
                    )}
                    {isHobbies && (
                        <MeHeaderSubtitle>Collector of Things</MeHeaderSubtitle>
                    )}
                    {isProjects && (
                        <MeHeaderSubtitle>Projects</MeHeaderSubtitle>
                    )}
                </MeHeaderInfoContainer>
                {children}
            </MeHeaderContent>
            <MeHeaderBackground>
                <MeHeaderBackgroundSVG
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient id={'gradient3'}>
                            <stop offset="0%" stopColor="#90989b" />
                            <stop offset="80%" stopColor="#4b7691" />
                        </linearGradient>
                    </defs>
                    <polygon
                        points="0,0 100,0 100,100 0,100"
                        fill={'url(#gradient3)'}
                    />
                </MeHeaderBackgroundSVG>
            </MeHeaderBackground>
        </Banner>
    );
};

const MeHeaderContent = styled.div`
    ${tw`flex flex-row justify-center items-center relative z-10 w-full h-full`}
`;

const MeHeaderProfileImageContainer = styled.div`
    ${tw`md:h-full aspect-w-1 aspect-h-1 md:w-4/10 flex justify-center absolute md:relative z-10 p-0 md:p-4`}
`;

// const MeHeaderProfileImage = styled.div`
//     ${tw`aspect-w-1 aspect-h-1 w-full rounded-full border-4 border-white z-10 absolute left-0`}
//     background: url(${MeImage}) no-repeat center center;
//     background-size: cover;
// `;

const MeHeaderProfileImage = styled.div`
    ${tw`w-full rounded-full z-10 relative h-[140px] 2xl:h-[240px] w-[240px] cursor-pointer`}
`;

const MeHeaderProfileBackground = styled.div`
    ${tw`h-full w-full rounded-full absolute top-0 left-0 hidden xl:block`}
`;

const MeHeaderInfoContainer = styled.div`
    ${tw`relative flex flex-col gap-1 justify-end md:justify-center items-center w-3/4`}
`;

const MeHeaderBackground = styled.div`
    ${tw`absolute hidden md:flex top-0 left-0 w-full h-full z-1`}
`;

const MeHeaderBackgroundSVG = styled.svg`
    ${tw`w-full h-full w-1/2 absolute top-0 left-0`}
`;

const MeHeaderTitle = styled.div`
    ${tw`flex flex-row justify-center items-center w-full h-[52%] md:h-full text-gray-300/75 z-10 bg-transparent font-abuget text-6xl md:text-[6rem] 2xl:text-[10rem] -rotate-6`}
    text-shadow: 6px 6px 12px black;
`;

const MeHeaderSubtitle = styled.div`
    ${tw`relative top-2 md:top-5 flex flex-row justify-center items-center w-full text-gray-300/75 z-10 bg-transparent text-sm xl:text-xl uppercase font-bold tracking-widest`}
    text-shadow: 4px 4px 8px black;
`;
