import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';

import App, { registerServiceWorker } from 'setup';

function renderApp(AppComponent) {
  render(<AppComponent />, document.getElementById('root'));
}

renderApp(App);

if (module.hot && process.env.NODE_ENV !== 'production') {
  module.hot.accept('./setup/index.js', () => {
    // eslint-disable-next-line global-require
    const NewApp = require('./setup/index.js').default;
    renderApp(NewApp);
  });
}

registerServiceWorker();
