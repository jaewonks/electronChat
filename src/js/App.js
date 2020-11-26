import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import Home from './views/Home.js';
import Navbar from './components/Navbar.js';
import Settings from './views/Settings.js';
import Welcome from './views/Welcome.js';
import Chat from './views/Chat.js';
import { configureStore } from './store';
import { listenToAuthChanges } from './actions/auth'
import { HashRouter as Router,
  Switch,
  Route
 } from 'react-router-dom';

 const store = configureStore();

 export default () => {

  useEffect(() => {
    store.dispatch(listenToAuthChanges());
  }, [])
  return (
  <Provider store={store} >
    <Router>
      <Navbar />
      <div className='content-wrapper'>
      <Switch>
        <Route path='/' exact ><Welcome /></Route>
        <Route path='/home'><Home /></Route>
        <Route path='/settings'><Settings /></Route>
        <Route path='/chat/:id'><Chat /></Route>
      </Switch>
      </div>
    </Router>
  </Provider>    
  )
} 