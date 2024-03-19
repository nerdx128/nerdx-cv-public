import { FC, forwardRef, HTMLAttributes } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { OverridableProps } from '@components/Overridable';

type AccordionSignalProps<
    P = OverridableProps,
    Q = Omit<HTMLAttributes<HTMLDivElement>, 'defaultValue'>,
    O = { defaultValue?: string },
> = P & Q & O;

type ref = typeof Accordion.Root;
export const AccordionSingle = forwardRef<ref, AccordionSignalProps>(
    ({ id, className, children, defaultValue, ...props }, forwardedRef) => (
        <Accordion.Root
            type={'single'}
            id={id}
            className={className}
            collapsible
            defaultValue={defaultValue}
        >
            {children}
        </Accordion.Root>
    )
);
