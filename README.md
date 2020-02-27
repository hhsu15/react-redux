# React

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

## Controled and Uncontroled component
When the value can only be reached form the HTML element, it's considered "Uncontroled". For example in your input componenet, if you were to get the value of the user input by accessing the input value, this is uncontroled. We DO NOT want uncontroled.
The "Controled" compoenet means that the react knows what the curtrent value is by assigning(overriding) the value to the input.
In the example of `pics` `SearchBar` component, we do this thru onClick event, setting the state with the user input value, and then take that value to override the input `value` property. This way, we store the current value in side of the react state, instead of the dom.

## Understand "this"
Javascritp refences this as the object itself. The problem can rise when you assign a class method the expects a "this" but you do not have the "this". For example:
```javascript
class Car {
	setSound(sound) {
		this.sound = sound
	}
	drive() {
		return this.sound
	}
}

const car = new Car()
car.setSound("vroom")
car.drive() // this will return "this.sound"

//however, this will fail
const dirve = car.drive 
drive() // you will get type error, since "this" is undefined

/////Solutions//////
// Solution 1
class Car {
	constructor() {
		this.drive = this.drive.bind(this);  // binds this into the method so it will have access to "this" 
	}

	......

}
// Solution 2 (A newer version of javascript though)
// In side of the class, use error function
class Car {

	setSound(sound){
		this.sound = sound
	}

	// use arrow function, this will automatically take the instance as this
	drive() => {
		return this.sound
	}
}


```
- Rule of thumb, when you get a Type error that complains about `this`, try to console.log(this). You will see exactly what you get. Chances are you propabally see the `props` that you pass into the components, as opposed to the class component obj that you look for.

## React Refs
- Gives access to a single DOM element (where you would use querySelector in regular javascript)

```javascript
class SomeComp extends React.Component {
	constructor(props){
	super(props)

	this.myRef = React.createRef();
	}

}

```
- We create refs in the constructor, assign them to instance variables, then pass to a particular JSX elements as props.


# Redux
Redux is a state management tool. This is the basic redux cycle:
- Action Creator
- Action
- dispatch
- Reducers
- State

Use insurance company as an anology:
- Customer (who takes the form to the insurance company) 
- Form (can be a type of policy, or claim)
- Receiver (the person who takes the form, makes copy and sends it to different departments, who also brings the data from the repository to the departments)
- Departments (like Policy Department, Claim Department, Accounting Deaprtment that look at the form and decide they need to take action on it)
- Compiled Department Data (A repository where the data for all the departments are stored so say, the management team can easily access)

Now to map this to redux
- Action Creator -> Customer (A functio that creates an action)
- Action -> Form (A javascript obj that contains information)
- dispatch -> Receiver (A function that sends the action to reducers)
- Department -> Reducers (Functions that take the actions and decide whether to update the state)
- Compiled department data -> state (A javascript obj that contains the data)

```javascript

//action creators
const createPolicy  = (name, amount) => {
  return { // action
  type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    } 
  }
}

const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name,
    }
  }
}

const createClaim = (name, amountToCollect) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amountToCollect: amountToCollect
    }
  }
}


// Reducers
const claimsHistory = (oldListOfClaims=[], action) => {
  if (action.type === 'CREATE_CLAIM') {
    return [...oldListOfClaims, action.payload] // es6 syntax, create a new copy of oldListClaims and add action.payload to it
  }
  return oldListOfClaims;
}

const accounting = (bagOfMoney=100, action) => {
  if (action.type === 'CREATE_CLAIM') {
    return bagOfMoney - action.payload.amountToCollect 
  } else if (action.type=== 'CREATE_POLICY') {
    return bagOfMoney + action.payload.amount
  }
  return bagOfMoney;
}

const policies = (listOfPolicies=[], action) => {
  if (action.type === 'CREATE_POLICY') {
    return [...listOfPolicies, action.payload.name]
  } else if (action.type === 'DELETE_POLICY') {
    return listOfPolicies.filter(name => name !== action.payload.name)
  }
  return listOfPolicies;
}

const { createStore, combineReducers } = Redux
const ourDepartments = combineReducers(
  {accounting: accounting,
   claimsHistory: claimsHistory,
   policies: policies
  }
)

const store = createStore(ourDepartments);

//const action = createPolicy('Alex', 20);

// this is the insurance company receiver who takes the form
store.dispatch(createPolicy('Alex', 20))
store.dispatch(createPolicy('Bob', 40))
store.dispatch(createPolicy('Jen', 20))

store.dispatch(createClaim('Bob', 100))

store.dispatch(deletePolicy('Bob'))

console.log(store.getState()) // you can see the data in the store

```
