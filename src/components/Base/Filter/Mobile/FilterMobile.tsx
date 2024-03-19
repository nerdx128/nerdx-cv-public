import { Dialog, Disclosure, Transition } from '@headlessui/react';
import { Dispatch, FC, Fragment, lazy, SetStateAction, Suspense } from 'react';
import { OverridableProps } from '@components/Overridable';
import { Filter } from '@definitions/base';
import tw from 'twin.macro';
import styled from 'styled-components';

const CategoryPanel = lazy(
    () => import('@components/Base/Filter/Mobile/CategoryPanel')
);

type FilterMobileProps<
    P = OverridableProps,
    Q = {
        open: boolean;
        setOpen: Dispatch<SetStateAction<boolean>>;
        filters: Array<Filter>;
    },
> = P & Q;

export const FilterMobile: FC<FilterMobileProps> = (props) => {
    const { id, className, style, children, open, setOpen, filters, ...rest } =
        props;
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                id={id}
                as="div"
                className={'relative z-[1000] sm:hidden'}
                onClose={() => setOpen(false)}
            >
                <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-liner duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-liner duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <MobileOverlay />
                </Transition.Child>
                <MobilePanelContainer>
                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                    >
                        <Dialog.Panel
                            className={
                                'relative ml-auto flex h-full w-full flex-col overflow-y-auto bg-gray-500 py-4 shadow-xl'
                            }
                        >
                            <Suspense>
                                <CategoryPanel
                                    filters={filters}
                                    open={open}
                                    setOpen={setOpen}
                                />
                            </Suspense>
                        </Dialog.Panel>
                    </Transition.Child>
                </MobilePanelContainer>
            </Dialog>
        </Transition.Root>
    );
};

const MobileOverlay = styled.div`
    ${tw`fixed inset-0 bg-black bg-opacity-25`}
`;

const MobilePanelContainer = styled.div`
    ${tw`fixed inset-0 z-40 flex`}
`;

export default FilterMobile;
