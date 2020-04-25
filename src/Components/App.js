import React, {Component, Fragment} from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import { Header, Footer } from "./Layouts"
import Nutrigo from './Nutrigo'

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Fragment>
                        <Header/>
                            <Nutrigo/>
                        <Footer/>
                    </Fragment>
                </div>
            </HashRouter>
        );
    }
}

export default App;