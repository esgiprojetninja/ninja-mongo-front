import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import MainMenu from "./components/MainMenu";
import ExampleChart from "./components/ExampleChart";

const twits1 = () => <h1>Twits 1</h1>;

const twits2 = () => <h1>Twits 2</h1>;

const noMatch = () => <h1>Damn it!</h1>;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div className="container-fluid app-container">
            <div className="row">
              <div className="col-4">
                <MainMenu
                  routes={[
                    { to: "/twits1", label: "Twits 1" },
                    { to: "/twits2", label: "Twits 2" },
                    { to: "/example", label: "Example chart" }
                  ]}
                />
              </div>
              <div className="col-8">
                <Switch>
                  <Route path="/" exact component={twits1} />
                  <Route path="/twits1" component={twits1} />
                  <Route path="/twits2" component={twits2} />
                  <Route path="/example" component={ExampleChart} />
                  <Route component={noMatch} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
