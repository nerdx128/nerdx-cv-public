import styled from 'styled-components';
import { FaCaretDown } from 'react-icons/fa6';
import tw from 'twin.macro';

export const Caret = styled(FaCaretDown)`
    ${tw`text-white ml-2 relative top-[1px] h-5 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180 group-data-[state=open]:bg-transparent! group-data-[state=open]:hover:bg-transparent! group-data-[state=open]:hover:text-white!`}
`;

export const DetailTerm = styled.dt`
    ${tw`text-gray-900 text-xl font-bold`}
    &.projects {
        ${tw`mb-1`}
    }
`;

export const DetailDescription = styled.dd`
    ${tw`text-gray-700 text-base`}
    &.projects {
        ${tw`flex gap-4 flex-wrap`}
    }

    & > p {
        ${tw``}
        &.text {
            ${tw`text-base`}
        }

        &.url {
            ${tw`text-blue-500 text-base hover:underline`}
        }
    }
`;
