import Axios from "axios"
import { CART_EMPTY } from "../constants/cartConstants";
import { ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS } from "../constants/orderConstants"

export const createOrder = (order) => async(dispatch, getState) => {
    dispatch({
        type: ORDER_CREATE_REQUEST,
        payload: order,
    })
    try {
        const {userSignin: {userInfo}} = getState();
        const {data} = await Axios.post('/api/orders', order, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        })
        dispatch({
            type: ORDER_CREATE_SUCCESS,
            payload: data.order,
        })
        dispatch({
            type: CART_EMPTY,
        })
        localStorage.removeItem('cartItems');
    } catch (error) {
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload: 
                error.respone && error.respone.message
                ? error.respone.data.message
                : error.message,
        })
    }
}

export const detailsOrder = (id) => async (dispatch, getState) => {
    dispatch({
        type: ORDER_DETAILS_REQUEST,
        payload: id,
    });

    const {userSignin: {userInfo}} = getState();

    try {
        const {data} = await Axios.get(`/api/orders/${id}`, {
            headers: { Authorization: `Bearer ${userInfo.token}`}
        });
        dispatch({
            type: ORDER_DETAILS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message = 
            error.message && error.respone.data.message
            ? error.respone.data.message
            : error.message;
        dispatch({
            type: ORDER_DETAILS_FAIL,
            payload: message,
        })
        
    }
}