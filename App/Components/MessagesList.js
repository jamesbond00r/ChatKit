var React = require('react');
var ReactRouter = require('react-router-dom');

class MessagesList extends React.Component {
	render() {
		return(

			<ul className="message-list">
			{this.props.messages.map(message => {
				return (
					<li key={message.id}>
					 <div>
					 {message.senderId}
					 </div>
					 <div>
					 	{message.text}
					 </div>
					 </li>
				)
			})}
			</ul>

		)
	}
}


module.exports = MessagesList;