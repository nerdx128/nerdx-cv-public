import { FC } from 'react';
import { OverridableProps } from '@components/Overridable';
import styled from 'styled-components';
import tw from 'twin.macro';

type FilterProps<P = OverridableProps> = P;
export const SelectFilterBar: FC<FilterProps> = (props) => {
    const { id, className, style, children, ...rest } = props;
    return (
        <SelectFilterBarContainer id={id} className={className} style={style}>
            {children}
        </SelectFilterBarContainer>
    );
};

const SelectFilterBarContainer = styled.div`
    ${tw`flex flex-row justify-center items-center w-full h-16 gap-4`}
`;
