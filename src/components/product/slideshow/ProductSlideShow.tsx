'use client'

import { Swiper, SwiperSlide } from "swiper/react"
import { useState } from "react";
import { Swiper as SwiperObject } from "swiper"

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './slideshow.css';
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

interface Props {
    images: string[];
    title: string;
    classname?: string;
}

export const ProductSlideShow = ({ images, title, classname }: Props) => {

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();

    return (
        <div className={`${classname}`}>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                    width:'60%',
                    height: '60%'
                } as React.CSSProperties}
                spaceBetween={10}
                navigation={true}
                autoplay={
                    {delay:2500}
                }
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs , Autoplay]}
                className="mySwiper2"
            >
                {images.map(image =>
                    <SwiperSlide key={image}>
                        <Image
                            alt={title}
                            width={1024}
                            height={800}
                            className="rounded-lg object-fill"
                            src={`/products/${image}`} />
                    </SwiperSlide>
                )}

            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                style={{
                    width:'60%'
                }}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {images.map(image =>
                    <SwiperSlide key={image}>
                        <Image
                            alt={title}
                            width={300}
                            height={300}
                            className="rounded-lg object-fill"
                            src={`/products/${image}`} />
                    </SwiperSlide>
                )}

            </Swiper>
        </div>
    )
}
