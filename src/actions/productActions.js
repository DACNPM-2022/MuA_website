import Axios from "axios";
import { 
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST, 
    PRODUCT_DETAILS_SUCCESS, 
    PRODUCT_LIST_FAIL, 
    PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants"

// get list of product
export const listProduct = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST
    });
    try {
        const { data } = await Axios.get('/api/products');
        dispatch({ 
            type: PRODUCT_LIST_SUCCESS, 
            payload: data,
        });
    } catch (error) {
        dispatch({ 
            type: PRODUCT_LIST_FAIL,
            payload: error.message,
        })
    }
}

// get product details
export const detailsProduct = (id) => async (dispatch) => {
    dispatch({
        type: PRODUCT_DETAILS_REQUEST,
        payload: id,
    });
    try {
        const { data } = await Axios.get(`/api/products/${id}`);
        console.log(data);
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload:
                error.respone && error.respone.data.message
                    ? error.respone.data.message 
                    : error.message,
        });
    }
} 