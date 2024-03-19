import { forwardRef, ReactNode } from 'react';
import { classNames } from '@libs/utils';
import { NavMenuLink } from '@styles/Navigation';
import styled from 'styled-components';
import tw from 'twin.macro';

interface ListItemProps extends React.HTMLProps<HTMLButtonElement> {
    id?: HTMLButtonElement['id'];
    className?: HTMLButtonElement['className'];
    type?: HTMLButtonElement['type'];
    title: string;
    onClick: () => void;
    children?: ReactNode;
}

type Ref = HTMLAnchorElement;

export const ListItem = forwardRef<Ref, ListItemProps>(
    ({ className, children, title, onClick, ...props }, forwardedRef) => (
        <li className={'hover:bg-gray-500'}>
            <NavMenuLink asChild>
                <ListItemButton
                    type={'button'}
                    className={classNames(className!, 'text-white')}
                    {...props}
                    onClick={onClick}
                    // ref={forwardedRef}
                >
                    <div className={'text-left mb-1 font-medium leading-[1.2]'}>
                        {title}
                        <p className={'font-thin leading-[1.4]'}>{children}</p>
                    </div>
                </ListItemButton>
            </NavMenuLink>
        </li>
    )
);

const ListItemButton = styled.button`
    ${tw`focus:shadow-[0_0_0_2px] focus:shadow-gray-600 hover:text-blue-400 hover:bg-transparent! block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors`}
`;
