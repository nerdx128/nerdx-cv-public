import {
    Dispatch,
    ElementType,
    forwardRef,
    Fragment,
    SetStateAction,
    useEffect,
    useState,
} from 'react';
import { SwiperSlide } from 'swiper/react';
import { OverridableProps } from '@components/Overridable';
import { NFT } from '@definitions/blockchain/OpenSea';
import { Content, LoadingSpinner } from '@components/Base';
import styled from 'styled-components';
import tw from 'twin.macro';
import { useAccount } from 'wagmi';
import { Api } from '@libs/API';
import { Contract, User } from '@definitions/blockchain/Blockchain';
import { useSelector } from 'react-redux';
import { RootState } from '@state/store';

type OwnedNFTsProps<
    P = OverridableProps & {
        contractAddress: string;
        loading?: boolean;
        setShowNFTs: Dispatch<SetStateAction<boolean>>;
    },
> = P;

type Ref = HTMLElement;
export const OpenEditionSlide = forwardRef<Ref, OwnedNFTsProps>(
    (
        {
            id,
            className,
            style,
            setShowNFTs,
            loading,
            contractAddress,
            children,
            ...props
        },
        forwardedRef
    ) => {
        const user: User = useSelector(
            (state: RootState) => state.blockchain.current.user
        ) as User;
        const contract: Contract = useSelector(
            (state: RootState) => state.blockchain.current.contract.data
        ) as Contract;
        const ownedNFTs: NFT[] = useSelector(
            (state: RootState) => state.blockchain.current.contract.nfts
        );
        const [minting, setMinting] = useState<boolean>(false);

        const handleClaim = async () => {
            if (ownedNFTs.length > 0) return;
            setMinting(true);
            await Api.openSea
                .safeTransferFromOE(
                    contract.address,
                    user.walletAddress as string
                )
                .then((res) => {
                    console.log(res);
                    setMinting(false);
                })
                .catch((e) => {
                    console.error(e);
                    setMinting(false);
                });
        };

        useEffect(() => {
            console.log({ ownedNFTs: ownedNFTs.length });
        }, [ownedNFTs]);

        return (
            <Content
                id={id}
                style={style}
                className={
                    'text-sm md:text-lg h-full flex flex-col justify-center items-center'
                }
            >
                {!user.walletAddress && (
                    <p key={1}>
                        To get started, you must have an ETH-based wallet. If
                        you do not have one, then you can quickly create one
                        with an email. Click the 'Connect Wallet' button, choose
                        Magic.link Email and follow the instructions to create
                        an email wallet. Once you're logged in with your wallet,
                        we'll continue with the demonstration.
                    </p>
                )}
                {user.walletAddress &&
                    !loading && [
                        <p key={3} className={'mb-8'}>
                            Now that you've connected your wallet, you're ready
                            to claim your free Testnet NFT.
                        </p>,
                        <CollectButton onClick={handleClaim}>
                            Claim Your Testnet NFT
                        </CollectButton>,
                    ]}
                {minting && (
                    <div>
                        <LoadingSpinner align={'center'}>
                            Minting...
                        </LoadingSpinner>
                    </div>
                )}
            </Content>
        );
    }
);

const CollectButton = styled.button`
    ${tw`bg-gray-500 text-base text-white rounded-md border-2 border-gray-500 border-solid px-4 py-2`}
    &:hover {
        ${tw`bg-transparent text-gray-500`}
    }
`;
