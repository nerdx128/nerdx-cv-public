import { Plant } from '@definitions/johnny/Plants';
import { OverridableProps } from '@components/Overridable';
import { Details, DetailsList } from '@styles/CV';
import { FC } from 'react';
import { Projects } from '@pages/CV/Common';
import styled from 'styled-components';
import tw from 'twin.macro';
import { DetailDescription, DetailTerm } from '@styles/Base';
import { Classification } from '@pages/Hobbies/Plants/Components/Classification';

type PlantDetailProps<P = OverridableProps, Q = { plant: Plant }> = P & Q;

export const PlantDetail: FC<PlantDetailProps> = (props) => {
    const { id, className, children, plant, ...otherProps } = props;
    return (
        <Details id={id} className={className}>
            <DetailsList>
                <Classification plant={plant} />
            </DetailsList>
        </Details>
    );
};

const PlantKingdom = styled.div`
    ${tw`py-2 text-sm text-gray-500 bg-gray-200 border border-gray-700 border-solid flex flex-col justify-center items-center`}
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
