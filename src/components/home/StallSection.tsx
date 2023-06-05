import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export const StallSection = () => {
	return (
		<div className="container mx-auto p-4 py-8">
			<h2 className="py-4 font-bold text-[24px]">Selection of our stalls</h2>
			<div className=" md:grid grid-cols-4 gap-4 hidden">
				<div className="grid-cols-1">
					<div className="bg-[url('/src/assets/home/wine.png')] bg-cover bg-center min-h-[240px] 2xl:min-h-[340px] flex items-end mb-4">
						<div className="w-full h-full p-4" style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 100%)" }}>
							<div className="font-bold text-[#fff] text-[20px]">Macquariedale Organic Wines</div>
						</div>
					</div>
					<div className="bg-[url('/src/assets/home/dumpling.png')] bg-cover bg-center min-h-[240px] 2xl:min-h-[340px] flex items-end mb-4">
						<div className="w-full h-full p-4" style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 100%)" }}>
							<div className="font-bold text-[#fff] text-[20px]">Yan's Dumplings and Noodles</div>
						</div>
					</div>
				</div>
				<div className="grid-cols-1">
					<div className="bg-[url('/src/assets/home/brew.png')] bg-cover bg-center min-h-[240px] 2xl:min-h-[340px] flex items-end mb-4">
						<div className="w-full h-full p-4" style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 100%)" }}>
							<div className="font-bold text-[#fff] text-[20px]">One Drop Brewing Co</div>
						</div>
					</div>
					<div className="bg-[url('/src/assets/home/satay.png')] bg-cover bg-center min-h-[240px] 2xl:min-h-[340px] flex items-end mb-4">
						<div className="w-full h-full p-4" style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 100%)" }}>
							<div className="font-bold text-[#fff] text-[20px]">Satay Brother Skewers</div>
						</div>
					</div>
				</div>
				<div className="grid-cols-1">
					<div className="bg-[url('/src/assets/home/estate.png')] bg-cover bg-center min-h-[240px] 2xl:min-h-[340px] flex items-end mb-4">
						<div className="w-full h-full p-4" style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 100%)" }}>
							<div className="font-bold text-[#fff] text-[20px]">Savannah Estate</div>
						</div>
					</div>
					<div className="bg-[url('/src/assets/home/bread.png')] bg-cover bg-center min-h-[240px] 2xl:min-h-[340px] flex items-end mb-4">
						<div className="w-full h-full p-4" style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 100%)" }}>
							<div className="font-bold text-[#fff] text-[20px]">Marakana Burek</div>
						</div>
					</div>
				</div>
				<div className="grid-cols-1">
					<div className="bg-[url('/src/assets/home/water.png')] bg-cover bg-center min-h-[240px] 2xl:min-h-[340px] flex items-end mb-4">
						<div className="w-full h-full p-4" style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 100%)" }}>
							<div className="font-bold text-[#fff] text-[18px]">Karu Distillery</div>
						</div>
					</div>
					<div className="bg-[url('/src/assets/home/paella.png')] bg-cover bg-center min-h-[240px] 2xl:min-h-[340px] flex items-end mb-4">
						<div className="w-full h-full p-4" style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 100%)" }}>
							<div className="font-bold text-[#fff] text-[18px]">La Gitana Paella</div>
						</div>
					</div>
				</div>
			</div>

			<div className="md:hidden flex">
				<Swiper spaceBetween={30} slidesPerView={1.2} onSlideChange={() => console.log("slide change")} onSwiper={(swiper) => console.log(swiper)}>
					<SwiperSlide>
						<div className="bg-[url('/src/assets/home/wine.png')] bg-cover bg-center min-h-[440px] 2xl:min-h-[340px] flex items-end mb-4">
							<div className="w-full h-full p-4" style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 100%)" }}>
								<div className="font-bold text-[#fff] text-[20px]">Macquariedale Organic Wines</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="bg-[url('/src/assets/home/dumpling.png')] bg-cover bg-center min-h-[440px] 2xl:min-h-[340px] flex items-end mb-4">
							<div className="w-full h-full p-4" style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 100%)" }}>
								<div className="font-bold text-[#fff] text-[20px]">Yan's Dumplings and Noodles</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="bg-[url('/src/assets/home/brew.png')] bg-cover bg-center min-h-[440px] 2xl:min-h-[340px] flex items-end mb-4">
							<div className="w-full h-full p-4" style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 100%)" }}>
								<div className="font-bold text-[#fff] text-[20px]">One Drop Brewing Co</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="bg-[url('/src/assets/home/satay.png')] bg-cover bg-center min-h-[440px] 2xl:min-h-[340px] flex items-end mb-4">
							<div className="w-full h-full p-4" style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 100%)" }}>
								<div className="font-bold text-[#fff] text-[20px]">Satay Brother Skewers</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="bg-[url('/src/assets/home/estate.png')] bg-cover bg-center min-h-[440px] 2xl:min-h-[340px] flex items-end mb-4">
							<div className="w-full h-full p-4" style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 100%)" }}>
								<div className="font-bold text-[#fff] text-[20px]">Savannah Estate</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="bg-[url('/src/assets/home/bread.png')] bg-cover bg-center min-h-[440px] 2xl:min-h-[340px] flex items-end mb-4">
							<div className="w-full h-full p-4" style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 100%)" }}>
								<div className="font-bold text-[#fff] text-[20px]">Marakana Burek</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="bg-[url('/src/assets/home/water.png')] bg-cover bg-center min-h-[440px] 2xl:min-h-[340px] flex items-end mb-4">
							<div className="w-full h-full p-4" style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 100%)" }}>
								<div className="font-bold text-[#fff] text-[18px]">Karu Distillery</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="bg-[url('/src/assets/home/paella.png')] bg-cover bg-center min-h-[440px] 2xl:min-h-[340px] flex items-end mb-4">
							<div className="w-full h-full p-4" style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 100%)" }}>
								<div className="font-bold text-[#fff] text-[18px]">La Gitana Paella</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};
