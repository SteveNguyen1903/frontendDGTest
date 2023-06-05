import React from "react";
import { Bayside_logo_white, Bayside_logo_color, BFWF_logo_white, BFWF_logo_color } from "../../assets";
import { GrMenu } from "react-icons/gr";
import { useState, useRef, useEffect } from "react";
import { MdEmojiPeople } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { FaAngleRight, FaAngleLeft, FaSearch } from "react-icons/fa";
const menu = [
	{
		title: "Food & wine",
		subMenu: [{ title: "About the festival" }, { title: "Drink" }, { title: "Eat" }, { title: "Buy" }, { title: "Apply to be a stallholder" }],
	},
	{
		title: "Things to do",
		subMenu: [{ title: "Drink" }, { title: "Eat" }, { title: "Buy" }, { title: "Apply to be a stallholder" }],
	},
	{
		title: "FAQs",
		subMenu: [],
	},
	{
		title: "Contact Us",
		subMenu: [],
	},
];

export const NavbarMobile = () => {
	const [isShown, setIsShown] = useState(-1);
	const [isSubShown, setIsSubShown] = useState(false);
	const [isSearchShown, setIsSearchShown] = useState(false);

	console.log(isShown);

	return (
		<div className="w-full flex flex-col fixed bg-white z-10 font-bold">
			<div className="flex flex-row justify-between p-4 py-4 border-b-2">
				<div className="flex flex-row gap-4">
					<img src={Bayside_logo_color} className="h-[50px]" />
					<div className={`w-[1px] h-[50px] ${"bg-black"}`}></div>
					<img src={BFWF_logo_color} className="h-[50px]" />
				</div>
				{!isSubShown && !isSearchShown && (
					<div className=" flex flex-row gap-4 items-center">
						<GrMenu className="text-[25px]" onClick={() => setIsSubShown(true)} />
						<MdEmojiPeople className="text-[25px]" />
						<FaSearch className="text-[25px]" onClick={() => setIsSearchShown(true)} />
					</div>
				)}

				{(isSubShown || isSearchShown) && (
					<div className=" flex flex-row gap-4 items-center">
						<RxCross2
							className="text-[25px]"
							onClick={() => {
								setIsSubShown(false), setIsSearchShown(false);
							}}
						/>
					</div>
				)}
			</div>

			{isShown === -1 && isSubShown && (
				<div className="flex flex-col divide-y">
					{menu.map((item, index) => (
						<div className="p-4 flex flex-row justify-between" onClick={() => (item.subMenu.length > 0 ? setIsShown(index) : setIsShown(-1))}>
							{item.title} {item.subMenu.length > 0 && <FaAngleRight />}
						</div>
					))}
				</div>
			)}

			{isShown !== -1 && isSubShown && (
				<div className="flex flex-col divide-y">
					<div className="p-4 flex flex-row items-center gap-4" onClick={() => setIsShown(-1)}>
						<FaAngleLeft /> Back
					</div>
					<div className="p-4 bg-yellow-500">{menu[isShown].title}</div>
					{menu.map((item, index) => item.subMenu.length > 0 && isShown === index && item.subMenu.map((subItem) => <div className="p-4">{subItem.title}</div>))}
				</div>
			)}

			{isSearchShown && (
				<div className="">
					<label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
						Search
					</label>
					<div className="relative w-full">
						<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="#F9C302" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
							</svg>
						</div>
						<input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300  bg-gray-50 " placeholder="What are you looking for" required />
					</div>
				</div>
			)}
		</div>
	);
};
