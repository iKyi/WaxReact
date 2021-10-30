import './styles/custom.scss';
import AppRouter from './router/router';
import { Route, Switch } from 'react-router';
import PublicRoutes from './router/publicRoutes';
import React from 'react';
import AppRoutes from './router/appRoutes';
import AuthwrapperComp from './components/General/AuthWrapper/Authwrapper';


const App: React.VFC = () => {

  return (
    <AppRouter>
      <Switch>
        {AppRoutes.map((route, index) => {
          return (
            <Route key={route.path + index} exact={route.exact ?? false} path={route.path}>
              <AuthwrapperComp>
                <route.component routeChildren={route.children} />
              </AuthwrapperComp>
            </Route>
          )
        })}
        {PublicRoutes.map((route, index) => {
          return (
            <Route key={route.path + index} exact={route.exact ?? false} path={route.path}>
              <route.component routeChildren={route.children} />
            </Route>
          )
        })}
        <Route path="*">
          <p>404 page</p>
        </Route>
      </Switch>
    </AppRouter >
  );
}
export default React.memo(App);
