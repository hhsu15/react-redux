# react-redux

## Explain Babel
Currently some browsers don't understand newer versions of Javascript like ES2016(aka ES6) and newer. In order to get around with this, Babel comes to rescue. Babel tekes new versions of JS and convert them into old version that can be executed in about any browser. You can go to babeljs.io to test out the conversion.

## Explain React
You can test the code in codepen.io.
```javascript
// import the React and ReactDOM libraries
import React from 'react';  // you can actually name the variable anything you want, like "MyReact"
import ReactDOM from 'react-dom';

// Create a react component (which can be a class or a function)
const App = () => {
	return (
		<div>
			<label class='label' htmlFor='name'>
				Enter name:
			</label>
			<input id='name' type='text' />
			<button style={{ backgroundColor: "blue", color: "white"}}>Submit</button>

		</div>
	) 
}

// Take the react component and show it on the browser
ReactDOM.render(
	<App />,
	document.querySelector('#root')
)


```
#### Differences between JSX and HTML
- for inline style, 
  - html: <button style='background-color: blue'>Submit</button>
  - jsx: <button style={{ backgroundColor:'blue'}}>Submit</button>

- for class
  - html: class
  - jsx: className

  - html: for
  - jsx: htmlFor
- you can reference javascript in jsx
  - by using {your javascript}

## React Component
React component can be a function or a class.
You can create a function like this
```javascript
const MyComponent = (props) => {... return {your jsx}}
// you can also remove the parenthesis
const MyComponent = props => {... return {your jsx}}
```
A class based component loosk like this:
```javascript

class MyComponent extends React.Commponent {
    
	// you have a constructor for your state 
   	constructor(props) {
		super(props)
		this.state = {}
	}
    
	// you must use render function to return
	render() {
		return "jsx  here"
	}
}

```

### Childremn Component
You can have a component that wraps other compoents. The components being wrapped are called children components. Good for making reusable components!
```javascript
const Segment = (props) => {
	return <div className="ui placeholder segment">{props.children}</div>
}

// you can use this component to wrap other components
const App = () => {
	return (
		<div>
			<Segment>
				<div className='ui icon header'>
					Some conents here..
				</div>
			</Segment>
		</div>
	)
}

```

## Libraries
 Some useful libraries to make our lives easier.

### Styles 
 - sementic UI(https://semantic-ui.com/)
   - ton of css files for your elements

### Data
  - faker.js
    ```
	npm install --save faker
	```
	```javascript
	import faker from 'faker'
	<img alt="avatar" src={faker.image.avatar()}/>  //will give you a random image


	```
    - generate some fake data for just about anything you need


## React state
Use React State system. You will need class component to be able to use it. Don't get confused with state and props. You can only update your state using setState(). setState will cause the components and their children components to rerender.


## Lifecycle methods
Functions that get called in the following order:
1. constructor
	- intialize your state
2. render
	- return jsx
	- content visiable in screen
3. componentDidMonut
	- sit and wait for updates
	- normally is used when the data is first loaded, like get current position only one time. Best pratice is to use componentDidMount to do initial data loading, as oppose to say, using constructor.
4. componentDidUpdate
	- sit and wait until this component is no longer shown
	- normally is used when data is rerendered, for example, everytime user takes an action and state is updated we want to call some api.
5. componentWillUnmount
	- good place to do clean up (especially for non-react stuff) 

- There are also other lifecyle methods rarely used:
	- shouldComponentUpdate
	- getDerivedStateFromProps
	- getSnapshotBeforeUpdate
