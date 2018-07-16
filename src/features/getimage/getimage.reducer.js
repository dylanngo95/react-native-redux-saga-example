import ImageTypes from "./getimage.types";
import { } from 'react-native';

const initState = {
    fetch: false,
    error: null,
    url: null,
};

export const ImageReducer = (state = initState, action) => {
    switch (action.type) {
        case ImageTypes.API_CALL_REQUEST:
            return { ...state, fetch: action.fetch, error: null, }
        case ImageTypes.API_CALL_REQUEST_ERROR:
            return { ...state, fetch: action.fetch, error: null, }
        case ImageTypes.API_CALL_SUCCESS:
            return { ...state, fetch: action.fetch, url: action.url }
        case ImageTypes.API_CALL_FAILURE:
            return { ...state, fetch: action.fetch, error: action.error }
        default:
            return state;
    }
}