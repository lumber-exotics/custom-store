import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './header';
import Woodbox from './woodbox';
import WoodContainer from '../containers/woodContainer';

const App = () => {
  return (
      <div>
        <WoodContainer />
      </div>
  );
};

export default App;
