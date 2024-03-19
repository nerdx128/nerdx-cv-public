import { FC } from 'react';
import { OverridableProps } from '@components/Overridable';
import { classNames } from '@libs/utils';
import styled from 'styled-components';
import tw from 'twin.macro';

type FilterProps<P = OverridableProps> = P;
export const Filter: FC<FilterProps> = (props) => {
    const { id, className, style, children, ...rest } = props;
    return (
        <div id={id} className={classNames('w-full', className!)} style={style}>
            <MenuWrapper>
                <MenuSection aria-labelledby="filter-heading">
                    <h2 id="filter-heading" className="sr-only">
                        Product filters
                    </h2>
                    <MenuContainer>{children}</MenuContainer>
                </MenuSection>
            </MenuWrapper>
        </div>
    );
};

const MenuWrapper = styled.div`
    ${tw`mx-auto text-center w-full`}
`;

const MenuSection = styled.section`
    ${tw`border-t border-gray-200 py-2`}
`;

const MenuContainer = styled.div`
    ${tw`flex items-center justify-between gap-2 w-full`}
`;
