import tw from 'twin.macro';
import styled from 'styled-components';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router';
import MenuHobbies from '@components/Navigation/MenuHobbies';
import MenuCV from '@components/Navigation/MenuCV';
import * as NavMenu from '@radix-ui/react-navigation-menu';
import { NavMenuItem, NavMenuLink, NavMenuTrigger } from '@styles/Navigation';
import MenuProjects from '@components/Navigation/MenuProjects';
import { FaBars } from 'react-icons/fa6';
import { classNames } from '@libs/utils';
import GoogleLoginButton from '@components/Google/Login';

type NavBarProps<P = {}> = P;

export const NavBar: FC<NavBarProps> = (props) => {
    const {} = props;
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState<boolean>(false);

    const onNavClick = (location: string) => {
        navigate(`/${location}`);
        setShowMenu(!showMenu);
    };

    return (
        <NavMenuRoot className={'nav-menu-root'}>
            <BarsContainer className={showMenu ? 'hide' : ''}>
                <FaBars onClick={() => setShowMenu(!showMenu)} />
            </BarsContainer>
            <NavMenuList
                className={classNames(
                    `nav-menu-list center shadow-blackA4`,
                    showMenu ? 'show' : ''
                )}
            >
                <NavMenuItem className={'nav-menu-item-me'}>
                    <NavMenuLink
                        className={'nav-menu-trigger'}
                        onClick={() => onNavClick('me')}
                        active
                    >
                        About Me
                    </NavMenuLink>
                </NavMenuItem>
                <MenuCV
                    className={'nav-menu-item-resume'}
                    setShowMenu={setShowMenu}
                />
                <MenuProjects
                    className={'nav-menu-item-projects'}
                    setShowMenu={setShowMenu}
                />
                <MenuHobbies
                    className={'nav-menu-item-hobbies'}
                    setShowMenu={setShowMenu}
                />
                <NavMenuIndicator className={'nav-menu-indicator'}>
                    <div />
                </NavMenuIndicator>
            </NavMenuList>
            {/*<GoogleLoginButton />*/}
            <NavMenuViewportContainer className={'nav-menu-viewport-container'}>
                <NavMenuViewport className={'nav-menu-viewport'} />
                {/*<NavMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />*/}
            </NavMenuViewportContainer>
        </NavMenuRoot>
    );
};

const NavMenuRoot = styled(NavMenu.Root)`
    ${tw`absolute z-[1000] flex w-screen justify-center bg-transparent h-[48px] sm:bg-gray-700/90`}
`;

const BarsContainer = styled.div`
    ${tw`flex sm:hidden bg-transparent text-gray-200 text-2xl justify-end items-center w-full h-full px-4 py-2`}
    &.hide {
        ${tw`hidden`}
    }
`;

const NavMenuList = styled(NavMenu.List)`
    ${tw`hidden m-0 md:flex justify-center items-center list-none w-full h-full bg-gray-700/90 md:bg-transparent`}
    &.show {
        ${tw`flex`}
    }
`;

const NavMenuIndicator = styled(NavMenu.Indicator)`
    ${tw`data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1000] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]`}
    > div {
        ${tw`relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-gray-700 md:bg-gray-700/90`}
    }
`;

const NavMenuViewportContainer = styled.div`
    ${tw`perspective-[2000px] absolute top-full left-0 flex w-full justify-center`}
`;

const NavMenuViewport = styled(NavMenu.Viewport)`
    ${tw`data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut absolute mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full flex justify-center top-0! left-1/2! -translate-x-1/2! overflow-hidden rounded-[6px] bg-gray-700 md:bg-gray-700/90 transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]`}
`;

//origin-[top_center]

export default NavBar;
