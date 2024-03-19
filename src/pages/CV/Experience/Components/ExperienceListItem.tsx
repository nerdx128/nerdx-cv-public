import { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Employer } from '@definitions/johnny/Experience';
import {
    AccordionItem,
    AccordionSingle,
    AccordionTrigger,
    AccordionContent,
} from '@components/Base';
import { ExperienceDetail, ExperienceListItemHeader } from '@pages/CV';

type ExperienceListItemProps<
    P = {
        xp: Employer;
    },
> = P;
export const ExperienceListItem: FC<ExperienceListItemProps> = (props) => {
    return (
        <ExperienceListItemStyled>
            <AccordionSingle
                id={'experience-accordion'}
                className={'experience-accordion'}
            >
                <AccordionItem value={`item-${props.xp.id}`}>
                    <ExperienceListItemHeader
                        className={'item-header'}
                        xp={props.xp}
                    />
                    <AccordionTrigger
                        className={
                            'text-gray-200 cursor-pointer h-8 hover:bg-gray-600 hover:text-white'
                        }
                    >
                        Check out {props.xp.name} Experience
                    </AccordionTrigger>
                    <AccordionContent className={'item-content w-full'}>
                        <ExperienceDetail xp={props.xp} />
                    </AccordionContent>
                </AccordionItem>
            </AccordionSingle>
        </ExperienceListItemStyled>
    );
};

const ExperienceListItemStyled = styled.li`
    ${tw`overflow-hidden`}
`;

export default ExperienceListItem;
