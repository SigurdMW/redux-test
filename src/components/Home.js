import React from 'react';
import Axios from 'axios';

var Home = React.createClass({
	getInitialState: function(){
		return {
			user: []
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
		return (
			<div className="container-inner">
				Hei<br />
				<button onClick={this.userInfo}>Test</button>
			</div>
		);
	}
});

export default Home;