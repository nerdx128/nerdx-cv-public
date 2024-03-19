import { OverridableProps } from '@components/Overridable';
import { FC, useEffect } from 'react';
import { Magic } from 'magic-sdk';
import * as process from 'process';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@state/store';
import { Blockchain, Contract, User } from '@definitions/blockchain/Blockchain';
import {
    clearBlockchain,
    setCurrentBalance,
    setCurrentEmail,
    setCurrentWalletAddress,
} from '@state/slices';
import { classNames, getNetworkName } from '@libs/utils';
import {
    WalletButtonWrapper,
    WalletButton,
    WalletButtonContainer,
} from '@components/Wallet/Common';
import { BrowserProvider, formatEther } from 'ethers';

type MagicButtonProps<P = OverridableProps> = P;

const magicKey = process.env.REACT_APP_MAGIC_API_KEY as string;
export const MagicButton: FC<MagicButtonProps> = (props) => {
    const { children, className, id, style, ...otherProps } = props;
    const dispatch = useDispatch();
    const user: User = useSelector(
        (state: RootState) => state.blockchain.current.user
    ) as User;
    const contract: Contract = useSelector(
        (state: RootState) => state.blockchain.current.contract.data
    ) as Contract;
    const magic = new Magic(magicKey);

    const handleMagicClick = async () => {
        console.log('Magic button clicked');
        try {
            let accounts = await magic.wallet.connectWithUI();
            await magic.user.requestInfoWithUI();
            await magic.wallet.showBalances();
            let provider = await magic.wallet.getProvider();
            let web3Provider = new BrowserProvider(provider);
            let balance = await web3Provider.getBalance(accounts[0]);
            let userInfo = await magic.user.getInfo();
            dispatch(setCurrentWalletAddress(accounts[0]));
            dispatch(setCurrentBalance(Number(formatEther(balance))));
            dispatch(setCurrentEmail(userInfo.email as string));
        } catch (e) {
            console.error(e);
        }
    };

    const handleMagicDisconnectClick = async () => {
        console.log('Magic button disconnect clicked');
        try {
            await magic.wallet.disconnect();
            dispatch(clearBlockchain());
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {}, []);

    return (
        <WalletButtonWrapper className={classNames(props.className as string)}>
            {user.walletAddress ? (
                <WalletButtonContainer>
                    <div>
                        <span>{}</span>
                    </div>
                    <WalletButton
                        id={id}
                        className={className}
                        style={style}
                        onClick={handleMagicDisconnectClick}
                    >
                        Disconnect Wallet
                    </WalletButton>
                </WalletButtonContainer>
            ) : (
                <WalletButtonContainer>
                    <WalletButton
                        id={id}
                        className={className}
                        style={style}
                        onClick={handleMagicClick}
                    >
                        Magic Wallet
                    </WalletButton>
                </WalletButtonContainer>
            )}
        </WalletButtonWrapper>
    );
};

export default MagicButton;
