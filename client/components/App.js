import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './header';
import Home from './home';
import WoodContainer from '../containers/woodContainer';
import StainContainer from '../containers/stainContainer';
import Success from './success';
import Cart from '../containers/cart';

const App = () => {
  return (
    <Router>
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/wood" component={WoodContainer} />>
          <Route exact path="/stain" component={StainContainer} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/success" component={Success} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;