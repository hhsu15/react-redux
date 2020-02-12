import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'

// we need to use class component here because we need to use the state, basically waiting for the geolocation function to return and load the react component


/*
// Function component would not work here
const App = () => {
	// Get user location, a built-in function for window
	// first arg will be a callback function which gets called when userlocation is resolved,
	// second arg is callback when it fails
	window.navigator.geolocation.getCurrentPosition(
		(position) => console.log(position),
		(err) => console.log(err) // if user denies to share location then it calls this function
	)
	return <div>Hello</div>;
};

ReactDOM.render(
	<App />, document.querySelector('#root')
);
*/

class App extends React.Component {
   /*
	constructor(props) {
		super(props);
		this.state = {
			lat: null,
			errMsg: null
		};
	}
	*/
	//this is same as above constructor:
	state = {lat: null, errMsg: null}

	
	componentDidMount() {
		console.log('My component was rendered to the screen');
	// Get user location, a built-in function for window
	// first arg will be a callback function which gets called when userlocation is resolved,
	// second arg is callback when it fails
	window.navigator.geolocation.getCurrentPosition(
		(position) => {
			console.log(position)
			this.setState({ lat: position.coords.latitude})},
		(err) => {
			console.log(err)
			this.setState({errMsg: err.message})		
		} // if user denies to share location then it calls this function
	);
	}

	componentDidUpdate() {
		console.log('My component was just updated - it rerendered!')
	}


	render() {
	return <SeasonDisplay lat={this.state.lat}/>
	}
}

ReactDOM.render(
	<App />, document.querySelector('#root')
);
