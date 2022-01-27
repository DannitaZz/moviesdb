const axios = require('axios');
const apiKey = 'b255d9222d1065e80698fcf916666c7c';
const baseUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
const url = 'https://api.themoviedb.org/3/discover/movie?api_key=b255d9222d1065e80698fcf916666c7c&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'

module.exports = {

    getMovies: async (req, res) => {
        try {
            const response = await axios.get(url);
            /* console.log(response.data); */
            res.json(response.data);
        } catch (err) {
            console.error(err)
        }
    }

}