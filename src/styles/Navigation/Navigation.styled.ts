import styled from 'styled-components';
import tw from 'twin.macro';
import * as NavMenu from '@radix-ui/react-navigation-menu';

export const NavMenuLink = styled(NavMenu.Link)`
    ${tw`text-white hover:text-gray-600 hover:bg-gray-200 focus:shadow-gray-600 flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-bold leading-none outline-none focus:shadow-[0_0_0_2px] cursor-pointer`}
`;

export const NavMenuItem = styled(NavMenu.Item)`
    ${tw``}
`;

export const NavMenuTrigger = styled(NavMenu.Trigger)`
    ${tw`text-white hover:text-gray-600 hover:bg-gray-200 focus:shadow-gray-600 flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-bold leading-none outline-none focus:shadow-[0_0_0_2px]`}
`;

export const NavMenuContent = styled(NavMenu.Content)`
    ${tw``}
    &.withImage {
        ${tw`data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto`}
    }

    &.noImage {
        ${tw`absolute top-0 left-0 w-full sm:w-auto`}
    }
`;

export const NavMenuContentList = styled.ul`
    ${tw``}
    &.withImage {
        ${tw`m-0 grid list-none gap-x-[10px] p-0 sm:w-[500px] sm:grid-cols-[0.75fr_1fr]`}
    }

    &.noImage {
        ${tw`m-0 grid list-none gap-x-[10px] p-0 sm:w-[600px] sm:grid-flow-col sm:grid-rows-3`}
    }
`;
