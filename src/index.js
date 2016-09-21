import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './App';
import Layout from './components/Layout';
import Home from './components/Home';
import './index.css';

// Redux stuff
import { Provider } from 'react-redux';
import store from './store';

// Routes
var routes = (
	<Provider store={store}>
	  <Router history={hashHistory}>
	    <Route path="/" component={Layout}>
	      <IndexRoute component={Home} />
	    </Route>
	  </Router>
	 </Provider>
);
    
// React DOM
ReactDOM.render(
  routes,
  document.getElementById('root')
);