import * as ApiFx from './ApiScripts';
import { apiConfig } from './ApiScripts';

export const alchemyApi = {
    getNFTsByOwner: async (walletAddress: string, contractAddress: string) => {
        apiConfig.version = 'v2';
        return await ApiFx.GETAuthenticated(
            `Alchemy/GetNFTsByOwner?walletAddress=${walletAddress}&contractAddress=${contractAddress}`,
            apiConfig
        ).then(async (res) => {
            return await res.data;
        });
    },
    isHolderOfContract: async (
        walletAddress: string,
        contractAddress: string
    ) => {
        apiConfig.version = 'v2';
        return await ApiFx.GETAuthenticated(
            `Alchemy/isHolderOfContract?walletAddress=${walletAddress}&contractAddress=${contractAddress}`,
            apiConfig
        ).then(async (res) => {
            console.log({ res });
            return await res.data;
        });
    },
    getAllWithAssets: async () => {
        apiConfig.version = 'v2';
        return await ApiFx.GETAuthenticated(
            'Contract/GetAll?includeAssets=true',
            apiConfig
        ).then(async (res) => {
            return await res.data.contracts;
        });
    },
    getAllBurnableContracts: async () => {
        apiConfig.version = 'v2';
        return await ApiFx.GETAuthenticated(
            'Contract/GetAll/Burnable',
            apiConfig
        ).then(async (res) => {
            return await res.data.contracts;
        });
    },
    getOneByContractId: async (contract_id: string) => {
        apiConfig.version = 'v2';
        return await ApiFx.GETAuthenticated(
            `Contract/GetOne/${contract_id}`,
            apiConfig
        ).then(async (res) => {
            return await res.data.contract;
        });
    },
    getOneBySymbol: async (symbol: string) => {
        apiConfig.version = 'v2';
        return await ApiFx.GETAuthenticated(
            `Contract/GetOneBySymbol/${symbol}`,
            apiConfig
        ).then(async (res) => {
            return await res.data.contract;
        });
    },
};
