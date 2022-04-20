import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Link ,useLocation ,Navigate } from "react-router-dom";
import { signout } from "./actions/userActions";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import SigninScreen from "./screens/SigninScreen";
import { AiFillCaretDown } from "react-icons/ai";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import PaymentScreen from "./screens/PaymentScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderDetailsScreen from "./screens/OrderDetailsScreen";
import Admin from "./screens/Admin/Admin";
import AdminLoginPage from "./screens/Admin/LoginAdminScreen/LoginAdminScreen";

function App() {
  return (
    <>
       <Routes>
         {/*------------------------------User----------------------------------*/}
        <Route path="/*" element={<UserApp />} />
        {/*------------------------------Admin----------------------------------*/}
        <Route path="/dashboard/login" element={<AdminLoginPage/>}></Route>
        <Route path="/dashboard/*" element={<Admin />} />
      </Routes>
    </>
  );
}
function UserApp() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();

  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <Link className="brand" to="/">
            MuA
          </Link>
        </div>
        <div>
          <Link to="/cart">
            Cart
            {cartItems.length > 0 && (
              <span className="badge">{cartItems.length}</span>
            )}
          </Link>
          {
            userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.username}
                  <AiFillCaretDown className="icon"/>
                </Link>
                <ul className="dropdown-content">
                  <Link 
                    to="#signout" 
                    onClick={signoutHandler}
                  >
                    Sign out
                  </Link>
                </ul>
              </div>
            ) : (
              <>
                <Link to="/signin">Sign in</Link>
                <Link to="/register">Register</Link>
              </>
            )
          }
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/cart/:id" element={<CartScreen />} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/signin" element={<SigninScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/shipping" element={<ShippingAddressScreen />} />
          <Route path="/payment" element={<PaymentScreen />} />
          <Route path="/orders" element={<OrderScreen />} />
          <Route path="/orders/:id" element={<OrderDetailsScreen />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </main>

      <footer className="row center">Contact us</footer>
    </div>
  );
}
function AdminApp() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Admin />} />
      </Routes>
    </>
  );
}
function RequireAuth({ children }) {
  let location = useLocation();

  if (localStorage.todoApp_accessToken) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/admin/login" state={{ from: location }} />;
  }

  return children;
}
export default App;