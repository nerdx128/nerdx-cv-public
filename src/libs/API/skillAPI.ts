import * as ApiFx from './ApiScripts';
import { apiConfig } from './ApiScripts';
import { Skill } from '@definitions/johnny';

apiConfig.version = 'v1';
apiConfig.api = 'johnny';
export const skillApi = {
    getAll: async (type?: Skill['type']) => {
        let method = 'Skills/GetAll';
        if (type) method += `?type=${type}`;
        return await ApiFx.GETAuthenticated(method, apiConfig).then(
            async (res) => {
                return await res.data;
            }
        );
    },
};
