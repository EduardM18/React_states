import { Component } from "react";
import "./style.css";
import Counter from "../counter";

class Tabs extends Component {
  constructor(props){
    super(props);
    this.state = {
      tabs: [<Counter />],
      current_tab: <Counter />
    };
  } 
  render() {
    return(
      <>
        <div id="sections_container">
            <p id="current_section" className="section" onClick={() =>{
                this.setState({
                    current_tab: this.state.tabs[0]
                })
            }}>Counter</p>
            <p className="section">Color picker</p>
            <p className="section">Accordion</p>
        </div>
        {this.state.current_tab}
      </>
    )
  }
}



export default Tabs;
