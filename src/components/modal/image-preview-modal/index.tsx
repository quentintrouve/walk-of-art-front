import React, { useState, useEffect } from "react"
import styles from "./index.module.scss"
import { Modal as BaseModal } from "../index"
import {
    IMAGE_PREVIEW_MODAL_ID,
} from "@recoil/modal/atom"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Text } from '@components'

export type IProps = {
    title: string,
    images: string[]
}

export const ImagePreviewModal: React.FC<IProps> = ({ title, images }: IProps) => {
    const [slideIndex, setSlideIndex] = useState<number>(0)

    return (
    <BaseModal
        id={IMAGE_PREVIEW_MODAL_ID}
        title={`${slideIndex + 1}/${images.length}`}
        fullScreen={true}
        background="artist-black"
        iconColor="white"
    >
        <div className={styles.container}>
            <div className={styles.images}>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={'auto'}
                        onSlideChange={(index) => setSlideIndex(index.snapIndex)}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {
                            images.map((src, index) =>
                            (
                                <SwiperSlide>
                                    <figure key={index}>
                                        <img src={src} alt="" />
                                    </figure>
                                </SwiperSlide>
                            ))  
                        }
                    </Swiper>
            </div>
            <Text tag="h2" typo="heading-md">{title}</Text>
        </div>
    </BaseModal>
    )
}
