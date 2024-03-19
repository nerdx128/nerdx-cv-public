import { FC, useEffect, useState } from 'react';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useDispatch, useSelector } from 'react-redux';
import {
    clearBlockchain,
    setCurrentWalletAddress,
    setNetwork,
} from '@state/slices';
import { RootState } from '@state/store';
import { useAccount, useDisconnect } from 'wagmi';
import { useWeb3ModalState } from '@web3modal/wagmi/react';
import { networks } from '@data/blockchain';
import { Network } from '@definitions/blockchain/Blockchain';
import tw from 'twin.macro';
import styled from 'styled-components';
import { classNames } from '@libs/utils';
import {
    WalletButtonWrapper,
    WalletButton,
    WalletButtonContainer,
} from '@components/Wallet/Common';

type WalletConnectButtonProps<
    P = {
        className?: HTMLDivElement['className'];
        id?: HTMLDivElement['id'];
    },
> = P;

export const WalletConnectButton: FC<WalletConnectButtonProps> = (props) => {
    const { open, close } = useWeb3Modal();
    const dispatch = useDispatch();
    const { address, isConnecting, isDisconnected } = useAccount();
    const { disconnect } = useDisconnect();
    const { selectedNetworkId } = useWeb3ModalState();
    const currentBlockchain = useSelector(
        (state: RootState) => state.blockchain.current
    );

    const handleOpen = async () => {
        await open();
    };

    const handleDisconnect = () => {
        disconnect();
        dispatch(clearBlockchain());
    };

    useEffect(() => {
        if (isDisconnected) dispatch(setCurrentWalletAddress(''));
        if (address && selectedNetworkId) {
            dispatch(setCurrentWalletAddress(address));
            dispatch(
                setNetwork(
                    networks.filter(
                        (network) => network.id === parseInt(selectedNetworkId!)
                    )[0]
                )
            );
        }
    }, [address, selectedNetworkId]);

    return (
        <WalletButtonWrapper className={classNames(props.className as string)}>
            {isDisconnected ? (
                <WalletButtonContainer>
                    <WalletButton onClick={handleOpen}>
                        Connect Wallet
                    </WalletButton>
                </WalletButtonContainer>
            ) : (
                <WalletButtonContainer>
                    <w3m-account-button balance={'show'} />
                    <WalletButton onClick={handleDisconnect}>
                        Disconnect Wallet
                    </WalletButton>
                </WalletButtonContainer>
            )}
        </WalletButtonWrapper>
    );
};

export default WalletConnectButton;
