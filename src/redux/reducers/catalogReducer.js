import {
    GET_CATALOG_BEGIN,
    GET_CATALOG_SUCCESS,
    GET_CATALOG_FAIL,
    GET_CATALOG_DETAIL_BEGIN,
    GET_CATALOG_DETAIL_SUCCESS,
    GET_CATALOG_DETAIL_FAIL,
    GET_CATALOG_APPLY_BEGIN,
    GET_CATALOG_APPLY_SUCCESS,
    GET_CATALOG_APPLY_FAIL,
} from "../actions/catalogActions";

const initialState = {
    catalog: null,
    loading: false,
    error: null,
    catalogDetail: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CATALOG_BEGIN:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case GET_CATALOG_SUCCESS:
            return {
                ...state,
                loading: false,
                catalog: action.payload.data,
            };
        case GET_CATALOG_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload.error.response.data,
            };
        case GET_CATALOG_DETAIL_BEGIN:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case GET_CATALOG_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                catalogDetail: action.payload.data,
            };
        case GET_CATALOG_DETAIL_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload.error.response.data,
            };
        case GET_CATALOG_APPLY_BEGIN:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case GET_CATALOG_APPLY_SUCCESS:
            return {
                ...state,
                loading: false,
                catalogApply: action.payload.data,
            };
        case GET_CATALOG_APPLY_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload.error.response.data,
            };
        
        default:
            return state;
    }
};
