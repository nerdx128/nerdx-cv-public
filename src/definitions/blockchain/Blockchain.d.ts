import { NFT } from '@definitions/blockchain/OpenSea';

export interface Network {
    name: string;
    rpcUrl: string;
    id: number;
    hexId: string;
    symbol: string;
    blockExplorerUrl: string;
}

export interface WalletAddress {
    walletAddress: string;
}

export interface Blockchain {
    user: User;
    network: Network | null;
    contract: {
        data: Contract | null;
        nfts: Array<NFT>;
    };
}

export interface User {
    email?: string;
    walletType: WalletType | null;
    walletAddress: string | null;
    balance: number;
}

export interface Contract {
    description: string;
    symbol?: string;
    address: string;
    type: string;
    chain_id: number;
    abi: string;
    max_supply?: number;
}

type WalletType = 'walletconnect' | 'magic';
