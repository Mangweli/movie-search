import ResponsesUtils from '../utils/responses.utils.js'

const response = new ResponsesUtils();
export const serviceHealth = (req, res) => {
    response.sendSuccessResponse(res, 200, 'Movie Service: Okay')
}