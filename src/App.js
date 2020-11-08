import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/View/Home";
import About from "./components/View/About";
import Product from "./components/View/Product";

function App() {
  return (
    <div className="App">
      <Router>
        <Header className="headers" />
        <Switch>
          <Route exact path="/">
            <Home />
             
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/product/:id">
            <Product />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
