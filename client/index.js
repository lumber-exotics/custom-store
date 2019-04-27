import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react'
import App from './components/App'
import store from './store';

render(
  <Provider store={store}>
    <App />
  </Provider>
  document.getElementById('root')
);
