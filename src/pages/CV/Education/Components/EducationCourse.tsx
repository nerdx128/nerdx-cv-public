import { CoursesStyled } from '@styles/CV';
import { DetailDescription, DetailTerm } from '@styles/Base';
import { OverridableProps } from '@components/Overridable';
import { Course } from '@definitions/johnny';
import { FC } from 'react';

type EducationCourseProps<
    P = OverridableProps & {
        courses: Array<Course>;
    },
> = P;
export const EducationCourse: FC<EducationCourseProps> = (props) => {
    const { id, className, children, courses, ...rest } = props;
    return (
        <CoursesStyled>
            <DetailTerm>Courses</DetailTerm>
            <DetailDescription>
                {courses.map((course, i) => [
                    <p key={i} className={'pb-4'}>
                        {course.number} - {course.name}
                    </p>,
                    <p>{course.description}</p>,
                ])}
            </DetailDescription>
        </CoursesStyled>
    );
};
