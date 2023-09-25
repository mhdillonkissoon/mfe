import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';

import App from './app';

// Mount function to start the app 
const mount = (el, {
  defaultHistory,
  initalPath,
  onNavigate,
  onSignIn,
}) => {
  // Create memory history object to be used by react router
  // this ensures that the history object is siloed to the container
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initalPath]
  });

  // container will call the callback function onNavigate if it is passed in
  if (onNavigate) history.listen(onNavigate);

  // Render the marketing app
  ReactDOM.render(<App history={history} onSignIn={onSignIn} />, el);

  return {
    onParentNavigate({
      pathname: nextPathname
    }) {
      const { pathname } = history.location;
      if (pathname !== nextPathname) history.push(nextPathname);
    }
  }
}

// If mode === 'development' and in isolation
// mount application
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_auth-isolation-dev-root');
  if (devRoot) {
    mount(devRoot, { 
      defaultHistory: createBrowserHistory()
    });
  }
}


// Application running in container 
// export mount function and initalize in container
export { mount };