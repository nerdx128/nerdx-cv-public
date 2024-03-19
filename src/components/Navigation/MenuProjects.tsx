import { Dispatch, FC, SetStateAction } from 'react';
import { NavMenuListItem } from '@definitions/navigation/Navigation';
import MenuComponent from '@components/Navigation/MenuComponent';
import { OverridableProps } from '@components/Overridable';

type MenuProjectsProps<
    P = OverridableProps & {
        setShowMenu: Dispatch<SetStateAction<boolean>>;
    },
> = P;

const items: Array<NavMenuListItem> = [
    {
        href: '#',
        title: 'Professional Projects',
        description: 'My professional projects',
        location: 'projects/professional',
    },
    {
        href: '#',
        title: 'Personal Projects',
        description: 'My personal projects',
        location: 'projects/personal',
    },
];
export const MenuProjects: FC<MenuProjectsProps> = (props) => {
    const { setShowMenu } = props;
    return (
        <MenuComponent
            name={'Projects'}
            list={items}
            setShowMenu={setShowMenu}
        />
    );
};

export default MenuProjects;
