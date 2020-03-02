import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    // first time load the libraries from google api
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "508179669230-fmbdpqn77p60d0sgmgovqj7rpo7nh6fr.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          // this will imediately call the action creators and update the state
          this.onAuthChange(this.auth.isSignedIn.get());
          // and this will create the event listener and wait for the result and eventually update the state when it's resolved
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  // get a boolean argument from .listen
  onAuthChange = isSignedIn => {
    // call action creators
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <div>
          <button
            className="ui red google button"
            onClick={this.onSignOutClick}
          >
            <i className="google icon" />
            Sign Out
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button
            className="ui blue google button"
            onClick={this.onSignInClick}
          >
            <i className="google icon" />
            Sign In with Google
          </button>
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
