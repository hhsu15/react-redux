import React from 'react';
//import axios from 'axios'
import myUnsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {
	
	state = { images: [] };   
	// method 1: use Promise
	/*
	onSearchSubmit(term) {
		//use axios to make a http request
		const rootUrl = 'https://api.unsplash.com/'
		const endpoint = '/search/photos'
		const accessKey = 'nXBuG7yTr7j41Yc4zIsWPsdnBjjHHXWEwNuqCGpdwBA'

		axios.get(rootUrl + endpoint, {
			params: {
				query: term
			},
			headers: {
				Authorization: `Client-ID ${accessKey}`
			}
		}).then(
			(r) => {
				console.log(r.data.results)
			}
		)
	}
	*/

	// method 2: use async
	// notice here we use arrow function. Because otherwise we will run into the issue for "this". Use arrow function to ensure that we can properly get "this" inside of the function.
	// BTW, if this were an async method (not an arrow function), you would have some like this:
	// async onSearchSubmit(term) {...}
	onSearchSubmit = async (term) => {
		//use axios to make a http request
		const endpoint = '/search/photos'
		const response = await myUnsplash.get(endpoint, {
			params: {
				query: term
			}
		});
		
		console.log(response.data.results)
		this.setState({ images: response.data.results });
	}
	render(){
  		return (
    		<div className="ui container" style={{ marginTop: '10px'}}>
    			<SearchBar onSubmit={this.onSearchSubmit} />
				<ImageList images={this.state.images}/>
    		</div>
    	)
	}
}

export default App
