import { OverridableProps } from '@components/Overridable';
import { Employer } from '@definitions/johnny/Experience';
import styled from 'styled-components';
import tw from 'twin.macro';
import { FC, ReactNode, useEffect, useState } from 'react';
import { Logos } from '@assets/Logos';

type ExperienceListItemHeaderProps<P = OverridableProps & { xp: Employer }> = P;

export const ExperienceListItemHeader: FC<ExperienceListItemHeaderProps> = (
    props
) => {
    const { id, className, children, xp, ...otherProps } = props;
    const [xpLogo, setXpLogo] = useState<ReactNode>(null);

    useEffect(() => {
        let tempLogo = xp.logo as string;
        let key = tempLogo as keyof typeof Logos;
        setXpLogo(() => {
            return <ExperienceLogo src={Logos[key] as string} alt={xp.name} />;
        });
    }, [xp]);

    return (
        <ExperienceListItemHeaderStyled className={'item-header'}>
            <div className={'flex gap-4'}>
                {xpLogo}
                {/*<ExperienceLogo src={xpLogo} alt={xp.name} />*/}
                <ExperienceInfoContainer>
                    <ExperienceInfo className={'name'}>
                        {xp.name}
                    </ExperienceInfo>
                    <ExperienceInfo className="location">
                        {xp.location}
                    </ExperienceInfo>
                    <ExperienceInfo className="tenure">
                        {xp.tenure}
                    </ExperienceInfo>
                </ExperienceInfoContainer>
            </div>
            <ExperienceInfoContainer>
                <ExperienceInfo className="tenure">
                    {xp.roles.map((role, i) => (
                        <div key={i} className={'font-medium'}>
                            {role.title} -{' '}
                            <span className={'font-light italic'}>
                                {role.tenure}
                            </span>
                        </div>
                    ))}
                </ExperienceInfo>
            </ExperienceInfoContainer>
        </ExperienceListItemHeaderStyled>
    );
};

const ExperienceListItemHeaderStyled = styled.div`
    ${tw`flex w-full flex-col h-48 gap-4 items-start gap-x-4 border-b border-gray-900/5 bg-[#7eaabd] p-6`}
`;

const ExperienceLogo = styled.img`
    ${tw`h-20 w-20 flex-none bg-white object-cover p-1 border-2 border-white ring-2 ring-[#111827]/10`}
`;

const ExperienceInfoContainer = styled.div`
    ${tw`flex flex-col gap-x-4 w-full items-start`}
`;

const ExperienceInfo = styled.div`
    ${tw`text-sm leading-6 text-gray-900`}
    &.name {
        ${tw`text-xl font-bold tracking-tight`}
    }

    &.location {
        ${tw`italic text-white`}
    }

    &.tenure {
        ${tw`text-gray-700`}
    }
`;
