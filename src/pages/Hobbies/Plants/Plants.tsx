import React, { FC } from 'react';
import { MePage } from '@pages/Common';
import { Header, Title } from '@components/Base';
import { PlantsBody } from '@pages/Hobbies';

type PlantsProps<P = {}> = P;
export const Plants: FC<PlantsProps> = (props) => {
    const {} = props;

    return (
        <MePage>
            <Header>
                <Title>Plants</Title>
            </Header>
            <PlantsBody />
        </MePage>
    );
};

export default Plants;
