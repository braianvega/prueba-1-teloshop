'use client'

import { Swiper, SwiperSlide } from "swiper/react"
import { useState } from "react";
import { Swiper as SwiperObject } from "swiper"

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './slideshow.css';
import { Autoplay, FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import Image from "next/image";

interface Props {
    images: string[];
    title: string;
    classname?: string;
}

export const ProductMobileSlideShow = ({ images, title, classname }: Props) => {

    return (
        <div className={`${classname}`}>
            <Swiper
                navigation={true}
                style={{
                    height: '500px',
                    width: '100vw'
                }}

                pagination
                modules={[FreeMode, Thumbs, Autoplay, Pagination]}
                className="mySwiper2"
            >
                {images.map(image =>
                    <SwiperSlide key={image}>
                        <Image
                            alt={title}
                            width={600}
                            height={500}
                            className="object-fill"
                            src={`/products/${image}`} />
                    </SwiperSlide>
                )}

            </Swiper>
        </div>
    )
}
