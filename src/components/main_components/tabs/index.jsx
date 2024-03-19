import { Component } from "react";
import "./style.css";
import Counter from "../counter";
import ColorPicker from "../color_picker";
import Accordion from "../accordion";


class Tabs extends Component {
  constructor(props){
    super(props);
    this.state = {
      tabs: [<Counter />,<ColorPicker />,<Accordion />],
      current_tab: <Counter />,
      sections: ["Counter","Color picker","Accordion"]
    };
  } 
  render() {
    return(
      <>
        <div id="sections_container">
          {this.state.sections.map((section,i)=>{
              return(
                <p className="section" key={`section_${i}`} style={this.state.tabs[i] === this.state.current_tab ? {textDecoration: "underline"} : {textDecoration: "none"}} onClick={() =>{
                  this.setState({
                    current_tab: this.state.tabs[i]
                  })
                  
                }}>{section}</p>
              )
            })
          }
        </div>
        {this.state.current_tab}
      </>
    )
  }
}



export default Tabs;
