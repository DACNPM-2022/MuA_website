import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../actions/userActions'
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function RegisterScreen() {
    const [ username, setUsername ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const redirect = location.search.split('=')[1];

    const userRegister = useSelector(state => state.userRegister);
    const { userInfo, loading, error } = userRegister;
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        if(password !== confirmPassword) {
            alert('Password and confirm password are not match');
        }
        else {
            dispatch(register(username, email, password));
        }
    }

    useEffect(() => {
        if(userInfo) {
            if(redirect)
                navigate(`/${redirect}`);
            else
                navigate('/')
        }
    }, [navigate, userInfo, redirect]);

    return (
    <div>
        <form className="form" onSubmit={submitHandler}>
            <div>
                <h1>Create account</h1>
            </div>
            {loading && <LoadingBox />}
            {error && <MessageBox variant="danger">{error}</MessageBox>}
            <div>
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    id="username" 
                    placeholder="Enter username" 
                    required
                    onChange={(e) => setUsername(e.target.value)} 
                ></input>
            </div>
            <div>
                <label htmlFor="email">Email Address</label>
                <input 
                    type="email" 
                    id="email" 
                    placeholder="Enter email" 
                    required
                    onChange={(e) => setEmail(e.target.value)} 
                ></input>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    placeholder="Enter password" 
                    required
                    onChange={(e) => setPassword(e.target.value)} 
                ></input>
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm password</label>
                <input 
                    type="password" 
                    id="confirmPassword" 
                    placeholder="Confirm password" 
                    required
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                ></input>
            </div>
            <div>
                <label />
                <button className="primary" type="submit">
                    Register
                </button>
            </div>
            <div>
                <label />
                <div className="primary" type="submit">
                    Already have an account?
                    <Link to={`/signin?redirect=${redirect}`}>Sign in</Link>
                </div>
            </div>
        </form>
    </div>
  )
}
