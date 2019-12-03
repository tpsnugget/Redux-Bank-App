import React, { Component } from "react";
import { store } from "./store/"
import { withDrawMoney } from "./actions/"
import formatNumber from "format-number";
import photographer from "./images/girl.png";
import "./App.css";

class App extends Component {

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e){
    const amount = e.target.dataset.tech
    const name = e.target.name
    console.log("handleClick amount is: ", amount, " username is: ", name)
    const action = withDrawMoney(amount)
    store.dispatch(action)
  }

  render() {
    const { totalAmount, username } = store.getState();
    return (
      <div className="App">
        <img className="App__userpic" src={photographer} alt="user" />
        <p className="App__username">Hello, {username}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">

          <button
            name={username}
            data-tech="10000"
            onClick={this.handleClick}
          >
            WITHDRAW $10,000
          </button>

          <button
            name={username}
            data-tech="5000"
            onClick={this.handleClick}
          >
            WITHDRAW $5,000
          </button>

        </section>

        <p className="App__giveaway">Give away all your cash to charity</p>
      </div>
    );
  }
}

export default App;
