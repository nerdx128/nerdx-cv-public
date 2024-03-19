import * as ApiFx from './ApiScripts';
import { apiConfig } from './ApiScripts';

apiConfig.version = 'v1';
apiConfig.api = 'blockchain';
export const blockchainApi = {
    getBalanceOfContractForOwner: async (
        contractAddress: string,
        walletAddress: string
    ) => {
        return await ApiFx.GETAuthenticated(
            `Blockchain/GetBalanceOfContractForOwner?contract_address=${contractAddress}&wallet_address=${walletAddress}`,
            apiConfig
        ).then(async (res) => {
            return await res.data;
        });
    },
};
