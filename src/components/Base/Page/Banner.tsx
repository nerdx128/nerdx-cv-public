import { ElementType, FC, HTMLAttributes } from 'react';
import { OverridableProps } from '@components/Overridable';
import { BannerContainer } from '@components/Base';

type BannerProps<P = OverridableProps, C extends ElementType = 'div'> = P &
    HTMLAttributes<C>;

export const Banner: FC<BannerProps> = (props) => {
    const { id, className, style, children, ...otherProps } = props;
    return (
        <BannerContainer id={id} className={className} style={style}>
            {children}
        </BannerContainer>
    );
};

export default Banner;
