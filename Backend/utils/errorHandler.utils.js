import { sendFailureError } from './responses.utils';

export default (err, req, res, next) => {
    return sendFailureError(res, 500, { error: 'Something went wrong' });
}
