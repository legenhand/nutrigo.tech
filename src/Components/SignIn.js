import React, { Component } from "react";
import SignInBody from "./Layouts/SignIn/Body";
import Button from './Layouts/SignIn/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import classnames from "classnames";

class SignIn extends Component{
    constructor() {
        super();
        this.state = {
          email: "",
          password: "",
          errors: {}
        };
      }

      componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/dashboard");
        }
      }
      
      componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
          this.props.history.push("/dashboard"); // push user to dashboard when they login
        }
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
      }

      onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };
      
      onSubmit = e => {
        e.preventDefault();
        const userData = {
          email: this.state.email,
          password: this.state.password
        };
        this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
      };
      
      render() {
        const { errors } = this.state;
        return (
            <SignInBody>
              <form noValidate onSubmit={this.onSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={this.onChange}
                    value={this.state.email}
                    error={errors.email}
                    className={classnames("", {
                      invalid: errors.email || errors.emailnotfound
                    })}
                    />
                    <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={this.onChange}
                    value={this.state.password}
                    error={errors.password}
                    className={classnames("", {
                      invalid: errors.password || errors.passwordincorrect
                    })}
                />
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <Button/>
        </form>
            </SignInBody>
        ); 
    }
    
}

SignIn.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(SignIn);