import * as process from 'process';
//import { OAuth2Client } from 'google-auth-library';

export const googleStorageUrl = process.env.REACT_APP_GCP_STORAGE_URL as string;
export const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID as string;

export const getGCPImageUrl = (name: string, imageType: string) => {
    return `${googleStorageUrl}/${imageType}/${name}`;
};
//
// export const getDecodedOAuthJwtGoogle = async (token: string) => {
//     try {
//         const client = new OAuth2Client(googleClientId);
//         return await client.verifyIdToken({
//             idToken: token,
//             audience: process.env.GOOGLE_CLIENT_ID,
//         });
//     } catch (error: any) {
//         return { status: 'error', code: 500, message: error.message };
//     }
// };
