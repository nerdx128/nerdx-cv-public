import { FC } from 'react';
import { OpenEditionBody } from '@pages/Projects';
import { MePage } from '@pages/Common';
import { Header, Title } from '@components/Base';

type OEBodyProps<P = {}> = P;
export const OpenEdition: FC<OEBodyProps> = (props) => {
    return (
        <MePage id={'page-open-edition'}>
            <Header id={'oe'} className={'flex flex-col items-center'}>
                <Title>Open Edition</Title>
                <p className={'description'}>
                    This is mockup of a project I worked on while I was with
                    Project Venkman for the Bill Murray Digital Membership
                    Collection. Unfortunately, I do not own any of the digital
                    content nor code. This page will demonstrate the similar
                    features with more up-to-date modules.
                </p>
                <p className={'disclaimer'}>
                    Disclaimer: This is Sepolia Testnet OpenSea project called
                    Nerdx128 Test. These NFTs have no worth and are only used to
                    demonstrate a free claim process.
                </p>
            </Header>
            <OpenEditionBody />
        </MePage>
    );
};

export default OpenEdition;
