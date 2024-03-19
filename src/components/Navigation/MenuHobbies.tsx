import { Dispatch, FC, SetStateAction } from 'react';
import { NavMenuListItem } from '@definitions/navigation/Navigation';
import MenuComponent from '@components/Navigation/MenuComponent';
import { OverridableProps } from '@components/Overridable';

type MenuHobbiesProps<
    P = OverridableProps & {
        setShowMenu: Dispatch<SetStateAction<boolean>>;
    },
> = P;

const items: Array<NavMenuListItem> = [
    {
        href: '#',
        title: 'Cards',
        description: 'Description of Cards',
        location: 'hobbies/cards',
    },
    {
        href: '#',
        title: 'Plants',
        description: 'Description of Plants',
        location: 'hobbies/plants',
    },
];

export const MenuHobbies: FC<MenuHobbiesProps> = (props) => {
    const { setShowMenu } = props;
    return (
        <MenuComponent
            name={'Hobbies'}
            list={items}
            setShowMenu={setShowMenu}
        />
    );
};

export default MenuHobbies;
