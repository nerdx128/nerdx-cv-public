import { forwardRef } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { OverridableProps } from '@components/Overridable';
import { School } from '@definitions/johnny';

interface EducationListItemHeaderProps extends OverridableProps {
    education: School;
}

type ref = HTMLDivElement;

export const EducationListItemHeader = forwardRef<
    ref,
    EducationListItemHeaderProps
>(({ id, className, education, children, ...props }, forwardedRef) => (
    <EducationListItemHeaderStyled className={'item-header'}>
        <div className={'flex gap-4'}>
            <EducationLogo src={education.imageUrl} alt={education.name} />
            <EducationInfoContainer>
                <EducationInfo className={'name'}>
                    {education.name}
                </EducationInfo>
                <EducationInfo className="location">
                    {education.location}
                </EducationInfo>
                <EducationInfo className="tenure">
                    {education.tenure}
                </EducationInfo>
            </EducationInfoContainer>
        </div>
        <EducationInfoContainer>
            <EducationInfo className="tenure">
                <div className={'font-medium'}>
                    {education.degree.type ? (
                        <p>{`${education.degree.type} in ${education.degree.Major}`}</p>
                    ) : (
                        <p>{`${education.degree.Major}`}</p>
                    )}
                    <p>{`${education.tenure}`}</p>
                </div>
            </EducationInfo>
        </EducationInfoContainer>
    </EducationListItemHeaderStyled>
));

const EducationListItemHeaderStyled = styled.div`
    ${tw`flex flex-col w-full h-52 items-start gap-4 border-b border-gray-900/5 bg-[#7eaabd] p-6`}
`;

const EducationLogo = styled.img`
    ${tw`h-20 w-20 flex-none bg-white object-cover p-1 border-2 border-white ring-2 ring-[#111827]/10`}
`;

const EducationInfoContainer = styled.div`
    ${tw`flex flex-col gap-x-4 w-full items-start`}
`;

const EducationInfo = styled.div`
    ${tw`text-sm leading-6 text-gray-900`}
    &.name {
        ${tw`text-xl font-bold tracking-tight`}
    }

    &.location {
        ${tw`italic text-white`}
    }

    &.tenure {
        ${tw`text-gray-700`}
        > div {
            ${tw`flex flex-col gap-1`}
            > p {
                ${tw`mb-0`}
            }
        }
    }
`;
