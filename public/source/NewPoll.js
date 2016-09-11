import React from 'react';

var NewPoll = React.createClass({
    setInitialState: function(){
        return {
            pollTitle: "",
            pollOptions: ""
        };    
    },
    componentWillMount: function(){
      this.setState({pollOptions: ""});  
    },
    handleTitleChange: function(event){
        this.setState({pollTitle: event.target.value});    
    },
    handleOptionChange: function(event){
        this.setState({pollOptions: event.target.value});
    },
    handleSubmit: function(event){
        let title = this.state.pollTitle;
        let options = this.state.pollOptions.split("\n");
        options = options.filter(function(e){return e === 0 || e});
        if (!title){
            alert("Please add a title");
        } 
        else if (options.length < 2) {
            alert("There needs to be at least two options");
        }
        else {
            let optionArray = options.map((option) => {
                return (
                    {"option": option, "votes": 0}
                );
            });
            
            
        }
        
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
                        <textarea type="text" name="options" id="options" rows='8' value={this.state.pollOptions} onChange={this.handleOptionChange} />
                    </label>
                    <br/>
                    <button type="submit" onClick={this.handleSubmit} id="newPollButton">Make my poll!</button>
                </form>
            </div>
        );
    }
});

export default NewPoll;