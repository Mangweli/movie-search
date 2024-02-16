import rateLimit from 'express-rate-limit';
import ResponsesUtils from './responses.utils.js';

const response = new ResponsesUtils();

export default rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 100,
    handler: (req, res) => {
        response.sendFailureError(res, 429, { error: "Too many requests, please try again later." })
    }
});