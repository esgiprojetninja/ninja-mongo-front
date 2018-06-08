import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import MainMenu from "./components/MainMenu";
import StatsComponent from "./components/Stats";
import SpecificStatsComponent from "./components/SpecificStats";

import { twits } from "./api";

const getTwitts = () =>
  twits.getTwitts().then(res => console.log(res), err => console.log(err));

const twits1 = () => (
  <div>
    <h1>Twits 1</h1>
    <button onClick={getTwitts}>Get twitts</button>
  </div>
);

const phpStats = () => <SpecificStatsComponent filter="Php" />;

const jsStats = () => <SpecificStatsComponent filter="Javascript" />;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div className="container-fluid app-container">
            <div className="row">
              <div className="col-2">
                <MainMenu
                  routes={[
                    { to: "/php", label: "Php" },
                    { to: "/js", label: "JavaScript" },
                    { to: "/compared", label: "Compare" }
                  ]}
                />
              </div>
              <div className="col-10">
                <Switch>
                  <Route path="/" exact component={twits1} />
                  <Route path="/php" component={phpStats} />
                  <Route path="/js" component={jsStats} />
                  <Route path="/compared" component={StatsComponent} />
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
