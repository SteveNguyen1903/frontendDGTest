import React from "react";
import { BFWF_logo_white, Bayside_logo_white } from "../../assets";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";

export const Footer = () => {
	return (
		<div className="w-full text-white bg-black p-4 py-12">
			<div className="container mx-auto flex flex-col md:flex-row">
				<div className="flex flex-row gap-2 md:w-1/3">
					<img src={Bayside_logo_white} className="h-[60px]" />
					<div className={`w-[1px] h-[60px] ${"bg-white"}`}></div>
					<img src={BFWF_logo_white} className="h-[60px]" />
				</div>
				<div className="flex flex-col mt-4 md:mt-0 md:flex-row md:gap-[6.75rem] md:w-2/3">
					<div className="flex flex-col gap-2 font-semibold">
						<div>Drink</div>
						<div>Eat</div>
						<div>Buy</div>
						<div>FAQs</div>
					</div>
					<div className="mt-8 md:mt-0">
						<div className="font-bold text-[18px] mb-4">Contact details</div>
						<div className=" flex flex-row items-start mt-4 ">
							<div className="">
								<FaMapMarkerAlt />
							</div>
							<div className="ml-2 ">
								<div className="">
									PO Box 21 <br /> Rockdale NSW 2216
								</div>
							</div>
						</div>
						<div className=" flex flex-row items-start mt-4 ">
							<div className="">
								<FaPhoneAlt />
							</div>
							<div className="ml-2 ">
								<div className="">(02) 1300 581 299</div>
							</div>
						</div>
						<div className=" flex flex-row items-start mt-4 ">
							<div className="">
								<FaRegEnvelope />
							</div>
							<div className="ml-2 ">
								<div className="">events@bayside.nsw.edu.au</div>
							</div>
						</div>
					</div>
					<div className="mt-8 md:mt-0">
						<div className="font-bold text-[18px] mb-4">Festival details</div>
						<div className=" flex flex-row items-start">
							<div className="">
								<FaCalendarAlt />
							</div>
							<div className="ml-2 ">
								<div className="">Sat 05 Nov 2023</div>
							</div>
						</div>
						<div className=" flex flex-row items-start pt-4">
							<div className="">
								<FaClock />
							</div>
							<div className="ml-2 ">
								<div className="">11 am - 9 pm</div>
							</div>
						</div>
						<div className=" flex flex-row items-start pt-4">
							<div className="">
								<FaMapMarkerAlt />
							</div>
							<div className="ml-2 ">
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
