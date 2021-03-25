import React, { Fragment } from "react";
import Login from "./pages/login";
import Home from "./pages/home";
import Form from './pages/Form'
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
function App() {
  return (
    <Fragment>
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route exact path="/" component={Home} />
          <Route exact path="/form" component={Form}/>
          <Redirect to={"/home"} />
        </Switch>
      </HashRouter>
    </Fragment>
  );
}

export default App;
