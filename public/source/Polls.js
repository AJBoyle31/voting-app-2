import React from 'react';
import Poll from './Poll.js';
import mypolls from './pollsJSON.js';

var Polls = React.createClass({
    setInitialState: function(){
        return {
            votingPolls: []
        };
    },
    componentWillMount: function(){
        this.setState({votingPolls: mypolls});
    },
    render: function(){
        
        if (this.state.votingPolls){
            var pollsResult = this.state.votingPolls.map((poll) => {
                return <Poll pollname={poll.pollname} key={poll.id} />;
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




export default Polls;