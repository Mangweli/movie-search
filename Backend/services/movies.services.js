import config from '../config/settings.js'
import axios from 'axios';


class MoviesService {

    /**
     * Constructor to initialize the MovieController.
     */
    constructor() {
        this.url = config.IMDB_URL;
        this.key = config.IMDB_API_KEY;
    }

    /**
     * 
     * @param {*} searchParam 
     */
    searchMovies = async (searchParam) => {
        try {
            const results = await axios.get(`${this.url}${this.key}&s=${searchParam}`);
            return results;
        }
        catch(error) {
            throw new Error(error)
        }
    }
}

export default MoviesService