import { OverridableProps } from '@components/Overridable';
import { ResponsibilitiesStyled } from '@styles/CV';
import { DetailDescription, DetailTerm } from '@styles/Base';
import { FC, useEffect } from 'react';
import { Responsibility } from '@definitions/johnny';

type ResponsibilitiesProps<
    P = OverridableProps & { responsibilities: Array<Responsibility> },
> = P;

export const Responsibilities: FC<ResponsibilitiesProps> = (props) => {
    const { id, className, children, responsibilities, ...rest } = props;

    useEffect(() => {
        console.log('Responsibilities: ', responsibilities);
    }, [responsibilities]);

    return (
        <ResponsibilitiesStyled>
            <DetailTerm>Responsibilities</DetailTerm>
            <DetailDescription>
                {responsibilities.map((responsibility, i) =>
                    responsibility.descriptions.map((description, j) => (
                        <p key={i} className={'pb-4 text'}>
                            {description}
                        </p>
                    ))
                )}
            </DetailDescription>
        </ResponsibilitiesStyled>
    );
};
