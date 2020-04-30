import React from 'react'
import {NavLink, Route} from "react-router-dom";
import Home from "../Home";
import Stuff from "../Stuff";
import Contact from "../Contact";
import Carousel from "../Layouts/Carousel";
import FoodNutri from "../Layouts/FoodNutri";
export default props =>
    <div>
        <Carousel/>
        <FoodNutri/>
        <h1>Simple SPA</h1>
        <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
        </div>
    </div>