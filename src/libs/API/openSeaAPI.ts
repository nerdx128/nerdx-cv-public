import * as ApiFx from './ApiScripts';
import { apiConfig } from './ApiScripts';

apiConfig.version = 'v2';
apiConfig.api = 'blockchain';

export const openSeaApi = {
    safeTransferFromOE: async (
        contractAddress: string,
        walletAddress: string
    ) => {
        apiConfig.version = 'v2';
        return await ApiFx.GETAuthenticated(
            `OpenSea/SafeTransferFromOE?contractAddress=${contractAddress}&walletAddress=${walletAddress}`,
            apiConfig
        ).then(async (res) => {
            return await res.data;
        });
    },
    getNFTsForAddress: async (
        walletAddress: string,
        contractAddress: string
    ) => {
        apiConfig.version = 'v2';
        return await ApiFx.GETAuthenticated(
            `OpenSea/GetNFTsForAddress?walletAddress=${walletAddress}&contractAddress=${contractAddress}`,
            apiConfig
        ).then(async (res) => {
            return await res.data.nfts;
        });
    },
};
