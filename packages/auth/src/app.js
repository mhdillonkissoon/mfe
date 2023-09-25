import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

import Signin from "./components/Signin";
import Signup from "./components/Signup";

const generatedClassName = createGenerateClassName({
  productionPrefix: "au",
});

export default ({
  history,
  onSignIn,
}) => {
  return (
      <Router history={history}>
        <StylesProvider generateClassName={generatedClassName}>
            <Switch>
              <Route path="/auth/signin">
                <Signin onSignIn={onSignIn} />
              </Route>
              <Route path="/auth/signup">
                <Signup onSignIn={onSignIn} />
              </Route>
            </Switch>
        </StylesProvider>
      </Router>
  );
}