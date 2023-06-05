import { apiSlice } from "../apiSlice";

const endPointUrl = "https://tmdb-one-blue.vercel.app/";

const moviesApiSlice = apiSlice.injectEndpoints({
	endpoints: (build) => ({
		getActorMovies: build.query({
			query: (name) => ({
				url: endPointUrl,
				method: "POST",
				body: {
					query:
						`
					{
						searchPerson(query:"` +
						name +
						`" ,page:1) {
						total_results,
						total_pages,
						results {
							cast {
								id,
								title,
								original_title,
								poster_path
								}
							}
						}
					}
					`,
				},
			}),
			transformResponse: (response) => response,
		}),
	}),
});

export const { useGetActorMoviesQuery } = moviesApiSlice;
