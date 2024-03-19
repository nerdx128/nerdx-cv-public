import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    Blockchain,
    Network,
    Contract,
} from '@definitions/blockchain/Blockchain';
import { NFT } from '@definitions/blockchain/OpenSea';

interface blockchainState {
    current: Blockchain;
}

const initialState: blockchainState = {
    current: {
        user: {
            walletType: null,
            walletAddress: null,
            balance: 0,
        },
        network: null,
        contract: {
            data: null,
            nfts: [],
        },
    },
};

export const blockchainSlice = createSlice({
    initialState: initialState,
    name: 'blockchain',
    reducers: {
        setCurrentWalletType: (
            state,
            action: PayloadAction<'walletconnect' | 'magic' | null>
        ) => {
            state.current.user.walletType = action.payload;
        },
        setCurrentWalletAddress: (state, action: PayloadAction<string>) => {
            state.current.user.walletAddress = action.payload;
        },
        setCurrentBalance: (state, action: PayloadAction<number>) => {
            state.current.user.balance = action.payload;
        },
        setCurrentEmail: (state, action: PayloadAction<string>) => {
            state.current.user.email = action.payload;
        },
        setNetwork: (state, action: PayloadAction<Network>) => {
            state.current.network = action.payload;
        },
        setCurrentContract: (state, action: PayloadAction<Contract>) => {
            state.current.contract.data = action.payload;
        },
        setOwnedNFTs: (state, action: PayloadAction<Array<NFT>>) => {
            state.current.contract.nfts = action.payload;
        },
        clearBlockchain: (state) => {
            state = initialState;
        },
    },
});

export const {
    setCurrentWalletType,
    setCurrentWalletAddress,
    setNetwork,
    setCurrentBalance,
    setCurrentEmail,
    setCurrentContract,
    setOwnedNFTs,
    clearBlockchain,
} = blockchainSlice.actions;

export default blockchainSlice.reducer;
