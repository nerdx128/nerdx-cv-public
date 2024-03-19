import { FC } from 'react';
import { OverridableProps } from '@components/Overridable';
import { Plant } from '@definitions/johnny/Plants';
import { DetailDescription, DetailTerm } from '@styles/Base';
import styled from 'styled-components';
import tw from 'twin.macro';

export type ClassificationProps<P = OverridableProps & { plant: Plant }> = P;
export const Classification: FC<ClassificationProps> = (props) => {
    const { id, className, children, plant, ...rest } = props;
    return (
        <div>
            <DetailTerm>Classification</DetailTerm>
            <DetailDescription
                className={'grid grid-cols-2 md:grid-cols-2 gap-1 py-2'}
            >
                <PlantKingdom>
                    <KingdomInfo className={'title'}>Kingdom</KingdomInfo>
                    <KingdomInfo className={'value'}>
                        {plant.kingdom}
                    </KingdomInfo>
                </PlantKingdom>
                <PlantKingdom>
                    <KingdomInfo className={'title'}>Phylum</KingdomInfo>
                    <KingdomInfo className={'value'}>
                        {plant.phylum}
                    </KingdomInfo>
                </PlantKingdom>
                <PlantKingdom>
                    <KingdomInfo className={'title'}>Class</KingdomInfo>
                    <KingdomInfo className={'value'}>{plant.class}</KingdomInfo>
                </PlantKingdom>
                <PlantKingdom>
                    <KingdomInfo className={'title'}>Subclass</KingdomInfo>
                    <KingdomInfo className={'value'}>
                        {plant.subclass}
                    </KingdomInfo>
                </PlantKingdom>
                <PlantKingdom>
                    <KingdomInfo className={'title'}>Order</KingdomInfo>
                    <KingdomInfo className={'value'}>{plant.order}</KingdomInfo>
                </PlantKingdom>
                <PlantKingdom>
                    <KingdomInfo className={'title'}>Family</KingdomInfo>
                    <KingdomInfo className={'value'}>
                        {plant.family}
                    </KingdomInfo>
                </PlantKingdom>
                <PlantKingdom>
                    <KingdomInfo className={'title'}>Genus</KingdomInfo>
                    <KingdomInfo className={'value'}>{plant.genus}</KingdomInfo>
                </PlantKingdom>
                <PlantKingdom>
                    <KingdomInfo className={'title'}>Species</KingdomInfo>
                    <KingdomInfo className={'value'}>
                        {plant.species}
                    </KingdomInfo>
                </PlantKingdom>
            </DetailDescription>
        </div>
    );
};

const PlantKingdom = styled.div`
    ${tw`py-2 text-sm text-gray-500 bg-gray-200 border border-gray-400 border-solid flex flex-col justify-center items-center`}
`;

const KingdomInfo = styled.div`
    ${tw`text-center`}
    &.title {
        ${tw`font-bold`}
    }

    &.value {
        ${tw`font-light`}
    }
`;
