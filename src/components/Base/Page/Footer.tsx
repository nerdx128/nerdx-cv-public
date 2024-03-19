import { ElementType, FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { OverridableProps } from '@components/Overridable';

type FooterProps<P = OverridableProps, C extends ElementType = 'div'> = P &
    HTMLAttributes<C>;

export const Footer: FC<FooterProps> = (props) => {
    const { id, className, style, children, ...otherProps } = props;
    return (
        <FooterContainer id={id} className={className} style={style}>
            {children}
        </FooterContainer>
    );
};

const FooterContainer = styled.div`
    ${tw`absolute bottom-0 flex flex-row justify-center items-center h-40 xl:h-48 w-full border-t-4 border-[#233138]`}
`;

export default Footer;
