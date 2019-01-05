import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layout/Header';
import { Provider } from './Context';
import Results from './components/results/Results';
import AddResult from './components/results/AddResult';
import Gp from './components/results/Gp';
import Spinner from './components/layout/Spinner';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';

class App extends Component {
	render() {
		return (
			<Provider>
				<Router>
					<div className="App">
						<Header />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/addresults" component={AddResult} />
							<Route exact path="/results" component={Results} />
							<Route exact path="/results/gp" component={Gp} />
							<Route exact path="/spinner" component={Spinner} />
						</Switch>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
