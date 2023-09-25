import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const generatedClassName = createGenerateClassName({
  productionPrefix: "ma",
});

export default ({
  history,
}) => {
  return (
      <Router history={history}>
        <StylesProvider generateClassName={generatedClassName}>
            <Switch>
              <Route exact path="/pricing" component={Pricing} />
              <Route path="/" component={Landing} />
            </Switch>
        </StylesProvider>
      </Router>
  );
}