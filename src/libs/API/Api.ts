import { alchemyApi } from './alchemyAPI';
import { authApi } from './authAPI';
import { blockchainApi } from './blockchainAPI';
import { contractApi } from './contractAPI';
import { dataAPI } from '@libs/API/dataAPI';
import { experienceApi } from '@libs/API/experienceAPI';
import { googleSheetApi } from './googleSheetAPI';
import { openSeaApi } from './openSeaAPI';
import { skillApi } from '@libs/API/skillAPI';
import { plantApi } from '@libs/API/plantAPI';

export const Api = {
    alchemy: alchemyApi,
    auth: authApi,
    blockchain: blockchainApi,
    contract: contractApi,
    data: dataAPI,
    experience: experienceApi,
    googleSheets: googleSheetApi,
    openSea: openSeaApi,
    skill: skillApi,
    plant: plantApi,
};
