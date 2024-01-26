import client from "../../api/client";

export const getCatalog = (page, pageSize) => (dispatch) => {
    dispatch({
        type: GET_CATALOG_BEGIN,
    });
    return client({
        method: "GET",
        url: `/api/v1/catalog?page=${page}&pageSize=${pageSize}`,
    })
        .then((res) => {
            dispatch({
                type: GET_CATALOG_SUCCESS,
                payload: res,
            });
            return res;
        })
        .catch((error) => {
            dispatch({
                type: GET_CATALOG_FAIL,
                payload: { error },
            });
            return error;
        });
};

export const getCatalogDetail = (catalogId) => (dispatch) => {
    dispatch({
        type: GET_CATALOG_DETAIL_BEGIN,
    });
    return client({
        method: "GET",
        url: `/api/v1/catalog/${catalogId}`,
    })
        .then((res) => {
            dispatch({
                type: GET_CATALOG_DETAIL_SUCCESS,
                payload: res,
            });
            return res;
        })
        .catch((error) => {
            dispatch({
                type: GET_CATALOG_DETAIL_FAIL,
                payload: { error },
            });
            return error;
        });
};

export const applyService = (data) => (dispatch) => {
    dispatch({
        type: GET_CATALOG_APPLY_BEGIN,
    });
    return client({
        method: "POST",
        url: `/api/v1/catalog/applycard`,
        data: data,
    })
        .then((res) => {
            dispatch({
                type: GET_CATALOG_APPLY_SUCCESS,
                payload: res,
            });
            return res;
        })
        .catch((error) => {
            dispatch({
                type: GET_CATALOG_APPLY_FAIL,
                payload: { error },
            });
            return error;
        });
};

export const getOfferByCategory = (category) => (dispatch) => {
    dispatch({
        type: GET_CATALOG_BEGIN,
    });
    return client({
        method: "GET",
        url: `/api/v1/Catalog/category/${category}`,
    })
        .then((res) => {
            dispatch({
                type: GET_CATALOG_SUCCESS,
                payload: res,
            });
            return res;
        })
        .catch((error) => {
            dispatch({
                type: GET_CATALOG_FAIL,
                payload: { error },
            });
            return error;
        });
};



export const GET_CATALOG_BEGIN = "GET_CATALOG_BEGIN";
export const GET_CATALOG_SUCCESS = "GET_CATALOG_SUCCESS";
export const GET_CATALOG_FAIL = "GET_CATALOG_FAIL";

export const GET_CATALOG_DETAIL_BEGIN = "GET_CATALOG_DETAIL_BEGIN";
export const GET_CATALOG_DETAIL_SUCCESS = "GET_CATALOG_DETAIL_SUCCESS";
export const GET_CATALOG_DETAIL_FAIL = "GET_CATALOG_DETAIL_FAIL";

export const GET_CATALOG_APPLY_BEGIN = "GET_CATALOG_APPLY_BEGIN";
export const GET_CATALOG_APPLY_SUCCESS = "GET_CATALOG_APPLY_SUCCESS";
export const GET_CATALOG_APPLY_FAIL = "GET_CATALOG_APPLY_FAIL";