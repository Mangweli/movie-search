class ResponsesUtils {
    /**
     * Sends a success response to the client.
     * 
     * @param res - The express response.
     * @param data - The response data.
     */
    sendSuccessResponse = async (res, status, message, data = {})=> {
        const bodyData = {
            status: true,
            message: message,
            data: data || {}
        }

        res.status(status).json(bodyData);
    }

    /**
     * Sends a success response to the client.
     * 
     * @param res - The express response.
     * @param error - Failure Error.
     */

    sendFailureError = (res, status,  errors) => {
        const bodyData = {
            status : false,
            errors : errors || {}
        }
        res.status(status).json(bodyData);
    }

}

export default ResponsesUtils;
