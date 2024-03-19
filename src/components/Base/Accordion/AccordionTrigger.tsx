import React, { forwardRef, HTMLAttributes } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { classNames } from '@libs/utils';
import { FaCaretDown } from 'react-icons/fa6';
import styled from 'styled-components';
import tw from 'twin.macro';
import { OverridableProps } from '@components/Overridable';

type AccordionTriggerProps<
    P = OverridableProps,
    Q = HTMLAttributes<HTMLButtonElement>,
> = P & Q;

type ref = typeof Accordion.Trigger & HTMLButtonElement;
export const AccordionTrigger = forwardRef<ref, AccordionTriggerProps>(
    ({ id, className, children, ...props }, forwardedRef) => (
        <Accordion.Header id={id} className={'flex w-full'}>
            <AccordionTriggerStyled
                className={classNames('group AccordionTrigger', className!)}
                {...props}
                ref={forwardedRef}
            >
                {children}
                <Caret className={'caret'} />
            </AccordionTriggerStyled>
        </Accordion.Header>
    )
);

const AccordionTriggerStyled = styled(Accordion.Trigger)`
    ${tw`bg-gray-700 text-gray-200 h-8 w-full flex flex-1 cursor-pointer items-center justify-center px-5 py-2 text-[.75rem] leading-none outline-none transition-colors duration-200`}
    &:hover {
        ${tw`bg-gray-600 text-white`}
    }

    &[data-state='open'] > .caret {
        ${tw`transform rotate-180`}
    }
`;

const Caret = styled(FaCaretDown)`
    ${tw`text-[15px] ml-2 transition-transform transform`}
`;

export default AccordionTrigger;
