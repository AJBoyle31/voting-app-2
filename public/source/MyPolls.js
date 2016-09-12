import React from 'react';
import mypolls from './pollsJSON.js';
//assuming the user logged in is CThePants

var MyPolls = React.createClass({
    setInitialState: function(){
        return {
            myPolls: []
        };
    },
    componentWillMount: function(){
        this.setState({myPolls: mypolls});
    },
    render: function(){
        
        if (this.state.myPolls){
            var pollsResult = this.state.votingPolls.map((poll) => {
                return <Poll pollData={poll} pollname={poll.pollname} key={poll.id} />;
            });
        }
        
        return (
            <div id="polls">
                <h2 id="pageTitle">FCC Voting App</h2>
                <h4 id="pageDesc">Select a poll to see the results and vote!</h4>
                {pollsResult}
            </div>
        );
    }
});

export default MyPolls;