import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '~/pages/Home';
import About from '~/pages/About';
import Services from '~/pages/Services';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
      </Switch>
    </BrowserRouter>
  );
}
