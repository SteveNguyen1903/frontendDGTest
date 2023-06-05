import React from "react";

export const Hero = () => {
	return (
		<div className="flex flex-col">
			<div className="w-full min-h-[720px] 2xl:min-h-[920px] h-full bg-[url('/src/assets/home/heroBg.png')] bg-cover bg-center flex items-end">
				<div className="w-full" style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 100%)" }}>
					<div className="container mx-auto md:grid md:grid-cols-4 gap-4 p-4">
						<div className="md:col-span-3 md:p-0 p-4 text-white max-w-[600px] mb-[80px] ">
							<div className="">
								<h1 className="text-[46px] font-bold">Great food & wine</h1>
							</div>
							<div className="text-[20px] mt-4">Join us for the Bayside Food & Wine Festival, a relaxed afternoon having a drink, tasting the culinary delights on offer and enjoying live music!</div>
							<button className="mt-4 px-4 py-2 bg-[#F9C302] text-[#000] font-semibold border-[#F9C302] border-[1px] hover:bg-transparent hover:text-[#fff]  hover:border-white">About the festival</button>
						</div>
						<div className="hidden md:flex md:col-span-1 relative">
							<div className="md:absolute md:min-w-[260px] mt-[60px]">
								<div className="font-bold text-[24px] bg-[#F9C302] p-4">
									Sartuday <br /> 05 Nov 2023 <br /> 11 am - 9 pm
								</div>
								<div className="font-bold text-[24px] bg-[#000] p-4 text-[#fff]">
									Mascot <br /> Memorial Park, <br /> Mascot NSW
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex w-full md:hidden">
				<div className="w-full">
					<div className="font-bold text-[24px] bg-[#F9C302] p-4">
						Sartuday <br /> 05 Nov 2023 <br /> 11 am - 9 pm
					</div>
					<div className="font-bold text-[24px] bg-[#000] p-4 text-[#fff]">
						Mascot <br /> Memorial Park, <br /> Mascot NSW
					</div>
				</div>
			</div>
		</div>
	);
};
