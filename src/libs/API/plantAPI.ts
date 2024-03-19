import * as ApiFx from './ApiScripts';
import { apiConfig } from './ApiScripts';

apiConfig.version = 'v1';
apiConfig.api = 'johnny';

export const plantApi = {
    getAll: async () => {
        return await ApiFx.GETAuthenticated('Plants/GetAll', apiConfig).then(
            async (res) => {
                return res.data;
            }
        );
    },
    getOneById: async (id: string) => {
        return await ApiFx.GETAuthenticated(
            `Plants/GetOne/${id}`,
            apiConfig
        ).then(async (res) => {
            return res.data;
        });
    },
};
