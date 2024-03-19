import { OverridableProps } from '@components/Overridable';
import { Dialog, Disclosure } from '@headlessui/react';
import { Dispatch, FC, SetStateAction } from 'react';
import { Filter, Option } from '@definitions/base';
import styled from 'styled-components';
import tw from 'twin.macro';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { classNames } from '@libs/utils';
import { XMarkIcon } from '@heroicons/react/24/outline';

type MobileCategoryItemProps<
    P = OverridableProps,
    Q = {
        filters: Array<Filter>;
        open: boolean;
        setOpen: Dispatch<SetStateAction<boolean>>;
    },
> = P & Q;
export const CategoryPanel: FC<MobileCategoryItemProps> = (props) => {
    const { id, className, style, children, filters, open, setOpen, ...rest } =
        props;
    return (
        <>
            <PanelHeaderContainer>
                <PanelHeader>Filters</PanelHeader>
                <PanelHeaderButton
                    type={'button'}
                    onClick={() => setOpen(false)}
                >
                    <span className={'sr-only'}>Close menu</span>
                    <XMarkIcon className={'h-6 w-6'} aria-hidden={'true'} />
                </PanelHeaderButton>
            </PanelHeaderContainer>
            <CategoryPanelForm>
                {filters.map((filter) => (
                    <Disclosure key={filter.name}>
                        {({ open }) => (
                            <>
                                <CategoryContainer>
                                    <Category>
                                        <CategoryName>
                                            {filter.name}
                                        </CategoryName>
                                        <ChevronContainer>
                                            <ChevronDownIcon
                                                className={classNames(
                                                    open
                                                        ? '-rotate-180'
                                                        : 'rotate-0',
                                                    'h-5 w-5 transform'
                                                )}
                                                aria-hidden={'true'}
                                            />
                                        </ChevronContainer>
                                    </Category>
                                </CategoryContainer>
                                <CategoryPanelContainer>
                                    <CategoryItems>
                                        {filter.options.map((o, i) => (
                                            <CategoryItem key={o.value}>
                                                <CategoryItemCheckbox
                                                    id={`filter-mobile-${filter.id}-${i}`}
                                                    name={`${filter.id}[]`}
                                                    defaultValue={o.value}
                                                    type={'checkbox'}
                                                />
                                                <CategoryItemLabel
                                                    htmlFor={`filter-mobile-${filter.id}-${i}`}
                                                >
                                                    {o.label}
                                                </CategoryItemLabel>
                                            </CategoryItem>
                                        ))}
                                    </CategoryItems>
                                </CategoryPanelContainer>
                            </>
                        )}
                    </Disclosure>
                ))}
            </CategoryPanelForm>
        </>
    );
};

const PanelHeaderContainer = styled.div`
    ${tw`flex items-center justify-between px-4`}
`;

const PanelHeader = styled.h2`
    ${tw`text-lg font-medium text-gray-900`}
`;

const PanelHeaderButton = styled.button`
    ${tw`-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-50 focus:outline-none`}
`;

const CategoryPanelForm = styled.form`
    ${tw`m-4 bg-transparent`}
`;

const CategoryContainer = styled.h3`
    ${tw`-mx-2 -my-3 flow-root`}
`;

const Category = styled(Disclosure.Button)`
    ${tw`flex w-full items-center justify-between bg-transparent px-2 py-3 text-sm text-gray-200`}
`;

const CategoryName = styled.span`
    ${tw`font-medium text-gray-200`}
`;

const ChevronContainer = styled.span`
    ${tw`ml-6 flex items-center`}
`;

const CategoryPanelContainer = styled(Disclosure.Panel)`
    ${tw`py-2`}
`;

const CategoryItems = styled.div`
    ${tw`space-y-2`}
`;

const CategoryItem = styled.div`
    ${tw`flex items-center`}
`;

const CategoryItemCheckbox = styled.input`
    ${tw`h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500`}
`;

const CategoryItemLabel = styled.label`
    ${tw`ml-3 text-sm text-gray-200`}
`;

export default CategoryPanel;
