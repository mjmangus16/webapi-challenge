import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import axios from "axios";

class App extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    axios.get("http://localhost:5000/projects/").then(res => {
      console.log(res);
      this.setState({ data: res.data });
    });
  }

  render() {
    let content = this.state.data.map(item => <p>{item.name}</p>);

    return <div className="App">{content}</div>;
  }
}

export default App;
