import React from 'react';
import { Link, useHistory } from 'react-router-dom';

export default () => {
  const history = useHistory();
  return (
    <div className="chat-navbar">
    <nav className="chat-navbar-inner">
      <div className="chat-navbar-inner-left">
        <button
          onClick={() => history.goBack()}
          className='btn btn-outline-primary'
        >Back</button>
        <Link 
          to="/settings" 
          className="btn btn-outline-success ml-2">Settings</Link>
      </div>
      <div className="chat-navbar-inner-right">
        <span className="logged-in-user">Hi User</span>
        <Link 
          to="/" 
          className="btn btn-outline-success ml-2">Login</Link>  
        <button
          onClick = {() => {}}
          className="btn btn-outline-danger ml-2">Logout</button>
      </div>
    </nav>
  </div>
  )
}