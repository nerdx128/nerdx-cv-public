import { FC, ReactNode } from 'react';
import { Body, ContentContainer } from '@components/Base';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Education } from '@data/Education';
import { EducationListItem } from '@pages/CV';

type EducationBodyProps<
    P = {
        id?: HTMLDivElement['id'];
        className?: HTMLDivElement['className'];
        children?: ReactNode;
    },
> = P;
export const EducationBody: FC<EducationBodyProps> = (props) => {
    const {} = props;

    return (
        <Body>
            <ContentContainer id={'content-education'}>
                <EducationList role="list">
                    {Education.map((school, i) => (
                        <EducationListItem education={school} key={i} />
                    ))}
                </EducationList>
            </ContentContainer>{' '}
        </Body>
    );
};

const EducationList = styled.ul`
    ${tw`grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-2 xl:gap-x-8 w-full`}
`;
export default EducationBody;
