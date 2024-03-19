// import { Dialog, Transition } from '@headlessui/react';
import * as Dialog from '@radix-ui/react-dialog';
import { Dispatch, forwardRef, SetStateAction } from 'react';
import { FaXmark } from 'react-icons/fa6';
import tw from 'twin.macro';
import styled from 'styled-components';
import { OverridableProps } from '@components/Overridable';

type ModalProps<
    P = OverridableProps,
    Q = {
        openModal: boolean;
        setOpenModal: Dispatch<SetStateAction<boolean>>;
    },
> = P & Q;

type ref = typeof Dialog;
export const Modal = forwardRef<ref, ModalProps>(
    (
        { className, children, openModal, setOpenModal, ...props },
        forwardedRef
    ) => (
        <Dialog.Root open={openModal} onOpenChange={setOpenModal}>
            <Dialog.Trigger />
            <Dialog.Portal>
                <Dialog.Overlay />
                <Dialog.Content id={'dialog-content'}>
                    <Dialog.Close />
                    {children}
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
    /*<Transition.Root show={props.openModal} as={Fragment}>
        <ModalDialog as="div" onClose={props.setOpenModal}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <Overlay />
            </Transition.Child>
            <ModalContainer>
                <ContentWrapper>
                    {/!* This element is to trick the browser into centering the modal contents. *!/}
                    <ZeroSpace aria-hidden="true">&#8203;</ZeroSpace>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                        enterTo="opacity-100 translate-y-0 md:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 md:scale-100"
                        leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                    >
                        <Dialog.Panel>
                            <Content>
                                <CloseButton
                                    type="button"
                                    onClick={() =>
                                        props.setOpenModal(false)
                                    }
                                >
                                    <span className="sr-only">Close</span>
                                    <CloseX aria-hidden="true" />
                                </CloseButton>
                                <ContentBody>{children}</ContentBody>
                            </Content>
                        </Dialog.Panel>
                    </Transition.Child>
                </ContentWrapper>
            </ModalContainer>
        </ModalDialog>
    </Transition.Root>*/
);

const ModalDialog = styled(Dialog.Root)`
    ${tw`relative z-10`}
`;

const Overlay = styled.div`
    ${tw`fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block`}
`;

const ModalContainer = styled.div`
    ${tw`fixed inset-0 z-10 w-screen overflow-y-auto`}
`;

const ContentWrapper = styled.div`
    ${tw`flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4`}
`;

const ZeroSpace = styled.span`
    ${tw`hidden md:inline-block md:h-screen md:align-middle`}
`;

// const ModalDialogPanel = styled(Dialog.Panel)`
//     ${tw`flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl`}
// `;

const Content = styled.div`
    ${tw`relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8`}
`;

const CloseButton = styled.button`
    ${tw`absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8`}
`;

const CloseX = styled(FaXmark)`
    ${tw`h-6 w-6`}
`;

const ContentBody = styled.div`
    ${tw`grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:items-center lg:gap-x-8`}
`;

export default Modal;
