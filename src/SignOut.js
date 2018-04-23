import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { auth } from "./firebase";

import * as routes from "./constants/routes";

class SignOutButton extends Component {
  constructor(props) {
    super(props);
  }

  signOut = () => {
    const { history } = this.props;

    auth.doSignOut().then(() => {
      history.push(routes.SIGN_IN);
    });
  };

  render() {
    return (
      <button type="button" onClick={this.signOut}>
        Sign Out
      </button>
    );
  }
}

export default withRouter(SignOutButton);
