import React, { forwardRef } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { classNames } from '@libs/utils';
import { OverridableProps } from '@components/Overridable';

// interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
//     className?: HTMLDivElement['className'];
//     children: React.ReactNode;
// }

type AccordionContentProps<
    P = OverridableProps,
    Q = React.HTMLAttributes<HTMLDivElement>,
> = P & Q;

type ref = typeof Accordion.Content & HTMLDivElement;
export const AccordionContent = forwardRef<ref, AccordionContentProps>(
    ({ className, children, ...props }, forwardedRef) => (
        <Accordion.Content
            className={classNames(
                'data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden w-full',
                className!
            )}
            {...props}
            ref={forwardedRef}
        >
            <div className={''}>{children}</div>
        </Accordion.Content>
    )
);
