import React from 'react';
import { Provider } from 'react-redux';
import Home from './views/Home';
import Navbar from './components/Navbar';
import Settings from './views/Settings';
import Welcome from './views/Welcome';
import Chat from './views/Chat';
import { configureStore } from './store';
import { 
  HashRouter as Router,
  Switch,
  Route
 } from 'react-router-dom';

 const store = configureStore();
 export default () => {
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