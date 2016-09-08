import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import Nav from './Nav.js';
import NewPoll from './NewPoll.js';
import Polls from './Polls.js';


 
var App = React.createClass({
  
  render: function(){
    return (
      <div>
      <Nav />
      {this.props.children}
      </div>
    );
  }
}) ;
 
 
 
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Polls}/>
      <Route path="newpoll" component={NewPoll} />
    </Route>
  </Router>
), document.getElementById('app'));