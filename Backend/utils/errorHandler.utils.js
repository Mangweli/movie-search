import ResponsesUtils from './responses.utils.js';

const response = new ResponsesUtils();

export default (err, req, res, next) => {
    return response.sendFailureError(res, 500, { error: 'Something went wrong', stack: err.stack });
}
