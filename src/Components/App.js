import React, {Component, Fragment} from "react";
import {
    Route,
    HashRouter,
    Switch
} from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../actions/authActions";

import { Provider } from "react-redux";
import store from "../store";

import { Header } from "./Layouts";
import Nutrigo from './Nutrigo';
import SignIn from './SignIn';
import SignUp from './SignUp';
import PrivateRoute from "../Components/private-route/PrivateRoute";
import Dashboard from "../Components/dashboard/Dashboard";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));// Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser());    // Redirect to login
      window.location.href = "./signin";
    }
  }

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <div>
                        <Fragment>
                            <Header/>
                                <div className="content">
                                    <Route exact path="/" component={Nutrigo}/>
                                    <Route path="/signin" component={SignIn}/>
                                    <Route path="/signup" component={SignUp}/>
                                    <Switch>
                                     <PrivateRoute exact path="/dashboard" component={Dashboard} />
                                    </Switch>
                                </div>
                        </Fragment>
                    </div>
                </HashRouter>
            </Provider>
            
        );
    }
}

export default App;