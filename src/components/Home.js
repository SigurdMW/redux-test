import React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import * as userApi from '../api/users-api';
import store from '../store';

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
		/*Axios.get('https://api.github.com/users/sigurdmw').then(function(userInfo){
			_this.setState({
				user: userInfo
			});
		});*/
		userApi.getUsers();
	},
	userInfo: function(){
		alert(this.state.user);
	},
	render: function(){
		var user = this.state.user;
		
		return (
			<div className="container-inner">
				Hei<br />
				{this.props.users}
				<Puke object={this.props.users} />
				<button onClick={this.userInfo}>Test</button>
			</div>
		);
	}
});

const mapStateToProps = function(store) {
  return {
    users: store.userState.users
  };
};

export default connect(mapStateToProps)(Home);