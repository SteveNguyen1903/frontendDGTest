import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Drink, Eat, Buy, Music, Work } from "../../assets";
// Import Swiper styles
import "swiper/css";

export const ToDo = () => {
	return (
		<div className="w-full bg-black text-white">
			<div className="container p-4 py-8 flex mx-auto flex-col ">
				<h2 className="py-4 font-bold text-[24px]">What to do</h2>
				<div className="md:flex hidden flex-row gap-4 mb-8">
					<div className="max-w-[220px]">
						<div className="py-4">
							<img src={Drink} className="h-[60px]" />
						</div>
						<div className="text-[20px] font-bold">Drink</div>
						<div className="py-4">The Bayside Food & Wine festival will have plenty of entertainment to go around.</div>
						<button className="font-bold hover:bg-white hover:text-black ">Learn more</button>
					</div>
					<div className="max-w-[220px]">
						<div className="py-4">
							<img src={Eat} className="h-[60px]" />
						</div>
						<div className="text-[20px] font-bold">Eat</div>
						<div className="py-4">The Bayside Food & Wine festival will have plenty of entertainment to go around.</div>
						<button className="font-bold hover:bg-white hover:text-black ">Learn more</button>
					</div>
					<div className="max-w-[220px]">
						<div className="py-4">
							<img src={Buy} className="h-[60px]" />
						</div>
						<div className="text-[20px] font-bold">Buy</div>
						<div className="py-4">The Bayside Food & Wine festival will have plenty of entertainment to go around.</div>
						<button className="font-bold hover:bg-white hover:text-black ">Learn more</button>
					</div>
					<div className="max-w-[220px]">
						<div className="py-4">
							<img src={Music} className="h-[60px]" />
						</div>
						<div className="text-[20px] font-bold">Live music</div>
						<div className="py-4">The Bayside Food & Wine festival will have plenty of entertainment to go around.</div>
						<button className="font-bold hover:bg-white hover:text-black ">Learn more</button>
					</div>
					<div className="max-w-[220px]">
						<div className="py-4">
							<img src={Work} className="h-[60px]" />
						</div>
						<div className="text-[20px] font-bold">Workshops</div>
						<div className="py-4">The Bayside Food & Wine festival will have plenty of entertainment to go around.</div>
						<button className="font-bold hover:bg-white hover:text-black ">Learn more</button>
					</div>
				</div>
				<div className="md:hidden flex">
					<Swiper spaceBetween={30} slidesPerView={1.4} onSlideChange={() => console.log("slide change")} onSwiper={(swiper) => console.log(swiper)}>
						<SwiperSlide>
							<div className="max-w-[320px]">
								<div className="py-4">
									<img src={"/src/assets/home/drink.png"} className="h-[60px]" />
								</div>
								<div className="text-[20px] font-bold">Drink</div>
								<div className="py-4">The Bayside Food & Wine festival will have plenty of entertainment to go around.</div>
								<button className="font-bold hover:bg-white hover:text-black ">Learn more</button>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="max-w-[320px]">
								<div className="py-4">
									<img src={"/src/assets/home/eat.png"} className="h-[60px]" />
								</div>
								<div className="text-[20px] font-bold">Eat</div>
								<div className="py-4">The Bayside Food & Wine festival will have plenty of entertainment to go around.</div>
								<button className="font-bold hover:bg-white hover:text-black ">Learn more</button>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="max-w-[320px]">
								<div className="py-4">
									<img src={"/src/assets/home/buy.png"} className="h-[60px]" />
								</div>
								<div className="text-[20px] font-bold">Buy</div>
								<div className="py-4">The Bayside Food & Wine festival will have plenty of entertainment to go around.</div>
								<button className="font-bold hover:bg-white hover:text-black ">Learn more</button>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="max-w-[320px]">
								<div className="py-4">
									<img src={"/src/assets/home/music.png"} className="h-[60px]" />
								</div>
								<div className="text-[20px] font-bold">Live music</div>
								<div className="py-4">The Bayside Food & Wine festival will have plenty of entertainment to go around.</div>
								<button className="font-bold hover:bg-white hover:text-black ">Learn more</button>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="max-w-[320px]">
								<div className="py-4">
									<img src={"/src/assets/home/work.png"} className="h-[60px]" />
								</div>
								<div className="text-[20px] font-bold">Workshops</div>
								<div className="py-4">The Bayside Food & Wine festival will have plenty of entertainment to go around.</div>
								<button className="font-bold hover:bg-white hover:text-black ">Learn more</button>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	);
};
