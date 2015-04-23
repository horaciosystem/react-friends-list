var FriendsApp = React.createClass({
	getInitialState: function(){
		return {items: []};
	},
	updateItems: function(newItem){
		var allItems = this.state.items.concat([newItem]);
		this.setState({items: allItems});
	},
	render: function(){
		return (
			<div>
			<FriendsForm onFormSubmit={this.updateItems}/>
			<FriendsList items={this.state.items}/>
			</div>
		);
	}
});

var FriendsList = React.createClass({
	render: function() {
		var createItem = function(itemText) {
			return (
				<FriendListItem>{itemText}</FriendListItem>
			);
		};
		return <ul>{this.props.items.map(createItem)}</ul>;
	}
});

var FriendListItem = React.createClass({
	render: function(){
		return (
			<li>{this.props.children}</li>
		);
	}
});

var FriendsForm = React.createClass({
	getInitialState: function() {
		return {item: ''};
	},
	handleSubmit: function(e){
		e.preventDefault();
		if(this.state.item){
			this.props.onFormSubmit(this.state.item);
			this.setState({item: ''});
			React.findDOMNode(this.refs.item).focus();
		}
		return;
	},
	onChange: function(e){
		this.setState({
			item: e.target.value
		});
	},
	render: function(){
		return (
			<form onSubmit={this.handleSubmit}>
			<input type='text' ref='item' onChange={this.onChange} value={this.state.item}/>
			<input type='submit' value='Add'/>
			</form>
		);
	}
});

React.render(<FriendsApp/>, document.getElementById('container'));
