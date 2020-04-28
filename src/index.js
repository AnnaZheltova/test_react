import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App';
import UsersList from './components/UsersList';
import User from './components/User.js';


ReactDOM.render((
  <Router>
    <Route exact path="/" component={App} />
    <Route exact path="/userstatistics" component={UsersList} />
    <Route path="/user/:id" component={User}/>
  </Router>

), document.getElementById('root'));