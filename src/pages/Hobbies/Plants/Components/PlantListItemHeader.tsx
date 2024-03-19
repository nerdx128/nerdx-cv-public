import { OverridableProps } from '@components/Overridable';
import { Plant } from '@definitions/johnny/Plants';
import styled from 'styled-components';
import tw from 'twin.macro';
import { FC, useEffect, useState } from 'react';
import { Images } from '@assets/Images';
import { Plants } from '@assets/Plants';
import { Carousel, CustomFlowbiteTheme } from 'flowbite-react';
import { getGCPImageUrl } from '@libs/utils';

type PlantListItemHeaderProps<P = OverridableProps & { plant: Plant }> = P;

const customTheme: CustomFlowbiteTheme['carousel'] = {
    root: {
        base: 'relative left-0 h-full aspect-1 bg-gray-900/10',
        leftControl:
            'absolute top-0 left-0 flex h-full items-center justify-center px-2 focus:outline-none',
        rightControl:
            'absolute top-0 right-0 flex h-full items-center justify-center px-2 focus:outline-none',
    },
    indicators: {
        active: {
            off: 'bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800',
            on: 'bg-white dark:bg-gray-800',
        },
        base: 'h-2 w-2 rounded-full',
        wrapper: 'absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3',
    },
    item: {
        base: 'absolute top-1/2 left-1/2 block h-full w-full -translate-x-1/2 -translate-y-1/2',
        wrapper: {
            off: 'w-full h-full flex-shrink-0 transform cursor-default snap-center',
            on: 'w-full h-full flex-shrink-0 transform cursor-grab snap-center',
        },
    },
    control: {
        base:
            'inline-flex h-4 w-4 items-center justify-center rounded-full bg-gray-700/50 group-hover:bg-white/75' +
            ' group-hover:text-gray-700 group-focus:outline-none group-focus:ring-2 group-focus:ring-white' +
            ' dark:bg-gray-800/30' +
            ' dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-6 sm:w-6',
        icon: 'h-2 w-2 focus:text-gray-700 sm:h-4 sm:w-4',
    },
    scrollContainer: {
        base: 'relative flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth',
        snap: 'snap-x',
    },
};

export const PlantListItemHeader: FC<PlantListItemHeaderProps> = (props) => {
    const { id, className, children, plant, ...otherProps } = props;
    const [images, setImages] = useState<Array<string>>([]);
    useEffect(() => {
        if (!plant.image_url) {
            let key = 'MonsteraPlaceholder' as keyof typeof Images;
            setImages([Images[key] as string]);
        } else {
            let image_array: Array<string> = [];
            console.log(plant.image_url);
            plant.image_url.forEach((url, i) => {
                let key = plant.image_url[i] as keyof typeof Plants;
                image_array.push(
                    getGCPImageUrl(plant.image_url[i], 'plants/Small')
                );
            });
            console.log(image_array);
            setImages(image_array);
        }
    }, []);

    return (
        <PlantListItemHeaderStyled className={'item-header'}>
            <div className={'flex relative w-full h-full gap-2'}>
                <Carousel theme={customTheme} slide={false} indicators={false}>
                    {images.map((image) => (
                        <PlantImage src={image} alt={plant.common_name} />
                    ))}
                </Carousel>
                <PlantInfoContainer>
                    <PlantInfo className={'name'}>
                        {plant.common_name}
                    </PlantInfo>
                    <div className={'flex text-gray-200 gap-1'}>
                        <PlantInfo className={'classification'}>
                            {`${plant.species}`}{' '}
                            <span
                                className={'cultivar'}
                            >{`${plant.cultivar}`}</span>
                        </PlantInfo>
                    </div>
                </PlantInfoContainer>
            </div>
        </PlantListItemHeaderStyled>
    );
};

const PlantListItemHeaderStyled = styled.div`
    ${tw`relative flex w-full flex-col gap-4 h-48 max-h-48 min-h-48 items-start gap-x-4 bg-gray-400`}
`;

const PlantImage = styled.img`
    ${tw`absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2`}
`;

const PlantInfoContainer = styled.div`
    ${tw`flex flex-col gap-x-4 w-full items-start`}
`;

const PlantInfo = styled.div`
    ${tw`leading-6 `}
    &.name {
        ${tw`text-gray-900 text-xl font-bold tracking-tight`}
    }

    &.classification {
        ${tw`italic text-base text-gray-200`}
        & > span.cultivar {
            ${tw`text-sm text-gray-500`}
        }
    }

    &.tenure {
        ${tw`text-gray-700`}
    }
`;
