import { ElementType, forwardRef, Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { OverridableProps } from '@components/Overridable';
import { NFT } from '@definitions/blockchain/OpenSea';
import { Content } from '@components/Base';
import styled from 'styled-components';
import tw from 'twin.macro';
import { A11y, Navigation, Scrollbar, Virtual } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

type OwnedNFTsProps<
    P = OverridableProps & {
        ownedNFTs: Array<NFT>;
    },
> = P;

type Ref = HTMLElement;
export const OwnedNFTsSlide = forwardRef<Ref, OwnedNFTsProps>(
    ({ id, className, style, ownedNFTs, children, ...props }, forwardedRef) => {
        return (
            <Content className={'nft-list flex flex-col h-full'}>
                <p className={'w-full text-center mb-0 text-sm md:text-xl'}>
                    These are your owned NFTs. Click on them to go to their
                    OpenSea page.
                </p>
                {/*<div className={'flex flex-row flex-wrap w-full'}>*/}
                <SwiperContainer
                    modules={[A11y, Scrollbar, Virtual]}
                    scrollbar={{ draggable: true }}
                    spaceBetween={24}
                    slidesPerView={5}
                    virtual
                >
                    {ownedNFTs.map((nft, i) => (
                        <SwiperSlideContainer
                            key={i}
                            virtualIndex={i}
                            className={'next prev'}
                        >
                            <NFTContainer key={nft.identifier}>
                                <a
                                    href={nft.opensea_url}
                                    target={'_blank'}
                                    className={
                                        'flex flex-col justify-center items-center'
                                    }
                                >
                                    <NFTName>{nft.name}</NFTName>
                                    <NFTImage
                                        src={nft.image_url}
                                        alt={'Open Edition Test'}
                                    />
                                </a>
                            </NFTContainer>
                        </SwiperSlideContainer>
                    ))}
                </SwiperContainer>
                {/*</div>*/}
            </Content>
        );
    }
);

const NFTContainer = styled.div`
    ${tw`flex flex-col justify-center items-center h-full w-full`}
`;

const NFTName = styled.p`
    ${tw`mb-2 w-full text-center text-sm italic`}
`;

const NFTImage = styled.img`
    ${tw``}
`;

const SwiperContainer = styled(Swiper)`
    ${tw`w-full h-full flex flex-row flex-wrap justify-center items-center`}
    .swiper-scrollbar {
        ${tw`bg-gray-200 h-2`}
        .swiper-scrollbar-drag {
            ${tw`bg-gray-600 w-6!`}
        }
    }
`;

const SwiperSlideContainer = styled(SwiperSlide)`
    ${tw`flex! flex-col justify-center items-center`}
`;
