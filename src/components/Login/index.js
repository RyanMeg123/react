import React, { Component } from "react";
import "./login.less";
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return <div className="warning">Warning!</div>;
}
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map(number => (
    <li key={number.toString()}>{number}</li>
  ));
  return <ul>{listItems}</ul>;
}
class LoginCeshi extends Component {
  constructor(props) {
    super(props);
    // 绑定this
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.state = {
      isLoggedIn: false,
      messages: ["React", "Re: React", "Re:Re: React"],
      count: 0,
      showWarning: true
    };
  }
  handleLoginClick() {
    console.log("login");
    this.setState({ isLoggedIn: true });
  }
  handleLogoutClick() {
    console.log("login0000");
    this.setState({ isLoggedIn: false });
  }
  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }
  MailBox() {
    //   const unreadMessages = props.unreadMessage
  }
  componentDidMount() {}

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const messages = this.state.messages;
    const count = this.state.count;
    const numbers = [1, 2, 3, 4];
    const listItems = numbers.map(number => number * 2);
    let button;
    let text;
    if (isLoggedIn) {
      console.log(isLoggedIn, "0");
      button = <button onClick={this.handleLogoutClick}>Logout</button>;
      text = <h1>Welcome back !</h1>;
    } else {
      console.log(isLoggedIn, "1");
      button = <button onClick={this.handleLoginClick}>Login</button>;
      text = <h1>Please sign up</h1>;
    }
    return (
      <div>
        {/* <Geeting isLoggedIn={isLoggedIn} /> */}
        {text}
        {button}
        {/*条件运算 */}
        <div>
          <h1>Hello!</h1>
          {messages.length > 0 && (
            <h2>you hanve {messages.length} unread messages</h2>
          )}
        </div>
        {/*&运算符 */}
        <div>{count && <h1>Messages:{count}</h1>}</div>
        <div className="is">
          The user id <b>{isLoggedIn ? "currently" : "not"}</b>
        </div>
        <div>
          <WarningBanner warn={this.state.showWarning} />
          <button onClick={this.handleToggleClick}>
            {this.state.showWarning ? "Hide" : "Show"}
          </button>
        </div>
        <div className="a">
          <ul>{listItems}</ul>
        </div>
        <div>
          <NumberList numbers={numbers} />
        </div>
      </div>
    );
  }
}
export default LoginCeshi;
