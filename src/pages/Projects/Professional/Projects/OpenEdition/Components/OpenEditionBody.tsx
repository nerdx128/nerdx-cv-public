import { FC, useEffect, useState } from 'react';
import {
    MagicButton,
    WalletConnectButton,
    WalletSelector,
} from '@components/Wallet';
import { Body, ContentContainer, LoadingSpinner } from '@components/Base';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useAccount } from 'wagmi';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Api } from '@libs/API';
import { NFT } from '@definitions/blockchain/OpenSea';
import { OpenEditionSlide, OwnedNFTsSlide } from '@pages/Projects';
import { Button } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@state/store';
import { Blockchain, User } from '@definitions/blockchain/Blockchain';
import { setCurrentContract, setOwnedNFTs } from '@state/slices';

type OEBodyProps<P = {}> = P;

const contractAddress = '0x03CAD862346e44aBEe22f16e260e37552819B0dd';

export const OpenEditionBody: FC<OEBodyProps> = (props) => {
    const dispatch = useDispatch();
    const { isDisconnected } = useAccount();
    const [isOwned, setIsOwned] = useState<boolean>(false);
    const [showNFTs, setShowNFTs] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const user: User = useSelector(
        (state: RootState) => state.blockchain.current.user
    ) as User;
    const ownedNFTs: NFT[] = useSelector(
        (state: RootState) => state.blockchain.current.contract.nfts
    );

    const getWalletButton = () => {
        switch (user.walletType) {
            case 'walletconnect':
                return <WalletConnectButton />;
            case 'magic':
                return <MagicButton />;
            default:
                return <></>;
        }
    };

    useEffect(() => {
        if (!user.walletAddress) return;
        console.log('Getting NFTs for address:', user.walletAddress);
        setLoading(true);
        (async () => {
            await Api.openSea
                .getNFTsForAddress(
                    user.walletAddress as string,
                    contractAddress
                )
                .then((res) => {
                    let sortedNFTs = res.sort(
                        (a: NFT, b: NFT) =>
                            parseInt(a.identifier) - parseInt(b.identifier)
                    );
                    dispatch(setOwnedNFTs(sortedNFTs));
                });

            setLoading(false);
        })();
    }, [user.walletAddress]);

    useEffect(() => {
        setIsOwned(false);
        setOwnedNFTs([]);
        setShowNFTs(false);
    }, [isDisconnected]);

    useEffect(() => {
        if (!ownedNFTs.length) return;
        setIsOwned(true);
    }, [ownedNFTs]);

    useEffect(() => {
        (async () => {
            let contract =
                await Api.contract.getContractByAddress(contractAddress);
            dispatch(setCurrentContract(contract));
        })();
    }, []);

    return (
        <Body id={'oe-body'} className={'gap-4'}>
            <ContentContainer className={'flex flex-col gap-4'}>
                <CollectionImageContainer>
                    <CollectionImage
                        src={
                            'https://i.seadn.io/s/raw/files/1244b246716c00bde938e0a6990aba4e.png?auto=format'
                        }
                        alt={'Open Edition Test'}
                    />
                </CollectionImageContainer>
                {!user.walletAddress && <WalletSelector />}
                {getWalletButton()}
                {/*<WalletConnectButton />*/}
                {/*<MagicButton />*/}
            </ContentContainer>
            <ContentContainer className={'h-full flex-1'}>
                {loading && (
                    <div>
                        <LoadingSpinner align={'center'}>
                            Loading...
                        </LoadingSpinner>
                    </div>
                )}
                {ownedNFTs.length < 1 && (
                    <OpenEditionSlide
                        id={'oe-slide'}
                        loading={loading}
                        contractAddress={contractAddress}
                        setShowNFTs={setShowNFTs}
                    />
                )}
                {user.walletAddress &&
                    ownedNFTs.length > 0 &&
                    !showNFTs && [
                        <p key={0}>
                            You already own a Testnet NFT. Click the arrow to
                            the right to move onto the next step.
                        </p>,
                        <Button key={1} onClick={() => setShowNFTs(true)}>
                            See your claimed NFT
                        </Button>,
                    ]}
                {user.walletAddress && !!ownedNFTs.length && showNFTs && (
                    <SwiperSlide key={1} className={'next prev'}>
                        <OwnedNFTsSlide ownedNFTs={ownedNFTs} />
                    </SwiperSlide>
                )}
            </ContentContainer>
        </Body>
    );
};

const CollectionImageContainer = styled.div`
    ${tw`flex flex-col md:flex-row gap-8 md:w-2/3 justify-center items-center`}
`;

const CollectionImage = styled.img`
    ${tw`w-48`}
`;

export default OpenEditionBody;
