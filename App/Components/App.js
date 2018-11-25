var React = require('react');
var ReactRouter = require('react-router-dom');
var Title = require('./Title');
var MessagesList = require('./MessagesList');
var SendMessageForm = require('./SendMessageForm');

class App extends React.Component{

	constructor(){
		super()
		this.state= {
			messages: DUMMY_DATA
		}
	}

	render(){
		return(

			<div className="app">
				<Title />
				<MessagesList messages={this.state.messages} />
				<SendMessageForm />
			</div>

		)
	}
}

const DUMMY_DATA = [
	{
		senderId: "Rob",
		text: "who'll win?"
	},
	{
		senderId: "Amy",
		text: "I will!"
	}
]

module.exports = App;