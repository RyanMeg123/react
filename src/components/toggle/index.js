import React, { Component } from "react";
import "./toggle.less";

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // 为了在回调函数中使用  ’this' 这个绑定是必不可少的
    // this.handleClick = this.handleClick.bind(this);
  }
  //   handleClick() {
  //     this.setState(state => ({
  //       isToggleOn: !state.isToggleOn
  //     }))
  //   }
  handleClick = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  };
  render() {
    return (
      <div className="toggle">
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
      </div>
    );
  }
}
export default Toggle;
