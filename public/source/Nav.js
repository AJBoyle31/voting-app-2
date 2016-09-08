import React from 'react';
import {Link} from 'react-router';
import Polls from './Polls.js'; 

var Nav = React.createClass({
    render: function(){
        return (
            <div>
                <nav className="nav navbar navbar-fixed-top navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav navbar navbar-left">
                                <li className="navlinks"><a href="/">FCC Voting App</a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar navbar-right">
                                <li className="navlinks"><Link to="/">Home</Link></li>
                                <li className="navlinks"><Link to="/mypolls">My Polls</Link></li>
                                <li className="navlinks"><Link to="/newpoll">New Poll</Link></li>
                                <li className="navlinks"><Link to="/login">Login/Logout</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
               
            </div>
        );
    }
});

export default Nav;