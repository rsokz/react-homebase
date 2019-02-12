import React from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import currentUserQuery from "../queries/CurrentUser";
import logoutMutation from "../mutations/Logout";

class Header extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">
            Home
          </Link>
          <ul className="right">{this.renderButtons()}</ul>
        </div>
      </nav>
    );
  }

  renderButtons = () => {
    const { loading, currentUser } = this.props.data;

    if (loading) {
      return <div />;
    }

    if (currentUser) {
      return (
        <li>
          <a onClick={this.onLogoutClick}>Logout</a>
        </li>
      );
    } else {
      return (
        <div>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </div>
      );
    }
  };

  onLogoutClick = () => {
    this.props.mutate({ refetchQueries: [{ query: currentUserQuery }] });
  };
}

export default graphql(logoutMutation)(graphql(currentUserQuery)(Header));
