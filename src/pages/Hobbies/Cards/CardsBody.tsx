import { FC, ReactNode } from 'react';
import { Body, Content, ContentContainer } from '@components/Base';
import { OverridableProps } from '@components/Overridable';

type CardsBodyProps<P = OverridableProps> = P;
export const CardsBody: FC<CardsBodyProps> = (props) => {
    const { id, className, style, children, ...rest } = props;

    return (
        <Body>
            <ContentContainer id={'content-cards'}>
                <div>
                    <p>
                        This page is under construction. This page is intended
                        to be my collection of cards. I collect sports cards,
                        trading cards, and other types of cards. I will be
                        adding my collection to this page.
                    </p>
                </div>
            </ContentContainer>
        </Body>
    );
};

export default CardsBody;
