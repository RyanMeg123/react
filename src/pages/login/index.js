import React, { Component } from "react";
import "./login.less";
import Clock from "../../components/clock";
import Toggle from '../../components/toggle'
// import LoginCeshi from '../../components/Login'
class Login extends Component {
  render() {
    return (
      <div className="login">
        <h1>login page</h1>
        {/* onClick={this.gotoHome.bind(this)} */}
        <button
          onClick={() => {
            this.gotoHome();
          }}
        >
          跳转home页
        </button>
        <Clock />
        <Clock />
        <Clock />
        <Toggle/>
        {/* <LoginCeshi/> */}

      </div>
    );
  }
  gotoHome() {
    this.props.history.push("/home");
  }
}

export default Login;
