import { Dispatch, FC, SetStateAction } from 'react';
import { OverridableProps } from '@components/Overridable';
import styled from 'styled-components';
import tw from 'twin.macro';
import { FaFilter } from 'react-icons/fa6';

type FilterButtonMobileStyledProps<
    P = OverridableProps,
    Q = { setOpen: Dispatch<SetStateAction<boolean>> },
> = P & Q;
export const FilterButtonMobile: FC<FilterButtonMobileStyledProps> = (
    props
) => {
    const { id, className, style, children, setOpen, ...rest } = props;
    return (
        <FilterButtonMobileStyled type="button" onClick={() => setOpen(true)}>
            <FaFilter />
        </FilterButtonMobileStyled>
    );
};

const FilterButtonMobileStyled = styled.button`
    ${tw`px-2 inline-block text-sm font-medium text-gray-200 hover:text-gray-500 sm:hidden`}
`;
