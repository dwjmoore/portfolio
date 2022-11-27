import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import moment from "moment";
import axios from "axios";

import NavigationContainer from "./components/navigation/NavigationContainer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import PortfolioDetail from "./components/portfolio/PortfolioDetail";
import NoMatch from "./components/pages/NoMatch";

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Router>
                    <div>
                        <h1>David W. J. Moore Portfolio</h1>
                        <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>
                        <NavigationContainer />

                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/about-me" component={About} />
                            <Route path="/contact" component={Contact} />
                            <Route
                                exact
                                path="/portfolio/:slug"
                                component={PortfolioDetail}
                            />
                            <Route component={NoMatch} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}