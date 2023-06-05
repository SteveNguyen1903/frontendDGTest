const Result = ({ movies }) => {
	return (
		<div className="flex mt-10 w-full flex-wrap items-start">
			{movies.map((movie) => {
				return (
					<>
						<div key={movie.id} className="flex flex-col max-w-[200px] p-2">
							{movie.poster_path ? <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} /> : <img src={`https://placehold.co/200x300`} />}
							<div className="mt-1">{movie.title}</div>
						</div>
					</>
				);
			})}
		</div>
	);
};

export default Result;
