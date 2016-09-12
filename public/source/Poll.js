import React from 'react';

var Poll = React.createClass({
    render: function(){
        return (
            <h3 className="pollnames"><Link to={"/polls/" + this.props.id}>{this.props.pollname}</Link></h3>
        );
    }
});

export default Poll;