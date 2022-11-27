import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationContainer from "./components/navigation/NavigationContainer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import PortfolioDetail from "./components/portfolio/PortfolioDetail";
import NoMatch from "./components/pages/NoMatch";
import Icons from "./components/helpers/Icons";

export default class App extends Component {
    constructor() {
        super()

        Icons();
    }

    render() {
        return (
            <div className="container">
                <Router>
                    <div>
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