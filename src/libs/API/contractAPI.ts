import * as ApiFx from './ApiScripts';
import { apiConfig } from './ApiScripts';

apiConfig.version = 'v2';
apiConfig.api = 'blockchain';

export const contractApi = {
    getAll: async () => {
        apiConfig.version = 'v2';
        return await ApiFx.GETAuthenticated(
            'Contract/GetAll?includeAssets=false',
            apiConfig
        ).then(async (res) => {
            return await res.data.contracts;
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
    getContractByAddress: async (address: string) => {
        apiConfig.version = 'v2';
        return await ApiFx.GETAuthenticated(
            `Contract/GetByAddress/${address}`,
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
