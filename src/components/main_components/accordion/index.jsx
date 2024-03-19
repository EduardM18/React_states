import { Component } from "react";
import "./style.css";


class Accordion extends Component {
  constructor(props){
    super(props);
    this.state = {
        accordion_content: [["content1","content2","content3","content4"],["content5","content6","content7","content8"]],
        accordions_names: ["section1","section2"],
        opened_1: 1,
        opened_2: 1
    };
  } 
  render() {
    return(
      <>
        <h1 id="accordion_heading">Accordion</h1>
        <div id="accordions_container">
            <div id="accordion_container">
                <div className="accordion_div" onClick={()=>{
                    this.setState({
                        opened_1: this.state.opened_1 + 3
                    })
                }}>{this.state.accordions_names[0]}</div>
                {this.state.accordion_content[0].map((content,i)=>{
                    return <div className="accordion_content" key={`content_${i}`} style={this.state.opened_1 %2 === 0 ? {display: "flex"} : {display: "none"}}>{content}</div>
                })}
            </div>
            <div id="accordion_container">
                <div className="accordion_div" onClick={()=>{
                    this.setState({
                        opened_2: this.state.opened_2 + 3
                    })
                }}>{this.state.accordions_names[1]}</div>
                {this.state.accordion_content[1].map((content,i)=>{
                    return <div className="accordion_content" key={`content_${i}`} style={this.state.opened_2 %2 === 0 ? {display: "flex"} : {display: "none"}}>{content}</div>
                })}
            </div>
        </div>
      </>
    )
  }
}

export default Accordion;
