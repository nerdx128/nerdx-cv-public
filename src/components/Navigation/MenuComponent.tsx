import { Dispatch, FC, SetStateAction } from 'react';
import { useNavigate } from 'react-router';
import { ListItem } from '@components/Navigation/ListItem';
import { classNames } from '@libs/utils';
import {
    NavMenuItem,
    NavMenuTrigger,
    NavMenuContent,
    NavMenuContentList,
} from '@styles/Navigation';
import { Caret } from '@styles/Base';
import { NavMenuListItem } from '@definitions/navigation/Navigation';
import { OverridableProps } from '@components/Overridable';

type MenuComponentProps<
    P = OverridableProps & {
        name: string;
        list: Array<NavMenuListItem>;
        setShowMenu: Dispatch<SetStateAction<boolean>>;
    },
> = P;

export const MenuComponent: FC<MenuComponentProps> = (props) => {
    const { setShowMenu } = props;
    const navigate = useNavigate();

    const onNavClick = (location: string) => {
        navigate(`/${location}`);
        setShowMenu(false);
    };

    return (
        <NavMenuItem
            id={props.id}
            className={classNames(props.className as string, '')}
        >
            <NavMenuTrigger className={'group'}>
                {props.name} <Caret aria-hidden />
            </NavMenuTrigger>
            <NavMenuContent className={'noImage'}>
                <NavMenuContentList className={'noImage'}>
                    {props.list.map((item, i) => (
                        <ListItem
                            key={i}
                            href={item.href}
                            title={item.title}
                            onClick={() => onNavClick(item.location)}
                        >
                            <span className={'w-full'}>{item.description}</span>
                        </ListItem>
                    ))}
                </NavMenuContentList>
            </NavMenuContent>
        </NavMenuItem>
    );
};

export default MenuComponent;
