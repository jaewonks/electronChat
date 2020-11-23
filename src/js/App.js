import React from 'react';
import Home from './views/Home';
import Navbar from './components/Navbar';
import Settings from './views/Settings';
import Login from './views/Login';
import Register from './views/Register';
import Chat from './views/Chat';
import { 
  HashRouter as Router,
  Switch,
  Route
 } from 'react-router-dom';

 export default () => {
  return (
    <Router>
      <Navbar />
      <div className='content-wrapper'>
      <Switch>
        <Route path='/' exact ><Home /></Route>
        <Route path='/settings'><Settings /></Route>
        <Route path='/login'><Login /></Route>
        <Route path='/register'><Register /></Route>
        <Route path='/chat/:id'><Chat /></Route>
      </Switch>
      </div>
    </Router>
  )
} 