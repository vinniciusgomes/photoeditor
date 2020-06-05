import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import SignIn from "../pages/SignIn";
import Editor from "../pages/Editor";

export default () => (
  <BrowserRouter>
    <Route path="/" exact component={SignIn} />
    <Route path="/editor" exact component={Editor} />
  </BrowserRouter>
);
