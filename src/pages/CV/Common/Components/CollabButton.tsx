import { Button, Tooltip } from 'flowbite-react';
import { FC, ReactNode, useEffect, useState } from 'react';
import { OverridableProps } from '@components/Overridable';
import { Collaboration } from '@definitions/johnny';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Logos } from '@assets/Logos';

type CollabButtonProps<
    P = OverridableProps & {
        collaboration: Collaboration;
    },
> = P;
export const CollabButton: FC<CollabButtonProps> = (props) => {
    const { id, className, children, style, collaboration, ...rest } = props;
    const [logo, setLogo] = useState<ReactNode>(null);

    useEffect(() => {
        if (!collaboration.logo) return;
        let logo = collaboration.logo;
        if (logo.search(/^http/g) > -1) {
            setLogo(() => <CollabImage src={logo} alt={collaboration.name} />);
        } else {
            let key = logo as keyof typeof Logos;
            setLogo(() => {
                return (
                    <CollabImage
                        src={Logos[key] as string}
                        alt={collaboration.name}
                    />
                );
            });
        }
    }, [collaboration]);

    return (
        <Tooltip
            content={collaboration?.name}
            placement={'top'}
            id={`tooltip-top-${collaboration?.name}`}
            role={'tooltip'}
        >
            <div className={'min-h-8 flex items-center'}>
                <a
                    href={collaboration?.url}
                    target={'_blank'}
                    className={'h-full flex items-center'}
                >
                    {logo}
                </a>
            </div>
        </Tooltip>
    );
};

const CollabImage = styled.img`
    ${tw`max-h-12 max-w-24 h-full w-full`}
`;
