import ResponsesUtils from '../utils/responses.utils.js'

class MovieController {

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    searchMovie = async (req, res, next) => {
        try {
            const searchParams = req.params.searchparams;
            return ResponsesUtils.sendSuccessResponse(res, 200, {});
        } catch (error) {
            return ResponsesUtils.sendFailureError(res, 404, { error: "No Open Shifts available" });
        }

    }
}

export default MovieController;
