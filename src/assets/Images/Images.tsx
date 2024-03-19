import { getGCPImageUrl } from '@libs/utils';

const imageType = 'images';
export const Images = {
    Me: getGCPImageUrl('me.jpg', imageType),
    MeSplash: getGCPImageUrl('me-splash.jpg', imageType),
    LoneTree: getGCPImageUrl('LoneTree.jpg', imageType),
    Taiwan1: getGCPImageUrl('taiwan1.jpg', imageType),
    MonsteraPlaceholder: getGCPImageUrl('MonsteraPlaceholder.png', imageType),
};
