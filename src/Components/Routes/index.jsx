import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import BookPage from "../Books/BookList";
import CardPage from "../Card";
import ContactsPage from "../Contacts";
import LoginPage from "../Login";
import ErrorPage from "../NotFoundPage";

function Routes() {
  return (
    <Switch>
      <Route exact path="/books" component={BookPage} />
      <Route exact path="/contacts" component={ContactsPage} />
      <Route exact path="/cart" component={CardPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="" component={ErrorPage} />
      <Redirect to="" />
    </Switch>
  );
}

export default Routes;
