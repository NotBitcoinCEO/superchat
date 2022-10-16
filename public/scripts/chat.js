var App = React.createClass({
	getInitialState: function() {
		return this.state = { message: '', data: [], class: "blue"};
	},
	_handleSubmit: function(e) {
		e.preventDefault();
		
		const inputMessage = this.refs.inputMessage;
		this.setState({message: inputMessage.value});
		
		if(!inputMessage.value.trim()) {
			return
		}
		
		var newMessage = {
			text: inputMessage.value,
			id: Date.now(),
			class: this.state.class
		}
		
		this.setState((prevState) =>({
			data: prevState.data.concat(newMessage),
			message: ''
		}));
		
		inputMessage.value = '';
	},
	render: function() {
		return(
			<div>
				
				<div className="chat-app">
				<MessageList data={this.state.data} />
				<div className="message-form">
					<form onSubmit={this._handleSubmit}>
					  <input ref="inputMessage" type="text" placeholder="Type a message..."/>
						<button><i className="fa fa-paper-plane"></i></button>
					</form>
				</div>
			</div>
			</div>
		);
	}
});


var MessageList = React.createClass({
	getInitialState: function() {
		return this.state = {time: (new Date()).toDateString()};	
	},
	componentDidUpdate() {
		ReactDOM.findDOMNode(this).scrollTop = 10000;
	},
	render: function() {
		return(
			<div ref="messageContainer" className="message-container">
				<div className="time-float">{this.state.time}</div>
				{this.props.data.map((item) => (
					<Message message={item.text} key={item.id} timeStamp={item.id} className={item.class.concat(" user right")} />
				))}
			</div>
		);
	}
});

var Message = React.createClass({
	componentDidMount: function() {
		
	},
	render: function() {
		return(
			<div className="message">
				<div ref="anim" className={this.props.className}>
					{this.props.message}
					<span>
					
					</span>
				</div>
			</div>
		);
	}
});

ReactDOM.render(
	<App />,
	document.getElementById("app")
);

