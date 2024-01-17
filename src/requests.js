const requests = {
    fetchTrending: `/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&languages=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,

    // Movie genres
    fetchActionMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`,
    fetchAdventureMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=12`,
    fetchAnimationMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=16`,
    fetchComedyMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`,
    fetchCrimeMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=80`,
    fetchDocumentaryMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`,
    fetchDramaMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=18`,
    fetchFamilyMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10751`,
    fetchFantasyMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=14`,
    fetchHistoryMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=36`,
    fetchHorrorMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`,
    fetchMusicMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10402`,
    fetchMysteryMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=9648`,
    fetchRomanceMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10749`,
    fetchScienceFictionMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=878`,
    fetchTVMovie: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10770`,
    fetchThrillerMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=53`,
    fetchWarMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10752`,
    fetchWesternMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=37`,

    // TV show genres
    fetchActionAdventureTV: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10759`,
    fetchAnimationTV: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=16`,
    fetchComedyTV: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`,
    fetchCrimeTV: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=80`,
    fetchDocumentaryTV: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`,
    fetchDramaTV: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=18`,
    fetchFamilyTV: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10751`,
    fetchKidsTV: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10762`,
    fetchMysteryTV: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=9648`,
    fetchNewsTV: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10763`,
    fetchRealityTV: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10764`,
    fetchSciFiFantasyTV: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10765`,
    fetchSoapTV: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10766`,
    fetchTalkTV: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10767`,
    fetchWarPoliticsTV: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10768`,
    fetchWesternTV: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=37`
}

export default requests;
