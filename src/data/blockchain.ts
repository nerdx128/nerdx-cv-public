import { Network } from '@definitions/blockchain/Blockchain';

export const networks: Array<Network> = [
    {
        name: 'Polygon Mainnet',
        rpcUrl: 'https://polygon-rpc.com',
        id: 137,
        hexId: '0x89',
        symbol: 'MATIC',
        blockExplorerUrl: 'https://polygonscan.com/',
    },
    {
        name: 'Polygon Mumbai',
        rpcUrl: 'https://rpc-mumbai.maticvigil.com',
        id: 80001,
        hexId: '0x13881',
        symbol: 'MATIC',
        blockExplorerUrl: 'https://mumbai.polygonscan.com/',
    },
    {
        name: 'Ethereum Sepolia Testnet',
        rpcUrl: 'https://ethereum-sepolia-testnet.publicnode.com',
        id: 11155111,
        hexId: '0x2b7c',
        symbol: 'ETH',
        blockExplorerUrl: 'https://sepolia.etherscan.io/',
    },
    {
        name: 'Ethereum Goerli Testnet',
        rpcUrl: 'https://ethereum-goerli.publicnode.com',
        id: 5,
        hexId: '0x5',
        symbol: 'ETH',
        blockExplorerUrl: 'https://goerli.etherscan.io/',
    },
];
