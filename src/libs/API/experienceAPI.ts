import * as ApiFx from './ApiScripts';
import { apiConfig } from './ApiScripts';

apiConfig.version = 'v1';
apiConfig.api = 'johnny';

export const experienceApi = {
    getAll: async () => {
        let method = 'Employers/GetAll';
        return await ApiFx.GETAuthenticated(method, apiConfig).then(
            async (res) => {
                return res.data;
            }
        );
    },
};
