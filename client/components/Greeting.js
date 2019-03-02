import React, { Component } from "react";
import TeaOfChoice from "./TeaOfChoice";

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = { teaOrder: "Earl Gray", teaSelected: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ teaOrder: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ teaSelected: true });
  }

  render() {
    return (
      <div>
        {this.state.teaSelected ? (
          <TeaOfChoice tea={this.state.teaOrder} name={this.props.name} />
        ) : (
          <div>
            <h3>Hello, {this.props.name}!</h3>
            <h4>What will you be drinking?</h4>

            <form onSubmit={this.handleSubmit}>
              <p>
                <select
                  onChange={this.handleChange}
                  value={this.state.teaOrder}
                >
                  <option value="Earl Gray">Earl Gray</option>
                  <option value="Green Tea">Green Tea</option>
                  <option value="Herbal">Herbal Tea</option>
                  <option value="English Breakfast">English Breakfast</option>
                </select>
              </p>
              <input type="submit" value="one cup, please!" />
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default Greeting;
