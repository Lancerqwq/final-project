import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

function Routes() {
  return (
    <Switch>
      <Route exact path="/book" render={() => <div>book</div>} />
      <Route exact path="/contacts" render={() => <div>contacts</div>} />
      <Route exact path="/cart" render={() => <div>Cart</div>} />
      <Route exact path="/login" render={() => <div>Login</div>} />
      <Route exact path="" render={() => <div>Not Found</div>} />
      <Redirect to="" />
    </Switch>
  );
}

export default Routes;
