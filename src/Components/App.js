import React, {Component, Fragment} from "react";
import {
    Route,
    HashRouter
} from "react-router-dom";
import { Header } from "./Layouts"
import Nutrigo from './Nutrigo'
import SignIn from './SignIn'
import SignUp from './SignUp'
class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Fragment>
                        <Header/>
                            <div className="content">
                                <Route exact path="/" component={Nutrigo}/>
                                <Route path="/signin" component={SignIn}/>
                                <Route path="/signup" component={SignUp}/>
                            </div>
                    </Fragment>
                </div>
            </HashRouter>
        );
    }
}

export default App;