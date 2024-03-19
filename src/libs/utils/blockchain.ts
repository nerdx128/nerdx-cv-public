export const getNetworkName = (networkId: number) => {
    switch (networkId) {
        case 1:
            return 'mainnet';
        case 5:
            return 'goerli';
        case 137:
            return 'polygon';
        case 80001:
            return 'mumbai';
        case 11155111:
            return 'sepolia';
        default:
            return 'mainnet';
    }
};
