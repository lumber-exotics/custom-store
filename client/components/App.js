import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './header';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
      </div>
    </Router>
  );
};
