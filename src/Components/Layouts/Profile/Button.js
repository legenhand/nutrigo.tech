import React, { Component } from "react";

import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ProfileAvatar from "../Profile/Avatar";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";
import PropTypes from "prop-types";

class ButtonLogin extends Component{
    constructor() {
        super();
        this.state = {};
      }

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render(){
        const { user } = this.props.auth;
        if (this.props.auth.isAuthenticated) {
            return (
                <ProfileAvatar username={user.name}/>                
            );
        }else{
            return (
                <ButtonGroup color="secondary" aria-label="outlined primary button group">
                    <Button component={Link} to="/signin">Sign In</Button>
                    <Button component={Link} to="/signup">Signup</Button>
                </ButtonGroup>
            );
        }
    }
}

ButtonLogin.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(ButtonLogin);

