import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './header';
import Woodbox from './woodbox';
import WoodContainer from '../containers/woodContainer';
import StainContainer from '../containers/stainContainer';


const App = () => {
  return (
      <div>
        <Header />
        <WoodContainer />
        <StainContainer />
      </div>
  );
};

export default App;
