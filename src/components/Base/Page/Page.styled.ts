import tw from 'twin.macro';
import styled from 'styled-components';

export const PageStyled = styled.div`
    ${tw`flex flex-col justify-start items-center bg-gray-900 h-full w-full text-white md:mt-12 overflow-auto`}
`;

export const PageBodyContainer = styled.div`
    ${tw`flex flex-col p-8 text-xl max-w-5xl`}
    h1 {
        ${tw`text-4xl mb-8 text-center`}
    }

    p {
        ${tw`mb-8`}
    }
`;

export const Title = styled.h2`
    ${tw`text-xl md:text-3xl font-bold flex justify-center items-center mb-4`}
`;

export const HeaderContainer = styled.div`
    ${tw`flex flex-col justify-start items-center h-fit w-full relative mb-4`}
    &.meHeader {
        ${tw`mt-16 md:mt-0`}
    }

    p {
        ${tw`mx-4 md:mx-0 max-w-4xl mb-4 text-left text-sm md:text-lg`}
        &.description {
            ${tw`text-base md:text-lg`}
        }

        &.quote {
            ${tw`italic text-blue-200/50 text-xl py-4 text-center`}
        }

        &.disclaimer {
            ${tw`text-sm text-gray-400`}
        }
    }
`;

export const BannerContainer = styled.div`
    ${tw`flex flex-col justify-start items-center h-48 sm:h-fit w-full relative sm:mb-8`}
`;

export const ContentContainer = styled.div`
    ${tw`relative w-full flex flex-col justify-center items-center`}
    p {
        ${tw`mx-4 md:mx-0 mb-4`}
    }
`;

export const ContentGrid = styled.div`
    ${tw`mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3`}
`;

export const Content = styled.div`
    ${tw`flex flex-col justify-center items-center text-justify px-20 w-full h-full`}
    &.nft-list {
        ${tw`mb-12`}
    }
`;
