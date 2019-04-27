import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './header';
import Woodbox from './woodbox';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Woodbox />
      </div>
    </Router>
  );
};
