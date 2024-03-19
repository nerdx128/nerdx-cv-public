import { ElementType, FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { OverridableProps } from '@components/Overridable';

type BodyProps<P = OverridableProps, C extends ElementType = 'div'> = P &
    HTMLAttributes<C>;

export const Body: FC<BodyProps> = (props) => {
    return (
        <BodyContainer id={props.id} className={props.className}>
            {props.children}
        </BodyContainer>
    );
};

const BodyContainer = styled.div`
    ${tw`flex flex-col justify-start items-center w-full h-fit px-2 md:px-0 md:py-8 max-w-5xl`}
    &:last-child {
        ${tw`mb-40`}
    }

    > h1 {
        ${tw`text-4xl mb-8 text-center`}
    }

    > p {
        ${tw`mb-8 w-full`}
    }
`;

export default Body;
