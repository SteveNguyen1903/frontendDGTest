import { useState } from "react";

import "./App.css";
import Search from "./components/search/Search";
import { Navbar } from "./components/navbar/Navbar";
import { NavbarMobile } from "./components/navbar/NavbarMobile";
import { Hero } from "./components/home/Hero";
import { StallSection } from "./components/home/StallSection";
import { ToDo } from "./components/home/ToDo";
import { Map } from "./components/home/Map";
import { Detail } from "./components/home/Detail";
import { Experience } from "./components/home/Experience";
import { Footer } from "./components/home/Footer";

function App() {
	return (
		<div className="m-auto">
			<div className="hidden lg:flex">
				<Navbar />
			</div>
			<div className="flex lg:hidden">
				<NavbarMobile />
			</div>
			<Hero />
			<StallSection />
			<ToDo />
			<Map />
			<Detail />
			<Experience />
			<Footer />
		</div>
	);
}

export default App;
