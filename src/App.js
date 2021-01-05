import React, { Component } from "react";
import "./App.css";
import { getPersons } from "./fakeDataService";
import Testimonials from "./testimonialsSection";

class App extends Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    this.setState({ persons: getPersons() });
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Testimonials persons={this.state.persons} />
          <div className="attribution">
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              rel="noreferrer">
              Frontend Mentor
            </a>
            . Coded by
            <a href="https://github.com/vasily-mishanin"> Vasily Mishanin</a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
