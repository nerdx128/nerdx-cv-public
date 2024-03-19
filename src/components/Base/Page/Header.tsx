import { ElementType, FC, HTMLAttributes } from 'react';
import { OverridableProps } from '@components/Overridable';
import { HeaderContainer } from '@components/Base';

type HeaderProps<P = OverridableProps, C extends ElementType = 'div'> = P &
    HTMLAttributes<C>;

export const Header: FC<HeaderProps> = (props) => {
    const { id, className, style, children, ...otherProps } = props;
    return (
        <HeaderContainer id={id} className={className} style={style}>
            {children}
        </HeaderContainer>
    );
};

export default Header;
