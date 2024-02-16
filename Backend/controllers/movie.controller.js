import ResponsesUtils from '../utils/responses.utils.js'
import MoviesService from '../services/movies.services.js';

class MovieController {

    /**
     * Constructor to initialize the MovieController.
     */
    constructor() {
        this.response = new ResponsesUtils();
        this.movieService = new MoviesService();
    }

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    searchMovie = async (req, res, next) => {
        try {
            const searchParams = req.params.movietitle;
            const results =  await this.movieService.searchMovies(searchParams);

            if(!results) {
                return this.response.sendSuccessResponse(res, 300, {});
            }
            return this.response.sendSuccessResponse(res, 200, {}, results.data.Search);
        } catch (error) {
            next(error)
        }
    }
}

export default MovieController;
