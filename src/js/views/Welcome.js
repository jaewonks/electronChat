import React from 'react';
import LoginForm from '../components/LoginForm';

export default () => {
  return (
    <div className="centered-view">
    <div className="centered-container">
      <LoginForm />
      <small className="form-text text-muted mt-2">Already registered?
        <span
          onClick={() => {}}
          className="btn-link ml-2">Login</span>
      </small>
    </div>
  </div>
  )
}