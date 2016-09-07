import React from 'react';
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
                                <li className="navlinks"><a href="/">Home</a></li>
                                <li className="navlinks"><a href="#mypolls">My Polls</a></li>
                                <li className="navlinks"><a href="#newpoll">New Poll</a></li>
                                <li className="navlinks"><a href="#login">Login/Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Polls polls={this.props.polls} />
            </div>
        );
    }
});

export default Nav;