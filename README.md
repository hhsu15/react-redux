# React

## Explain Babel

Currently some browsers don't understand newer versions of Javascript like ES2016(aka ES6) and newer. In order to get around with this, Babel comes to rescue. Babel tekes new versions of JS and convert them into old version that can be executed in about any browser. You can go to babeljs.io to test out the conversion.

## Explain React

You can test the code in codepen.io.

```javascript
// import the React and ReactDOM libraries
import React from "react"; // you can actually name the variable anything you want, like "MyReact"
import ReactDOM from "react-dom";

// Create a react component (which can be a class or a function)
const App = () => {
  return (
    <div>
      <label class="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        Submit
      </button>
    </div>
  );
};

// Take the react component and show it on the browser
ReactDOM.render(<App />, document.querySelector("#root"));
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
    super(props);
    this.state = {};
  }

  // you must use render function to return
  render() {
    return "jsx  here";
  }
}
```

### Childremn Component

You can have a component that wraps other compoents. The components being wrapped are called children components. Good for making reusable components!

```javascript
const Segment = props => {
  return <div className="ui placeholder segment">{props.children}</div>;
};

// you can use this component to wrap other components
const App = () => {
  return (
    <div>
      <Segment>
        <div className="ui icon header">Some conents here..</div>
      </Segment>
    </div>
  );
};
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
  import faker from "faker";
  <img alt="avatar" src={faker.image.avatar()} />; //will give you a random image
  ```


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

- There are also other lifecyle methods rarely used: - shouldComponentUpdate - getDerivedStateFromProps - getSnapshotBeforeUpdate

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
  constructor(props) {
    super(props);

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
const createPolicy = (name, amount) => {
  return {
    // action
    type: "CREATE_POLICY",
    payload: {
      name: name,
      amount: amount
    }
  };
};

const deletePolicy = name => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name: name
    }
  };
};

const createClaim = (name, amountToCollect) => {
  return {
    type: "CREATE_CLAIM",
    payload: {
      name: name,
      amountToCollect: amountToCollect
    }
  };
};

// Reducers
const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === "CREATE_CLAIM") {
    return [...oldListOfClaims, action.payload]; // es6 syntax, create a new copy of oldListClaims and add action.payload to it
  }
  return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
  if (action.type === "CREATE_CLAIM") {
    return bagOfMoney - action.payload.amountToCollect;
  } else if (action.type === "CREATE_POLICY") {
    return bagOfMoney + action.payload.amount;
  }
  return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
  if (action.type === "CREATE_POLICY") {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === "DELETE_POLICY") {
    return listOfPolicies.filter(name => name !== action.payload.name);
  }
  return listOfPolicies;
};

const { createStore, combineReducers } = Redux;
const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});

const store = createStore(ourDepartments);

//const action = createPolicy('Alex', 20);

// this is the insurance company receiver who takes the form
store.dispatch(createPolicy("Alex", 20));
store.dispatch(createPolicy("Bob", 40));
store.dispatch(createPolicy("Jen", 20));

store.dispatch(createClaim("Bob", 100));

store.dispatch(deletePolicy("Bob"));

console.log(store.getState()); // you can see the data in the store
```

## React with Redux

Refer to `song` for simple setup.

### Call API

In genernal, we use `componentDidMount` to call Action Creator which is responsible for calling the API. This is a common practice we will see.

- we will be using redux thunk as middlemare for this purpose. Refer to `blog` for example code.

#### Error regarding the "Actions must be plain objects. Use custom middleware for async actions"

- When we use the aysnc await code, after it gets compiled to js2015 it is not just a simple object. More details here...but under the hood it first returns a Requestobject which is why the error.
- Second issue is time it takes you get response from the API. If you don't use async wait, you just get back a promise which might not yet be resolved. This process of action creater is called -> action returned -> action sent to reducers -.> reducers run is extremly fast.

### Syncronus action creator V.S. Asyncronous action creator

By definition, async action creator takes some amout of time for it to get its data ready to go. When you use asyncronus action creator you will need some middleware.

- a middleware in the world of redux:
  - fucntion that gets called with every action we dispatch
  - has the ability to stop, modify or mess around with actions
  - tons of open source middleware exists
  - we are going to use one called "Redux-Thunk" to solve the async issue

### Redux Thunk

Rudux Thunk only does this:

- Redux Thunk allows action creators to return:
  - action objects or;
  - functions!

If action object is returned it has to have "type" property. "payload" is optional.

This is how redux thunk works:

Action creator -> action dispatch -> redux thunk ->
-> is js object -> yes -> reducers
-> is a function -> yes -> function invoked with "dispatch" and "getState" functions (recall from the plain redux code) -> wait for request to finish -> dispatch the action mannually -> send back to action dispatch -> this time it goes to reducers

## Rules of Redux

- reducers cannot return "undefined". (null is fine)
- produces 'state' or data to be used inside of your app using only previous state and action

```javascript
// default "null" for initialzation of reducer
const myReducer = (state = null, action) => {
  if (xxx) {
    return action.payload;
  }

  return previousState;
};
```

- must not return "reach out itself" to devide what value to return (reducers are pure)

```javascript
export default (state, action) => {
  //bad
  return document.querySelector("#input");

  //bad
  return axios.get("/..");

  //good
  return state + action; //some derivation of state or action is good
};
```

- must not mutate the "state" argument
  - if you look at the source code you will see because it checks `hasChanged` using old state === new state. In javascript, if you compare the object or array it will return true if they are the same object(stored in the same memory location).
  - we just return a new object.

```javascript
//ways to create a new instance without mutating the obj

// to add
const colors = ["red"];
const new_colors = [...colors, "green"];
const new_colors2 = [...colors, "green", "red"];
const new_colors3 = ["green", ...colors];

// to filter
colors.filter(color => color !== "red");

// obj
const profile = { name: "Sam" };
const new_profile = { ...profile, age: 30 };

// to remove key from obj
// use lodash. use the "_"
const new_profile = _.omit(profile, "name");
```

## React Router

Navigation for dom-based apps. Refer to `stream` app where we need to build a navigator for separate pages.

### Installation

Download react-router-dom (Not react-router!)

```
npm install --save react-router-dom
```

### Router path rule

By design, the path rule checks if the extracted path string (e.g., "/page") `contains` the defined path and render every component that has the path contained in that extracted path string.

For example, if you have `http://localhost:3000/page/5` and there are three compoents routed with path:

- path = "/"
- path = "/page"
- path = "/page/5"
  then, all of these 3 components will be displayed.

To override this rule, you will use the keyword `exact`.

### Bad navigation

Do not use <a /> tag to your app with href='/somePage'.

- your browser will make a request to the host server
- then server sends with index.html fiel
- thus all the data will be gone.

### Good navigation

Use `Link` component from react-router-dom

```
<Link to='/pagetwo'>Go to page 2</Link>

```

### Router types

There are three types:

- BrowserRouter
  - we have seen this
- HashRouter
  - add "#" in front of all the paths
  - for example, "localhost:3000/#/page2"
- MemoryRouter
  - not showing the path on the browser bar at all

### React Server

A traditional server would not know how to handle an endpoint that is not defined -> you get 404 error.

With react, it goes thru these special steps when a path(endpoint) is requested.

- is the endpoint specified for the server?
- if not, then check the dev resources -> check public dir
- if not, then react will serve up the `index.html` file
  - inside of which, it then finds the react router set up and does the magic

That is why, with traditional server, since it's not set up this way you will get a 404 error when your project is deployed using Browser Router. You will have to configure the server set up to make it work.

This is where the HashRouter comes into play. The server will esentially just render the index.html and not worry about the path. The path is just for the browser and the client.

### History Object

React Rounter internally creates a "history" object and uses it to pass down to the components it navigates. Since the BrowserRouter controls the history object it is hard for us to take control over it. The issue is if we want to go programatically navigate the user to a different page (as opposed to like user clicks on a button and go to a page), it will be difficult since we do not control the history. The way to handle this issue is we create our own "history" object. Refer to the `history.js`.

### Path with variable

Use ":" to indicate a variable. For example, `path='/streams/edit/:id'` to indicate that you no matter what you have after `/streams/edit/` it will always take you to the same link and show the variable on the browser bar. You will have access to the :id via the props under the key `match.params`

### React Router Rule

With React-Router, each Route component needs to be designed to work in isolation -> meaning it has to fetch its own data!! If a user goes directly to a certain page say "/streams/id/5" and you are relying on other componets to fecth a list of streams then user won't be able to see the record at all.

### Switch

When you have a path like "stream/new" and another path like "/stream/:id", because `:id` is a variable and it takes anything that comes after "/stream/", react router by default will render both of the Routes. To get around this, use `Swtich` from react router and it will essentially only render the first one it found (e.g., /streams/new). Refer to `App.js` for example.

## Redux Form

### Redux-devtools-extension

- download this extension to your browser to help debug redux form

### debug session

use the this query string:

- localhost:3000/?debug_session=my_debug_session_1
- this will allow you to remember all the state history even when the page is reloaded! You can change the session name and create other sessions as well!

## Reaux Form

Library to handle form using redux. It has the reducers and actions built in so we do not have to create those.

###Instalation

```
npm install --save redux-form
```

### Documentation

Got to `redux-form.com` and check the examples for various form types.For example, check out the **Wizard Form**. It is going to be useful at some point.

## Portals

This is the issue Portals try to resolve:

With React, evertything is rendered with the `#root`. If you want to inset a Modal compoent, which should behave certain ways like cover the whole screen (this is done with the `z-index` value, with higher z-index value, the element will show in the front, lower ones show in the background) however, you might have a very nested structure with "stacking context" which won't allow you to do that. With Portals, it will trick the system so rather than showing compoent like Modal from the `#root` div tag, it moves the element above that, normally within the <body> tag.

- Refer to `Modal.js`. Essentially you create another id tag in additon to the `root` in the `public/index.js` file. You then have to use `ReactDOM.createPortal` and render the component with `querySelector('#myportal')`.

### React Fragment

When you render a component you normally have to return `<div>...</div>`. In the case you do not want to add this <div> layer you can use React Fragment. E.g., `<React.Fragment>...</React.Fragment>`. Check `StreamDelete.js` for example.

## Context

React context system that allows direct communication to the nested children components.

### How it works

- Refer to `translate`
- Basically you create a Context component with a default value,
- for the componet that needs the context, you use

```
static contexType = MyContexy
```

- then you can access the context value by using `this.context`
- to update the value of the context, you use context provider:

```
<MyContext.Provider value="some new value">
  <SomeComponent />
</MyContext.Provider>
```

- notice, each Context.Provider has their own pipe (meaning they have thier own context value)

### Consumer

Altertively, to access data in the context, you can use Context.Consumer.

- Rather than using `static contextType=MyContext`, you use <MyContext.Consumer> and inside of the wrapper you will invoke a function that will be provided with a `value` variable:

```
<MyContext.Consumer>
  {(value)=> value === 'Egnlish' ? 'English': 'Not English'}
</MyContext.Consumer>
```
