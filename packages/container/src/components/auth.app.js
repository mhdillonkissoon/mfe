import React, { useRef, useEffect } from "react";
import {  useHistory } from 'react-router-dom';
import { mount } from 'auth/AuthApp';

export default ({
  onSignIn
}) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, 
      {
        initalPath: history.location.pathname,
        onNavigate: ({
          pathname: nextPathname
        }) => {
          const { pathname } = history.location;
          // update the container's current location if it has changed
          if (pathname !== nextPathname) history.push(nextPathname);
        },
        onSignIn
      }
    );

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};