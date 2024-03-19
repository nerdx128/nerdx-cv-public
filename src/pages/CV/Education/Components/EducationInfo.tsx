import { FC } from 'react';
import { OverridableProps } from '@components/Overridable';
import { EducationInfo } from '@definitions/johnny';
import { DetailDescription, DetailTerm } from '@styles/Base';
import { EducationInfoStyled } from '@styles/CV';

type EducationInfoProps<
    P = OverridableProps & { name: string },
    Q = { info: EducationInfo },
> = P & Q;

export const EducationInfoContainer: FC<EducationInfoProps> = (props) => {
    const { name, info, ...otherProps } = props;
    return (
        <EducationInfoStyled className={`info-${name}`}>
            <DetailTerm>School Info</DetailTerm>
            <DetailDescription>
                {info.description.map((description, i) => (
                    <p key={i} className={'pb-4'}>
                        {description}
                    </p>
                ))}
                <p>
                    <a href={info.website}>{info.website}</a>
                </p>
            </DetailDescription>
        </EducationInfoStyled>
    );
};
