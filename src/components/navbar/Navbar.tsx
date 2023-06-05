import React from "react";
import { useState, useRef, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Bayside_logo_white, Bayside_logo_color, BFWF_logo_white, BFWF_logo_color } from "../../assets";
import { FaSearch, FaAngleDown } from "react-icons/fa";
import { MdEmojiPeople } from "react-icons/md";

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

export const Navbar = () => {
	const [isShown, setIsShown] = useState(-1);
	const [scrolled, setScrolled] = useState(false);
	const [isSearch, setIsSearch] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 200) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const menuStyle = {
		position: "fixed",
		top: 0,
		left: 0,
		width: "100%",
		height: "60px",
		backgroundColor: scrolled ? "#000" : "linear-gradient(rgba(0,0,0,0.2),transparent)",
		transition: "background-color 0.3s ease",
		zIndex: 10,
	};

	return isSearch ? (
		<motion.div className="fixed h-full w-full z-10 ">
			<div className="h-full w-full  bg-black/90 absolute" onClick={() => setIsSearch(false)}></div>
			<div className="container mx-auto mt-10 absolute m-auto left-0 right-0 z-10">
				<label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
					Search
				</label>
				<div className="relative w-full">
					<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
						<svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="#F9C302" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
						</svg>
					</div>
					<input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 " placeholder="What are you looking for" required />
				</div>
			</div>
		</motion.div>
	) : (
		<motion.div
			style={{
				position: "fixed",
				background: scrolled ? "#fff" : "linear-gradient(rgba(0,0,0,0.2),transparent)",
				transition: "background-color 0.3s ease",
			}}
			className="w-full z-[100]">
			<div className="container flex flex-row m-auto h-[75px] items-center justify-between ">
				<div className="flex flex-row items-center">
					<div className="flex flex-row gap-x-8">
						<img src={scrolled ? Bayside_logo_color : Bayside_logo_white} className="h-[60px]" />
						<div className={`w-[1px] h-[60px] ${scrolled ? "bg-black" : "bg-white"}`}></div>
						<img src={scrolled ? BFWF_logo_color : BFWF_logo_white} className="h-[60px]" />
					</div>
					<div className={`ml-12 flex flex-row gap-4 gap-x-8 font-bold ${scrolled ? "text-[#000]" : "text-[#fff]"}`}>
						{menu.map((item, index) => {
							return (
								<div className="relative cursor-pointer" onMouseEnter={() => setIsShown(index)} key={item.title}>
									<div className="flex flex-row items-center gap-2">
										{item.title} {item.subMenu.length > 0 && <FaAngleDown />}
									</div>
									<div className={`absolute flex flex-col gap-2 mt-4 px-2 divide-y ${scrolled && "bg-white"}`} onMouseLeave={() => setIsShown(-1)}>
										{item.subMenu.length > 0 &&
											isShown === index &&
											item.subMenu.map((subItem) => (
												<div className={`cursor-pointer ${scrolled && "bg-white"}`} key={subItem.title}>
													{subItem.title}
												</div>
											))}
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<div className="flex flex-row gap-4 text-[#295495]">
					<div className={`rounded-sm ${scrolled ? "bg-[#9CD3CB]" : "bg-white"} p-2 px-4 cursor-pointer flex items-center gap-2`}>
						<MdEmojiPeople />
						Listen & translate
					</div>
					<div className={`flex rounded-sm ${scrolled ? "bg-[#9CD3CB]" : "bg-white"} p-2 px-3 cursor-pointer items-center `} onClick={() => setIsSearch(true)}>
						<FaSearch />
					</div>
				</div>
			</div>
		</motion.div>
	);
};
