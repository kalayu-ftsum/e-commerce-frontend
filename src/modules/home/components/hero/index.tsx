'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { HeroOne, HeroThree, HeroTwo } from 'assets/Images';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Button } from '@medusajs/ui';

export default function App() {
  return (
    <>
      <Swiper
        style={{
          // @ts-ignore
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        rewind={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
         
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide className='flex'>
        <div className='flex flex-col	 items-center justify-center	gap-4 w-full  h-full bg-[#5855557a]'>
        <HeroOne
            className='absolute w-full h-full z-[-1]'
          />
          <div className="title text-center text-2xl font-medium	md:text-4xl" data-swiper-parallax="-300">
          SHOP NOW FOR UNIQUE, TIMELESS PIECES OF CLOTHING
          </div>
          <div className="text-black text-center	text-xl	" data-swiper-parallax="-200">
          Discover Authentic Ethiopian Elegance: Handcrafted Designs Infused with Rich Cultural Heritage
          </div>
          <div className="text" data-swiper-parallax="-100">
           <Button className='bg-blue-500 border-transparent shadow-none	hover:bg-blue-100 hover:text-black block px-12 py-4 active:bg-blue-100 active:text-black active:border-none	'> Shop Now</Button>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
          <div className='flex flex-col	 justify-end	gap-4 h-full w-full relative'>
          <HeroTwo
            className='absolute w-full h-full z-[-1]'
          />
            <div className='w-fit ml-8 mb-16 flex flex-col gap-4'>
          <div className="title text-left text-2xl font-medium	md:text-4xl" data-swiper-parallax="-300">
          Find your style
          </div>
          <div className="text w-full" data-swiper-parallax="-100">
           <Button className=' w-full bg-blue-500 border-transparent shadow-none	hover:bg-blue-100 hover:text-black block px-8 py-4 	'> Shop Now</Button>
          </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex'>
        <div className='flex flex-col	 items-end justify-end w-full ml-auto	gap-4  h-full relative'>
        <HeroThree
            className='absolute w-full h-full z-[-1]'
          />
          <div className='w-fit mr-8 mb-16 flex flex-col gap-4'>
          <div className="title text-center text-2xl font-medium	md:text-4xl" data-swiper-parallax="-300">
          Find your style
          </div>
          <div className="text w-full" data-swiper-parallax="-100">
           <Button className=' w-full bg-blue-500 border-transparent shadow-none	hover:bg-blue-100 hover:text-black block px-8 py-4 	'> Shop Now</Button>
          </div>

          </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
