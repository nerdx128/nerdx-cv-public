import { Dispatch, FC, SetStateAction } from 'react';
import { NavMenuListItem } from '@definitions/navigation/Navigation';
import MenuComponent from '@components/Navigation/MenuComponent';
import { OverridableProps } from '@components/Overridable';

type MenuCVProps<
    P = OverridableProps & {
        setShowMenu: Dispatch<SetStateAction<boolean>>;
    },
> = P;

const items: Array<NavMenuListItem> = [
    {
        href: '#',
        title: 'Summary',
        description: 'A little bit about me',
        location: 'cv/summary',
    },
    {
        href: '#',
        title: 'Experience',
        description: 'My experiences',
        location: 'cv/experience',
    },
    {
        href: '#',
        title: 'Skills',
        description: 'My superpowers',
        location: 'cv/skills',
    },
    {
        href: '#',
        title: 'Education',
        description: 'My learning journey',
        location: 'cv/education',
    },
];

export const MenuCV: FC<MenuCVProps> = (props) => {
    const { setShowMenu } = props;
    return <MenuComponent name={'CV'} list={items} setShowMenu={setShowMenu} />;
};

export default MenuCV;
