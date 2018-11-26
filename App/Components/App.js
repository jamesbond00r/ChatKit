var React = require('react');
var ReactRouter = require('react-router-dom');
var Title = require('./Title');
var MessagesList = require('./MessagesList');
var SendMessageForm = require('./SendMessageForm');

const instanceLocator = "v1:us1:e184d5f2-e8c6-4383-8e65-716e2096b46d";

const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/e184d5f2-e8c6-4383-8e65-716e2096b46d/token";

const username = "Rob";

const roomId = 13533563;

class App extends React.Component{

	constructor(){
		super()
		this.state = {
            messages: []
        }
        this.sendMessage = this.sendMessage.bind(this)
    } 
	

	componentDidMount() {
		const chatManager = new Chatkit.ChatManager({
			instanceLocator: instanceLocator,
			userId: username,
			tokenProvider: new Chatkit.TokenProvider({
				url: testToken
			})
		})
		chatManager.connect()
		.then(currentUser => {
			 this.currentUser = currentUser
			currentUser.subscribeToRoom({
				roomId: roomId,
				hooks: {
					onNewMessage: message => {
						this.setState({
							messages: [...this.state.messages, message]
						})
					}
				}
			})
		})
	}
	sendMessage(text) {
		this.currentUser.sendMessage({
			text,
			roomId: roomId
		})
	}

	render(){
		return(

			<div className="app">
				<Title />
				<MessagesList messages={this.state.messages} />
				<SendMessageForm  sendMessage={this.sendMessage} />
			</div>

		)
	}
}


module.exports = App;



