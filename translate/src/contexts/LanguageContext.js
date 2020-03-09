import React from "react";
// have to be upper case C
const Context = React.createContext("English"); // default value of context

export class LanguageStore extends React.Component {
  state = { language: "English" };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
      { this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
