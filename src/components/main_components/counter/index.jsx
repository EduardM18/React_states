import { Component } from "react";
import "./style.css";


class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
    };
  } 
  render() {
    return(
      <>
        <h1 id="counter_heading">Counter</h1>
        <div id="counter_container">
          <p id="p_counter">{this.state.count}</p>

          <div id="counter_btns_container">
            <button className="counter_btn" onClick={() =>{
              this.setState({
                count: this.state.count +1
              })
            }}>increment</button>

            <button className="counter_btn" disabled = {this.state.count === 0} onClick={() =>{
              this.setState({
                count: this.state.count -1
              })
            }}>decrement</button>
          </div>
        </div>
      </>
    )
  }
}

export default Counter;
