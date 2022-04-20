import Axios from 'axios'
import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from '../constants/userConstants'

export const register = (username, email, password) => async (dispatch) => {
    dispatch({
        type: USER_REGISTER_REQUEST,
        payload: { email, password }
    });
    try {
        const {data} = await Axios.post(
            'api/users/register',
            {username, email, password}
        );
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data,
        });
        dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: data,
        });
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:
                error.respone && error.respone.data.message
                ? error.respone.data.message 
                : error.message,
        })
        console.log(error);
    }
};

export const signin = (email, password) => async (dispatch) => {
    dispatch({
        type: USER_SIGNIN_REQUEST,
        payload: { email, password }
    });
    try {
        const {data} = await Axios.post('api/users/signin', {email, password});
        dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: data,
        })
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload:
                error.respone && error.respone.data.message
                ? error.respone.data.message 
                : error.message,
        })
        console.log(error);
    }
};

export const signout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('cartItems');
    localStorage.removeItem('shippingAddress');
    dispatch({
        type: USER_SIGNOUT,
    })
}