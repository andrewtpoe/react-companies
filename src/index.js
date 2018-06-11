import React from 'react';
import { hydrate, render } from 'react-dom';

import App, { registerServiceWorker } from 'setup';

function renderApp(AppComponent) {
  const rootElement = document.getElementById('root');
  if (rootElement.hasChildNodes()) {
    hydrate(<AppComponent />, rootElement);
  } else {
    render(<AppComponent />, rootElement);
  }
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
