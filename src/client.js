import './reset.css';
import './base.css';
import { MovieProvider } from './bindings'
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import React from 'react';
import { hydrate } from 'react-dom';

hydrate(
  <BrowserRouter>
    <MovieProvider>
      <App />
    </MovieProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
