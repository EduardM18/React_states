import { Component } from "react";
import "./style.css";
import Counter from "../counter";
import ColorPicker from "../color_picker";

class Tabs extends Component {
  constructor(props){
    super(props);
    this.state = {
      tabs: [<Counter />,<ColorPicker />],
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

            <p className="section" onClick={() =>{
              this.setState({
                current_tab: this.state.tabs[1]
              })
            }}>Color picker</p>
            
            <p className="section">Accordion</p>
        </div>
        {this.state.current_tab}
      </>
    )
  }
}



export default Tabs;
