import React, { Fragment, useEffect } from "react";

import "./App.css";
import Alert from "./Components/Layout/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./Components/Layout/Navbar";
import Landing from "./Components/Layout/Landing";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./Actions/auth";
import { setAuthToken } from "./utils/setAuthToken";
import Dashboard from "./Components/Layout/Dashboard";
import PrivateRoute from "./Components/routing/PrivateRoute";
import Posts from "./Components/Layout/Posts";
import Create_Experience from "./Components/Layout/Create_Experience";
// file with all the routes
// routes for all files -> Use Router
// login page
// register page
// Landing page
// Navbar
// Header
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
// useeffect hook basically loads up everytime the component is loaded

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Switch>
            <section className="container">
              <Alert />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <PrivateRoute exact path="/posts" component={Posts} />
              <PrivateRoute exact path="/Dashboard" component={Dashboard} />
              <PrivateRoute
                exact
                path="/Create_Experience"
                component={Create_Experience}
              />
            </section>
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
