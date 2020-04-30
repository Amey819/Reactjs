import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Dashboard from "../Layout/Dashboard";
import PropTypes from "prop-types";
const Landing = ({ auth: { isAuthenticated } }) => {
  return isAuthenticated ? (
    <Dashboard />
  ) : (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Developer Connector</h1>
          <p className="lead">
            Create developer profile/portfolio, share posts and get help from
            other developers
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
Landing.propType = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Landing);
