import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;
  render() {
    console.log(this.context);
    return (
      <div>
        Select a language:
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange("English")}
        />
        <i
          className="flag jp"
          onClick={() => this.context.onLanguageChange("Japanese")}
        />
      </div>
    );
  }
}

export default LanguageSelector;
