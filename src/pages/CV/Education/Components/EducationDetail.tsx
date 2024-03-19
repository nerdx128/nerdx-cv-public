import { Details, DetailsList } from '@styles/CV';
import { OverridableProps } from '@components/Overridable';
import { School } from '@definitions/johnny';
import { FC } from 'react';
import { EducationCourse, EducationInfoContainer } from '@pages/CV';
import { Projects } from '@pages/CV/Common';

type EducationDetailProps<
    P = OverridableProps & {
        education: School;
    },
> = P;
export const EducationDetail: FC<EducationDetailProps> = (props) => {
    const { id, className, children, education, ...rest } = props;
    return (
        <Details className={'details'}>
            <DetailsList>
                <EducationInfoContainer
                    name={education.name}
                    info={education.info}
                />
                <EducationCourse courses={education.courses} />
                {/*{education.projectIds.length > 0 && (*/}
                {/*    <Projects*/}
                {/*        id={'project-list'}*/}
                {/*        projectIds={education.projectIds}*/}
                {/*    />*/}
                {/*)}*/}
            </DetailsList>
        </Details>
    );
};
