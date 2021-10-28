import React from 'react';
import { Router } from 'react-router-dom';
import { BrowserHistory } from './history';

type RouterType = {
  children?: any;
}



const AppRouter: React.VFC<RouterType> = ({ children }) => {
  return (
    <Router history={BrowserHistory}>
      {children}
    </Router>
  )
}

export default AppRouter;