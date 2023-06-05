import React from "react";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

export const Map = () => {
	return (
		<div className="h-full md:bg-[url('/src/assets/home/map.png')] bg-conver bg-center">
			<div className="w-full md:container flex flex-col mx-auto md:p-4 md:py-8 relative md:min-h-[550px]">
				<div className="md:absolute md:mt-[-50px]">
					<div className="w-full md:max-w-[320px] bg-[#F9C302] p-4 md:p-8">
						<div className="font-bold text-[20px]">Where to find us</div>
						<div className="">The Bayside Food & Wine festival will be held Saturday 5 November, set amidst the beautiful gardens in Mascot Memorial Park at the corner of Botany Road and Coward Street, Mascot.</div>
						di
					</div>
					<div className="w-full p-4 md:p-8 md:max-w-[320px] bg-[#000] text-white ">
						<div className=" flex flex-row items-start">
							<div className="mt-2">
								<FaCalendarAlt />
							</div>
							<div className="ml-2 ">
								<div className="font-bold text-[20px]">When</div>
								<div className="">Sat 05 Nov 2023</div>
							</div>
						</div>
						<div className=" flex flex-row items-start pt-4">
							<div className="mt-2">
								<FaClock />
							</div>
							<div className="ml-2 ">
								<div className="font-bold text-[20px]">Time</div>
								<div className="">11 am - 9 pm</div>
							</div>
						</div>
						<div className=" flex flex-row items-start pt-4">
							<div className="mt-2">
								<FaMapMarkerAlt />
							</div>
							<div className="ml-2 ">
								<div className="font-bold text-[20px]">Where</div>
								<div className="">
									Mascot Memorial Park, <br />
									Mascot NSW
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
