import ImageTypes from "./getimage.types";

export const FetchImage = () => {
    return {
        type: ImageTypes.API_CALL_REQUEST,
        fetch: true,
    }
};

export const FetchImageError = () => {
    return {
        type: ImageTypes.API_CALL_REQUEST_ERROR,
        fetch: true,
    }
};

export const FetchApiFailure = (error) => {
    return {
        type: ImageTypes.API_CALL_FAILURE,
        error: error,
        fetch: false,
    }
};

export const FetchApiSuccess = (url) => {
    return {
        type: ImageTypes.API_CALL_SUCCESS,
        url: url,
        fetch: false,
    }
};
