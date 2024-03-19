import * as ApiFx from './ApiScripts';
import { apiConfig } from './ApiScripts';

apiConfig.version = '';
apiConfig.api = '';

export const dataAPI = {
    getCountries: async () => {
        apiConfig.version = '';
        apiConfig.url = 'https://restcountries.com/v3.1/all';
        return await ApiFx.GETAuthenticated(``, apiConfig).then(async (res) => {
            return res.data as Array<any>;
        });
    },
};
