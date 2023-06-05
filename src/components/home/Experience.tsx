import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export const Experience = () => {
	return (
		<div className="w-full md:container mx-auto md:p-4 md:py-8">
			<h2 className="py-4 font-bold text-[24px] p-4 md:p-0 mb-2">Experience the festival</h2>
			<Swiper spaceBetween={30} slidesPerView={1.2} onSlideChange={() => console.log("slide change")} onSwiper={(swiper) => console.log(swiper)}>
				<SwiperSlide>
					<div className="bg-[url('/src/assets/home/experience.png')] bg-cover bg-center min-h-[540px] 2xl:min-h-[640px] flex items-end mb-4"></div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="bg-[url('/src/assets/home/dumpling.png')] bg-cover bg-center min-h-[540px] 2xl:min-h-[640px] flex items-end mb-4"></div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="bg-[url('/src/assets/home/brew.png')] bg-cover bg-center min-h-[540px] 2xl:min-h-[640px] flex items-end mb-4"></div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="bg-[url('/src/assets/home/satay.png')] bg-cover bg-center min-h-[540px] 2xl:min-h-[640px] flex items-end mb-4"></div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="bg-[url('/src/assets/home/estate.png')] bg-cover bg-center min-h-[540px] 2xl:min-h-[640px] flex items-end mb-4"></div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="bg-[url('/src/assets/home/bread.png')] bg-cover bg-center min-h-[540px] 2xl:min-h-[640px] flex items-end mb-4"></div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="bg-[url('/src/assets/home/water.png')] bg-cover bg-center min-h-[540px] 2xl:min-h-[640px] flex items-end mb-4"></div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="bg-[url('/src/assets/home/paella.png')] bg-cover bg-center min-h-[540px] 2xl:min-h-[640px] flex items-end mb-4"></div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};
