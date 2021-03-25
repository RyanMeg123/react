import React, { Component } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import LoginCeshi from '../../components/Login'
import "./home.less";
class Home extends Component {
  constructor(props) {
    super(props)
    // 绑定this
    this.goToLogin = this.goToLogin.bind(this)
  }
  goToLogin() {
    this.props.history.push('/login')
  }
  render() {
    return (
      <div className="home">
        <Footer />
        <Header name="ceshi1"/>
        <span className="ceshi">Home page</span>
        <span className="span1">dsdsd</span>
        <button onClick={this.goToLogin}>去login</button>
        <LoginCeshi/>
      </div>
    );
  }
}
export default Home;
