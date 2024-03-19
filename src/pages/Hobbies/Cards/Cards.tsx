import { FC } from 'react';
import { MePage } from '@pages/Common';
import { Header, Title } from '@components/Base';
import { CardsBody } from '@pages/Hobbies';

type CardsProps<P = {}> = P;

export const Cards: FC<CardsProps> = (props) => {
    const {} = props;

    return (
        <MePage>
            <Header>
                <Title>Cards</Title>
            </Header>
            <CardsBody />
        </MePage>
    );
};

export default Cards;
