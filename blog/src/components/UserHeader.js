import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.id);
  }

  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}

// this is a nice techniue, you can extract the pre-processing from the render function and just put it into mapStateToProps. This can be reusable too. You can get "ownProps" to be able to access the props of the component!!
const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.id) };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
