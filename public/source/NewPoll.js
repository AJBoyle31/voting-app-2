import React from 'react';

var NewPoll = React.createClass({
    handleSubmit: function(event){
        let title = event.target.title.value;
        let options = event.target.options.value;
        alert(options);
        event.preventDefault();
    },
    render: function(){
        return (
            <div id="newPollPage">
                <h2>Make a New Poll!</h2>
                <form id="newPollForm" onSubmit={this.handleSubmit}>
                    <label className="formInputs">Title:
                        <br/>
                        <input type="text" name="title" id="title" required />
                    </label>
                    <br/>
                    <label className="formInputs">Options (seperated by line):
                    <br/>
                        <textarea type="text" name="options" id="options" form="newpoll" required />
                    </label>
                    <br/>
                    <button type="submit" id="newPollButton">Make my poll!</button>
                </form>
            </div>
        );
    }
});

export default NewPoll;