import { OverridableProps } from '@components/Overridable';
import { CompanyInfoStyled } from '@styles/CV';
import { DetailDescription, DetailTerm } from '@styles/Base';

type CompanyInfoProps<
    P = OverridableProps & { name: string; url: string; description: string },
> = P;

export const CompanyInfo = (props: CompanyInfoProps) => {
    const { id, className, style, children, name, url, description, ...rest } =
        props;
    return (
        <CompanyInfoStyled className={`info-${name}`}>
            <DetailTerm>Company Info</DetailTerm>
            <DetailDescription>
                {/*{description.map((description, i) => (*/}
                <p className={'pb-4 text'}>{description}</p>
                {/*))}*/}
                <p className={'url'}>
                    <a href={url}>{url}</a>
                </p>
            </DetailDescription>
        </CompanyInfoStyled>
    );
};
