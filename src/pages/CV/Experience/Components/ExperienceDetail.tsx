import { Employer } from '@definitions/johnny/Experience';
import { OverridableProps } from '@components/Overridable';
import { Details, DetailsList } from '@styles/CV';
import { FC } from 'react';
import {
    Collaborations,
    CompanyInfo,
    Responsibilities,
} from '@pages/CV/Experience/';
import { Projects } from '@pages/CV/Common';

type ExperienceDetailProps<P = OverridableProps, Q = { xp: Employer }> = P & Q;

export const ExperienceDetail: FC<ExperienceDetailProps> = (props) => {
    const { id, className, children, xp, ...otherProps } = props;
    return (
        <Details id={id} className={className}>
            <DetailsList>
                <CompanyInfo
                    name={xp.name}
                    url={xp.url}
                    description={xp.description}
                />
                <Responsibilities responsibilities={xp.responsibilities} />
                {xp.projects.length > 0 && (
                    <Projects id={'project-list'} projects={xp.projects} />
                )}
                {xp.collaborations.length > 0 && (
                    <Collaborations collaborations={xp.collaborations} />
                )}
            </DetailsList>
        </Details>
    );
};
