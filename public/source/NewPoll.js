import React from 'react';

var NewPoll = React.createClass({
    setInitialState: function(){
        return {
            pollTitle: "",
            pollOptions: ""
        };    
    },
    handleTitleChange: function(event){
        this.setState({pollTitle: event.target.value});    
    },
    handleOptionChange: function(){
        this.setState({pollOptions: event.target.value});
    },
    handleSubmit: function(event){
        alert(this.state.pollOptions);
        event.preventDefault();
    },
    render: function(){
        return (
            <div id="newPollPage">
                <h2>Make a New Poll!</h2>
                <form id="newPollForm" onSubmit={this.handleSubmit}>
                    <label className="formInputs">Title:
                        <br/>
                        <input type="text" name="title" id="title" onChange={this.handleTitleChange} required />
                    </label>
                    <br/>
                    <label className="formInputs">Options (seperated by line):
                    <br/>
                        <textarea type="text" name="options" id="options" form="newpoll" onChange={this.handleOptionChange} required />
                    </label>
                    <br/>
                    <button type="submit" onClick={this.handleSubmit} id="newPollButton">Make my poll!</button>
                </form>
            </div>
        );
    }
});

export default NewPoll;