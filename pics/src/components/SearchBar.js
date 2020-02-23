import React from "react";

class SearchBar extends React.Component {
	state = { term: "" };

	// use arrow function, this will automatically bind the instance (which is "this") so you won't get an error when accessing "this". Basically, for react, if you want to access the state within a method you will have to either bind the object or use an arrow function like this...
	onFormSubmit = event => {
		event.preventDefault();
		this.props.onSubmit(this.state.term); // when in class component you get the props by using "this.props"
	};
	render() {
		// this is "Controled" in the react world
		// you can get the user input thru state rather than the dom element
		// you can also easily manipulate user input value, e.g., force upper case
		return (
			<div className="ui segment">
				<form
					onSubmit={this.onFormSubmit}
					className="ui form"
				>
					<div className="field">
						<label>Image Search</label>
						<input
							type="text"
							value={this.state.term}
							onChange={e => {
								this.setState({
									term:
										e
											.target
											.value
								});
							}}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
