import React, { forwardRef } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { classNames } from '@libs/utils';
import tw from 'twin.macro';
import styled from 'styled-components';
import { OverridableProps } from '@components/Overridable';

type AccordionItemProps<
    P = OverridableProps & { value: string },
    Q = React.HTMLAttributes<HTMLDivElement>,
> = P & Q;

type ref = typeof Accordion.Item & HTMLDivElement;
export const AccordionItem = forwardRef<ref, AccordionItemProps>(
    ({ className, children, value, ...props }, forwardedRef) => (
        <AccordionItemStyled
            className={classNames('group', className!)}
            {...props}
            ref={forwardedRef}
            value={value}
        >
            {children}
        </AccordionItemStyled>
    )
);

const AccordionItemStyled = styled(Accordion.Item)`
    ${tw`flex h-full flex-1 flex-col cursor-default items-start justify-between text-[15px] leading-none outline-none`}
`;
