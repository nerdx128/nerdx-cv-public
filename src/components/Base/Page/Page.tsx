import { ElementType, FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { PageProps } from './Page.d';

export const Page: FC<PageProps> = (props) => {
    const { id, className, children, style, ...otherProps } = props;
    return (
        <PageStyled id={id}>
            {/*<MeBanner />*/}
            {children}
            {/*<MeFooter />*/}
        </PageStyled>
    );
};

const PageStyled = styled.div`
    ${tw`relative flex flex-col justify-start items-center w-full min-h-full text-white sm:mt-12 pb-64`}
`;

export default Page;
