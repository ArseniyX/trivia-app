import React from "react";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import Home from "../pages/Home";
import AuthPage from "../pages/Auth";
import Template from "../template/Template";
import { ProvideAuth } from "../hooks/use-auth";
import PrivateRoute from "./PrivateRoute";
import Signup from "../pages/Signup";
import ChooseTopic from "../pages/ChooseTopic";
import Game from "../pages/Game";
import GameComplete from "../pages/GameComplete";

const AppRouter = () => {
  return (
    <ProvideAuth>
      <Router>
        {/* <PrivateRoute exact path="/" component={Home} /> */}
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={AuthPage} />
        <Route path="/profile" exact component={Signup} />
        <Route path="/choose-topic" component={withRouter(Home)} />
        <Route path="/choose-topic" component={ChooseTopic} />
        <Route path="/game" component={Game} />
        <Route path="/game-complete" component={withRouter(Game)} />
        <Route path="/game-complete" component={GameComplete} />
      </Router>
    </ProvideAuth>
  );
};

export default AppRouter;
