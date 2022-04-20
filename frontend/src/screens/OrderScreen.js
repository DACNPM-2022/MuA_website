import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createOrder } from '../actions/orderAction';
import CheckoutSteps from '../components/CheckoutSteps'
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { ORDER_CREATE_RESET } from '../constants/orderConstants';

export default function OrderScreen() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const orderCreate = useSelector(state => state.orderCreate);

    const {loading, error, success, order } = orderCreate;

    const toPrice = (num) => Number(num.toFixed(2));
    cart.itemsPrice = toPrice(cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0));
    cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(100);
    cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
    cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

    const orderHandler = (e) => {
        e.preventDefault();
        dispatch(createOrder({...cart, orderItems: cart.cartItems}));
    }
    
    useEffect(() => {
        if(!cart.paymentMethod) {
            navigate('/payment');
        }
        if(success) {
            navigate(`/orders/${order._id}`);
            dispatch({type: ORDER_CREATE_RESET})
        }
    }, [navigate, dispatch, cart.paymentMethod, success, order]);
    return (
    <div>
        <CheckoutSteps step1 step2 step3 step4/>
        <div className="row top">
            <div className="col-2">
                <ul>
                    <li>
                        <div className="card card-body">
                            <h2>Shipping</h2>
                            <p>
                                <strong>Name: </strong>{cart.shippingAddress.fullName} <br/>
                                <strong>Address: </strong>
                                    {cart.shippingAddress.address},
                                    {cart.shippingAddress.city},
                                    {cart.shippingAddress.country}
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="card card-body">
                            <h2>Payment</h2>
                            <p>
                                <strong>Method: </strong>{cart.paymentMethod}
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="card card-body">
                            <h2>Order Items</h2>
                            <ul>
                                {cart.cartItems.map((item) => (
                                <li key={item.product}>
                                    <div className="row">
                                    <div>
                                        <img
                                        src={item.image}
                                        alt={item.name}
                                        className="small"
                                        ></img>
                                    </div>
                                    <div className="min-30">
                                        <Link to={`/products/${item.product}`}>{item.name}</Link>
                                    </div>
                                    <div>{item.qty} x ${item.price} = ${item.qty * item.price}</div>
                                    </div>
                                </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li>
                            <h2>Order Summary</h2>
                        </li>
                        <li>
                            <div className="row">
                                <div>Items</div>
                                <div>${cart.itemsPrice}</div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div>Shipping</div>
                                <div>${cart.shippingPrice.toFixed(2)}</div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div>Tax</div>
                                <div>${cart.taxPrice.toFixed(2)}</div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div><strong>Order Totals</strong></div>
                                <div><strong>${cart.totalPrice.toFixed(2)}</strong></div>
                            </div>
                        </li>
                        <li>
                            <button 
                                type="button" 
                                onClick={orderHandler} 
                                className="primary block" 
                                disabled={cart.cartItems.length === 0}
                            >
                                Place Order
                            </button>
                        </li>
                        {loading && <LoadingBox />}
                        {error && <MessageBox variant="danger">{error}</MessageBox>}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
