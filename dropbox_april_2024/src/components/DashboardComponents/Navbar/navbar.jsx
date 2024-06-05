import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUser } from "../../../redux/actionCreators/authActionCreators";
import './navbar.css';

const NavBar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector(state => state.auth);

  const handleLogout = () => {
    dispatch(signOutUser());
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-white shadow-sm p-3'>
      <Link className='navbar-brand ms-5' to='/dashboard'>
        File Management System
      </Link>
      <ul className='navbar-nav ms-auto me-5'>
        {isAuthenticated ? (
          <div className='d-flex align-items-center'>
            <li className='nav-item mx-2'>
              <p className='my-0 mt-1'>
                <span className='text-light'>Welcome, </span>
                <span className='fw-bold'>{user.displayName}</span>
              </p>
            </li>
            <li className='nav-item mx-2'>
              <Link className='btn btn-primary' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item mx-2'>
              <button className='btn btn-success' onClick={handleLogout}>
                Logout
              </button>
            </li>
          </div>
        ) : (
          <>
            <li className='nav-item mx-2'>
              <Link to='/login' className='btn btn-primary btn-sm'>
                Login
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/register' className='btn btn-success btn-sm'>
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
