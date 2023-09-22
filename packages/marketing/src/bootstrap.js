import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

// Mount function to start the app 
const mount = (el) => {
  ReactDOM.render(<App />, el);
}

// If mode === 'development' and in isolation
// mount application
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-isolation-dev-root');
  if (devRoot) {
    mount(devRoot);
  }
}


// Application running in container 
// export mount function and initalize in container
export { mount };