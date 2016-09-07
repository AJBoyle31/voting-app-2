import React from 'react';

var Poll = React.createClass({
    render: function(){
        return (
            <h3 className="pollnames">{this.props.pollname}</h3>
        );
    }
});

export default Poll;