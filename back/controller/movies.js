const request = require('request');
const axios = require('axios');
const apiKey = 'b255d9222d1065e80698fcf916666c7c';

module.exports = {

    getMovies: async (req, res) => {
        try {
            
            const page = req.params.pageId
            console.log(page)
            const baseUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`;
            const response = await axios.get(baseUrl);
            res.json(response.data.results);
        } catch (err) {
            console.error(err)
        }
    },
    getMovieImg: async (req, res) => {
        try {
            const imageId = req.params.imageId
            url = `https://image.tmdb.org/t/p/w500/${imageId}`
            request(url).pipe(res);
        } catch (err) {
            console.error(err)
        }
    }

}