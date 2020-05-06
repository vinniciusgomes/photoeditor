import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Example from "~/pages/Example";

export default () => (
  <BrowserRouter>
    <Route path="/" exact component={Example} />
  </BrowserRouter>
);
