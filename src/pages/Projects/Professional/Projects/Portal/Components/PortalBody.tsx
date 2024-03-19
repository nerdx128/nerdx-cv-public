import { FC, useEffect, useState } from 'react';
import { WalletConnectButton } from '@components/Wallet';
import { Body, ContentContainer, Header, Title } from '@components/Base';
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useAccount, useDisconnect } from 'wagmi';
import { useWeb3ModalState } from '@web3modal/wagmi/react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Api } from '@libs/API';

type OEBodyProps<P = {}> = P;

const contractAddress = '0x03CAD862346e44aBEe22f16e260e37552819B0dd';
export const PortalBody: FC<OEBodyProps> = (props) => {
    const { address, isConnecting, isDisconnected } = useAccount();
    const { disconnect } = useDisconnect();
    const { selectedNetworkId } = useWeb3ModalState();
    const swiper = useSwiper();
    const [addressCopied, setAddressCopied] = useState<boolean>(false);
    const [nfts, setNFTs] = useState<Array<any>>([]);

    useEffect(() => {
        if (!address) return;
        (async () => {
            await Api.blockchain
                .getBalanceOfContractForOwner(
                    contractAddress,
                    address as string
                )
                .then((res) => {
                    console.log(res);
                });
        })();
        //swiper.slideNext(5);
    }, [address]);

    useEffect(() => {
        if (!nfts) return;
        console.log(nfts);
    }, [nfts]);

    return (
        <Body id={'portal-body'} className={'gap-4'}>
            <Header id={'oe'} className={'flex flex-col items-center'}>
                <Title>Venkman Membership Portal</Title>
                <p>
                    This is mockup of a project I worked on while I was with
                    Project Venkman for their Digital Membership Collection.
                    Unfortunately, I do not own any of the digital content nor
                    code. This page will demonstrate the similar features with
                    more up-to-date modules.
                </p>
            </Header>
            <ContentContainer
                className={'flex flex-col gap-4 flex-0 w-800px h-[600px]'}
            >
                <div
                    className={
                        'flex flex-col gap-4 bg-gray-700 h-full w-full justify-center items-center'
                    }
                >
                    <Title>Portal</Title>
                    <WalletConnectButton />
                </div>
            </ContentContainer>
        </Body>
    );
};

const CopySpan = styled.span`
    ${tw`cursor-pointer`}
    &.copied {
        ${tw`text-green-500`}
    }
`;

const AddressSub = styled.sub`
    ${tw`w-full flex flex-row items-center justify-center gap-2`}
`;

export default PortalBody;
