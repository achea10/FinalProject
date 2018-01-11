//==========================================================================
// React and Router
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Pages
import Feed from "./pages/Feed";
import AddTopic from "./pages/AddTopic";
import Forum from "./pages/Forum";
import Learn from "./pages/Learn";
import Playlist from "./pages/Playlist";
import SignUp from "./pages/SignUp";
import NoMatch from "./pages/NoMatch";
// Componenets
import Navbar from "./components/Nav";
//==========================================================================


const App = () =>

  <Router>
    <div>
    <Navbar />
      <Switch>
        <Route exact path="/" component={NoMatch} />
        <Route exact path="/add-topic" component={AddTopic} />
      	<Route exact path="/forum" component={Forum} />
      	<Route exact path="/sign-up" component={SignUp} />
      	<Route exact path="/feed" component={Feed} />
      	<Route exact path="/learn" component={Learn} />
      	<Route exact path="/playlist" component={Playlist} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
