import { Component } from "react";
import "./style.css";


class ColorPicker extends Component {
  constructor(props){
    super(props);
    this.state = {
        colors: ["black","blue","red","green"],
        current_color: "black"
    };
  } 
  render() {
    return(
      <>
        <h1 id="picker_heading">Color picker</h1>
        <div id="picker_container">
            <div id="color_div" style={{backgroundColor: this.state.current_color}}>{this.state.current_color}</div>
            <div id="colors_container">
                {this.state.colors.map((color,i)=>{
                    return <button className="color_btn" key={`color_${i}`} style={{backgroundColor: this.state.colors[i]}} onClick={()=>{
                        this.setState({
                            current_color: this.state.colors[i]
                        })
                    }}>{color}</button>
                })}
            </div>
        </div>
      </>
    )
  }
}

export default ColorPicker;
