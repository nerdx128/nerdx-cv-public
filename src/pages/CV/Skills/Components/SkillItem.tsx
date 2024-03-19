import React, {
    createElement,
    forwardRef,
    ReactNode,
    useEffect,
    useState,
} from 'react';
import { FaRegStar, FaRegStarHalfStroke, FaStar } from 'react-icons/fa6';
import { classNames } from '@libs/utils';
import { IconType } from 'react-icons';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Skill } from '@definitions/johnny/Skill';
import { OverridableProps } from '@components/Overridable';
import { AccordionItem, AccordionSingle } from '@components/Base';
import { Logos } from '@assets/Logos';

interface SkillItemProps extends OverridableProps {
    skill: Skill;
}

type Ref = HTMLDivElement;

export const SkillItem = forwardRef<Ref, SkillItemProps>(
    ({ id, className, style, skill, ...props }, forwardedRef) => {
        const [logo, setLogo] = useState<ReactNode>(null);
        const createStarRating = (number: number) => {
            let rating: Array<ReactNode> = [];
            for (let i = 1; i <= 5; i++) {
                if (i <= number) rating.push(<StarFull />);
                else if (i - 0.5 <= number) rating.push(<StarHalf />);
                else rating.push(<StarEmpty />);
            }
            return rating;
        };

        useEffect(() => {
            let tempLogo = skill.logo as string;
            if (tempLogo.search(/^Si/g) > -1) {
                let key = tempLogo as keyof typeof Logos.SI;
                setLogo(() => {
                    return createElement(Logos.SI[key] as IconType, {
                        className: classNames(
                            skill.className as string,
                            'w-full text-4xl',
                            tempLogo.indexOf('React') > -1
                                ? 'animate-spinSlow'
                                : ''
                        ),
                    });
                });
            } else {
                let key = tempLogo as keyof typeof Logos;
                setLogo(() => {
                    return (
                        <img
                            className={classNames(
                                'brightness-0 invert w-full p-2'
                            )}
                            src={Logos[key] as string}
                            alt={skill.name}
                        />
                    );
                });
            }
        }, [skill]);

        return (
            <SkillItemContainer id={id} className={className} style={style}>
                <AccordionSingle
                    id={'skill-accordion'}
                    className={'skill-accordion h-24'}
                >
                    <AccordionItem value={id as string}>
                        <SkillItemInfo className={'skill-item-info'}>
                            <SkillItemName>
                                <div className={'w-1/3'}>{logo}</div>
                                <div className={'flex flex-col w-2/3'}>
                                    <p className={'text-xs'}>{skill.name}</p>
                                    <sup className={'years'}>
                                        Experience: {skill.years} years
                                    </sup>
                                </div>
                            </SkillItemName>
                            <SkillStatsContainer>
                                <RatingContainer>
                                    {createStarRating(skill.rating)}
                                </RatingContainer>
                                <SkillStatsText>
                                    <sub
                                        className={
                                            'rating w-full text-right pt-1'
                                        }
                                    >
                                        Rating: {skill.rating}
                                    </sub>
                                </SkillStatsText>
                            </SkillStatsContainer>
                        </SkillItemInfo>
                        {/*<AccordionTrigger className={'hover:bg-gray-600 '}>*/}
                        {/*    <TriggerText>See Example</TriggerText>*/}
                        {/*</AccordionTrigger>*/}
                        {/*<AccordionContent>*/}
                        {/*    <div*/}
                        {/*        className={*/}
                        {/*            'item-content p-2 bg-gray-800 text-xs'*/}
                        {/*        }*/}
                        {/*    >*/}
                        {/*        <code>Some Code here</code>*/}
                        {/*        <pre>*/}
                        {/*            <code>Actual code</code>*/}
                        {/*        </pre>*/}
                        {/*    </div>*/}
                        {/*</AccordionContent>*/}
                    </AccordionItem>
                </AccordionSingle>
            </SkillItemContainer>
        );
    }
);

const SkillItemContainer = styled.div`
    ${tw`h-24`}
`;

const SkillItemInfo = styled.div`
    ${tw`p-4 md:p-3 bg-gray-800 flex flex-row items-center h-full w-full gap-4`}
`;

const SkillItemName = styled.div`
    ${tw`flex w-full items-center gap-2`}
    & > img {
        ${tw`max-h-10 max-w-10 h-full w-full`}
    }

    & > svg {
        ${tw`text-4xl`}
    }

    & > p {
        ${tw`flex flex-row items-center justify-center mb-0! text-2xl md:text-base`}
    }
`;

const SkillStatsContainer = styled.div`
    ${tw`flex flex-col gap-1`}
`;

const SkillStatsText = styled.div`
    ${tw`flex justify-between w-full mb-1`}
    > sup {
        ${tw`w-full`}
        &.years {
            ${tw`text-left`}
        }

        &.rating {
            ${tw`text-right`}
        }
    }
`;

const RatingContainer = styled.div`
    ${tw`flex flex-row items-center justify-center h-full`}
`;

const StarFull = styled(FaStar)`
    ${tw`text-2xl animate-enterFromLeft`}
`;

const StarHalf = styled(FaRegStarHalfStroke)`
    ${tw`text-2xl`}
`;

const StarEmpty = styled(FaRegStar)`
    ${tw`text-2xl`}
`;
