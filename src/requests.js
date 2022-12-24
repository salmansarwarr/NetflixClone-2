// const key = "ffe09cd8889bf73c71c78352fd5966e3"
const key = "ffe09cd8889bf73c71c78352fd5966e3"

const requests = {
    fetchTrending: `/trending/all/week?api_key=${key}&language=en-US`,
    fetchNetflixOrignals: `/discover/tv?api_key=${key}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${key}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${key}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${key}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${key}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${key}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${key}&with_genres=99`,
}

export default requests