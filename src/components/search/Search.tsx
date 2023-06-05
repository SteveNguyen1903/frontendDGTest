import { useState, useEffect } from "react";
import Result from "./Result";
import { useGetActorMoviesQuery } from "../../redux/api/movies/moviesApiSlice";

const Search = () => {
	const { data } = useGetActorMoviesQuery("tom cruise");
	const [movieData, setMovieData] = useState();
	const [searchList, setSearchList] = useState([]);
	const [searchInput, setSearchInput] = useState("");

	//set the initial movies data
	useEffect(() => {
		if (data) {
			const movies = [...data.data.searchPerson.results[0].cast, ...data.data.searchPerson.results[1].cast];
			setMovieData((prev) => movies.filter((movie) => movie.title !== null));
		}
	}, [data]);

	//set the search list function
	useEffect(() => {
		const typeDelay = setTimeout(() => {
			if (searchInput?.length > 0) {
				setSearchList(
					movieData.filter((movie) => {
						return movie.title.toLowerCase().includes(searchInput.toLowerCase());
					})
				);
			} else {
				setSearchList(movieData);
			}
		}, 300);

		return () => clearTimeout(typeDelay);
	}, [searchInput]);

	return (
		<>
			<div className="container flex flex-col m-auto">
				<div className="w-[400px] mx-auto mt-10">
					<label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
						Search
					</label>
					<div className="relative w-full">
						<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
							</svg>
						</div>
						<input
							type="search"
							id="default-search"
							value={searchInput}
							onChange={(e) => {
								setSearchInput(e.target.value);
							}}
							className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Search Tom Cruise movies..."
							required
						/>
					</div>
				</div>

				{movieData ? <Result movies={searchList ? searchList : movieData} /> : <div className="mt-10">"Loading data ..."</div>}
			</div>
		</>
	);
};

export default Search;
