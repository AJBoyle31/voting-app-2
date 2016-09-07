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
                {pollsResult}
            </div>
        );
    }
});




export default Polls;