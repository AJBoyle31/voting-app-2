import React from 'react';
import 'whatwg-fetch';

const API_URL = 'https://voting-app-2-ajboyle.c9users.io/pollQuery/';
const API_HEADERS = {
    'Content-Type': 'application/json'
};

var SelectedPoll = React.createClass({
    setInitialState: function(){
        return {
            poll: {}
        };  
    },
    componentWillMount: function(){
        fetch(API_URL + this.props.params.id, {headers: API_HEADERS})
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({
                poll: responseData
            });
        });
    },
    render: function(){
        return (
            <div>
                <h2>{this.state.poll.pollname}</h2>
            </div>
        );
    }
});

export default SelectedPoll;