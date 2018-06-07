import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import MainMenu from "./components/MainMenu";
import StatsComponent from "./components/Stats";

import { twits } from "./api";

const getTwitts = () =>
  twits.getStats().then(res => console.log(res), err => console.log(err));

const twits1 = () => (
  <div>
    <h1>Twits 1</h1>
    <button onClick={getTwitts}>Get twitts</button>
  </div>
);

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
                    { to: "/stats", label: "Stats" }
                  ]}
                />
              </div>
              <div className="col-8">
                <Switch>
                  <Route path="/" exact component={twits1} />
                  <Route path="/twits1" component={twits1} />
                  <Route path="/twits2" component={twits2} />
                  <Route path="/stats" component={StatsComponent} />
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
