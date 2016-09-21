import React from 'react';
import Axios from 'axios';

function Puke (props){
  return <pre>{JSON.stringify(props.object, null, ' ')}</pre>;
}

var Home = React.createClass({
	getInitialState: function(){
		return {
			user: {}
		}
	},
	componentDidMount: function(){
		var _this = this;
		Axios.get('https://api.github.com/users/sigurdmw').then(function(userInfo){
			_this.setState({
				user: userInfo
			});
		});
	},
	userInfo: function(){
		alert(this.state.user);
	},
	render: function(){
		var user = this.state.user;
		
		return (
			<div className="container-inner">
				Hei<br />
				<Puke object={this.state.user} />
				<button onClick={this.userInfo}>Test</button>
			</div>
		);
	}
});

export default Home;