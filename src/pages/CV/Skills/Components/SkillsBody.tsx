import React, { FC, useEffect } from 'react';
import { Body, ContentContainer } from '@components/Base';
import tw from 'twin.macro';
import styled from 'styled-components';
import { SkillItem } from '@components/CV';
import { OverridableProps } from '@components/Overridable';
import { getSkills } from '@state/slices/Skills.slice';
import { useAppDispatch, useAppSelector } from '@state/hooks';

type SkillsBodyProps<P = OverridableProps> = P;
export const SkillsBody: FC<SkillsBodyProps> = (props) => {
    const { id, className, style, children, ...rest } = props;
    const dispatch = useAppDispatch();
    const skills = useAppSelector((state) => state.skills.list);

    useEffect(() => {
        dispatch(getSkills());
    }, [dispatch]);

    useEffect(() => {
        console.log(skills);
    }, [skills]);

    return (
        <Body>
            <ContentContainer id={'content-skills'}>
                <SkillItemGroupTitle>Full Stack</SkillItemGroupTitle>
                <SkillItemGroup id={'group-backend'}>
                    {skills
                        .filter((skill) => skill.type === 'fullstack')
                        .map((fstack, i) => {
                            return (
                                <SkillItem
                                    id={`bk-${i}`}
                                    key={i}
                                    skill={fstack}
                                />
                            );
                        })}
                </SkillItemGroup>
                <SkillItemGroupTitle>Blockchain</SkillItemGroupTitle>
                <SkillItemGroup id={'group-backend'}>
                    {skills
                        .filter((skill) => skill.type === 'blockchain')
                        .map((bchain, i) => {
                            return (
                                <SkillItem
                                    id={`bk-${i}`}
                                    key={i}
                                    skill={bchain}
                                />
                            );
                        })}
                </SkillItemGroup>
                <SkillItemGroupTitle>Platform</SkillItemGroupTitle>
                <SkillItemGroup id={'group-backend'}>
                    {skills
                        .filter((skill) => skill.type === 'platform')
                        .map((pform, i) => {
                            return (
                                <SkillItem
                                    id={`bk-${i}`}
                                    key={i}
                                    skill={pform}
                                />
                            );
                        })}
                </SkillItemGroup>
            </ContentContainer>
        </Body>
    );
};

const SkillItemGroupTitle = styled.h1`
    ${tw`mb-4 text-center`}
`;

const SkillItemGroup = styled.div`
    ${tw`w-full grid grid-cols-1 lg:grid-cols-3 items-start justify-start gap-4 text-white mb-8`}
`;

export default SkillsBody;
