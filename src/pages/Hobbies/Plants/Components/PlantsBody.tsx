import { FC, useEffect } from 'react';
import { Body, ContentContainer } from '@components/Base';
import styled from 'styled-components';
import tw from 'twin.macro';
import { OverridableProps } from '@components/Overridable';
import { PlantFilterBar, PlantListItem } from '@pages/Hobbies';
import { getPlants } from '@state/slices/Plants.slice';
import { useAppDispatch, useAppSelector } from '@state/hooks';

type PlantsBodyProps<P = OverridableProps> = P;
export const PlantsBody: FC<PlantsBodyProps> = (props) => {
    const { id, className, style, children, ...rest } = props;
    const dispatch = useAppDispatch();
    const plants = useAppSelector((state) => state.plants.list);
    const filteredPlants = useAppSelector((state) => state.plants.active.list);

    useEffect(() => {
        dispatch(getPlants());
    }, []);

    useEffect(() => {
        //console.log(plants);
    }, [plants]);

    return (
        <Body>
            <PlantFilterBar id={'plant-filter'} />
            <ContentContainer id={'content-cards'}>
                <PlantList>
                    {filteredPlants.map((plant, i) => (
                        <PlantListItem
                            id={`item-${plant.species.replace(/\s/g, '-')}`}
                            plant={plant}
                            key={i}
                        />
                    ))}
                </PlantList>
            </ContentContainer>
        </Body>
    );
};

const PlantList = styled.ul`
    ${tw`grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-2 xl:gap-x-8 w-full`}
`;

export default PlantsBody;
