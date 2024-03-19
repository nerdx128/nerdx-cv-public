import { useSwiper } from 'swiper/react';
import { FC, ReactNode } from 'react';
import { classNames } from '@libs/utils';

type SwiperNextButtonProps<
    P = {
        className?: string;
        children: ReactNode;
    },
> = P;

export const SwiperNextButton: FC<SwiperNextButtonProps> = (props) => {
    const swiper = useSwiper();
    return (
        <button
            className={classNames('', props.className as string)}
            onClick={() => swiper.slideNext(5)}
        >
            {props.children}
        </button>
    );
};
