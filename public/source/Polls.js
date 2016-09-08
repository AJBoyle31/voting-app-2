import React from 'react';
import Poll from './Poll.js';

var Polls = React.createClass({
    render: function(){
        
        if (this.props.polls){
            var pollsResult = this.props.polls.map((poll) => {
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