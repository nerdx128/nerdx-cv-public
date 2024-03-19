import { FC } from 'react';
import { PortalBody } from '@pages/Projects';
import { MePage } from '@pages/Common';

type OEBodyProps<P = {}> = P;
export const Portal: FC<OEBodyProps> = (props) => {
    return (
        <MePage>
            <PortalBody />
        </MePage>
    );
};

export default Portal;
