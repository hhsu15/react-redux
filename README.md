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

