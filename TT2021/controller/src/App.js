import React, {Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Controller from './pages/controller'
import Viewer from './pages/viewer'
import Contestant from './pages/contestant'
export default function App (){
  return (
    <Router>
        <Switch>
            <Route path="/" exact component={Viewer} />
            <Route path="/controller" component={Controller} />
            <Route path="/contestant" component={Contestant} />
        </Switch>
    </Router>
);
}
