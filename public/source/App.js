import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import Nav from './Nav.js';
import NewPoll from './NewPoll.js';
import Polls from './Polls.js';
import MyPolls from './MyPolls.js';
import SelectedPoll from './SelectedPoll.js';


 
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
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Polls}/>
      <Route path="newpoll" component={NewPoll} />
      <Route path="mypolls" component={MyPolls} />
      <Route path="polls/:id" component={SelectedPoll} />
    </Route>
  </Router>
), document.getElementById('app'));