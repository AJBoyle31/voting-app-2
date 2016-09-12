import React from 'react';
import Poll from './Poll.js';
import 'whatwg-fetch';

const API_URL = 'https://voting-app-2-ajboyle.c9users.io/pollsQuery/';
const API_HEADERS = {
    'Content-Type': 'application/json'
};

var Polls = React.createClass({
    setInitialState: function(){
        return {
            votingPolls: []
        };
    },
    componentWillMount: function(){
        fetch(API_URL, {headers: API_HEADERS})
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({
                votingPolls: responseData
            });
        });
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