import { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import {
    AccordionItem,
    AccordionSingle,
    AccordionTrigger,
    AccordionContent,
} from '@components/Base';
import { Plant } from '@definitions/johnny/Plants';
import { PlantDetail, PlantListItemHeader } from '@pages/Hobbies';
import { OverridableProps } from '@components/Overridable';
import { classNames } from '@libs/utils';

type PlantListItemProps<
    P = OverridableProps & {
        plant: Plant;
    },
> = P;
export const PlantListItem: FC<PlantListItemProps> = (props) => {
    const { id, className, style, children, plant, ...rest } = props;
    return (
        <PlantListItemStyled id={id} className={classNames(className!)}>
            <AccordionSingle
                id={'Plant-accordion'}
                className={'Plant-accordion'}
            >
                <AccordionItem value={`item-${plant.id}`}>
                    <PlantListItemHeader
                        className={'item-header'}
                        plant={plant}
                    />
                    <AccordionTrigger
                        className={
                            'text-gray-200 cursor-pointer h-8 hover:bg-gray-600 hover:text-white'
                        }
                    >
                        Check out {plant.common_name}
                    </AccordionTrigger>
                    <AccordionContent className={'item-content w-full'}>
                        <PlantDetail plant={plant} />
                    </AccordionContent>
                </AccordionItem>
            </AccordionSingle>
        </PlantListItemStyled>
    );
};

const PlantListItemStyled = styled.li`
    ${tw`overflow-hidden`}
`;

export default PlantListItem;
