import { FC } from 'react';
import { MeFooter, MeBanner } from '@pages/Me';
import { Page } from '@components/Base';
import { OverridableProps } from '@components/Overridable';
import Dragon from '@assets/backgrounds/DragonStencil.png';

type MePageProps<P = OverridableProps> = P;
export const MePage: FC<MePageProps> = (props) => {
    const { id, className, children, style, ...otherProps } = props;
    return (
        <Page id={id}>
            <div className={'h-full w-full fixed left-0 top-0 opacity-5 -z-1'}>
                <img
                    className={'h-full w-full'}
                    src={Dragon as string}
                    alt="Dragon"
                />
            </div>
            <MeBanner />
            {children}
            <MeFooter />
        </Page>
    );
};

export default Page;
