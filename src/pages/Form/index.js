import React from "react";
import "./form.less";
import Calculator from "../../components/calculator";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      selectValue: ""
    };
    //this绑定
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectHandleSubmit = this.selectHandleSubmit.bind(this);
    this.selectHandleChange = this.selectHandleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }
  handleSubmit(event) {
    alert("提交的名字:" + this.state.value);
    event.preventDefault();
  }
  selectHandleSubmit(event) {
    alert("你喜欢的风味是：" + this.state.selectValue);
    event.preventDefault();
  }
  selectHandleChange(event) {
    this.setState({
      selectValue: event.target.value
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            名字：
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="提交" />
        </form>
        <form onSubmit={this.selectHandleSubmit}>
          <label>
            选择你喜欢的风味
            <select
              value={this.state.selectValue}
              onChange={this.selectHandleChange}
            >
              <option value="grapefruit">葡萄柚</option>
              <option value="lime">酸橙</option>
              <option value="coconut">椰子</option>
              <option value="mango">芒果</option>
            </select>
          </label>
          <input type="submit" value="提交" />
        </form>
        <Calculator />
      </div>
    );
  }
}
export default NameForm;
