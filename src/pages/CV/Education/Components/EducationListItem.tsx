import { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { School } from '@definitions/johnny';
import {
    AccordionItem,
    AccordionSingle,
    AccordionTrigger,
    AccordionContent,
} from '@components/Base';
import { EducationDetail, EducationListItemHeader } from '@pages/CV';
import { OverridableProps } from '@components/Overridable';

type EducationListItemProps<
    P = OverridableProps & {
        education: School;
    },
> = P;
export const EducationListItem: FC<EducationListItemProps> = (props) => {
    const { id, className, style, children, education, ...rest } = props;
    return (
        <EducationListItemStyled>
            <AccordionSingle
                id={'education-accordion'}
                className={'education-accordion'}
            >
                <AccordionItem value={`item-${education.id}`}>
                    <EducationListItemHeader
                        className={'item-header'}
                        education={education}
                    />
                    <AccordionTrigger>Read Education Info</AccordionTrigger>
                    <AccordionContent className={'item-content w-full'}>
                        <EducationDetail education={education} />
                    </AccordionContent>
                </AccordionItem>
            </AccordionSingle>
        </EducationListItemStyled>
    );
};

const EducationListItemStyled = styled.li`
    ${tw`overflow-hidden`}
`;

export default EducationListItem;
