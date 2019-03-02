import React, { Component } from "react";
import hatter from "../../public/images/hatter.png";
import Greeting from "./Greeting";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: "", userNameEntered: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ userName: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ userNameEntered: true });
  }

  render() {
    return (
      <div id="welcome-div">
        <h1>Welcome to the Tea Party!</h1>
        {this.state.userNameEntered ? (
          <div>
            <Greeting name={this.state.userName} />
          </div>
        ) : (
          <div>
            <div id="wonderland">
              <div>
                <img src={hatter} id="hatter" />
              </div>
              <div id="name-input">
                <form onSubmit={this.handleSubmit}>
                  <label>
                    <h4>What is your name, dear?</h4>
                    <h3>Do tell!!</h3>
                    <p>
                      <input
                        type="text"
                        name="input-name"
                        onChange={this.handleChange}
                      />
                    </p>
                  </label>
                  <input type="submit" value="... is my name" />
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
