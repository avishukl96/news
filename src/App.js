import "./App.css";
import React, { Component } from "react";

import News from "./components/News";
import Navbar from "./components/NavBar";

export default class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <News />
      </div>
    );
  }
}
