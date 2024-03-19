import { OverridableProps } from '@components/Overridable';
import { FC, Fragment } from 'react';
import styled from 'styled-components';
import { Menu, Transition } from '@headlessui/react';
import tw from 'twin.macro';
import { MdSort } from 'react-icons/md';
import { classNames } from '@libs/utils';

type SortMenuProps<
    P = OverridableProps,
    Q = {
        sortOptions: Array<{ name: string; href: string }>;
    },
> = P & Q;

export const SortMenu: FC<SortMenuProps> = (props) => {
    const { id, className, style, sortOptions, children, ...rest } = props;
    return (
        <Menu as="div" className="relative inline-block text-left">
            <SortMenuButtonContainer>
                <SortMenuButton className={'group'}>
                    <MdSort className={'text-gray-200 text-lg'} />
                </SortMenuButton>
            </SortMenuButtonContainer>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <SortMenuItems>
                    <SortMenuItemContainer>
                        {sortOptions.map((option) => (
                            <SortMenuItem key={option.name}>
                                {({ active }) => (
                                    <a
                                        href={option.href}
                                        className={classNames(
                                            active
                                                ? 'bg-gray-100 text-gray-700'
                                                : ''
                                        )}
                                    >
                                        {option.name}
                                    </a>
                                )}
                            </SortMenuItem>
                        ))}
                    </SortMenuItemContainer>
                </SortMenuItems>
            </Transition>
        </Menu>
    );
};

const SortMenuItems = styled(Menu.Items)`
    ${tw`absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-gray-500 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none`}
`;

const SortMenuItemContainer = styled.div`
    ${tw`flex flex-col`}
`;

const SortMenuItem = styled(Menu.Item)`
    ${tw`py-1 px-2`}
    > a {
        ${tw`block text-sm font-medium text-gray-200 focus:text-gray-900`}
    }
`;

const SortMenuButtonContainer = styled.div`
    ${tw`px-2`}
`;

const SortMenuButton = styled(Menu.Button)`
    ${tw`inline-flex justify-center text-sm font-medium text-gray-200 hover:text-gray-500`}
`;
