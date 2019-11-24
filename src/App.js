import React from "react";
import logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import Recipe from "./pages/Recipes";

import SingleRecipe from "./pages/SingleRecipe";
import Default from "./pages/Default";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <main>
        {/* navbar */}

        <Switch>
          <Route path="/" component={Home} />
          <Route path="/recipes" component={Recipe} />

          <Route component={Default} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
