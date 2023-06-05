import React from "react";

export const Detail = () => {
	return (
		<div className="lg:container flex flex-col lg:p-4 lg:py-8 mx-auto lg:gap-8">
			<div className="flex flex-col md:flex-row">
				<div className="w-full lg:w-2/3 h-[340px] bg-[url('/src/assets/home/stall.jpg')] bg-cover bg-top"></div>
				<div className="lg:w-1/3 bg-[#02C34E] p-4 md:p-8 flex flex-col justify-between">
					<div className=" ">
						<div className="font-bold text-[32px]">Want to be a stallholder?</div>
						<div className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, eos, voluptates amet ducimus ullam aspernatur, nisi dolorum ipsum </div>
					</div>
					<button className="w-fit mt-4 px-4 py-2 bg-[#000] text-[#fff] font-semibold border-[#000] border-[1px] hover:bg-transparent hover:text-[#000]  hover:border-black">Apply to be a stallholder</button>
				</div>
			</div>
			<div className="flex flex-col md:flex-row-reverse">
				<div className="w-full lg:w-2/3 h-[340px] bg-[url('/src/assets/home/performer.png')] bg-cover bg-top"></div>
				<div className="lg:w-1/3 bg-[#FF8F1D] p-4 md:p-8 flex flex-col justify-between">
					<div className=" ">
						<div className="font-bold text-[32px]">Want to be a performer?</div>
						<div className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, eos, voluptates amet ducimus ullam aspernatur, nisi dolorum ipsum </div>
					</div>
					<button className="w-fit mt-4 px-4 py-2 bg-[#000] text-[#fff] font-semibold border-[#000] border-[1px] hover:bg-transparent hover:text-[#000]  hover:border-black">Apply to be a performer</button>
				</div>
			</div>
		</div>
	);
};
