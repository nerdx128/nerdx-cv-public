import { FC, ReactNode, useEffect } from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { Body, ContentContainer } from '@components/Base';
import { Experiences } from '@data/Experiences';
import { ExperienceListItem } from '@pages/CV';
import { OverridableProps } from '@components/Overridable';
import { useAppDispatch, useAppSelector } from '@state/hooks';
import { getExperiences } from '@state/slices/Experiences.slice';

type ExperienceBodyProps<P = OverridableProps> = P;
export const ExperienceBody: FC<ExperienceBodyProps> = (props) => {
    const { id, className, style, children, ...rest } = props;
    const dispatch = useAppDispatch();
    const experiences = useAppSelector((state) => state.experience.list);

    useEffect(() => {
        dispatch(getExperiences());
    }, []);

    useEffect(() => {
        console.log(experiences);
    }, [experiences]);

    return (
        <Body>
            <ContentContainer id={'content-experience'}>
                <ExperienceList role="list">
                    {experiences.map((client, i) => (
                        <ExperienceListItem xp={client} key={i} />
                    ))}
                </ExperienceList>
            </ContentContainer>
        </Body>
    );
};

const ExperienceList = styled.ul`
    ${tw`grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-2 xl:gap-x-8 w-full`}
`;

export default ExperienceBody;
