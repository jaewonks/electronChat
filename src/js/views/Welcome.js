import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import LoadingView from '../components/shared/LoadingView';

export default () => {
  const [isLogin, setIsLogin] = useState(true);
  const user = useSelector(({auth}) => auth.user);
  const isChecking = useSelector(({auth}) => auth.isChecking);

  const optInText = isLogin ? ['Need an account?', 'Register'] : ['Already registered?', 'Login'];
  
  if (isChecking) {
    return <LoadingView />
  }
  if (user) {
    return <Redirect to='/home' />
  }
  return (
    <div className="centered-view">
    <div className="centered-container">
      { isLogin ? <LoginForm /> : <RegisterForm /> }
      <small className="form-text text-muted mt-2">{optInText[0]}
        <span
          onClick={() => setIsLogin(!isLogin)}
          className="btn-link ml-2">{optInText[1]}</span>
      </small>
    </div>
  </div>
  )
}