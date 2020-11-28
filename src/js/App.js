import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StoreProvider from './store/StoreProvider';
import Home from './views/Home.js';
import Settings from './views/Settings.js';
import Welcome from './views/Welcome.js';
import Chat from './views/Chat.js';
import LoadingView from './components/shared/LoadingView.js';
import { listenToAuthChanges } from './actions/auth'
import { HashRouter as Router,
  Switch,
  Route,
  Redirect
 } from 'react-router-dom';

 const AuthRoute = ({children, ...rest}) => {
  const user = useSelector(({auth}) => auth.user);
  const onlyChild = React.Children.only(children);
  return (
    <Route
      {...rest}
      render={props => 
        user ? 
          React.cloneElement(onlyChild, {...rest, ...props}) : 
          <Redirect to='/' />
      }
    />  
  )
 }

const ContentWrapper = ({children}) => <div className='content-wrapper'>{children}</div>
const ChatApp = () => {
  const dispatch = useDispatch();
  const isChecking = useSelector(({auth}) => auth.isChecking)
  const alertOnlineStatus = () => {
    alert(navigator.online ? 'online' : 'offline')
  }

  useEffect(() => {
    const unsubFromAuth = dispatch(listenToAuthChanges());
    window.addEventListener('online', alertOnlineStatus);
    window.addEventListener('offline', alertOnlineStatus);

    return () => {
      unsubFromAuth();
      window.removeEventListener('online', alertOnlineStatus);
      window.removeEventListener('offline', alertOnlineStatus);
    }
  }, [dispatch])
  if (isChecking) {
    return <LoadingView />
  }
  return (
    <Router>
      <ContentWrapper>
      <Switch>
        <Route path='/' exact ><Welcome /></Route>
        <AuthRoute path='/home'><Home /></AuthRoute>
        <AuthRoute path='/settings'><Settings /></AuthRoute>
        <AuthRoute path='/chat/:id'><Chat /></AuthRoute>
      </Switch>
      </ContentWrapper>
    </Router>  
  )
} 

export default () => {
  return (
    <StoreProvider>
      <ChatApp />
    </StoreProvider>
  )
}