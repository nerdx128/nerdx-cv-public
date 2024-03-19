import styled from 'styled-components';
import tw from 'twin.macro';

export const WalletButtonWrapper = styled.div`
    ${tw`flex flex-col items-center`}
`;

export const WalletButtonContainer = styled.div`
    ${tw`flex flex-col justify-center items-center`}
`;

export const WalletButton = styled.button`
    ${tw`bg-gray-500 text-base text-white rounded-md border-2 border-gray-500 border-solid px-4 py-2`}
    &:hover {
        ${tw`bg-transparent text-gray-500`}
    }
`;
