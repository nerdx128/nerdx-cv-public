import { OverridableProps } from '@components/Overridable';
import { FC, ReactNode, useEffect, useState } from 'react';
import { Collaboration } from '@definitions/johnny/Experience';
import { CollaborationsStyled } from '@styles/CV';
import { DetailDescription, DetailTerm } from '@styles/Base';
import { CollabButton } from '@pages/CV/Common/Components/CollabButton';

type CollaborationsProps<
    P = OverridableProps & { collaborations: Array<Collaboration> },
> = P;

export const Collaborations: FC<CollaborationsProps> = (props) => {
    const { id, className, collaborations, children, ...rest } = props;

    return (
        <CollaborationsStyled>
            <DetailTerm>Collaborations and Partnerships</DetailTerm>
            <DetailDescription className={'flex gap-4 items-center flex-wrap'}>
                {collaborations.map((collaboration, i) => (
                    <CollabButton collaboration={collaboration} key={i} />
                ))}
            </DetailDescription>
        </CollaborationsStyled>
    );
};
