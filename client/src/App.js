//=========================================================================
// React
import React from "react";
// Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Pages
import Feed from "./pages/Feed";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Playlist from "./pages/Playlist";
import SignUp from "./pages/SignUp";
// Componenets
import Nav from "./components/Nav";
//=========================================================================

const App = () =>

  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/learn" component={Learn} />
        <Route exact path="/playlist" component={Playlist} />
        <Route exact path="/sign-up" component={SignUp} />
      </Switch>
    </div>
  </Router>;

export default App;
