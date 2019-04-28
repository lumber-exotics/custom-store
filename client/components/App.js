import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './header';
import Woodbox from './woodbox';
import WoodContainer from '../containers/woodContainer';
import Cart from './cart';

const App = () => {
  return (
      <div>
        <WoodContainer />
        <Cart />>
      </div>
  );
};

export default App;
