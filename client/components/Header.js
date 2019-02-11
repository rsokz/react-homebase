import React from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import currentUserQuery from "../queries/CurrentUser";

class Header extends React.Component {
  render() {
    console.log(this.props.data);
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
      return (
        <li>
          <a onClick={this.onLogoutClick}>Logout</a>
        </li>
      );
    }

    if (currentUser) {
      return <div>Logout</div>;
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

  onLogoutClick = () => {};
}

export default graphql(currentUserQuery)(Header);
